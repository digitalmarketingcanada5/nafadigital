import React from 'react';

const EngagingWebsitesSection = () => (
    <section className="py-20 bg-white">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Engaging websites to drive conversions
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                    NafaDigital creates engaging websites that display the core aspects of your product or service offering.
                </p>
            </div>
        </div>
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#063649]/20 flex flex-col gap-6 items-center">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Lead-generation focused web design
                    </h3>
                    <img src="https://cdn.searchkings.ca/img/web/card-1-01dbe87772.webp" alt="Lead generation" className="w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#063649]/20 flex flex-col gap-6 items-center">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Conversion-based experience
                    </h3>
                    <img src="https://cdn.searchkings.ca/img/web/card-2-98ee8d354b.webp" alt="Contact form" className="w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#063649]/20 flex flex-col gap-6 items-center md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
                        Turn browsers into leads
                    </h3>
                    <img src="https://cdn.searchkings.ca/img/web/card-3-eaf35236ce.webp" alt="Phone call screen" className="w-full rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
        </div>
    </section>
);

export default EngagingWebsitesSection;
