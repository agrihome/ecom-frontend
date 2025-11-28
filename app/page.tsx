import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import  Hero  from "@/components/Hero";
import FlashSales from "@/components/FlashSales";
import ThisMonth from "@/components/ThisMonth";
import ExploreOurProducts from "@/components/ExploreOurProducts";

export default function Home() {
  return (
    <main className="bg-white text-black pb-2">
      <div className="text-center bg-black py-3 text-sm text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <Link
          href="/shop"
          className="font-extrabold ml-4 underline cursor-pointer"
        >
          ShopNow
        </Link>
      </div>
      <Header></Header>
      <Hero></Hero>
      <FlashSales></FlashSales>
      <ThisMonth></ThisMonth>
      <ExploreOurProducts></ExploreOurProducts>
    </main>
  );
}
