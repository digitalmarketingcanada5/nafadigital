"use client";

import React from "react";
import MaterialIcon from "./MaterialIcon";

const AwardsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Side - Google Award */}
          <div className="lg:w-1/4 flex justify-center">
            <img
              src="https://cdn.searchkings.ca/img/home/google-awards-7ec79bc37f.webp"
              alt="Google Awards"
              className="w-[60px] lg:w-auto lg:max-w-[94px]"
              width="94"
              height="328"
            />
          </div>

          {/* Middle - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl md:text-[26px] lg:text-4xl mb-4 font-bold text-gray-800">
              2024 Google Ads <br className="xl:block" />
              Best Agency in Toronto
            </h2>
            <p className="leading-[1.6] sm:text-xl sm:leading-[1.3] xl:text-[28px] font-light text-gray-600 mb-4">
              NafaDigital wins the Google Ads Best Agency Award for delivering 
              exceptional results and outstanding client satisfaction in the Toronto market.
            </p>
            <p className="leading-[1.6] text-base sm:text-lg text-gray-600 mb-4">
              Recognized for our innovative approach to digital advertising, transparent 
              communication, and proven track record of helping businesses grow their 
              online presence and generate quality leads.
            </p>
            <p className="leading-[1.6] text-base sm:text-lg text-gray-600 mb-6">
              Our award-winning team combines strategic expertise with cutting-edge 
              technology to maximize your advertising ROI and drive sustainable growth.
            </p>
          </div>

          {/* Right Side - TechBeat Award */}
          <div className="lg:w-1/4 flex justify-center">
            <img
              src="/techbeat-logo-awards.png"
              alt="TechBeat Summit Awards Toronto"
              className="w-[120px] lg:w-auto lg:max-w-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
