"use client";

import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";
import ProductCardResponsive from "@/components/ProductCardResponsive";

export default function WishlistPage() {
  const wishlistIds = useAppSelector((state) => state.wishlist.items.map(item => item.id));
  const allProducts = useAppSelector((state) => state.products.items);
  const dispatch = useAppDispatch();

  // Get full product details for wishlist items
  const wishlistProducts = allProducts.filter(product => wishlistIds.includes(product.id));
  
  // Just for you recommendations (e.g., first 4 products)
  const recommendedProducts = allProducts.slice(0, 4);

  const handleMoveAllToCart = () => {
    wishlistProducts.forEach(product => {
        dispatch(addToCart({
            id: product.id,
            name: product.productName,
            price: product.currentPrice,
            quantity: 1,
            image: typeof product.imgUrl === 'string' ? product.imgUrl : product.imgUrl?.src || product.imgUrl
        }));
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium">Wishlist ({wishlistProducts.length})</h2>
        {wishlistProducts.length > 0 && (
            <button 
                onClick={handleMoveAllToCart}
                className="px-12 py-4 border border-gray-400 rounded hover:bg-gray-50 transition-all font-medium"
            >
                Move All To Bag
            </button>
        )}
      </div>

      {wishlistProducts.length === 0 ? (
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlistProducts.map((product) => (
            <ProductCardResponsive
              key={product.id}
              id={product.id}
              productName={product.productName}
              rating={product.rating}
              imgUrl={product.imgUrl}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              reviewCount={product.reviewCount}
              discountPercent={product.discountPercent}
              new={product.new}
            />
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedProducts.map((product) => (
              <ProductCardResponsive
                key={product.id}
                id={product.id}
                productName={product.productName}
                rating={product.rating}
                imgUrl={product.imgUrl}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                reviewCount={product.reviewCount}
                discountPercent={product.discountPercent}
                new={product.new}
              />
            ))}
          </div>
      </div>
    </div>
  );
}
