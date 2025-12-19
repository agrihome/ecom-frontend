"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import ProductCardResponsive from "@/components/ProductCardResponsive";
import { searchProducts } from "@/lib/redux/features/productSlice";

export default function ProductsPage() {
  const products = useAppSelector((state) => state.products.filteredItems);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-20 py-10 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm mb-12 text-gray-400">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">All Products</span>
      </div>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">Explore All Products</h1>
        <div className="text-sm text-gray-500">
          Showing {products.length} results
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <p className="text-gray-500 text-lg">No products found matching your search.</p>
          <button 
            onClick={() => dispatch(searchProducts(""))}
            className="text-[#DB4444] font-medium border-b border-[#DB4444]"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
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
    </div>
  );
}
