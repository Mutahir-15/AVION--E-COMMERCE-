'use client';
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/types';
import { getCartItems, removeFromCart } from '../actions/actions';
import Image from 'next/image';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setCartItems(getCartItems());
    }
  };
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item: Product) => (
                <div key={item._id} className="flex items-center p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-24 h-24">
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <button 
                        onClick={() => handleRemoveItem(item._id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                          className="px-3 py-1 border rounded-l-md hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                          className="px-3 py-1 border rounded-r-md hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="p-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                  <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    Total: ${calculateTotal().toFixed(2)}
                  </p>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;