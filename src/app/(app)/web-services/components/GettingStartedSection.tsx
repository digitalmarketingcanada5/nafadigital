import React from 'react';

const MaterialIcon = ({ children, className }: { children: string; className?: string }) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const GettingStartedSection = () => {
    const steps = [
        {
            icon: "https://cdn.searchkings.ca/img/web/our-process-31ba3a79c6.webp",
            title: "Our Process is Simple",
            description: "Get started in 3 easy steps."
        },
        {
            icon: "conversion_path",
            title: "Design",
            description: "We get to know your business and apply your branding to our modern, responsive, templated designs."
        },
        {
            icon: "offline_bolt",
            title: "Develop",
            description: "We develop fast-loading sites with user experience and conversion optimization in mind."
        },
        {
            icon: "code",
            title: "Support",
            description: "We offer ongoing hosting and maintenance to ensure your website is optimized."
        }
    ];

    return (
        <section className="py-16">
            <div className="container px-12 mx-auto">
                <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Getting started is easy</h2>
                <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-700 dark:text-gray-300">We simplify the process of building your site and walk you through the process from start to finish.</p>
            </div>
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <div key={step.title} className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-[#063649] text-white h-full flex flex-col justify-between">
                            <div>
                                {step.icon.includes('.') ?
                                    <img src={step.icon} alt={step.title} className="h-[73px] mb-8" /> :
                                    <MaterialIcon className="!text-[100px] mb-8 -ml-4">{step.icon}</MaterialIcon>
                                }
                                <p className="text-3xl font-bold leading-tight">{step.title}</p>
                            </div>
                            <p className="font-light text-lg mt-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GettingStartedSection;
