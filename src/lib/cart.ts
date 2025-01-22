import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production', 
  apiVersion: '2023-05-03', 
  useCdn: true
});

export const fetchCartItems = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    quantity,
    "image_url": image.asset->url
  }`;

  const items = await client.fetch(query);
  return items.map((item: { _id: string; name: string; description: string; price: number; quantity: number; image_url: string; }) => ({
    id: item._id,
    name: item.name,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
    image: item.image_url,
  }));
};
