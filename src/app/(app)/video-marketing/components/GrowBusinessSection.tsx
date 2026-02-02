import React from "react";

const GrowBusinessSection = () => (
  <section className="py-20 bg-white">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Grow your business with video ads
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Present your brand and speak to viewers at the moment they&apos;re ready
          and willing to pay attention, across every stage of their consumer journey.
        </p>
      </div>
    </div>
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-600/20 flex flex-col gap-6 items-center">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Reach your customers and find new ones
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/youtube/card-1-4e75e22075.webp"
            alt="Reach Customers"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-600/20 flex flex-col gap-6 items-center">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Promote your content in places of discovery
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/youtube/card-2-897d665512.webp"
            alt="Promote Content"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-600/20 flex flex-col gap-6 items-center md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Strategically turn viewers into customers
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/youtube/card-3-db90eef83b.webp"
            alt="Turn Viewers into Customers"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default GrowBusinessSection;
