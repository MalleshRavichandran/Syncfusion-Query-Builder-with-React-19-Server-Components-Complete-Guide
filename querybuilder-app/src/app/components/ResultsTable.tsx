'use client';
import { Product } from '@/lib/types';

export default function ResultsTable({ products }: { products: Product[] }) {
  return (
    <div className="grid-container overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Category</th>
            <th className="px-4 py-3 text-left font-semibold">Price</th>
            <th className="px-4 py-3 text-left font-semibold">Stock</th>
            <th className="px-4 py-3 text-left font-semibold">Rating</th>
            <th className="px-4 py-3 text-left font-semibold">Manufacturer</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 font-medium">{product.name}</td>
              <td className="px-4 py-3">
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {product.category}
                </span>
              </td>
              <td className="px-4 py-3 font-semibold">${product.price.toFixed(2)}</td>
              <td className="px-4 py-3">{product.stock} units</td>
              <td className="px-4 py-3">⭐ {product.rating}</td>
              <td className="px-4 py-3">{product.manufacturer}</td>
              <td className="px-4 py-3">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  product.status === 'active' ? 'bg-green-100 text-green-800' :
                  product.status === 'inactive' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
