"use client";
import { useState } from "react";

interface MaterialIconProps {
  children: string;
  className?: string;
}

const MaterialIcon = ({ children, className = "" }: MaterialIconProps) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
);

const BusinessInsightsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Call Scoring & Summary", icon: "troubleshoot" },
    { name: "Performance Insights", icon: "support_agent" },
    { name: "Filter Your Call Data", icon: "instant_mix" },
    { name: "Real-time Notifications", icon: "notifications_active" },
  ];
  const tabContent = [
    {
      image:
        "https://cdn.searchkings.ca/img/call-intelligence/call-scoring-7dc92e34f0.svg",
      title: "Call Scoring & Summary",
      text: "Call Intelligence™ scores leads and provides summaries to help you quickly prioritize high-value prospects and identify lost revenue opportunities.",
    },
    {
      image:
        "https://cdn.searchkings.ca/img/call-intelligence/booking-insight-ef7649a038.svg",
      title: "Performance Insights",
      text: "Quickly see how your business is doing over time and compared to your competition.",
    },
    {
      image:
        "https://cdn.searchkings.ca/img/call-intelligence/filter-your-call-7a90a9cd4f.svg",
      title: "Filter Your Call Data",
      text: "Create your own filters to see what's important to your business. You can filter for where the ad came from, the call score, the region, and more.",
    },
    {
      image:
        "https://cdn.searchkings.ca/img/call-intelligence/realtime-notification-c65370bfd9.svg",
      title: "Real-time Notifications",
      text: "Create instant notifications based on your filters. This will help you and your team stay informed about the most valuable calls and reduce missed chances to turn those calls into customers.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Business Insights
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our NafaDigital app lets you see your Call Intelligence™ data and how
            you&apos;re doing at any time, from anywhere.
          </p>
        </div>
      </div>
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex justify-center lg:w-1/3">
            <ul className="w-full flex flex-wrap sm:flex-nowrap lg:flex-col gap-3">
              {tabs.map((tab, index) => (
                <li key={tab.name} className="w-full flex">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 ${activeTab === index ? "bg-gradient-to-br from-red-600 to-red-500 text-white scale-105" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                  >
                    <MaterialIcon className="text-2xl">
                      {tab.icon}
                    </MaterialIcon>
                    <span className="text-base font-semibold text-left">
                      {tab.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-md p-8">
            <img
              src={tabContent[activeTab].image}
              alt={tabContent[activeTab].title}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center lg:w-1/3 bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-base md:text-lg font-light text-gray-600 leading-relaxed">
                {tabContent[activeTab].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInsightsSection;
