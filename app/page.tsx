import Hero from "@/components/Hero";
import FlashSales from "@/components/FlashSales";
import ThisMonth from "@/components/ThisMonth";
import ExploreOurProducts from "@/components/ExploreOurProducts";
import Service from "@/components/Service";
import GridImg from "@/components/GridImg";
import JBL from "@/components/jbl";
import Browse from "@/components/Browse"

export default function Home() {
  return (
    <main className="bg-white text-black">
    
      <Hero></Hero>
      <FlashSales></FlashSales>
      <Browse></Browse>
      <ThisMonth></ThisMonth>
      <JBL></JBL>
      <ExploreOurProducts></ExploreOurProducts>
      <GridImg></GridImg>
      <Service></Service>
    </main>
  );
}
