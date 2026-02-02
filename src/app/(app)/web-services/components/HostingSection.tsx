import React from 'react';

const HostingSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">WordPress website hosting</h2>
            <p className="text-black lg:w-[85%] w-full mx-auto my-8 font-light text-gray-700 dark:text-gray-300">SearchKings WordPress hosting and maintenance management comes with the peace of mind from knowing that we are handling both your website and marketing needs, so you can focus on building your business.</p>
            <a href="/solutions/hosting/" className="shrink-0 w-max block no-underline shadow-xl rounded-full overflow-hidden !mx-auto bg-gradient-to-r from-red-600 to-red-500">
                <div className="group md:text-lg text-base text-white font-bold h-full hover:text-white hover:from-black hover:to-black hover:bg-black/90 px-7 py-3 flex items-center gap-2">
                    <span className="tracking-tight">See Hosting Options</span>
                    <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert relative" />
                </div>
            </a>
        </div>
    </section>
);

export default HostingSection;
