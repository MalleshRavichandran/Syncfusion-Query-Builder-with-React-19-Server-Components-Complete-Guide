import { Predicate } from '@syncfusion/ej2-data';

export function SerializePredicate(pred: Predicate | Predicate[]): any {
  if (Array.isArray(pred)) {
    return pred.map(serializeSingle);
  }
  return serializeSingle(pred);
}

function serializeSingle(p: any): any {
  if (p.isComplex && p.predicates) {
    return {
      condition: p.condition || 'and',
      isComplex: true,
      predicates: p.predicates.map(serializeSingle),
    };
  }

  return {
    field: p.field,
    operator: p.operator,
    value: p.value,
    ignoreCase: p.ignoreCase ?? false,
    condition: p.condition || 'and',
  };
}