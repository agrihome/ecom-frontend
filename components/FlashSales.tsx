import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import { Timer } from "./Timer";
import ProductCard from "@/components/ProductCard";
import img from "@/public/images/gaming.png";
import ViewAllButton from "./ViewAllButton";
import { products } from "@/data/products";

export default function FlashSales() {
  return (
    <section className="mt-24 overflow-hidden">
      <div className="flex flex-col gap-8 px-5 sm:px-20">
        <SectionTitle>Today's</SectionTitle>

        <div className="sm:flex sm:items-center sm:justify-between grid grid-cols-2 lg:justify-start lg:gap-24 gap-y-8  py-2 items-center">
          <SectionHeading>Flash Sales</SectionHeading>

          <div className="flex justify-start row-start-2">
            <Timer />
          </div>

          <div className="flex gap-5 lg:ml-auto justify-self-end">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 lg:w-12 lg:h-12"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M22 16L15 23L22 30M15 23H31"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 lg:w-12 lg:h-12"
            >
              <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
              <path
                d="M14.5 23H31M31 23L24 16M31 23L24 30"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>


      </div>

      <div className="pl-5 sm:pl-20 py-5 overflow-hidden">
        <div className="flex gap-5 overflow-x-scroll hide-scrollbar">
          {products.map((product) => (
            <ProductCard
              key={product.productName}
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
