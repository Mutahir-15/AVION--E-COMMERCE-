'use client'
import React, { createContext, useState, useEffect } from 'react';
import { fetchProductById, Product } from '@/lib/api';

interface ProductContextProps {
  product?: Product;
}

const ProductContext = createContext<ProductContextProps>({ product: undefined });

export const ProductProvider = ({ children, productId }: { children: React.ReactNode; productId: string }) => {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      if (productId) {
        try {
          const fetchedProduct = await fetchProductById(productId);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchData();
  }, [productId]);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
