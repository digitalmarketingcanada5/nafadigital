"use client";
import { useState } from 'react';

interface MaterialIconProps {
    children: string;
    className?: string;
}

const MaterialIcon = ({ children, className = "" }: MaterialIconProps) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const CampaignsSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { name: 'Search', icon: 'search' },
        { name: 'Display', icon: 'image' },
        { name: 'Shopping', icon: 'sell' },
        { name: 'Video', icon: 'smart_display' },
    ];
    const tabContent = [
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/search-5ca2977a8a.webp",
            title: "Start with search",
            text: "Help drive sales, leads, and site traffic by getting your business in front of people who are actively searching for the products or services you offer."
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/display-5856a091e6.webp",
            title: "Engage the eye",
            text: "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online."
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/shopping-792bf1082d.webp",
            title: "Offer up your inventory",
            text: "Boost awareness of your brand and present your inventory and online store to shoppers who are looking for your products.",
            button: { text: "Learn More", href: "/services/ecommerce/" }
        },
        {
            image: "https://cdn.searchkings.ca/img/ads-management/ad-slider/video-ad7c2b5208.webp",
            title: "Bring your brand to life with video",
            text: "Boost awareness of your brand, follow up with former ad viewers, and reach potential customers while they're watching or searching for videos on YouTube.",
            button: { text: "Learn More", href: "/services/video-marketing/" }
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Campaigns that can help you meet your goals
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                        Drive sales, leads, and site traffic by getting your business in front of people who are actively searching for products or services you offer.
                    </p>
                </div>
            </div>
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    <div className="flex justify-center lg:w-1/3">
                        <ul className="w-full flex flex-wrap sm:flex-nowrap lg:flex-col gap-3">
                            {tabs.map((tab, index) => (
                                <li key={tab.name} className="w-full sm:w-auto flex">
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className={`rounded-2xl flex justify-between items-center gap-6 px-6 py-4 shadow-md hover:shadow-lg w-full cursor-pointer transition-all duration-300 ${activeTab === index ? 'bg-gradient-to-br from-[#0075E3] to-[#0060c2] text-white scale-105' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        <span className="font-semibold">{tab.name}</span>
                                        <MaterialIcon className="text-2xl">{tab.icon}</MaterialIcon>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/3 bg-white rounded-2xl p-8 shadow-md">
                        <img src={tabContent[activeTab].image} alt={tabContent[activeTab].title} className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="flex items-center lg:w-1/3 bg-white rounded-2xl p-8 shadow-md">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{tabContent[activeTab].title}</h3>
                            <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed">{tabContent[activeTab].text}</p>
                            {tabContent[activeTab].button && (
                                <a href={tabContent[activeTab].button.href} className="inline-block mt-6 no-underline shadow-lg rounded-full overflow-hidden bg-gradient-to-r from-[#0075E3] to-[#0060c2] hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="group md:text-lg text-base text-white font-bold px-7 py-3 flex items-center gap-2">
                                        <span className="tracking-tight">{tabContent[activeTab].button.text}</span>
                                        <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="invert" />
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CampaignsSection;
