// lib/api.ts

import { client } from "@/sanity/lib/client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
  tags: string[];
  brand: string;
  weight: string;
  color: string;
  material: string;
  image: string | StaticImport;
  features: string;
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  image_url: string;
}

export async function fetchProductIds(): Promise<string[]> {
  const products: Product[] = await client.fetch(`
    *[_type == "product"] {
      _id
    }
  `);
  return products.map(product => product._id);
}

export async function fetchProductById(id: string): Promise<Product> {
  const product: Product = await client.fetch(`
    *[_type == "product" && _id == $id] {
      _id,
      name,
      description,
      quantity,
      price,
      dimensions,
      tags,
      features,
      "image_url": image.asset->url,
    }[0]
  `, { id });
  return product;
}
