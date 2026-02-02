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

const EcommerceHero = () => (
  <section className="relative w-full pt-[76px] bg-[#01594d] text-white overflow-hidden">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left gap-4 xl:pl-24">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-3xl">
          eCommerce Ads
        </h1>
        <p className="w-full md:w-[80%] xl:w-full font-light xl:my-6">
          Let NafaDigital help your retail business set-up and manage Google &
          Microsoft Shopping campaigns. We can promote your online products or
          local inventory, boost traffic to your website or store, and generate
          more online sales.
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
          <div className="rounded-full w-full bg-[#01594d] flex items-stretch shadow-lg justify-between xl:h-[55px] overflow-hidden z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center py-1 sm:py-2 xl:py-0 px-2 xl:px-3 h-full">
                <span className="material-symbols-outlined text-md xl:text-4xl text-white">
                  search
                </span>
              </div>
            </div>
            <span className="flex items-center text-white text-sm sm:text-base xl:text-xl px-3 sm:pr-5 sm:pl-0">
              new shoes
            </span>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border lg:shadow-none p-2 flex justify-around gap-[8px] items-end z-10 w-[150%] !shadow-lg">
            <div className="bg-gray-100 p-5 rounded-2xl text-left">
              <img
                src="https://cdn.searchkings.ca/img/ecommerce/shoe-213d417211.webp"
                width="134"
                height="88"
                alt="Low top shoe"
              />
              <div className="text-sm sm:text-lg xl:text-xl text-black mt-2">
                {" "}
                Low Top Shoe{" "}
              </div>
              <small className="block text-[11px] leading-tight text-gray-500">
                example-business.com
              </small>
              <hr className="my-2" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-black">$180.00</span>
                <div className="text-xs flex items-center gap-1 text-gray-600">
                  <span className="text-[#e37325] flex">
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                  </span>
                  <span>(72)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-5 rounded-2xl text-left">
              <img
                src="https://cdn.searchkings.ca/img/ecommerce/shoe2-a75a44e38d.webp"
                width="134"
                height="88"
                alt="High top shoe"
              />
              <div className="text-sm sm:text-lg xl:text-xl text-black mt-2">
                {" "}
                High Top Shoe{" "}
              </div>
              <small className="block text-[11px] leading-tight text-gray-500">
                example-business.com
              </small>
              <hr className="my-2" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-black">$180.00</span>
                <div className="text-xs flex items-center gap-1 text-gray-600">
                  <span className="text-[#e37325] flex">
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                    <img
                      src="/images/star.png"
                      alt="star"
                      width="12"
                      height="12"
                    />
                  </span>
                  <span>(41)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EcommerceHero;
