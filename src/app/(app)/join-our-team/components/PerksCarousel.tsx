"use client";

import React from 'react';

const PerksCarousel = () => {
  const perks = [
    {
      icon: "public",
      title: "Employees from 23 nations, 24 languages & 4 continents",
      iconClass: "-ml-4"
    },
    {
      icon: "airplane_ticket",
      title: "3 weeks vacation for all employees",
      iconClass: ""
    },
    {
      icon: "ecg_heart",
      title: "Comprehensive medical, vision, and dental benefits plan",
      iconClass: ""
    },
    {
      icon: "moving_ministry",
      title: "Flexible home/office environment and on-site gym",
      iconClass: ""
    }
  ];

  return (
    <section className="default-spacing">
      <div className="container px-12 2xl:px-0">
        <h2 className="md:text-center">What makes us unique?</h2>
        <p className="text-black mx-auto mb-6 lg:mb-8 font-light md:text-center text-left">We offer competitive benefits and perks that keep our team of diverse individuals happy, healthy, and ready to do great work.</p>
      </div>
      
      <div className="relative container">
        <div className="px-12 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 mb-12">
            {perks.map((perk, index) => (
              <div key={index} className="card relative rounded-3xl p-8 md:p-8 shadow-lg overflow-hidden bg-gradient-to-b from-gradientPrimaryLeft to-gradientPrimaryRight !px-8 !py-10 h-full">
                <div className="w-full h-full flex justify-start content-flex-start mx-auto md:container gap-2 flex-col">
                  <span className={`material-symbols-outlined line mb-8 !text-[100px] text-white ${perk.iconClass}`}>
                    {perk.icon}
                  </span>
                  <p className="title !leading-tight text-white lg:text-2xl text-xl font-bold" dangerouslySetInnerHTML={{__html: perk.title.replace(/\n/g, '<br>')}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerksCarousel;
