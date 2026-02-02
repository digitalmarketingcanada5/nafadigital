import React from 'react';

const GrowthSection = () => {
  return (
    <section className="container default-spacing scroll-m-12">
      <div className="container px-12 xl:px-0">
        <div className="lg:text-center mb-6 lg:mb-12">
          <h2>Growing with you</h2>
          <p>Move forward in your career with development opportunities in our friendly and vibrant workplace.</p>
        </div>
        <div className="flex sm:flex-row flex-col md:gap-16 gap-8">
          <div 
            className="sm:w-1/3 w-full rounded-3xl bg-no-repeat bg-cover bg-left-top min-h-[180px] md:h-[240px] lg:h-[380px]" 
            style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/about/team-1-3ffb665f3b.webp)'}}
          >
          </div>
          <div 
            className="sm:w-2/3 w-full rounded-3xl bg-no-repeat bg-cover bg-right min-h-[180px] md:h-[240px] lg:h-[380px]" 
            style={{backgroundImage: 'url(https://cdn.searchkings.ca/img/about/team-2-27fad0724c.webp)'}}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
