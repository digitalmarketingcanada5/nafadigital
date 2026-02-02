import React from "react";

const ConversionRatesSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Measure & improve conversion rates
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Our sites focus on the core aspects of a businesses product or service
          offering. This allows us to focus the customer&apos;s attention on calling or filling out a form.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-full">
          <div className="relative rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-[#063649] to-[#042a38] h-full flex justify-center items-center p-8">
            <img
              src="https://cdn.searchkings.ca/img/web/web-conversion-browser-fe238188be.webp"
              alt="Website conversion"
              className="w-full max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex items-center h-full bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
          <ul className="w-full space-y-6">
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Site design and functionality built to drive conversion
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Clear and concise calls to action
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Mobile and desktop friendly
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Data-optimized designs
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Modern and lightweight frontend frameworks
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/web-checkmark-c8b089e161.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Built for speed and performance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ConversionRatesSection;
