import Image from "next/image";
import jbl from "@/public/images/jbl.png"
import ViewAllButton from "./ViewAllButton";
import { Timer } from "./Timer";

export default function JBL() {
    return (
        <section className="mx-20 my-30">
            <div className=" bg-black grid grid-cols-2">

                <div className="flex flex-col items-start p-20 justify-center gap-12">
                    <span className="text-[#0f6] font-semibold">Categories</span>
                    <h2 className="text-5xl font-semibold text-white">Enhance Your Music Experience</h2>
                    <Timer color="white" />
                    <ViewAllButton text="Buy Now" variant="large" bgColor="#00ff66" />
                </div>

                <div className="col-span-1  bg-radial from-gray-800/70 from-40% to-black">
                    <Image src={jbl} alt="jbl" className="transform translate-x-[-5%] scale-x-[-1] object-cover w-full h-auto" />
                </div>
            </div>
        </section>
    );
}