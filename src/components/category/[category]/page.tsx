import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

interface Product {
  image_url: string;
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');

  useEffect(() => {
    if (!category) return;
    
    const getProducts = async () => {
      try {
        const products = await client.fetch(
          `
          *[_type=="product" && category == $category]{
            _id,
            name,
            description,
            quantity,
            price,
            dimensions,
            "image_url":image.asset->url,
            category
          }
          `,
          { category }
        );
        setProducts(products);
        setStatus('success');
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setStatus('error');
      }
    };

    getProducts();
  }, [category]);

  if (status === 'loading') return <p className="text-center">Loading products...</p>;
  if (status === 'error') return <p className="text-red-500 text-center">Failed to load products.</p>;

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Category: {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg hover:shadow-lg transition duration-300">
            <div className="h-48 w-full relative">
              <Image
                src={product.image_url}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-lg font-semibold">£{product.price}</p>
            <p className="text-sm text-gray-500">Quantity: {product.quantity || 'N/A'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
