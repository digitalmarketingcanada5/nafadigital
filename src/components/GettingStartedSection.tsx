// START:GettingStartedSection
// Getting Started Section
const GettingStartedSection = () => {
    const steps = [
        {
            icon: "https://cdn.searchkings.ca/img/home/contact-us-d640acc1d7.webp",
            title: "Contact Us",
            description: "At NafaDigital, we specialize in managing digital campaigns. Our team of professionals is here to help."
        },
        {
            icon: "https://cdn.searchkings.ca/img/home/onboard-bb9a4c8d2a.webp",
            title: "Onboard",
            description: "We handle Google & Microsoft’s onboarding process for you and get your accounts live faster."
        },
        {
            icon: "https://cdn.searchkings.ca/img/home/optimize-7c1d4c1705.webp",
            title: "Optimize",
            description: "Your dedicated Account Manager continually optimizes lead volume and budget to best suit you."
        },
        {
            icon: "https://cdn.searchkings.ca/img/home/support-1603e96320.webp",
            title: "Support",
            description: "In addition to our dedicated support line, we train you on how to view and action your leads and more."
        }
    ];

    return (
        <section className="flex items-center py-16 px-4 sm:px-12">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-full lg:w-1/3 p-0 pb-8 lg:p-12 lg:pl-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-8 text-gray-900 dark:text-gray-100">Getting started <span className="lg:block">is easy</span></h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">We simplify lead generation so you can focus on growing your business.</p>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">This is why our digital marketing experts make every effort to ensure a smooth and simple onboarding experience and stellar results.</p>
                        <p className="mb-8 text-gray-700 dark:text-gray-300">Make the switch to NafaDigital today.</p>
                        <a href="/contact-us" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-500">
                            <div className="group md:text-lg text-base text-white font-bold h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2 transition-all duration-300">
                                <span className="tracking-tight">Contact Us</span>
                                <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert group-hover:invert" />
                            </div>
                        </a>
                    </div>
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-16 p-0 lg:p-12">
                        {steps.map(step => (
                            <div key={step.title} className="flex flex-col items-start gap-2">
                                <img src={step.icon} alt={step.title} width="53" height="52" />
                                <div className="pt-4">
                                    <p className="text-xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{step.title}</p>
                                    <p className="font-light text-gray-700 dark:text-gray-300">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GettingStartedSection;
// END:GettingStartedSection
