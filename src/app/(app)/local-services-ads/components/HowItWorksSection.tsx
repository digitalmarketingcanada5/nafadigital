import React from "react";

const HowItWorksSection = () => (
  <section className="py-20 bg-white">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          How it works
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          When a customer books a Google-verified service provider, they know
          they&apos;re getting guaranteed services from a trustworthy and
          qualified business.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <div className="h-full bg-gradient-to-br from-[#32B355] to-[#28a048] flex justify-center items-end p-8">
          <img
            src="https://cdn.searchkings.ca/img/google-local-service/google-phone-f8600cd8db.webp"
            alt="Phone with Google Local Services"
            className="w-full max-w-[300px] h-auto"
          />
        </div>
        <div className="flex items-center h-full py-12 lg:p-16 bg-gradient-to-br from-gray-50 to-white">
          <ul className="w-full space-y-6">
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Pay for phone leads, not for clicks
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Be seen right at the top of Google
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Connect with potential customers when they need you
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Simple set up and communication through an easy-to-use app
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Build trust with the verified-by-Google badge
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/gls-checkmark-c7af207e16.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Only pay for leads related to your business and the services you offer
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
