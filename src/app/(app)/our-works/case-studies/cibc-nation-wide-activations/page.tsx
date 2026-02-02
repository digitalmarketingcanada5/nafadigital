'use client';

import React, { useState, useEffect, useRef } from 'react';

// Animated Counter component for the parameters section
const Counter = ({ number, title, delimiter }: { number: string | number, title: string, delimiter?: string }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const targetNumber = typeof number === 'string' ? parseInt(number.replace(/,/g, '')) : number;

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
        current = Math.min(targetNumber, Math.floor(increment * step));
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
export default function CIBCCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            CIBC: NATION-WIDE ACTIVATIONS AT EVENTS, RETAIL STORES, BANK BRANCHES, FARMS
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/V91o8RefFGE?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=V91o8RefFGE"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="CIBC Activation"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                CIBC Bank in the Canadian ethnic market, sought to establish a strong brand presence from the ground up. Their primary challenge was breaking into a market where customer loyalty to established competitors was high. The goal was to create a new brand identity and spread awareness across diverse regions in Canada.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: CIBC Bank</h2>
              <img src="https://brandguruz.ca/wp-content/uploads/elementor/thumbs/1-1-e1696270708296-qda55cp2kregr9y8msguf84tggs1k5gekrv12z2d3k.jpg" alt="CIBC Bank" className="rounded-lg w-20 h-20" />
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
                <li>
                  <b>Brand Ambassadors:</b> Engaging with potential customers at various activation points.
                </li>
                <li>
                  <b>Activation Managers:</b> Overseeing the planning and execution of activations.
                </li>
                <li>
                  <b>Ethnic Event Teams:</b> Attending ethnic events to represent CIBC Bank.
                </li>
                <li>
                  <b>Pitch Development Team:</b> Designing irresistible offers tailored to the target market.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400 mb-4">
                The CIBC Bank Brand Building Campaign achieved significant milestones:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><b>Increased Brand Awareness:</b> Brand awareness increased by an impressive 50%.</li>
                <li><b>New Customer Acquisition:</b> The campaign successfully added 20% new customers.</li>
                <li><b>Effective Promotion:</b> 60% of new customers utilized the grassroots promo code.</li>
              </ul>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={96} title="MONTH(S) EVENT" />
              <Counter number="5,200,000" title="FOOT TRAFFIC" />
              <Counter number={22} title="STAFF PER DAY" />
              <Counter number={4} title="MARKETS: ON, BC, QC, AB, CANADA" />
              <Counter number={400} title="BRAND AMBASSADORS" />
              <Counter number={78} title="LEAD BRAND AMBASSADORS" />
              <Counter number={15} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_3960-1536x1152.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/DSC02724-1-1536x1024.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_3814-1536x1152.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_4669-1152x1536.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_4109-1536x1152.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
             <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
                <p className="text-2xl italic text-gray-300">"The team has been instrumental in our journey to establish CIBC's brand presence in Canada. Their strategic approach and tireless efforts have yielded impressive results. We greatly value our partnership and anticipate continued success."</p>
                <p className="mt-6 font-bold">- Henry C., CIBC Global Money Transfer</p>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}
