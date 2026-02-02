import React from "react";

const RightShoppersSection = () => (
  <section className="py-20 bg-white">
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Reach the right shoppers with the right products
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
          Sell products to the shoppers who matter most–the ones looking for what
          you offer, whether they&apos;re at home, on the go, or in-store.
        </p>
      </div>
    </div>
    <div className="container px-6 md:px-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#01594d]/20 flex flex-col gap-6 items-center">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Show off your inventory with photos and more
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/ecommerce/inventory-b465bd3c4c.webp"
            alt="Inventory"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#01594d]/20 flex flex-col gap-6 items-center">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Sell products and services across digital platforms
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/ecommerce/product-e684529306.webp"
            alt="Product"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
        <div className="group relative rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#01594d]/20 flex flex-col gap-6 items-center md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl text-gray-900 font-bold text-center">
            Make your product info available to shoppers
          </h3>
          <img
            src="https://cdn.searchkings.ca/img/ecommerce/product-details-9d94200fc9.webp"
            alt="Product Details"
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default RightShoppersSection;
