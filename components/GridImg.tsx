import { SectionTitle } from "./SectionTitle";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import ps5 from "@/public/images/ps5-slim-goedkope-playstation_large 1.png"
import gucci from "@/public/images/gucci.png"
import speaker from "@/public/images/speakers.png"
import women from "@/public/images/attractive-woman-wearing-hat-posing-black-background 1.png"

export default function GridImg() {
    return (
        <section className="mt-24">
            <div className="flex flex-col px-20">
                <SectionTitle>Featured</SectionTitle>
                <div className="flex items-center justify-start gap-24  pt-4 pb-10">
                    <SectionHeading>New Arrival</SectionHeading>
                </div>
            </div>
            <div className="mx-20 aspect-1100/570 h-auto grid grid-cols-4 grid-rows-2 gap-x-[2%] gap-y-[4%]">

                <div className="col-span-2 row-span-2 flex items-bottom bg-black pt-[15%] relative">
                    <Image src={ps5} alt="ps 5" className="object-cover w-full h-full" />

                    <div className="absolute bottom-10 left-10 text-white w-5/12 flex flex-col gap-3">
                        <h2 className="text-2xl font-semibold">PlayStation 5</h2>
                        <p className="text-sm font-normal">Black and White version of the PS5 coming out on sale.</p>
                        <button className="font-medium underline underline-offset-6 mr-auto">Shop Now</button>
                    </div>
                </div>

                <div className="col-span-2 row-span-1 flex items-bottom bg-black overflow-hidden relative">
                    <Image src={women} alt="women" className="object-fill w-2/3 h-auto scale-x-[-1] ml-auto" />
                    <div className="absolute bottom-10 left-10 text-white flex flex-col gap-3 w-5/12">
                        <h2 className="text-2xl font-semibold">Women’s Collections</h2>
                        <p className="text-sm font-normal">Featured woman collections that give you another vibe.</p>
                        <button className="font-medium underline underline-offset-6 mr-auto">Shop Now</button>
                    </div>
                </div>



                <div className="col-span-1 row-span-1 flex items-bottom bg-black p-[10%] relative">
                    <Image src={speaker} alt="speaker" className="object-cover w-full h-full transform translate-x-[15%] translate-y-[8%]" />
                    <div className="absolute bottom-10 left-10 text-white flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Speakers</h2>
                        <p className="text-sm font-normal">Amazon wireless speakers</p>
                        <button className="font-medium underline underline-offset-6 mr-auto">Shop Now</button>
                    </div>
                </div>


                <div className="col-span-1 row-span-1 flex items-bottom bg-black p-[10%] relative">
                    <Image src={gucci} alt="sent" className="object-cover w-full h-full" />
                    <div className="absolute bottom-10 left-10 text-white flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Perfume</h2>
                        <p className="text-sm font-normal">GUCCI INTENSE OUD EDP</p>
                        <button className="font-medium underline underline-offset-6 mr-auto">Shop Now</button>
                    </div>
                </div>



            </div>
        </section>
    )
}