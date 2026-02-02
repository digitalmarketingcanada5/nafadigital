"use client";

import React from "react";

const MaterialIcon = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
);

const LocalServicesHero = () => (
  <section className="relative w-full pt-[76px] bg-[#32B355] text-white overflow-hidden">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left gap-4 xl:pl-24">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-3xl">
          Local Services Ads
        </h1>
        <p className="w-full md:w-[80%] xl:w-full font-light xl:my-6">
          Local Services Ads make it easy for people in your area to confidently
          find and choose your services.
        </p>
        <div className="flex flex-col gap-x-4 sm:flex-row">
          <a
            href="/contact-us"
            className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden"
          >
            <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:from-black hover:to-black hover:bg-black/90 px-7 py-3 flex items-center gap-2">
              <span className="tracking-tight">Get Started</span>
              <img
                src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg"
                width="24"
                height="24"
                alt="arrow_outward Icon"
                className="group-hover:invert relative"
              />
            </div>
          </a>
          <a
            href="tel:+91-761-934-1271"
            className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden border-2 border-white"
          >
            <div className="group md:text-lg text-base text-white font-bold h-full hover:bg-white hover:text-black px-7 py-3 flex items-center gap-2">
              <img
                src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
                width="24"
                height="24"
                alt="call Icon"
                className="invert group-hover:invert-0 relative"
              />
              <span className="tracking-tight">Call Us</span>
            </div>
          </a>
        </div>
      </div>
      <div className="items-end justify-center hidden xl:flex xl:w-1/2">
        <div className="bg-white max-w-[333px] rounded-t-3xl flex flex-col items-center gap-10 py-12 px-4 border-b-[1px] border-slate-200 w-[150%] shadow-lg">
          <div className="rounded-full w-full bg-[#32B355] flex items-stretch shadow-lg justify-between xl:h-[55px] overflow-hidden z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center py-1 sm:py-2 xl:py-0 px-2 xl:px-3 h-full">
                <span className="material-symbols-outlined text-md xl:text-4xl text-white">
                  search
                </span>
              </div>
            </div>
            <span className="flex items-center text-white text-sm sm:text-base xl:text-xl px-3 sm:pr-5 sm:pl-0">
              plumber near me
            </span>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border lg:shadow-none py-3 px-4 xl:py-5 xl:px-7 flex justify-between items-center z-10 w-[150%] !shadow-lg">
            <div>
              <div className="text-blue-700 text-sm sm:text-lg xl:text-xl">
                {" "}
                Mr. Rooter Detroit{" "}
              </div>
              <div className="text-xs xl:text-xl flex items-center gap-1 lg:gap-2">
                <span>4.9</span>
                <span className="text-[#e37325] flex gap-[2px]">
                  <img
                    src="/star.png"
                    alt="star"
                    className="w-3 h-3 lg:w-4 lg:h-4"
                  />
                  <img
                    src="/star.png"
                    alt="star"
                    className="w-3 h-3 lg:w-4 lg:h-4"
                  />
                  <img
                    src="/star.png"
                    alt="star"
                    className="w-3 h-3 lg:w-4 lg:h-4"
                  />
                  <img
                    src="/star.png"
                    alt="star"
                    className="w-3 h-3 lg:w-4 lg:h-4"
                  />
                  <img
                    src="/star.png"
                    alt="star"
                    className="w-3 h-3 lg:w-4 lg:h-4"
                  />
                </span>
                <span>(721)</span>
              </div>
              <div className="flex items-center gap-1 text-2xs lg:gap-2 lg:text-base">
                <span className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]">
                  <img
                    src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                    alt="Google Guaranteed checkmark"
                  />
                </span>
                <strong>Google Guaranteed</strong>
              </div>
              <div className="text-xs text-gray-500 my-2 xl:text-lg">
                Michigan
                <br />
                Open 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocalServicesHero;
