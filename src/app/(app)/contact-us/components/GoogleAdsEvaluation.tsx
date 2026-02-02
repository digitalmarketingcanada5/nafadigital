import React from "react";

const GoogleAdsEvaluation: React.FC = () => (
  <section className="py-16 bg-gray-800">
    <div className="container mx-auto px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[300px] md:h-[500px] w-full">
          <iframe
            className="absolute inset-0 w-full h-full rounded-3xl"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=2+County+Ct+Blvd+Unit+400,+Brampton,+ON+L6W+3W8,+Canada&ie=UTF8&t=&z=16&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="bg-[#0075E3] rounded-3xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a Google Ads account? <br />
            Get a free evaluation.
          </h2>
          <p className="my-4">
            As a courtesy, we&apos;re happy to offer free Google Ads account
            evaluations to those interested in improving their results.
          </p>
          <p>
            Our belief is that by demonstrating our expertise, you&apos;ll be
            more likely to choose NafaDigital as a partner when the time comes to
            grow your campaign.
          </p>
          <a
            href="/contact-us"
            className="shrink-0 w-max block mt-8 no-underline shadow-xl rounded-full overflow-hidden"
          >
            <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:bg-black px-7 py-3 flex items-center gap-2">
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
        </div>
      </div>
    </div>
  </section>
);

export default GoogleAdsEvaluation;
