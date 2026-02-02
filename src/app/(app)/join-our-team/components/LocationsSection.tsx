import React from 'react';

const LocationsSection = () => {
  return (
    <section className="container default-spacing scroll-m-12">
      <div className="container px-12 xl:px-0">
        <div className="lg:text-center mb-6 lg:mb-12">
          <h2>Based in Toronto & Vancouver</h2>
          <p className="lg:w-[75%] mx-auto">We have had tremendous success in helping clients plan, build, and execute their digital advertising campaigns. We are a growing company looking for the next member to add to our team of motivated individuals.</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-8">
          <div 
            className="lg:w-1/3 w-full rounded-3xl bg-no-repeat bg-cover bg-right min-h-[180px] md:h-[240px] lg:h-[380px]" 
            style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/about/vancouver-2037f76042.webp)'}}
          >
          </div>
          <div 
            className="lg:w-2/3 w-full rounded-3xl bg-no-repeat bg-cover bg-right min-h-[180px] md:h-[240px] lg:h-[380px]" 
            style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/about/toronto-fc51c5a5d0.webp)'}}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
