import React from "react";

const WebHostingHero: React.FC = () => (
  <section className="relative w-full pt-[76px] bg-gradient-to-b from-red-600 to-red-500 text-white overflow-hidden">
    <div className="absolute w-full h-full bg-no-repeat bg-cover bottom-0 mix-blend-multiply bg-center opacity-30 bg-[url('https://cdn.searchkings.ca/img/post-circle-bg-2a5c5b8e72.svg')] scale-[2]"></div>
    <div className="container px-12 xl:pb-0 pb-12 flex items-center justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-center text-center gap-4 relative">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
          Web Hosting &amp; <br /> Maintenance
        </h1>
        <p className="font-light">
          NafaDigital hosting and maintenance management comes with peace of mind.
          Know that we are handling both your website and marketing needs so you
          can focus on building your business.
        </p>
        <div className="flex gap-x-4 flex-col sm:flex-row">
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
    </div>
  </section>
);

export default WebHostingHero;
