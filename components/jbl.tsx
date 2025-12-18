import Image from "next/image";
import jbl from "@/public/images/jbl.png"
import ViewAllButton from "./ViewAllButton";
import { Timer } from "./Timer";

export default function JBL() {
    return (
        <section className="sm:mx-20 mx-5 my-30">
            <div className=" bg-black grid md:grid-cols-2">

                <div className="flex flex-col items-start md:p-20 p-10 justify-center xl:gap-12 gap-6">
                    <span className="text-[#0f6] font-semibold">Categories</span>
                    <h2 className="xl:text-5xl lg:text-4xl font-semibold text-white">Enhance Your Music Experience</h2>


                    <div className="bg-radial from-gray-800/70 from-40% to-black md:hidden block w-1/2">
                        <Image src={jbl} alt="jbl" className="transform translate-x-[-5%] scale-x-[-1] object-cover h-auto" />
                    </div>

                    <Timer color="white" />

                    <ViewAllButton text="Buy Now" variant="large" bgColor="#00ff66" />
                </div>

                <div className="col-span-1  bg-radial from-gray-800/70 from-40% to-black hidden md:block">
                    <Image src={jbl} alt="jbl" className="transform translate-x-[-5%] scale-x-[-1] object-cover w-full h-auto" />
                </div>
            </div>
        </section>
    );
}