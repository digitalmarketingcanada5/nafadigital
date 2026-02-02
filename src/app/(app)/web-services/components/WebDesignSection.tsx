import React from 'react';

const WebDesignSection = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <div className="rounded-3xl overflow-hidden bg-gray-50 w-full h-full mx-auto lg:text-center">
                <div className="flex lg:flex-row flex-col md:rounded-3xl rounded-xl text-white justify-center overflow-hidden">
                    <div className="w-full lg:w-1/2 xl:w-1/3 text-left flex flex-col justify-center sm:p-12 p-8 lg:pr-0 pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Website design &amp; development</h2>
                        <p className="text-black w-full font-light text-gray-600 mt-4">NafaDigital offers a variety of modern and user-friendly advertising microsite, WordPress, and Shopify advertising microsite templates that will resonate with your audience and help you maximize your online advertising potential.</p>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/3 flex gap-8 sm:justify-center justify-start px-8 sm:pb-0 pb-8 lg:pt-8 pt-0">
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://cdn.searchkings.ca/img/web/ads-5962816f00.webp" alt="Advertising logo" className="w-12" />
                            <p className="xl:text-3xl text-xl py-4 text-black font-bold hidden sm:block">Advertising</p>
                            <img src="https://cdn.searchkings.ca/img/web/ads-phone-4095aa2352.webp" alt="Advertising phone" className="md:w-auto w-40 rounded-3xl -mb-16 shadow-2xl hidden sm:block" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://cdn.searchkings.ca/img/web/wordpress-22e347b533.webp" alt="WordPress logo" className="w-12" />
                            <p className="xl:text-3xl text-xl py-4 text-black font-bold hidden sm:block">WordPress</p>
                            <img src="https://cdn.searchkings.ca/img/web/wordpress-phone-dd86cf11c8.webp" alt="WordPress phone" className="md:w-auto w-40 rounded-3xl -mb-16 shadow-2xl hidden sm:block" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://cdn.searchkings.ca/img/web/shopify-e403250a7b.webp" alt="Shopify logo" className="w-12" />
                            <p className="xl:text-3xl text-xl py-4 text-black font-bold hidden sm:block">Shopify</p>
                            <img src="https://cdn.searchkings.ca/img/web/shopify-phone-3514e23d21.webp" alt="Shopify phone" className="md:w-auto w-40 rounded-3xl -mb-16 shadow-2xl hidden sm:block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WebDesignSection;
