const IntelligentMarketingSection = () => (
    <section className="py-20 bg-white">
        <div className="container px-6 md:px-12 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="h-full flex flex-col p-8 lg:p-16 justify-center space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Intelligent marketing
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Stay ahead of the competition. By evaluating, summarizing, and scoring phone call conversions, Call Intelligence<sup>™</sup> offers valuable insights into campaign performance that have the potential to provide both time and cost savings.
                    </p>
                    <a href="/services/call-intelligence" className="inline-block w-max no-underline shadow-lg rounded-full overflow-hidden bg-gradient-to-r from-[#0075E3] to-[#0060c2] hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="group md:text-lg text-base text-white font-bold px-7 py-3 flex items-center gap-2">
                            <span className="tracking-tight">Learn More</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert" />
                        </div>
                    </a>
                </div>
                <div className="h-full bg-gradient-to-br from-[#0075E3] to-[#0060c2] flex justify-center items-end p-8 lg:p-12">
                   <img alt="Phone" src="https://cdn.searchkings.ca/img/call-intelligence/ci-image-mobile-018e38cb19.webp" className="w-full max-w-[440px] h-auto object-contain" />
                </div>
            </div>
        </div>
    </section>
);

export default IntelligentMarketingSection;
