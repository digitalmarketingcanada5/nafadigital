import React from "react";

const WhyVideoAdvertisingSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why use video advertising?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Capture your audience&apos;s attention effectively throughout their
          consumer journey by showcasing your brand in video advertisements,
          ensuring meaningful engagement during the decision-making process.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="h-full">
          <div className="relative rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-red-600 to-red-500 h-full flex justify-center items-end p-8">
            <img
              src="https://cdn.searchkings.ca/img/youtube/yt-phone-e8fc473328.webp"
              alt="Phone"
              className="w-full max-w-[344px] h-auto"
            />
          </div>
        </div>
        <div className="flex items-center h-full bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-100">
          <ul className="w-full space-y-6">
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Showcase your latest content and get more views
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Grow your brand awareness
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Boost consideration of your products or services
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Create social engagement
              </span>
            </li>
            <li className="flex items-start group">
              <img
                className="mr-4 mt-1 flex-shrink-0"
                src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg"
                width="24"
                height="24"
                alt="bullet"
              />
              <span className="text-base md:text-lg text-gray-700 leading-relaxed">
                Tell your story through sequential videos
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WhyVideoAdvertisingSection;
