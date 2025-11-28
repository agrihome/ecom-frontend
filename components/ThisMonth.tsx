import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import { Timer } from "./Timer";
import ProductCardResponsive from "@/components/ProductCardResponsive";
import img from "@/public/images/g92-2-500x500 1.png";
import ViewAllButton from "./ViewAllButton";

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
          <ProductCardResponsive
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
          />
          <ProductCardResponsive
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
          />
          <ProductCardResponsive
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
          />
          <ProductCardResponsive
            productName="HAVIT HV-G92 Gamepad"
            rating={5}
            imgUrl={img}
            currentPrice={160}
            originalPrice={120}
            reviewCount={88}
          />
        </div>
      </div>
    </section>
  );
}
