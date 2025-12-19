"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { removeFromWishlist } from "@/lib/redux/features/wishlistSlice";
import { addToCart } from "@/lib/redux/features/cartSlice";

export default function WishlistPage() {
  const { items } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const handleMoveAllToCart = () => {
    items.forEach(item => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium">Wishlist ({items.length})</h2>
        {items.length > 0 && (
            <button 
                onClick={handleMoveAllToCart}
                className="px-12 py-4 border border-gray-400 rounded hover:bg-gray-50 transition-all font-medium"
            >
                Move All To Bag
            </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <p className="text-gray-500">Your wishlist is empty.</p>
          <Link 
            href="/" 
            className="bg-[#DB4444] text-white px-10 py-4 rounded hover:bg-opacity-90 transition-all font-medium"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group flex flex-col gap-4">
              <div className="relative aspect-square bg-[#F5F5F5] rounded-md overflow-hidden p-8 flex items-center justify-center">
                 {/* Delete Icon */}
                 <button 
                   onClick={() => dispatch(removeFromWishlist(item.id))}
                   className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition-all"
                 >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 4V2H17V4M3 6V8H21V6M19 8V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V8M9 11V18M15 11V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </button>

                 <div className="relative w-full h-full">
                    {item.image ? (
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                    )}
                 </div>

                 <button 
                    onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                    className="absolute bottom-0 left-0 w-full bg-black text-white py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all"
                 >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">Add To Cart</span>
                 </button>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold truncate">{item.name}</h3>
                <div className="flex gap-4">
                  <span className="text-[#DB4444] font-semibold">${item.price}</span>
                  <span className="text-gray-400 line-through">${(item.price * 1.5).toFixed(0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Just For You Section */}
      <div className="mt-20">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
              <h2 className="text-xl font-medium">Just For You</h2>
            </div>
            <Link 
              href="/" 
              className="px-12 py-4 border border-gray-400 rounded hover:bg-gray-50 transition-all font-medium"
            >
              See All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mocked recommendations */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group flex flex-col gap-4">
                <div className="relative aspect-square bg-[#F5F5F5] rounded-md overflow-hidden p-8 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-[#DB4444] text-white px-3 py-1 rounded text-xs">
                    -35%
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-gray-200">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  </div>
                  <button className="absolute bottom-0 left-0 w-full bg-black text-white py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" /></svg>
                    <span className="text-sm">Add To Cart</span>
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold truncate">Recommended Product {i}</h3>
                  <div className="flex gap-4">
                    <span className="text-[#DB4444] font-semibold">$120</span>
                    <span className="text-gray-400 line-through">$180</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
