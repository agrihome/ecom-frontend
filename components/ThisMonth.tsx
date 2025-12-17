import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import ProductCardResponsive from "@/components/ProductCardResponsive";
import ViewAllButton from "./ViewAllButton";
import {products} from "@/data/products";

export default function ThisMonth() {
  return (
    <section className="mt-24 overflow-hidden">
      <div className="flex flex-col px-20">
        <SectionTitle>This Month</SectionTitle>
        <div className="flex items-center justify-start gap-24  pt-4 pb-10">
          <SectionHeading>Best Selling Products</SectionHeading>
          <div className="flex gap-5 ml-auto">
            <ViewAllButton text="View all" variant="small" />
          </div>
        </div>
      </div>

      <div className="px-20 py-5 overflow-hidden p-5">
        <div className="grid grid-cols-4 gap-6">
         {
         products.slice(4,8).map((product,index) => (
          <ProductCardResponsive
            key={index}
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
