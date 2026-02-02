// START:LearnMoreSection
// Learn More Section
const LearnMoreSection = () => (
    <section className="flex items-center px-4 sm:px-12 py-16 bg-gray-50">
        <div className="container mx-auto flex justify-center items-center rounded-3xl">
            <div className="flex flex-col lg:flex-row items-stretch justify-around mx-auto w-full rounded-3xl shadow-2xl overflow-hidden bg-white">
                <div className="block relative mx-0 w-full lg:w-3/5">
                     <picture>
                        <source srcSet="https://cdn.searchkings.ca/img/sk-call-intelligence-mobile-cb67543004.webp" media="(max-width: 459px)" />
                        <source srcSet="https://cdn.searchkings.ca/img/sk-call-intelligence-tablet-25c8df99e1.webp" media="(min-width: 460px) and (max-width: 1023px)" />
                        <source srcSet="https://cdn.searchkings.ca/img/sk-call-intelligence-dc1b050b15.webp" media="(min-width: 1024px)" />
                        <img src="https://cdn.searchkings.ca/img/sk-call-intelligence-dc1b050b15.webp" alt="Call Intelligence" className="w-full object-cover h-[300px] lg:h-full lg:object-right" />
                    </picture>
                </div>
                <div className="relative flex flex-col items-start justify-center text-left w-full lg:w-2/5 p-8 lg:p-12">
                    <img 
                        src="https://cdn.searchkings.ca/img/call-intelligence/ci-logo-colored-e7c0999846.svg" 
                        className="max-h-[38px] md:max-h-[48px] lg:max-h-[60px] mb-2 lg:mb-4" 
                        alt="Call Intelligence Logo" 
                        style={{width: 'auto'}} 
                    />
                    <p className="mb-4 lg:mb-8 text-gray-600">
                        Stay ahead of the competition. By evaluating, summarizing, and scoring phone call conversions, Call Intelligence offers valuable insights into campaign performance that have the potential to provide both time and cost savings.
                    </p>
                    <a href="/services/call-intelligence" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-500">
                        <div className="group md:text-lg text-base text-white font-bold h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                            <span className="tracking-tight">Learn More</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default LearnMoreSection;
// END:LearnMoreSection
