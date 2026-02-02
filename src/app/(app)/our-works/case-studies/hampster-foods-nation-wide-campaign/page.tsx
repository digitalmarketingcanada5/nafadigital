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
export default function MampsterFoodsCaseStudy() {
  return (
    <div className="bg-black text-white font-sans">
      <main>
        {/* Title Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 pt-24 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            MAMPSTER FOODS: NATION WIDE ACTIVATION CAMPAIGN
          </h1>
        </section>

        {/* Video Section */}
        <section className="relative h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/S0xa09GbF-4?controls=0&rel=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=S0xa09GbF-4&start=75&end=102"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Mampster Foods North-America (60,000+ Visitors)"
          ></iframe>
        </section>

        <div className="px-4 md:px-8 lg:px-16 py-16">
          {/* The Ask & Brand Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Ask</h2>
              <p className="text-gray-400">
                Mampster Foods aspired to become the top household brand in snacks within the South-Asian Community. They sought to establish a direct and meaningful relationship with their customers. Their goal was to create a fresh, exciting brand image that would generate significant buzz and encourage customer engagement. They also aimed to promote their snacks through product sampling, food-eating competitions, and family-oriented activations, all while boosting sign-ups and product sales.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Brand: Mampster Foods</h2>
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.42.13-AM-300x285.png" alt="Mampster Foods" className="rounded-lg w-32 h-auto" />
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
                    <li>Engaging with customers and promoting Mampster snacks</li>
                    <li>Conducting product sampling</li>
                    <li>Explaining the food-eating competition rules</li>
                    <li>Encouraging sign-ups for promotions and giveaways</li>
                  </ul>
                </li>
                <li>
                  <b>Activation Manager:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Overseeing the planning and execution of the campaign</li>
                    <li>Coordinating activities at multiple FreshCo and local grocery stores & events</li>
                    <li>Monitoring customer engagement and campaign performance</li>
                  </ul>
                </li>
                <li>
                  <b>Culinary Team:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Preparing and serving Mampster snack samples</li>
                    <li>Ensuring quality and taste consistency</li>
                    <li>Overseeing the food-eating competition</li>
                  </ul>
                </li>
                <li>
                  <b>Promotional Team:</b>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                    <li>Distributing promotional materials and sign-up forms</li>
                    <li>Encouraging shoppers to participate in the activation</li>
                    <li>Explaining the benefits of Mampster products and promotions</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-gray-400">
                Brand Guruz successfully planned and executed the Mampster activation campaign in 50+ FreshCo supermarkets, North-America's largest multicultural festival (Carassauga) and local grocery stores across Ontario and BC. This innovative campaign generated leads in the thousands and substantially increased product sales. By creating a fresh and exciting brand experience through product sampling, food-eating competitions, and family-oriented activations, Mampster Foods established a direct relationship with its customers while elevating its brand presence within the South-Asian Community. The campaign not only achieved the client's goals but also exceeded expectations by fostering brand loyalty and driving sales growth.
              </p>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-12">PARAMETERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
              <Counter number={7} title="MONTH(S) EVENT" />
              <Counter number="250,000" title="FOOT TRAFFIC" delimiter="," />
              <Counter number={8} title="STAFF PER DAY" />
              <Counter number={2} title="MARKETS: ONTARIO & BC, CA" />
              <Counter number={21} title="BRAND AMBASSADORS" />
              <Counter number={6} title="LEAD BRAND AMBASSADORS" />
              <Counter number={3} title="ONSITE MANAGER" />
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
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Mampster-Freshco-1536x1207.jpg" alt="Highlight 1" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.17.00-AM-copy-1536x855.jpg" alt="Highlight 2" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Mampster-Event-1207x1536.jpg" alt="Highlight 3" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.17.40-AM-copy-1536x862.jpg" alt="Highlight 4" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_5627-1152x1536.jpg" alt="Highlight 5" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.18.29-AM-copy-1536x862.jpg" alt="Highlight 6" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.19.12-AM-copy-1536x861.jpg" alt="Highlight 7" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/Screen-Shot-2023-10-02-at-9.19.50-AM-copy-1536x862.jpg" alt="Highlight 8" className="rounded-lg w-full h-full object-cover" />
              <img src="https://brandguruz.ca/wp-content/uploads/2023/10/IMG_1831-864x1536.jpg" alt="Highlight 9" className="rounded-lg w-full h-full object-cover" />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16">
             <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto text-center">
                <p className="text-2xl italic text-gray-300">"Brand Guruz's activations worked wonders for Mampster. Their innovative food sampling campaigns boosted sales and engaged our target audience effectively. We're excited about the results and future opportunities together."</p>
                <p className="mt-6 font-bold">– Mampster Foods</p>
             </div>
          </section>

          {/* Contact Form Section */}
          {/* <section className="py-16">
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
          </section> */}
        </div>
      </main>
    </div>
  );
}
