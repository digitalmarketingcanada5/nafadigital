import React from 'react';

const HelpingPartnersSection: React.FC = () => (
  <section className="py-16">
    <div className="container px-12 mx-auto lg:text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300">Helping our partners</h2>
      <p className="mb-8 lg:w-[85%] mx-auto text-gray-200 mt-4">Our goal is to help you grow. We have helped companies of all types and sizes sustainably scale their business by understanding their needs and building strategic digital advertising solutions.</p>
      <div className="flex md:flex-row flex-col items-stretch gap-8 lg:gap-16">
        <div className="md:w-2/3 w-full">
          <img src="https://cdn.searchkings.ca/img/about/sk-conference-d218c5d1fd.webp" className="object-cover w-full h-full lg:rounded-3xl rounded-xl" alt="Conference" />
        </div>
        <div className="md:w-1/3 w-full">
          <img src="https://cdn.searchkings.ca/img/about/sk-conference-2-7287fe0b4f.webp" className="object-cover w-full h-full lg:rounded-3xl rounded-xl" alt="Conference" />
        </div>
      </div>
    </div>
  </section>
);

export default HelpingPartnersSection;
