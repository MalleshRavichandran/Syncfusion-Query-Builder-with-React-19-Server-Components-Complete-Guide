export interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  costPrice: number;
  stock: number;
  manufacturer: string;
  rating: number;
  status: 'active' | 'inactive' | 'discontinued';
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface Predicate {
  field: string;
  operator:
    | 'equal'
    | 'notequal'
    | 'greaterthan'
    | 'greaterthanorequal'
    | 'lessthan'
    | 'lessthanorequal'
    | 'contains'
    | 'startswith'
    | 'endswith';
  value: string | number | boolean | Date | null;
  ignoreCase?: boolean;
  condition?: 'and' | 'or';        // for grouping
  isComplex?: boolean;
  predicates?: Predicate[];        // for nested AND/OR
}