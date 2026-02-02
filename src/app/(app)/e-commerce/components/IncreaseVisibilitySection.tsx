import React from "react";

const IncreaseVisibilitySection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Increase the visibility of your products and services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Give online shoppers a strong sense of what you&apos;re selling before
          they click your ad and connect.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-full">
          <div className="relative rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-[#01594d] to-[#014439] h-full flex justify-center items-end p-8">
            <img
              src="https://cdn.searchkings.ca/img/ecommerce/ecomm-phone-51a59d3e74.webp"
              alt="Phone"
              className="w-full max-w-[300px] h-auto"
            />
          </div>
        </div>
        <div className="flex items-center h-full bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
          <ul className="w-full space-y-6">
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Better qualified leads
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Boost traffic to your website
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Promote your products locally
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Increase conversion rates from returning visitors and abandoned carts
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/ecomm-checkmark-c212036def.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Generate more online sales
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default IncreaseVisibilitySection;
