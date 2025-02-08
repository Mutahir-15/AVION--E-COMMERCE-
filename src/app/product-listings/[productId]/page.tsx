'use client';
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FAQ } from "@/components/FAQ";

interface Dimensions {
  height: string;
  width: string;
  depth: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  dimensions: Dimensions;
  image_url: string;
  tags: string[];
  features: string[];
  category: { name: string };
}

const query = groq`
  *[_type == "product" && _id == $productId][0] {
    _id,
    name,
    description,
    quantity,
    price,
    dimensions,
    features,
    tags,
    "image_url": image.asset->url,
    category->{ name }
  }
`;

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = params.productId as string;
        const productData: Product = await client.fetch(query, { productId });
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[655px] mb-3 lg:mb-5 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 animate-pulse w-3/4 rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse w-full rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse w-1/2 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto mb-3 lg:mb-5 p-4 lg:p-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8">
        {/* Product Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[655px] mb-3 lg:mb-5">
          <Image
            src={product.image_url || "/fallback-image.jpg"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-3xl font-semibold">${product.price}</p>
          <p className="text-gray-600">Quantity: {product.quantity || "N/A"}</p>

          {/* Category */}
          {product.category && (
            <p className="text-gray-600">Category: {product.category.name}</p>
          )}

          {/* Tags */}
          {product.tags && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Features */}
          {product.features && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Features</h2>
              <ul className="list-disc list-inside">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Dimensions */}
          {product.dimensions && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Dimensions</h2>
              <p>Height: {product.dimensions.height}</p>
              <p>Width: {product.dimensions.width}</p>
              <p>Depth: {product.dimensions.depth}</p>
            </div>
          )}

          {/* Add to Cart Button */}
          <div>
            <button className="mt-6 sm:mt-6 px-4 py-3 sm:px-16 sm:py-3 bg-customColors-dark-primary text-white font-medium hover:bg-customColors-border-dark hover:text-black transition-colors duration-300 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-5 lg:mt-8">
        <FAQ />
      </div>
    </div>
  );
}