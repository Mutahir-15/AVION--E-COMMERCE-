import React, { createContext, useState, useEffect } from 'react';
import { fetchProductById, Product } from '@/lib/api';
import { useRouter } from 'next/router';

interface ProductContextProps {
  product?: Product;
}

const ProductContext = createContext<ProductContextProps>({ product: undefined });

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const { productId } = useRouter().query;

      if (productId) {
        try {
          const fetchedProduct = await fetchProductById(productId as string);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;