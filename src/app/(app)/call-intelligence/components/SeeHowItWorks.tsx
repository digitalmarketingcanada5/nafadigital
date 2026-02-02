const SeeHowItWorks = () => (
    <section className="py-16">
        <div className="container px-12 mx-auto">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 !mb-0">See how it works</h2>
                    <p className="font-light text-gray-700 dark:text-gray-300">Generating calls is only one piece of the online advertising puzzle. Understanding which calls can make you the most money is what solves your business growth needs and gives you the competitive advantage.</p>
                    <a href="/contact-us" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden hidden lg:block">
                        <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-t from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2">
                            <span className="tracking-tight">Get Started</span>
                            <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert relative" />
                        </div>
                    </a>
                </div>
                <div className="h-full">
                    <div className="card relative rounded-3xl shadow-lg overflow-hidden">
                        <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/KgYHXNVSgLc" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SeeHowItWorks;
