// components/Cart.tsx

'use client'
import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { fetchCartItems } from "@/lib/cart";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCartItems = async () => {
      const items: CartItem[] = await fetchCartItems();
      setCartItems(items);
      setLoading(false);
    };
    getCartItems();
  }, []);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const calculateTotal = (): number =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="max-w-[1440px] mx-auto p-8 md:p-20 lg:p-36 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your shopping cart</h1>
      <div className="grid grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] text-gray-700 font-medium border-b border-gray-300 pb-4 mb-6">
        <p>Product</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
      </div>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] items-center text-gray-700 pb-4 border-b border-gray-300">
            <div className="flex items-start space-x-4">
              <div className="w-[109px] h-[134px] relative">
                <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm">{item.description}</p>
                <p className="text-base font-medium mt-2">£{item.price}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="number"
                value={item.quantity}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="w-12 text-center"
              />
            </div>
            <p className="text-right font-medium">£{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-between text-gray-700">
        <div className="text-sm">
          <p>Taxes and shipping are calculated at checkout</p>
        </div>
        <div className="text-right mt-6 lg:mt-0">
          <p className="text-lg font-medium">Subtotal <span className="font-bold text-gray-900">£{calculateTotal()}</span></p>
          <button className="px-6 py-3 mt-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-700">Go to checkout</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
