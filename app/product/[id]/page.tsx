"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/lib/redux/features/wishlistSlice";
import StarRating from "@/components/StarRating";
import ProductCardResponsive from "@/components/ProductCardResponsive";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  
  const product = allProducts.find((p) => p.id === id);
  const isInWishlist = wishlistItems.some((item) => item.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("red");

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 sm:px-20 py-20 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link href="/" className="text-[#DB4444] hover:underline mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.productName,
      price: product.currentPrice,
      quantity: quantity,
      image: typeof product.imgUrl === 'string' ? product.imgUrl : product.imgUrl?.src || product.imgUrl
    }));
    router.push("/cart");
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.productName,
        price: product.currentPrice,
        image: typeof product.imgUrl === 'string' ? product.imgUrl : product.imgUrl?.src || product.imgUrl
      }));
    }
  };

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-10 text-gray-400">
        <Link href="/" className="hover:text-black">Account</Link>
        <span>/</span>
        <span className="hover:text-black">Gaming</span>
        <span>/</span>
        <span className="text-black font-medium">{product.productName}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Image Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:w-3/5">
          <div className="flex lg:flex-col gap-4">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-24 bg-[#F5F5F5] rounded flex items-center justify-center p-2 cursor-pointer border hover:border-[#DB4444]">
                    <Image src={product.imgUrl} alt={product.productName} width={80} height={80} className="object-contain" />
                </div>
             ))}
          </div>
          <div className="flex-1 bg-[#F5F5F5] rounded-lg p-10 flex items-center justify-center min-h-[400px]">
             <Image src={product.imgUrl} alt={product.productName} width={400} height={400} className="object-contain w-full h-full max-h-[500px]" />
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{product.productName}</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-gray-300 pr-4">
               <StarRating rating={product.rating} size={15} />
               <span className="text-sm text-gray-400">({product.reviewCount} Reviews)</span>
            </div>
            <span className="text-green-500 text-sm">In Stock</span>
          </div>

          <div className="text-2xl font-medium">${product.currentPrice.toFixed(2)}</div>

          <p className="text-sm leading-relaxed border-b border-gray-300 pb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          {/* Color Selector */}
          <div className="flex items-center gap-6">
            <span className="text-lg">Colours:</span>
            <div className="flex gap-2">
               <button 
                onClick={() => setSelectedColor("blue")}
                className={`w-5 h-5 rounded-full bg-[#A0BCE0] border-2 ${selectedColor === "blue" ? "border-black" : "border-transparent"}`}
               />
               <button 
                onClick={() => setSelectedColor("red")}
                className={`w-5 h-5 rounded-full bg-[#DB4444] border-2 ${selectedColor === "red" ? "border-black" : "border-transparent"}`}
               />
            </div>
          </div>

          {/* Size Selector */}
          <div className="flex items-center gap-6">
            <span className="text-lg">Size:</span>
            <div className="flex gap-4">
               {["XS", "S", "M", "L", "XL"].map((size) => (
                 <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded border flex items-center justify-center text-sm font-medium transition-colors ${selectedSize === size ? "bg-[#DB4444] border-[#DB4444] text-white" : "border-gray-300 hover:border-[#DB4444]"}`}
                 >
                    {size}
                 </button>
               ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex gap-4 items-center">
             <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition-colors border-r border-gray-300 text-xl font-medium"
                >
                  -
                </button>
                <div className="w-16 flex items-center justify-center font-bold">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#DB4444] hover:text-white transition-colors border-l border-gray-300 text-xl font-medium"
                >
                  +
                </button>
             </div>

             <button 
                onClick={handleBuyNow}
                className="flex-1 bg-[#DB4444] text-white h-11 rounded font-medium hover:bg-opacity-90 transition-all"
             >
                Buy Now
             </button>

             <button 
                onClick={toggleWishlist}
                className={`w-11 h-11 border rounded flex items-center justify-center transition-colors ${isInWishlist ? "border-[#DB4444] text-[#DB4444]" : "border-gray-300"}`}
             >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
             </button>
          </div>

          {/* Delivery Services */}
          <div className="mt-4 border border-gray-300 rounded overflow-hidden">
             <div className="flex items-center gap-4 p-4 border-b border-gray-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                  <path d="M5 10H19M5 14H19M5 10L12 3L19 10M5 14L12 21L19 14" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium">Free Delivery</span>
                  <Link href="#" className="text-xs underline">Enter your postal code for Delivery Availability</Link>
                </div>
             </div>
             <div className="flex items-center gap-4 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                  <path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l4 4" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium">Return Delivery</span>
                  <span className="text-xs">Free 30 Days Delivery Returns. <Link href="#" className="underline">Details</Link></span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
          <h2 className="text-2xl font-bold">Related Item</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
           {relatedProducts.map((p) => (
             <ProductCardResponsive
                key={p.id}
                id={p.id}
                productName={p.productName}
                rating={p.rating}
                imgUrl={p.imgUrl}
                currentPrice={p.currentPrice}
                originalPrice={p.originalPrice}
                reviewCount={p.reviewCount}
                discountPercent={p.discountPercent}
                new={p.new}
             />
           ))}
        </div>
      </div>
    </div>
  );
}
