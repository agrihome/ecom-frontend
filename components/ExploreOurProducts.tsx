"use client";

import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import { Timer } from "./Timer";
import ProductCardResponsive from "@/components/ProductCardResponsive";
import img from "@/public/images/gaming.png";
import ViewAllButton from "./ViewAllButton";
import { useAppSelector } from "@/lib/redux/hooks";

export default function ExploreOurProducts() {
  const products = useAppSelector((state) => state.products.filteredItems);
  return (
    <section className="mt-24">
      <div className="flex flex-col sm:px-20 px-5">
        <SectionTitle>Our Products</SectionTitle>
        <div className="flex items-center justify-start sm:gap-24  pt-4 pb-10">
          <SectionHeading>Explore our Products</SectionHeading>
          <div className="flex gap-5 ml-auto">
            <ViewAllButton text="View all" variant="small" />
          </div>
        </div>
      </div>
      <div className="sm:px-20 px-5 py-5 overflow-hidden p-5">
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-6 gap-y-16">
          {products.slice(5,13).map((product) => (
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
      <div className="flex justify-center my-12">
        <ViewAllButton text="View All Products" variant="large" />
      </div>
    </section>
  );
}
