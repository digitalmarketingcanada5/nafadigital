import React from 'react';

const MaximizeGrowthSection: React.FC = () => (
  <section className="py-16">
    <div className="container px-12 mx-auto">
      <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Maximize your businesses growth</h2>
      <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-700 dark:text-gray-300">Strategically drive growth through centralized and streamlined campaign management and presentation of your brand.</p>
    </div>
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-12 mx-auto">
      <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
        <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Streamline your digital advertising </p>
        <img src="https://cdn.searchkings.ca/img/partners-franchises/card-2-9c4deaafd7.webp" alt="Streamline Advertising" className="rounded-xl md:rounded-3xl shadow-lg" />
      </div>
      <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
        <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Simplify visibility into your performance </p>
        <img src="https://cdn.searchkings.ca/img/partners-franchises/card-3-67b9aec41b.webp" alt="Simplify Visibility" className="rounded-xl md:rounded-3xl shadow-lg" />
      </div>
      <div className="card relative rounded-3xl p-8 shadow-lg bg-gray-50 flex flex-col gap-4 items-center">
        <p className="text-xl text-black p-0 mb-4 w-full text-center font-bold"> Scalability at the core of every service </p>
        <img src="https://cdn.searchkings.ca/img/partners-franchises/card-1-abb9ec4bc5.webp" alt="Scalability" className="rounded-xl md:rounded-3xl shadow-lg" />
      </div>
    </div>
  </section>
);

export default MaximizeGrowthSection;
