"use client";

const AdsMgmtHero = () => (
  <section className="relative w-full pt-[76px] bg-[#0075E3] text-white overflow-hidden">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left gap-4 xl:pl-24">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-3xl">
          Ads Management
        </h1>
        <p className="w-full md:w-[80%] xl:w-full font-light xl:my-6">
          Show up at the right time and place on Google and Microsoft search
          engine results pages. Help potential customers notice your brand,
          consider your offering, and take action.
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
          <div className="rounded-full w-full bg-[#0075E3] flex items-stretch shadow-lg justify-between xl:h-[55px] overflow-hidden z-10">
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
              <span className="text-xs text-gray-700">
                Ad · www.yourbusiness.com/
              </span>
              <div className="text-blue-700 text-sm sm:text-lg xl:text-xl">
                {" "}
                Mr. Rooter Same Day Plumbing - Same Day, Fast Service{" "}
              </div>
              <div className="text-xs text-gray-500 my-2 xl:text-base">
                24/7 Same Day Plumbing Service. Talk Directly to a Plumbing &
                Drain Specialist. Customer Service is Our #1 Priority and is
                Unmatched in the Plumbing Industry.
              </div>
              <div className="wrapper flex gap-2 mt-1">
                <div className="text-xs border-[0.5px] border-gray-100 rounded-md p-1 text-blue-700">
                  Plumbing
                </div>
                <div className="text-xs border-[0.5px] border-gray-100 rounded-md p-1 text-blue-700">
                  5 Star Rating
                </div>
              </div>
            </div>
          </div>
          <div className="grid text-gray-400 px-4 text-center">
            <p className="mb-2 text-gray-600 font-semibold">ABC Plumbing</p>
            <p className="text-xs">
              24 HR Emergency Plumbing Service. Drain Sewer Cleaning. Best
              Service Guaranteed. Since 1997. Licensed Plumbers.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Plumbing | 5 Star Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AdsMgmtHero;
