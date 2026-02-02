"use client";

import React from 'react';

const JoinForm = () => {
  return (
    <aside className="sticky self-start w-full lg:w-1/3 top-32">
      <div className="card relative rounded-3xl p-8 md:p-8 shadow-lg overflow-hidden bg-bgGray w-full shadow-none lg:rounded-3xl rounded-xl mb-8">
        <div className="w-full h-full flex justify-center items-center mx-auto !max-w-none gap-2 flex-col">
          <div className="w-full">
            <p className="text-3xl font-bold md:mb-8">Join Our Team</p>
            <p className="text-sm lg:-mt-8 mb-8 leading-loose">We need the help of talented people</p>
            
            <form action="https://galaxy.searchkings.ca/c224c2d5-8804-4b6c-a4bf-264fd732460c" method="post" encType="multipart/form-data" noValidate>
              <div className="contact">
                <div className="form-group" style={{gridArea: 'name'}}>
                  <label htmlFor="name">First & Last Name <span className="text-primary">*</span></label>
                  <input 
                    id="name" 
                    name="name" 
                    data-pristine-required="" 
                    placeholder="Name" 
                    autoComplete="name" 
                  />
                </div>
                
                <div className="form-group" style={{gridArea: 'phone'}}>
                  <label htmlFor="phone">Phone <span className="text-primary">*</span></label>
                  <input 
                    id="phone" 
                    type="tel" 
                    data-pristine-required="" 
                    autoComplete="tel" 
                    placeholder="081234 56789"
                  />
                </div>
                
                <div className="form-group" style={{gridArea: 'email'}}>
                  <label htmlFor="email">Email <span className="text-primary">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    data-pristine-required="" 
                    placeholder="najdigital1@gmail.com" 
                    autoComplete="email" 
                  />
                </div>
                
                <div className="form-group rounded-[0.25rem]">
                  <label className="position-applying-for" htmlFor="position-applying-for">Available Positions <span className="text-primary">*</span></label>
                  <select 
                    name="Position Applying For" 
                    className="form-control w-full p-2 rounded-[0.25rem]" 
                    data-pristine-required="" 
                    aria-label="Please input a position." 
                    id="position-applying-for"
                    defaultValue=""
                  >
                    <option value="" disabled>-- Select a Position--</option>
                    <option value="Senior Google Advertising Account Manager">Toronto - Senior Google Advertising Account Manager</option>
                    <option value="Account Executive - Sales">Toronto - Account Executive - Sales</option>
                    <option value="Google Advertising Account Manager - eCommerce">Toronto - Google Advertising Account Manager - eCommerce</option>
                    <option value="Billing Specialist">Toronto - Billing Specialist</option>
                    <option value="Digital Operations Associate">Toronto - Digital Operations Associate</option>
                    <option value="Senior Google Advertising Account Manager">Vancouver - Senior Google Advertising Account Manager</option>
                    <option value="Account Executive - Sales">Vancouver - Account Executive - Sales</option>
                    <option value="Google Advertising Account Manager - eCommerce">Vancouver - Google Advertising Account Manager - eCommerce</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="resume" className="z-10 resume">Resume & CV</label>
                  <input 
                    type="file" 
                    id="resume" 
                    name="Resume" 
                    multiple 
                    maxLength={2000000} 
                    className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg" 
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                  />
                </div>
              </div>
              
              <input type="hidden" name="galaxy_redirect" value="/join-our-team-submitted/" />
              
              <button type="submit" className="w-max block no-underline rounded-[2rem] bg-gradient-to-t from-gradientPrimaryLeft to-gradientPrimaryRight">
                <div className="group transition-all text-lg text-white font-bold px-7 py-3 flex items-end gap-2 rounded-[2rem] ease-in-out duration-300 shadow-xl hover:bg-black hover:text-white">
                  Submit 
                  <span className="material-symbols-outlined relative -top-[2px]">arrow_outward</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default JoinForm;
