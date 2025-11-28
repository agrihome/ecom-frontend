import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import { Timer } from "./Timer";
import ProductCard from "@/components/ProductCard";
import img from "@/public/images/g92-2-500x500 1.png";
import ViewAllButton from "./ViewAllButton";

export default function FlashSales() {
  return (
    <section className="mt-24 overflow-hidden">
      <div className="flex flex-col gap-8 px-20">
        <SectionTitle>Today's</SectionTitle>
        <div className="flex items-center justify-start gap-24  py-2">
          <SectionHeading>Flash Sales</SectionHeading>
          <div className="flex justify-center">
            <Timer />
          </div>
          <div className="flex gap-5 ml-auto">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

      <div className="pl-20 py-5 overflow-hidden">
        <div className="flex gap-5 overflow-x-scroll hide-scrollbar">
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={-33}
          />
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={33}
          />
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={33}
          />
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={33}
          />
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={33}
          />
          <ProductCard
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
            discountPercent={33}
          />
        </div>
      </div>

      <div className="flex justify-center my-12">
        <ViewAllButton text="View All Products" variant="large" />
      </div>
    </section>
  );
}
