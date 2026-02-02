import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

const WhatMakesUsUnique: React.FC = () => {
  const uniquePoints = [
    {
      icon: "precision_manufacturing",
      title: "Precision-Driven Approach",
      description: "Every campaign is built with surgical precision, leveraging data-driven insights to maximize your ROI and minimize waste.",
      gradient: "from-emerald-500 to-teal-600",
      delay: "0"
    },
    {
      icon: "visibility",
      title: "Crystal Clear Transparency",
      description: "Complete visibility into your campaigns with real-time dashboards, detailed reporting, and clear separation of our fees from your ad spend.",
      gradient: "from-blue-500 to-indigo-600",
      delay: "100"
    },
    {
      icon: "dynamic_form",
      title: "Adaptive Flexibility",
      description: "No lock-in contracts or rigid commitments. We believe in earning your trust through consistent results, not binding agreements.",
      gradient: "from-purple-500 to-pink-600",
      delay: "200"
    },
    {
      icon: "trending_up",
      title: "Performance-First Philosophy",
      description: "Our success is tied to your growth, not your ad spend. This alignment ensures we're always working toward your best interests.",
      gradient: "from-orange-500 to-red-600",
      delay: "300"
    },
    {
      icon: "psychology",
      title: "Human-Centered Technology",
      description: "We blend cutting-edge AI and automation with genuine human insight to create campaigns that truly connect with your audience.",
      gradient: "from-cyan-500 to-blue-600",
      delay: "400"
    }
  ];

  return (
    <section id="our-story" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full mb-8">
            <MaterialIcon className="text-indigo-600 text-lg">auto_awesome</MaterialIcon>
            <span className="text-sm font-semibold text-indigo-700">Our Unique Edge</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              What Sets Us
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Apart
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're not just another digital marketing agency. We're your strategic growth partners, 
            combining innovative technology with proven expertise to deliver exceptional results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {uniquePoints.map((point, index) => (
            <div
              key={point.title}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ 
                animationDelay: `${point.delay}ms`,
                willChange: 'transform, box-shadow'
              }}
            >
              {/* Gradient Top Border */}
              <div className={`h-1 w-16 bg-gradient-to-r ${point.gradient} rounded-full mb-8 group-hover:w-full transition-all duration-700`}></div>

              {/* Icon with Gradient Background */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${point.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <MaterialIcon className="text-4xl text-white">{point.icon}</MaterialIcon>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {point.title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {point.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 text-lg">
              Join hundreds of businesses that have transformed their digital presence with our unique approach.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Let's Work Together</span>
              <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
            </a>

            <a
              href="/our-works"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-700 transition-all duration-300"
            >
              <MaterialIcon className="text-xl">visibility</MaterialIcon>
              <span>View Our Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUnique;
