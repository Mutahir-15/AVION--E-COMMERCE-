export interface Product {
  features: string;
  tags: string;
  category: number;
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  image_url: string;
}