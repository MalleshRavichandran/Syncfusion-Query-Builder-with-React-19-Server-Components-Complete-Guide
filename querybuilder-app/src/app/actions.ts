'use server';

import { getProducts } from '@/lib/db/products';
import type { Product, ApiResponse } from '@/lib/types';
import type { Predicate } from '@/lib/types';


export async function filterProducts(predicates?: Predicate): Promise<ApiResponse<Product[]>>  {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const allProducts = await getProducts();

    if (!predicates) return {
      success: false,
      error: 'Predicates Not Received',
      timestamp: new Date().toISOString(),
    };

    const list = Array.isArray(predicates) ? predicates : [predicates];
    const filtered = allProducts.filter(item =>
      evaluatePredicates(item, list)
    );

    return {
      success: true,
      data: filtered,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Filter failed:', error);
    return {
      success: false,
      error: 'Failed to filter products',
      timestamp: new Date().toISOString(),
    };
  }
}


function evaluatePredicates(item: any, predicates: Predicate[]): boolean {
  for (const p of predicates) {
    // Nested group: (A and B) or C
    if (p.isComplex && p.predicates) {
      const subResult = evaluatePredicates(item, p.predicates);
      if (p.condition === 'or' && subResult) return true;
      if (p.condition !== 'or' && !subResult) return false;
      continue;
    }

    let value = item[p.field];
    let target = p.value;

    // Case-insensitive strings
    if (p.ignoreCase && typeof value === 'string' && typeof target === 'string') {
      value = value.toLowerCase();
      target = target.toLowerCase();
    }

    let match = false;
    switch (p.operator) {
      case 'equal':            match = value === target; break;
      case 'notequal':         match = value !== target; break;
      case 'greaterthan':
        if (target == null) { match = false; break; }
        match = Number(value) > Number(target); break;
      case 'greaterthanorequal':
        if (target == null) { match = false; break; }
        match = Number(value) >= Number(target); break;
      case 'lessthan':
        if (target == null) { match = false; break; }
        match = Number(value) < Number(target); break;
      case 'lessthanorequal':
        if (target == null) { match = false; break; }
        match = Number(value) <= Number(target); break;
      case 'contains':         match = String(value).includes(String(target)); break;
      case 'startswith':       match = String(value).startsWith(String(target)); break;
      case 'endswith':         match = String(value).endsWith(String(target)); break;
      default:                 match = true;
    }

    // OR short-circuit
    if (p.condition === 'or' && match) return true;
    // AND fail-fast
    if (p.condition !== 'or' && !match) return false;
  }

  return true; // all ANDs passed
}