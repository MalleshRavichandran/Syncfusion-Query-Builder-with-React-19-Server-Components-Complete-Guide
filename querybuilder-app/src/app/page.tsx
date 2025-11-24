import { Suspense } from 'react';
import QueryBuilderContainer from './components/QueryBuilderContainer';

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-2">Build Dynamic Queries</h2>
      </section>

      <section className="card">
        <Suspense fallback={<Skeleton />}>
          <QueryBuilderContainer />
        </Suspense>
      </section>
    </div>

  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-96 bg-gray-200 rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center">
        <p className="text-2xl text-gray-500">Loading Query Builder...</p>
      </div>
    </div>
  );
}