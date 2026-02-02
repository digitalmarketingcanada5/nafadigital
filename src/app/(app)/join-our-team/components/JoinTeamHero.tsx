"use client";

import React from 'react';

const JoinTeamHero = () => {
  return (
    <div className="post-masthead relative w-full pt-[76px] bg-gradient-to-b from-gradientPrimaryLeft to-gradientPrimaryRight md:text-left text-center bg-contain xl:bg-cover overflow-hidden">
      <div className="!absolute w-full h-full bg-no-repeat bg-cover bottom-0 mix-blend-multiply bg-center opacity-30 !bg-auto scale-[2] bg-post-circle"></div>
      <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center !items-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8">
        <div className="w-full xl:w-1/2 flex flex-col xl:justify-start justify-center md:items-center text-left md:text-center text-white gap-4 relative">
          <h1 className="xl:max-w-3xl text-white">Join Our Team</h1>
          <p className="font-light">If you thrive in a spirited team environment, and you love helping businesses grow, this might be the place for you.</p>
          <div className="flex gap-x-4 flex-col sm:flex-row">
            <a href="#job-posting" className="shrink-0 w-max block mt-4 no-underline shadow-xl rounded-full overflow-hidden">
              <div className="group md:text-lg text-base text-black font-bold bg-white h-full hover:text-white hover:from-black hover:to-black hover:bg-black/90 hover:!border-transparent px-7 py-3 flex items-center gap-2">
                <span className="tracking-tight">Current Opportunities<span className="sr-only">Current Opportunities</span></span>
                <img src="https://cdn.searchkings.ca/img/icons/arrow_outward-87ed9f5456.svg" width="24" height="24" alt="arrow_outward Icon" className="group-hover:invert relative" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamHero;
