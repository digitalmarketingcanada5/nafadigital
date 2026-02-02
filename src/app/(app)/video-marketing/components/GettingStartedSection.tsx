import React from 'react';

const MaterialIcon = ({ children, className }: { children: string; className?: string }) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const GettingStartedSection = () => {
    const steps = [
        {
            icon: "https://cdn.searchkings.ca/img/youtube/our-process-751def3b81.svg",
            title: "Our Process is Simple",
            description: "Get started in 3 easy steps."
        },
        {
            icon: "conversion_path",
            title: "Onboard",
            description: "We handle Google & Microsoft's onboarding process for your and get your accounts live faster."
        },
        {
            icon: "offline_bolt",
            title: "Optimize",
            description: "Your dedicated Account Manager continually optimizes lead volume and budget to best suit you."
        },
        {
            icon: "call_quality",
            title: "Support",
            description: "In addition to our dedicated support line, we train you on how to view and action your leads and more."
        }
    ];

    return (
        <section className="py-16">
            <div className="container px-12 mx-auto">
                <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Getting started is easy</h2>
                <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-700 dark:text-gray-300">Our team of video ad experts will harness the power of YouTube advertising to grow your brand and increase awareness. Reach your demographic during their commute, while browsing on their phone, at work, or even while watching TV at home.</p>
            </div>
            <div className="container mx-auto px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <div key={step.title} className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 text-white h-full flex flex-col justify-between">
                            <div>
                                {step.icon.includes('.') ?
                                    <img src={step.icon} alt={step.title} className="h-[100px] mb-8" /> :
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
