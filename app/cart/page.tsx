"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromCart, updateQuantity } from "@/lib/redux/features/cartSlice";

export default function CartPage() {
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-10 text-gray-400">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Cart</span>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            href="/" 
            className="bg-[#DB4444] text-white px-10 py-4 rounded font-medium hover:bg-opacity-90 transition-all"
          >
            Return To Shop
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {/* Cart Table */}
          <div className="w-full">
            <div className="sm:grid grid-cols-[2fr_1fr_1fr_1fr] px-10 py-6 font-medium shadow-sm rounded-md mb-6 bg-white hidden">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>

            <div className="flex flex-col gap-8">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] items-center px-10 py-6 shadow-sm rounded-md bg-white group relative"
                >
                  {/* Remove button */}
                  <button 
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                        {item.image ? (
                           <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                        ) : (
                           <span className="text-xs text-gray-400">No Image</span>
                        )}
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                  </div>

                  <div className="mt-4 sm:mt-0 font-medium">${item.price}</div>

                  <div className="mt-4 sm:mt-0">
                    <div className="flex items-center border border-gray-300 rounded w-max px-2 py-1">
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        className="w-12 text-center focus:outline-none"
                      />
                      <div className="flex flex-col">
                         <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="hover:text-[#DB4444]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
                         </button>
                         <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="hover:text-[#DB4444]">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                         </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-0 text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Buttons */}
          <div className="flex flex-wrap justify-between gap-4">
               <Link 
                href="/" 
                className="px-12 py-4 border border-gray-400 rounded font-medium hover:bg-gray-50 transition-all text-center min-w-max"
               >
                Return To Shop
               </Link>
               <button 
                onClick={() => {}} // Could implement an update/save feature if needed
                className="px-12 py-4 border border-gray-400 rounded font-medium hover:bg-gray-50 transition-all text-center min-w-max"
               >
                Update Cart
               </button>
          </div>

          {/* Summary Section */}
          <div className="flex flex-wrap lg:flex-nowrap gap-20 mt-10">
              <div className="w-full lg:w-1/2 flex gap-4 h-max">
                  <input 
                    type="text" 
                    placeholder="Coupon Code" 
                    className="border border-black px-6 py-4 rounded w-full lg:w-72 focus:outline-none"
                  />
                  <button className="bg-[#DB4444] text-white px-10 py-4 rounded font-medium hover:bg-opacity-90 transition-all whitespace-nowrap">
                    Apply Coupon
                  </button>
              </div>

              <div className="w-full lg:w-1/3 border-2 border-black rounded p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-medium mb-2">Cart Total</h3>
                  
                  <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                      <span>Subtotal:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                      <span>Shipping:</span>
                      <span className="text-green-600">Free</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                      <span className="font-semibold text-lg">Total:</span>
                      <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
                  </div>

                  <Link href="/checkout" className="w-full">
                    <button className="bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-opacity-90 transition-all mt-4 w-full">
                      Process to checkout
                    </button>
                  </Link>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
