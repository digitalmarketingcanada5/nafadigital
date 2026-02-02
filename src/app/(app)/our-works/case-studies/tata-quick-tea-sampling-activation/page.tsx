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
export default function TATACaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            TATA'S QUICK TEA AND READY-TO-EAT CURRIES: SAMPLING ACTIVATION
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/rh0uDuJxbao?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rh0uDuJxbao&start=20&end=85"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="TATA Tea & Ready-To-Eat meals - Product Sampling"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                TATA, renowned for its culinary and beverage offerings, embarked on an ambitious sampling and activation campaign. The primary goal was to engage customers and gain valuable insights into their preferences while introducing them to TATA's quick-tea & selection of twelve (12) ready-to-eat curries concept.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: TATA Quick Tea & Ready-to-Eat Curries</h2>
              <div className="flex gap-4 items-center">
                <img src="https://brandguruz.ca/wp-content/uploads/2023/10/15-e1696267547240.jpg" alt="TATA Quick Tea" className="rounded-lg w-20 h-auto" />
                <img src="https://brandguruz.ca/wp-content/uploads/2023/09/Client-Logos-For-website-150x150.jpg" alt="TATA Logo" className="rounded-lg w-16 h-16" />
              </div>
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
                <li>
                  <b>Brand Ambassadors:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Actively engaging with participants and explaining the offerings, including the tea flavors and curries</li>
                    <li>Encouraging customers to sample and provide feedback</li>
                    <li>Capturing customer preferences and feedback data for analysis</li>
                  </ul>
                </li>
                <li>
                  <b>Activation Manager:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Overseeing the logistical planning and execution of the activation at the event and grocery stores</li>
                    <li>Coordinating with the Brand Ambassadors and store personnel to ensure a seamless experience</li>
                    <li>Monitoring participant engagement and overall campaign success</li>
                  </ul>
                </li>
                <li>
                  <b>Customer Feedback Team:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Gathering valuable feedback from participants regarding their tea and curry sampling experience</li>
                    <li>Documenting customer preferences and any constructive input</li>
                    <li>Compiling feedback data for post-campaign analysis and product enhancement</li>
                  </ul>
                </li>
                <li>
                  <b>Product Placement Team:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Ensuring attractive and prominent display of TATA's tea and ready-to-eat curries within the grocery stores</li>
                    <li>Managing product placement and labeling to make the offerings easily accessible to customers</li>
                    <li>Maintaining an organized and appealing sampling area</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400 mb-4">
                TATA's Tea and Ready-to-Eat Curries Sampling and Activation achieved its primary objective of engaging over 6,000+ participants and gaining valuable insights into consumer preferences. The campaign successfully introduced three distinct tea flavors and a wide range of ready-to-eat curries to the participants. The feedback collected, both positive and constructive, will serve as a valuable resource for product enhancement and future promotions.
              </p>
              <p className="text-gray-400">
                This comprehensive analysis of customer preferences and feedback will guide TATA in refining its offerings and marketing strategies, ensuring the continued success of its quick tea concept in the market.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={1} title="MONTH EVENT" />
              <Counter number="27,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={12} title="STAFF PER DAY" />
              <Counter number={1} title="MARKETS: MICHIGAN, USA" />
              <Counter number={8} title="BRAND AMBASSADORS" />
              <Counter number={4} title="LEAD BRAND AMBASSADORS" />
              <Counter number={2} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Request a Consultation | RFP | RFQ</h2>
              <p className="text-xl mb-8 opacity-90">Let's discuss how we can help bring your vision to life.</p>
              <a
                href="/contact-us"
                className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0921-1536x1152.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0955-1536x1152.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0956-1152x1536.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0877-1536x1152.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/DPHQ5928-1536x1152.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_1032-1536x1152.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0919-1-1536x1152.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0960-1536x1152.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0928-1536x1152.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/PXOC3920-1536x1152.jpg" alt="Highlight 10" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
             <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
                <p className="text-2xl italic text-gray-300">"Brand Guruz elevated TATA's tea and ready-to-eat curries activations to a new level. Their engaging campaign at events and grocery stores generated over 6,000 participants, and the results exceeded our expectations. We appreciate their expertise and look forward to future collaborations."</p>
                <p className="mt-6 font-bold">– TATA Foods</p>
             </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Grow Together – Contact Us Now!</h2>
            <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  Get in Touch
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
