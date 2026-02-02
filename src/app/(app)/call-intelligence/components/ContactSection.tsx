interface MaterialIconProps {
    children: string;
    className?: string;
}

const MaterialIcon = ({ children, className = "" }: MaterialIconProps) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const ContactSection = () => (
    <section className="py-16 px-4 sm:px-12">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-16">
                <div className="flex flex-col gap-8 w-full lg:w-1/2 justify-between">
                    <div className="flex flex-col gap-8 lg:w-3/4">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-snug mb-0 text-gray-900 dark:text-gray-100">Contact Us</h2>
                        <p className="text-gray-700 dark:text-gray-300">Layer in Call Intelligence™ to your current advertising, or use it to help you achieve specific goals. Either way, our process to get started is simple.</p>
                        <p className="text-gray-700 dark:text-gray-300">You are under no obligation to make a purchase and we keep your personal information private and confidential. <a href="/privacy-policy" className="underline">View our privacy policy.</a></p>
                    </div>
                    <div className="font-bold bg-[#0075E3] rounded-3xl">
                        <div className="flex md:flex-row flex-col p-8 text-white justify-between md:items-center md:gap-2 gap-4">
                            <p className="text-2xl 2xl:text-3xl">Have a Google Ads account? <br/>Get a free evaluation.</p>
                            <a href="/contact-us" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden !mt-0 min-w-[169px]">
                                <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2">
                                    <span className="tracking-tight">Get Started</span>
                                    <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="group-hover:invert relative" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full" id="contact">
                    <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gray-50 w-full">
                        <p className="text-3xl font-bold md:mb-8">Get Started</p>
                        <form>
                            <div className="grid md:grid-cols-2 gap-x-4">
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">First & Last Name <span className="text-red-500">*</span></label><input type="text" placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label><input type="tel" placeholder="Phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label><input type="email" placeholder="najdigital1@gmail.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Company Name <span className="text-red-500">*</span></label><input type="text" placeholder="Company Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Company Website <span className="text-red-500">*</span></label><input type="url" placeholder="website.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"/></div>
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">Inquiry Type <span className="text-red-500">*</span></label><select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"><option>Please Select</option></select></div>
                                <div className="mb-4"><label className="block text-sm font-medium text-gray-700">How Did You Hear About Us? <span className="text-red-500">*</span></label><select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"><option>Please Select</option></select></div>
                                <div className="mb-4 md:col-span-2"><label className="block text-sm font-medium text-gray-700">Message</label><textarea placeholder="Your Message" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm h-24"></textarea></div>
                            </div>
                            <button type="submit" className="w-max block no-underline rounded-full bg-gradient-to-t from-red-600 to-red-500">
                                <div className="group transition-all text-lg text-white font-bold px-7 py-3 flex items-center gap-2 rounded-full ease-in-out duration-300 shadow-xl hover:bg-black"> Submit <MaterialIcon className="relative -top-px">arrow_outward</MaterialIcon> </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
