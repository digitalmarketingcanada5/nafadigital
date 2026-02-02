"use client";
import { useState } from 'react';

const BetterDataSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        "Intelligent Marketing",
        "Convert More Calls",
        "Understand Your Customers",
        "Learn How You Can Improve"
    ];
    const tabContents = [
        {
            title: "We train Google to get you better calls",
            description: "Call Intelligence™ helps you make the most of every call by identifying what your most profitable calls look like, and training Google to give you more. By knowing what your best calls look like and when you're losing potential customers, your team can turn more calls into wins.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/intelligence-marketing-afeebdc0af.svg"
        },
        {
            title: "Turn lost leads into wins",
            description: "Every call is a chance to grow your business. Maybe a call wasn't answered, someone thought the price was too high, or you were fully booked. With Call Intelligence, we show you where you might be losing out so that your team can get those lost leads back, change how they answer the phone, and lock in more business from every call.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/convert-d15ca2962f.svg"
        },
        {
            title: "See what's working and what's not",
            description: "Call Intelligence™ can show your best and worst performing calls by region, campaign type, and more. Knowing what calls are most likely to bring in money can help you beat your competition and make the most of your marketing dollars.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/understand-6114c7db6a.svg"
        },
        {
            title: "See how you're performing against your competitors",
            description: "How does your booking rate compare to industry benchmarks and past performance? Call Intelligence™ analyzes your call data and presents performance trends to help you clearly understand and identify opportunities for improvement.",
            image: "https://cdn.searchkings.ca/img/call-intelligence/learn-d1a300a6fc.svg"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Better Data, Better Campaign Performance
                    </h2>
                </div>
            </div>
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <div className="flex flex-wrap gap-3 mb-12 justify-center border-b border-gray-200 pb-4">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${activeTab === index ? 'bg-gradient-to-br from-red-600 to-red-500 text-white border-red-600 scale-105 shadow-lg' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 lg:p-12 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6 justify-center">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                                {tabContents[activeTab].title}
                            </h3>
                            <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed">
                                {tabContents[activeTab].description}
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={tabContents[activeTab].image} alt={tabContents[activeTab].title} className="max-w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetterDataSection;
