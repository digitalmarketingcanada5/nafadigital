'use client';

import React, { useState, useEffect, useRef } from 'react';

// Animated Counter component for the parameters section
const Counter = ({ number, title, delimiter }: { number: string | number, title: string, delimiter?: string }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const targetNumber = typeof number === 'string' ? parseFloat(number.replace(/,/g, '')) : number;

  const formatNumber = (num: number) => {
    if (delimiter) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
    }
    return num.toString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 FPS
      const increment = targetNumber / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(targetNumber, Number((increment * step).toFixed(1)));
        setDisplayNumber(current);

        if (current >= targetNumber) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl font-bold text-yellow-400 transition-all duration-300">
        {formatNumber(displayNumber)}
      </div>
      <div className="text-sm uppercase text-gray-400 mt-2">{title}</div>
    </div>
  );
};

// Main App component
export default function PublicMobileCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Public Mobile (Telus): Ontario & BC Activations
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/PTIbWY-R_rM?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=PTIbWY-R_rM&start=27&end=93"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Public Mobile - Retail Activations"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                Public Mobile, a self-serve, prepaid, low-cost mobile brand under Telus, aimed to increase its recognition and visibility among the Ontario & BC communities. They sought to establish a stronger presence in the market by targeting both newcomers and locals. Public Mobile's goal was to engage in one-on-one interactions with customers, especially in diverse communities, to enhance brand recognition and achieve their sales targets.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: Public Mobile (Telus)</h2>
              <img 
                src="https://brandguruz.ca/wp-content/uploads/2023/10/4-1-e1696220461171.jpg" 
                alt="Public Mobile (Telus) Brand" 
                className="rounded-lg w-full h-auto max-w-xs" 
              />
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <div className="text-gray-400 space-y-4">
                <div>
                  <p className="font-bold text-white mb-2">Brand Ambassadors:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Engaging in one-on-one interactions with customers</li>
                    <li>Promoting Public Mobile's prepaid mobile services</li>
                    <li>Communicating in customers' preferred languages</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Activation Manager:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Planning and executing on-ground marketing campaigns</li>
                    <li>Selecting strategic locations, including colleges, supermarkets, flea markets, and public events</li>
                    <li>Overseeing the deployment of personnel</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Multilingual Personnel:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Effectively communicating with customers in their own languages</li>
                    <li>Providing information about Public Mobile's services and offers</li>
                    <li>Addressing customer inquiries and concerns</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Customer Service Agents:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Offering friendly and impeccable service</li>
                    <li>Assisting customers with product inquiries, sign-ups, and activations</li>
                    <li>Ensuring a positive and seamless customer experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400">
                Brand Guruz's on-ground sales & marketing execution was instrumental in elevating Public Mobile's brand recognition and achieving their sales targets. By targeting newcomers and locals through campaigns at colleges, supermarkets, flea markets, and large-scale community events, our team engaged with customers on a personal level. The multilingual approach and one-on-one interactions created a strong connection with customers, fostering brand loyalty and trust. As a result, Public Mobile not only met but exceeded its sales objectives, garnering brilliant results and solidifying its position as a leading prepaid mobile provider in the market.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={11} title="MONTH(S) EVENT" />
              <Counter number="1.1" title="MILLION FOOT TRAFFIC" delimiter="," />
              <Counter number={56} title="STAFF PER DAY" />
              <Counter number={2} title="MARKETS: ONTARIO & BC, CA" />
              <Counter number={32} title="BRAND AMBASSADORS" />
              <Counter number={16} title="LEAD BRAND AMBASSADORS" />
              <Counter number={8} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_2536-1536x763.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_4467-1536x1152.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_1953-1536x1152.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_3850-1536x1152.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_4121-1536x1152.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/PM-College-Lambton-1536x1207.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/PM-South-Asian-Store-1536x1207.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_2540-1536x1152.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_5206-1536x1152.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_4766-1536x1152.jpg" alt="Highlight 10" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
             <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
                <p className="text-2xl italic text-gray-300">
                  "Brand Guruz played a pivotal role in introducing Public Mobile to diverse communities in Canada. Their on-ground activation & sales execution was nothing short of exceptional. We saw tangible results and gained recognition among our target audience. We appreciate the partnership and anticipate further achievements."
                </p>
                <p className="mt-6 font-bold">- EM, Public Mobile (Telus)</p>
             </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to expand your market presence?</h2>
              <p className="text-xl mb-8 opacity-90">Let's discuss how we can help you reach diverse communities and achieve your sales targets.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Request a Consultation
                </a>
                <a
                  href="/our-works"
                  className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300"
                >
                  View More Work
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
