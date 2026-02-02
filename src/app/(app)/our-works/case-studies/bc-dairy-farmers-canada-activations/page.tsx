'use client';

import React, { useState, useEffect, useRef } from 'react';

// Animated Counter component for the parameters section
const Counter = ({ number, title, delimiter }: { number: string | number, title: string, delimiter?: string }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const targetNumber = typeof number === 'string' ? 
    parseInt(number.replace(/,/g, '')) : number;

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
export default function BCDairyCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            BC DAIRY & THE DAIRY FARMERS OF CANADA ACTIVATIONS
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/8ojlGXOt2bI?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=8ojlGXOt2bI&start=80&end=130"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="BC Dairy - Brand Guruz (100,000+ Visitors)"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                The BC Dairy Association faced a significant challenge as they not only needed to reverse the declining trend in dairy milk consumption but also lacked a direct relationship with retailers. Furthermore, they had limitations when it came to partnering with existing distribution processes. They required a creative and strategic campaign from Brand Guruz to breathe new life into their milk products while navigating these constraints.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: The BC Dairy Association</h2>
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/BCDA-e1696138809418.jpg" alt="The BC Dairy Association" className="rounded-lg w-40 h-24 object-contain" />
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
                <li>
                  <b>Brand Ambassadors:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Attendee engagement</li>
                    <li>Milk and tea product sampling</li>
                    <li>Promotional giveaways and coupons distribution</li>
                  </ul>
                </li>
                <li>
                  <b>Activation Manager:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Overall coordination and supervision of the activation</li>
                    <li>Monitoring event progress and performance</li>
                    <li>Troubleshooting any issues during the activation</li>
                  </ul>
                </li>
                <li>
                  <b>Coordination Manager:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Set-up and arrangement of the activation area</li>
                    <li>Managing gift bag assembly and distribution</li>
                    <li>Assisting with attendee registration</li>
                  </ul>
                </li>
                <li>
                  <b>Set Designer:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Creative design and layout of the activation area</li>
                    <li>Ensuring an appealing and immersive environment that aligns with the dairy theme</li>
                  </ul>
                </li>
                <li>
                  <b>Food Handlers:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Safely handling and serving dairy milk products and tea samples</li>
                    <li>Ensuring food safety and product quality</li>
                  </ul>
                </li>
                <li>
                  <b>Merchandise Manager:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Managing dairy-related merchandise and branded giveaways</li>
                    <li>Distribution of promotional items and coupons to participants</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400">
                The campaign, executed by Brand Guruz, delivered exceptional results, not only revitalizing BC Dairy Association's milk offerings but also establishing new connections with retailers despite the initial limitations. Shelf stocks decreased as consumers enthusiastically embraced our milk products, and sales figures experienced a substantial upswing, demonstrating the success of Brand Guruz's innovative approach in overcoming distribution challenges. This initiative breathed new life into the BC Dairy Association's brand, and it gained valuable insights into consumer preferences and feedback, positioning them for future growth and success.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={2} title="MONTH(S) EVENT" />
              <Counter number="15,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={22} title="STAFF PER DAY" />
              <Counter number={2} title="MARKETS: ONTARIO & BC, CA" />
              <Counter number={16} title="BRAND AMBASSADORS" />
              <Counter number={8} title="LEAD BRAND AMBASSADORS" />
              <Counter number={4} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/18fe5b46-5191-4157-ab61-20fd2cb63ddf-1536x1152.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6079-2-copy-1536x710.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/92061d24-49c5-4d20-9257-7312719062a9-1-1152x1536.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6032-1536x1152.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6048-1536x1152.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6062-1152x1536.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6043-1536x1152.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/92061d24-49c5-4d20-9257-7312719062a9-1152x1536.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6036-1536x1152.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_7765-1152x1536.jpg" alt="Highlight 10" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
            <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
              <p className="text-2xl italic text-gray-300">
                "Brand Guruz's innovative campaign for BC Dairy led to increased sales and a buzz in supermarkets. We appreciate their creative approach and look forward to future collaborations."
              </p>
              <p className="mt-6 font-bold">– BC Dairy Association</p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-black mb-4">Let's Grow Together – Contact Us Now!</h2>
              <a 
                href="/contact-us" 
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Request a Consultation | RFP | RFQ
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
