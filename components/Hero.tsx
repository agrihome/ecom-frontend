import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/images/hero_endframe__cvklg0xk3w6e_large 2.png";
import AppleLogo from "@/public/images/1200px-Apple_gray_logo 1.png";
import { CategoryToggle } from "./CategoryToggle";




export function HeroCategoryToggle() {


  return  <ul className="h-full pr-5 space-y-1 select-none text-gray-700 min-w-54">
        <li>
          <CategoryToggle
            title="Woman's Fashion"
            subcategories={["Subcategory 1", "Subcategory 2", "Subcategory 3"]}
          />
        </li>
        <li>
          <CategoryToggle
            title="Men's Fashion"
            subcategories={["Subcategory 1", "Subcategory 2", "Subcategory 3"]}
          />
        </li>
        <li className="py-2">
          <Link href="/">Electronics</Link>
        </li>
        <li className="py-2">
          <Link href="/">Home & Lifestyle</Link>
        </li>
        <li className="py-2">
          <Link href="/">Medicine</Link>
        </li>
        <li className="py-2">
          <Link href="/">Sports & Outdoor</Link>
        </li>
        <li className="py-2">
          <Link href="/">Baby's & Toys</Link>
        </li>
        <li className="py-2">
          <Link href="/">Groceries & Pets</Link>
        </li>
        <li className="py-2">
          <Link href="/">Health & Beauty</Link>
        </li>
      </ul>

}

export default function Hero() {
  return (
    <section className="flex px-5 sm:px-20 w-full justify-between border-gray-200 border-t text-white items-start">
     <div className="[@media(max-width:1250px)]:hidden border-r border-gray-200 py-5">
     <HeroCategoryToggle></HeroCategoryToggle>
     </div>


      <div className="h-full bg-black mx-auto mt-8">

        <div className="grid grid-cols-2">
          <div className="flex flex-col h-full justify-center gap-5 pl-10  md:pl-25 relative lg:mt-6">
            <div className="flex items-center relative -left-3">
              <Image
                src={AppleLogo}
                alt="Hero image"
                className="object-fit col-start-2 col-end-3 w-[49px] h-[49px] gap-5"
              />
              <span className="mt-2">iPhone 14 Series</span>
            </div>

            <div className="flex-col gap-3 text-xl md:text-3xl lg:text-5xl hidden sm:flex">
              <span className="font-semibold">Up to 10%</span>
              <span className="font-semibold">off Voucher</span>
            </div>

            <div className="flex gap-2">
              <Link href="/" className="border-b border-white">
                Shop Now
              </Link>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <Image
            src={HeroImg}
            alt="Hero image"
            width={500}
            height={800}
            className="object-cover col-start-2 col-end-3 mt-10 w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
