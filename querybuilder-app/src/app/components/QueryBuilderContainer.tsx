export const revalidate = 0;
export const dynamic = 'force-dynamic';
import { unstable_noStore as noStore } from 'next/cache';
import QueryBuilderClient from './QueryBuilderClient';
import { getProducts } from '@/lib/db/products';

export default async function QueryBuilderContainer() {
  noStore();
  await new Promise(resolve => setTimeout(resolve, 2000));
  const products = await getProducts();
  const metadata = {
    fields: [
      { name: 'id', label: 'ID', type: 'number' },
      { name: 'name', label: 'Product Name', type: 'string' },
      { name: 'category', label: 'Category', type: 'string' },
      { name: 'price', label: 'Price', type: 'number' },
      { name: 'stock', label: 'Stock', type: 'number' },
      { name: 'rating', label: 'Rating', type: 'number' },
      { name: 'status', label: 'Status', type: 'string' }
    ],
    products: products
  };
  return <QueryBuilderClient metadata={metadata} />;
}
