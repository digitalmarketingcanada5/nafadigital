const CallIntelligenceHero = () => (
  <section className="relative w-full pt-[76px] bg-white text-black">
    <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
      <div className="w-full xl:w-1/2 flex flex-col justify-center items-start text-left gap-4 xl:pl-24">
        {/* <img src="https://cdn.searchkings.ca/img/call-intelligence/ci-logo-colored-e7c0999846.svg" className="max-h-[38px] md:max-h-[48px] lg:max-h-[60px]" alt="Call Intelligence Logo" /> */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold xl:max-w-3xl">
          Call Intelligence
        </h1>
        <p className="w-full md:w-[85%] xl:w-full font-light text-lg">
          Maximize your revenue, uncover business insights, and grow your
          competitive edge.
        </p>
        <div className="flex flex-col items-start justify-start gap-x-4 xs:flex-row">
          <a
            href="/contact-us"
            className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden"
          >
            <div className="group md:text-lg text-base text-white font-bold bg-gradient-to-t from-red-600 to-red-500 h-full hover:from-black hover:to-black px-7 py-3 flex items-center gap-2">
              <span className="tracking-tight">Get Started</span>
              <img
                src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg"
                width="24"
                height="24"
                alt="arrow_outward Icon"
                className="invert group-hover:invert relative"
              />
            </div>
          </a>
          <a
            href="tel:+91-761-934-1271"
            className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden border-2 border-black mb-4 sm:mb-0"
          >
            <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2">
              <img
                src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
                width="24"
                height="24"
                alt="call Icon"
                className="group-hover:invert relative"
              />
              <span className="tracking-tight">Call Us</span>
            </div>
          </a>
        </div>
      </div>
      <div className="hidden xl:flex xl:w-1/2 items-end justify-center overflow-hidden">
        <img
          src="https://cdn.searchkings.ca/img/call-intelligence/ci-hero-b3c50891e1.webp"
          alt="Call Intelligence Phone Image"
          className="max-w-[580px]"
        />
      </div>
    </div>
  </section>
);

export default CallIntelligenceHero;
