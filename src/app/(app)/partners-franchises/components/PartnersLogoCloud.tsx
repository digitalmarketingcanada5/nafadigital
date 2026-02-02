"use client";

import React from 'react';

const PartnersLogoCloud: React.FC = () => {
  const logos = [
    "/partners/1-2.jpg.jpeg",
    "/partners/3-2.jpg.jpeg", 
    "/partners/4-1.jpg.jpeg",
    "/partners/6-1.jpg.jpeg",
    "/partners/10.jpg.jpeg",
    "/partners/15.jpg.jpeg",
    "/partners/16.jpg.jpeg",
    "/partners/17.jpg.jpeg",
    "/partners/18.jpg.jpeg",
    "/partners/20.jpg.jpeg",
    "/partners/21.jpg.jpeg",
    "/partners/22.jpg.jpeg",
    "/partners/24.jpg.jpeg",
    "/partners/25.jpg.jpeg",
    "/partners/26.jpg.jpeg",
    "/partners/28.jpg.jpeg",
    "/partners/29.jpg.jpeg",
    "/partners/31.jpg.jpeg",
    "/partners/32.jpg.jpeg",
    "/partners/36.jpg.jpeg",
    "/partners/37.jpg.jpeg",
  ];

  // Split logos into two halves
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <>
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
      `}</style>
      
      <section className="py-16 bg-white overflow-hidden">
        <div className="container px-12 mx-auto mb-12">
          <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16">A few of our partners</h2>
          
          {/* First Row - Left to Right */}
          <div className="relative mb-16 overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* Duplicate the array for seamless loop */}
              {[...firstRow, ...firstRow, ...firstRow].map((logo, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 mx-6 flex items-center justify-center bg-white rounded-lg shadow-lg hover:shadow-xl p-8 min-w-[250px] h-32 transition-shadow duration-300"
                >
                  <img 
                    src={logo} 
                    alt={`Partner logo ${index + 1}`}
                    className="max-h-24 max-w-[220px] w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* Duplicate the array for seamless loop */}
              {[...secondRow, ...secondRow, ...secondRow].map((logo, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 mx-6 flex items-center justify-center bg-white rounded-lg shadow-lg hover:shadow-xl p-8 min-w-[250px] h-32 transition-shadow duration-300"
                >
                  <img 
                    src={logo} 
                    alt={`Partner logo ${index + 1}`}
                    className="max-h-24 max-w-[220px] w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersLogoCloud;
