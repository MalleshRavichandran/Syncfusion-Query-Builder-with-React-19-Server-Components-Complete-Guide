import { Product } from '@/lib/types';

export const mockProducts: Product[] = [
  {
    id: 1, name: 'MacBook Pro 16', category: 'Laptops',
    description: 'Powerful laptop with Apple Silicon M3 Max',
    price: 3499.99, costPrice: 2800, stock: 25, manufacturer: 'Apple',
    rating: 4.9, status: 'active', createdAt: new Date('2024-01-15'), updatedAt: new Date('2024-01-15'),
  },
  {
    id: 2, name: 'Dell XPS 15', category: 'Laptops',
    description: 'Premium Windows laptop',
    price: 2799.99, costPrice: 2000, stock: 40, manufacturer: 'Dell',
    rating: 4.7, status: 'active', createdAt: new Date('2024-01-10'), updatedAt: new Date('2024-01-10'),
  },
  {
    id: 3, name: 'Sony WH-1000XM5', category: 'Audio',
    description: 'Noise-canceling headphones',
    price: 399.99, costPrice: 280, stock: 80, manufacturer: 'Sony',
    rating: 4.9, status: 'active', createdAt: new Date('2024-01-16'), updatedAt: new Date('2024-01-16'),
  },
  {
    id: 4, name: 'iPad Air', category: 'Tablets',
    description: 'Lightweight tablet with M1',
    price: 599.99, costPrice: 450, stock: 60, manufacturer: 'Apple',
    rating: 4.8, status: 'active', createdAt: new Date('2024-01-18'), updatedAt: new Date('2024-01-18'),
  },
  {
    id: 5, name: 'Magic Mouse', category: 'Accessories',
    description: 'Wireless mouse',
    price: 79.99, costPrice: 45, stock: 150, manufacturer: 'Apple',
    rating: 4.3, status: 'active', createdAt: new Date('2024-01-08'), updatedAt: new Date('2024-01-08'),
  },
  {
    id: 6, name: 'Samsung Galaxy Tab S9', category: 'Tablets',
    description: 'AMOLED tablet',
    price: 649.99, costPrice: 500, stock: 45, manufacturer: 'Samsung',
    rating: 4.5, status: 'active', createdAt: new Date('2024-01-14'), updatedAt: new Date('2024-01-14'),
  },
];

export async function getProducts(): Promise<Product[]> {
  await new Promise(r => setTimeout(r, 200));
  return [...mockProducts];
}
