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
export default function RamaGamingHousePage() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            RAMA GAMING HOUSE: ON-GROUND ACTIVATIONS AT RETAIL OUTLETS, EVENTS & BRAND LOCATIONS
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/jJuvbDN9BxA?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=jJuvbDN9BxA&start=12&end=50"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Rama Gaming House - Event Activations"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                Rama Gaming House (RGH) aimed to increase the number of new player memberships from various ethnic communities. They sought to engage primarily with the Chinese and Filipino Asian populations and promote their gaming services. RGH was looking for a strategic approach to reach out to potential players and boost their membership numbers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: Rama Gaming House</h2>
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/37.jpg" alt="Rama Gaming House" className="rounded-lg w-20 h-20" />
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
                <li>
                  <b>Brand Ambassadors:</b> Engaging with community members and promoting RGH's gaming memberships.
                </li>
                <li>
                  <b>Activation Manager:</b> Offering expertise and strategic insights for targeting the Chinese and Filipino Asian populations.
                </li>
                <li>
                  <b>Community Engagement Team:</b> Participating in Canada's largest multicultural festivals and establishing a presence at RGH brand locations.
                </li>
                <li>
                  <b>Prize Wheel Activation:</b> Hosting activations where community members could win free play and free wings vouchers.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400 mb-4">
                Brand Guruz's strategic approach led to the successful engagement of the Chinese and Filipino Asian populations, resulting in an increase in new player memberships for Rama Gaming House (RGH).
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><b>Successful Community Engagement:</b> Reached target ethnic populations effectively.</li>
                <li><b>New Player Memberships:</b> Achieved significant increase in new player registrations.</li>
                <li><b>Enhanced Brand Presence:</b> Solidified RGH's presence within target communities.</li>
              </ul>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={25} title="MONTH(S) EVENT" />
              <Counter number="570,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={31} title="STAFF PER DAY" />
              <Counter number={1} title="MARKET: ONTARIO, CA" />
              <Counter number={21} title="BRAND AMBASSADORS" />
              <Counter number={12} title="LEAD BRAND AMBASSADORS" />
              <Counter number={5} title="ONSITE MANAGER" />
            </div>
          </section>

          {/* Photo Highlights Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">PHOTO HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_2046-1536x1152.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_0629-1536x1152.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_5936-1152x1536.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_1853-1536x1152.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_5938-1536x1106.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_8789-1536x1264.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_8553-1536x1152.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-11.30.48-AM-copy-1536x860.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-11.31.13-AM-copy-1536x858.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-11.32.03-AM-copy-1536x859.jpg" alt="Highlight 10" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
             <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
                <p className="text-2xl italic text-gray-300">"Brand Guruz made a significant impact on our brand at Rama Gaming House. Their multicultural events activations and engaging campaign were a hit. We welcomed new players and achieved our membership goals. We're delighted with the partnership and anticipate continued success."</p>
                <p className="mt-6 font-bold">- Rama Gaming House</p>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}
