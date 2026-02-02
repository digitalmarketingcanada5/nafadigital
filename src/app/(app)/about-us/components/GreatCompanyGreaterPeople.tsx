import React from 'react';

const GreatCompanyGreaterPeople: React.FC = () => (
  <section className="py-16">
    <div className="container px-12 mx-auto flex flex-col items-center">
      <div className="mb-6 lg:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300">Great company, even greater people</h2>
        <p className="lg:w-[85%] mx-auto text-gray-200 mt-4">With the help from a talented and diverse group of individuals, NafaDigital builds profitable and measurable digital advertising campaigns for companies across North America and worldwide.</p>
      </div>
      <div className="flex justify-center items-center w-full">
        <img src="https://cdn.searchkings.ca/img/about/sk-team-9fab1f4f79.webp" className="object-cover w-full h-full lg:rounded-3xl rounded-xl" alt="NafaDigital Team" />
      </div>
    </div>
  </section>
);

export default GreatCompanyGreaterPeople;
