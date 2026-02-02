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
export default function LactalisCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Lactalis Activation - Khaas Dahi at The Taste of India
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Z5vEkS6fjU0?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=Z5vEkS6fjU0&start=18&end=70"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="KHAAS Dahi (Yogurt) Activation"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                Khaas Dahi, a product of Lactalis, sought to make a significant impact at the Taste of India event with a foot traffic of 60,000+ attendees. Their objective was to create an unforgettable experience that would leave attendees yearning for more of their dairy products. They aimed to showcase their sweet and salty lassi creations and generously distribute their delicious yogurt while enhancing brand loyalty with exciting giveaways and discount coupons.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: Khaas Dahi (a product of Lactalis)</h2>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://brandguruz.ca/wp-content/uploads/2023/10/32-e1696294157302.jpg" 
                  alt="Lactalis Brand" 
                  className="rounded-lg w-full h-auto" 
                />
                <img 
                  src="https://brandguruz.ca/wp-content/uploads/2023/09/KHAAS_LOGO-1-300x130.jpg" 
                  alt="Khaas Dahi Logo" 
                  className="rounded-lg w-full h-auto" 
                />
              </div>
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
                    <li>Engaging attendees and promoting Khaas Dahi products</li>
                    <li>Explaining the sweet and salty lassi offerings</li>
                    <li>Distributing one-year supplies of yogurt to lucky winners</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Activation Manager:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Overseeing the coordination and execution of the activation</li>
                    <li>Ensuring smooth logistics and efficient distribution of products and prizes</li>
                    <li>Monitoring attendee engagement and satisfaction</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Culinary Team:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Crafting delicious sweet and salty lassi creations</li>
                    <li>Maintaining quality and taste consistency</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-white mb-2">Promotional Team:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Distributing discount coupons to event attendees</li>
                    <li>Explaining the benefits of Khaas Dahi products and encouraging future purchases</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400 mb-4">
                Khaas Dahi's participation at the Taste of India event was nothing short of sensational. With an impressive 6,000 lassi servings served, the brand succeeded in leaving attendees yearning for more. The meticulously crafted sweet and salty lassi created by the certified chef's brought in by Brand Guruz proved to be an absolute sensation, captivating the taste buds of all fortunate enough to partake at this 2-days event. Beyond the delectable lassi offerings, our brand ambassadors extended the joy by generously distributing one-year supplies of their delicious yogurt to lucky winners. Additionally, the distribution of discount coupons added an extra layer of sweetness to this unforgettable occasion, solidifying Khaas Dahi's status as a true standout at the Taste of India. This activation not only boosted brand visibility but also created a lasting impression and enhanced brand loyalty among event attendees.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={2} title="DAY EVENT" />
              <Counter number="60,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={17} title="STAFF PER DAY" />
              <Counter number={1} title="MARKET: ONTARIO, CA" />
              <Counter number={8} title="BRAND AMBASSADORS" />
              <Counter number={5} title="LEAD BRAND AMBASSADORS" />
              <Counter number={1} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/IMG_3957-2-300x225.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/IMG_3959-2-300x225.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/1-1-300x168.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/6-300x168.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/4-300x167.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/IMG_3998-300x225.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/5-300x168.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/2-1-300x166.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/8-300x168.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/09/3-1-300x168.jpg" alt="Highlight 10" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to create your next activation?</h2>
              <p className="text-xl mb-8 opacity-90">Let's discuss how we can help you engage your target audience.</p>
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
