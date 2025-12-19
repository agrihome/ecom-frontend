import { Input } from "@/components/Input"

export default function ContactPage() {
    return (
       <section className="flex flex-col lg:flex-row my-8 sm:my-24 justify-center gap-8 text-gray-500 mx-5 sm:mx-20 max-w-7xl">

        <div className="w-full lg:w-[340px] flex flex-col shadow-md px-9 py-10 gap-8 rounded">


            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4" >

                    <div className="bg-[#DB4444] p-2.5 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <span className="font-medium text-black text-base">Call To Us</span>
                </div>

                <p className="text-sm">
                    We are available 24/7, 7 days a week.
                </p>

                <p className="text-sm">
                    Phone: +8801611112222
                </p>
            </div>

            <div className="w-full h-[1px] bg-gray-300">
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4" >
                   <div className="bg-[#DB4444] p-2.5 rounded-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                   </div>
                    <span className="font-medium text-black text-base">Write To US</span>
                </div>

                <p className="text-sm">
                    Fill out our form and we will contact you within 24 hours.
                </p>

                <p className="text-sm">
                   Emails: customer@exclusive.com
                </p>

                <p className="text-sm">
                    Emails: support@exclusive.com
                </p>
            </div>

        </div>

        <div className="shadow-md order-first lg:order-2 rounded px-8 py-10 flex-1">

            <form className="flex flex-col gap-8">

                 <div className="grid lg:grid-cols-3 gap-4">
                    <Input type="text" placeholder="Your Name *" required />
                    <Input type="email" placeholder="Your Email *" required />
                    <Input type="tel" placeholder="Your Phone *" required />
                </div>

                <textarea 
                    className="w-full bg-gray-100 rounded px-4 py-3 outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500 h-[207px] resize-none"
                    placeholder="Your Message"
                ></textarea>

                <div className="flex justify-end">
                    <button type="submit" className="bg-[#DB4444] text-white px-12 py-4 rounded hover:bg-red-600 transition-all font-medium">
                        Send Message
                    </button>
                </div>

            </form>

        </div>

       </section>
    )
}