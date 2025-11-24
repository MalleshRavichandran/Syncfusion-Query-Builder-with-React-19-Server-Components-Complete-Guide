'use client';
import { useRef, useState } from 'react';
import { Product, ApiResponse } from '@/lib/types';
import { filterProducts } from '@/app/actions';
import ResultsTable from './ResultsTable';
import { QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import { SerializePredicate } from '@/lib/utils/PredicateSerializer';

export default function QueryBuilderClient({ metadata }: any) {
  const [rule, setRule] = useState<RuleModel>({
    condition: 'and',
    rules: [{}],
  });

  const columns = metadata.fields.map((field: any) => ({
    field: field.name,
    label: field.label,
    type: field.type,
  }));

  const ds = metadata.products;

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [executed, setExecuted] = useState(false);
  const queryBuilderRef = useRef<QueryBuilderComponent>(null);

  const handleApplyFilter = async () => {
    setLoading(true);
    setError(null);
    let predicate: any = queryBuilderRef.current?.getPredicate(queryBuilderRef.current?.getValidRules());
    let serializedPredicate = SerializePredicate(predicate);
    const response: ApiResponse<Product[]> = await filterProducts(serializedPredicate);
    if (response.success) {
      setResults(response.data || []);
    } else {
      setError(response.error || 'An unknown error occurred.');
    }
    setExecuted(true);
    setLoading(false);
  };

  const handleReset = () => {
    setRule({ condition: 'and', rules: [{}] });
    setResults([]);
    setError(null);
    setExecuted(false);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <strong>Error:</strong> {error}
        </div>
      )}
      <QueryBuilderComponent ref={queryBuilderRef}  rule={rule} onChange={setRule} columns={columns} dataSource={ds} />
      <div className="flex gap-3">
        <button onClick={handleApplyFilter} disabled={loading} className="e-btn btn-primary">
          {loading ? 'Filtering...' : 'Apply Filter' }
        </button>
        <button onClick={handleReset} className="e-btn btn-primary">Reset</button>
      </div>
        {executed && (
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4">Results ({results.length})</h3>
          {results.length === 0 ? (
            <p className="text-center py-8 text-gray-600">No products match your criteria.</p>
          ) : (
            <ResultsTable products={results} />
          )}
        </div>
      )}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        </div>
      )}
    </div>
  );
}
