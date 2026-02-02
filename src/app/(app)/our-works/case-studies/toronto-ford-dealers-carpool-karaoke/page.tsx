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
export default function TorontoFordDealersCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            TORONTO AREA FORD DEALERS: INTERACTIVE CARPOOL KARAOKE
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/rJSKISTc0MQ?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=rJSKISTc0MQ&start=12&end=50"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Ford Motors - Events (1.1M + Visitors)"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                Toronto Area Ford Dealers had a unique requirement – they wanted an interactive campaign that would provide their customers with a never-before-done experience. Their goal was to put customers in the driver's seat, delivering a fun, entertaining, and memorable experience that would create a lasting impression.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: Toronto Area Ford Dealers</h2>
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/9-e1696222890650.jpg" alt="Toronto Area Ford Dealers" className="rounded-lg w-32 h-24 object-contain" />
            </div>
          </section>

          {/* Staffing & Results Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staffing Overview</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-4">
                <li>
                  <b>Design Team:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Conceptualizing and creating the Carpool Karaoke system</li>
                    <li>Designing and setting up the interactive experience</li>
                    <li>Managing the technical aspects of the campaign</li>
                  </ul>
                </li>
                <li>
                  <b>Activation Manager:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Overseeing the overall campaign planning and execution</li>
                    <li>Coordinating with the internal & external teams</li>
                    <li>Ensuring a seamless and engaging experience for customers</li>
                  </ul>
                </li>
                <li>
                  <b>Brand Ambassadors:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Welcoming and engaging customers</li>
                    <li>Booking test drive appointments. Converting visitors to potential customers.</li>
                    <li>Guiding customers through the Carpool Karaoke experience</li>
                    <li>Capturing video footage of customers' live karaoke performances in the latest Ford Edge model</li>
                  </ul>
                </li>
                <li>
                  <b>Technical Team:</b>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Setting up and maintaining the Carpool Karaoke system</li>
                    <li>Ensuring the smooth functioning of audio and video equipment</li>
                    <li>Providing technical support throughout the campaign</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400">
                The interactive Carpool Karaoke campaign achieved the client's objective of providing customers with a one-of-a-kind and entertaining experience. Our team successfully put together a memorable and fun-filled experience where customers had the opportunity to sing karaoke live in the latest Ford Edge model. This innovative campaign not only delighted customers so they booked test drives at their local Ford dealership through our BAs but also left a lasting impression, creating positive associations with the Ford brand and generating excitement around their vehicles. The interactive nature of the campaign allowed customers to truly feel what it's like to be in the driver's seat of a Ford vehicle, resulting in increased brand engagement and customer satisfaction.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={3} title="MONTH(S) EVENT" />
              <Counter number="460,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={16} title="STAFF PER DAY" />
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
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6171-1536x1024.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/FORD-BMM-1-2019-1536x1207.jpg" alt="Ford BMM 1 - 2019" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_5337-2-1536x1152.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/FORD-BMM-2-2019-1536x1207.jpg" alt="Ford BMM 2 - 2019" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6108-1536x1152.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/FORD-TOD-2019-1536x1207.jpg" alt="Ford TOD - 2019" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/FORD-TUF-2019-1536x1207.jpg" alt="Ford TUF - 2019" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6135-1536x1152.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_6601-1536x1152.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/FORD-NIU-2019-1536x1207.jpg" alt="Ford NIU - 2019" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
            <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
              <p className="text-2xl italic text-gray-300">
                "The team transformed our campaign into a memorable experience. Their creativity and dedication delivered outstanding results. We're thrilled with the partnership and look forward to more success together."
              </p>
              <p className="mt-6 font-bold">– TAFD</p>
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
