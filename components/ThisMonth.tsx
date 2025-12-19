"use client";

import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import ProductCardResponsive from "@/components/ProductCardResponsive";
import ViewAllButton from "./ViewAllButton";
import { useAppSelector } from "@/lib/redux/hooks";

export default function ThisMonth() {
  const products = useAppSelector((state) => state.products.filteredItems);
  return (
    <section className="mt-24 overflow-hidden">
      <div className="flex flex-col sm:px-20 px-5">
        <SectionTitle>This Month</SectionTitle>
        <div className="flex items-center justify-start sm:gap-24  pt-4 pb-10">
          <SectionHeading>Best Selling Products</SectionHeading>
          <div className="flex gap-5 ml-auto">
            <ViewAllButton text="View all" variant="small" />
          </div>
        </div>
      </div>

      <div className="sm:px-20 px-5 py-5 overflow-hidden p-5">
        <div className="grid gap-6 md:grid-cols-4 grid-cols-2">
         {
         products.slice(4,8).map((product,index) => (
          <ProductCardResponsive
            key={product.id}
            id={product.id}
            productName={product.productName}
            rating={product.rating}
            imgUrl={product.imgUrl}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            reviewCount={product.reviewCount}
          />
         ))
         }
         </div>
      </div>
    </section>
  );
}
