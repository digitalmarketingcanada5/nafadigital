import React from 'react';

const CompanySection = () => {
  return (
    <section className="default-spacing">
      <div className="container px-12 2xl:px-0 flex flex-col lg:items-center">
        <div className="mb-6 lg:mb-12">
          <h2 className="lg:text-center text-left">Great company, even greater people</h2>
          <p className="lg:text-center text-left lg:w-[85%] mx-auto">With the help from a talented and diverse group of individuals, NafaDigital builds profitable and measurable digital advertising campaigns for companies across North America and worldwide.</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img 
            src="https://cdn.searchkings.ca/img/about/sk-team-9fab1f4f79.webp" 
            className="object-cover w-full h-full lg:rounded-3xl rounded-xl" 
            alt="Great company, even greater people Image" 
            width="1380" 
            height="544" 
          />
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
