'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedCounter from '../../../../../components/AnimatedCounter';

// Icon Components for the four-column section
const SEOOptimizationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-green-500">
    <path stroke="none" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
    <path stroke="none" d="M12 6v3l4 4-4 4v3c3.31 0 6-2.69 6-6 0-1.66-.67-3.16-1.76-4.24L12 6z"/>
  </svg>
);

const TrafficGrowthIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-green-500">
    <path stroke="none" d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
  </svg>
);

const DigitalTransformIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-green-500">
    <path stroke="none" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4V6A8,8 0 0,1 20,14H22A10,10 0 0,0 12,4M12,6V8A6,6 0 0,1 18,14H20A8,8 0 0,0 12,6M12,8V10A4,4 0 0,1 16,14H18A6,6 0 0,0 12,8M12,10V12A2,2 0 0,1 14,14H16A4,4 0 0,0 12,10Z"/>
  </svg>
);

const UserEngagementIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-green-500">
    <path stroke="none" d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5ZM8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6ZM8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7ZM16 13C17.1046 13 18 13.8954 18 15V17H14V15C14 13.8954 14.8954 13 16 13ZM8 14C9.10457 14 10 14.8954 10 16V20H6V16C6 14.8954 6.89543 14 8 14Z"/>
  </svg>
);

// Main App component
export default function MinistryOfRailwaysSEO() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = React.useState('Loading...');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setVideoStatus('Video element not found');
      return;
    }

    const handleLoadedData = () => {
      setVideoStatus('Video loaded');
    };

    const handleCanPlay = () => {
      setVideoStatus('Ready to play');
      if (video.paused) {
        video.play().catch((error) => {
          console.error('Autoplay failed:', error);
          setVideoStatus(`Autoplay failed: ${error.message}`);
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setVideoStatus('Error loading video');
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* --- Hero Image Section --- */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-[1]">
            <img 
              src="/indian-trains.jpg" 
              alt="Indian Railways Train" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white drop-shadow-lg mb-4 sm:mb-6">
              Driving Website Traffic with SEO
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl text-center text-white drop-shadow-md leading-relaxed">
              Digital transformation for Ministry of Railways, Government of India - Modernizing India's transportation infrastructure through strategic SEO and digital marketing.
            </p>
          </div>
        </section>

        {/* --- Project Overview Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4 sm:mb-6">Project Overview</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p><strong>Client:</strong> Ministry of Railways, Government of India</p>
                <p><strong>Industry:</strong> Transportation, Government</p>
                <p><strong>Market:</strong> B2C, B2B, Government</p>
                <p><strong>Scope of Work:</strong> User Research, Digital Marketing, SEO Optimization, Email Marketing, Content Strategy, Data Analytics</p>
                <p className="leading-relaxed">A comprehensive digital transformation project for India's national railway system, serving millions of passengers daily across an extensive rail network. Our mission was to modernize their digital presence and enhance customer experience through strategic SEO and digital marketing initiatives.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-6">
                <img src="/Indian_Railways.svg" alt="Indian Railways Logo" className="w-48 h-48 object-contain" />
              </div>
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Railway_train.jpg/800px-Indian_Railway_train.jpg" alt="Indian Railways" className="w-full h-auto rounded-lg shadow-lg" /> */}
            </div>
          </div>
        </section>

        {/* --- Challenge Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">The Challenge</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Modernizing a Legacy System</h3>
            </div>
            <div className="tems-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex justify-center">
                  The Ministry of Railways, a cornerstone of India's transportation infrastructure, faced the challenge of modernizing its digital presence to meet the demands of a tech-savvy population. With millions of passengers relying on its services daily, the organization needed to enhance its online ticketing platform, improve user engagement, and streamline its marketing efforts to drive efficiency and accessibility.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The goal was to create a seamless digital experience while maintaining the trust and reliability associated with the Ministry's legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Approach Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Approach</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Understanding Passenger Needs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop" alt="Business Partnership Handshake" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We initiated the project with extensive user research to identify pain points in the existing ticketing system and website usability. Surveys and data analytics revealed opportunities to improve navigation, accessibility, and engagement.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Our strategy focused on leveraging digital tools to enhance the passenger experience while optimizing marketing efforts to drive ticket sales and brand loyalty.
                </p>
                <blockquote className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <p className="text-lg italic text-gray-800 mb-4">
                    "The digital transformation led by this team has significantly improved our passenger engagement and operational efficiency."
                  </p>
                  <cite className="font-semibold text-green-700">
                    - Sheik Noor Sherfuddin, Official, Ministry of Railways
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* --- Work Sections --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Work & Solutions</h2>
            
            {/* Work Item 1 - Online Ticketing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">Enhancing Online Ticketing</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To boost online ticketing traffic by 20%, we implemented innovative digital strategies, including a revamped user interface for the ticketing platform. Simplified navigation, faster load times, and mobile optimization ensured a seamless booking experience, resulting in a 40% increase in overall revenue.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop" alt="Indian Railway Train Station" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Work Item 2 - SEO Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop" alt="SEO Strategy" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Driving Website Traffic with SEO</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We executed targeted SEO strategies to increase website traffic by 50%. By optimizing content for relevant keywords, improving site architecture, and enhancing mobile responsiveness, we attracted more visitors to the Ministry's digital platforms, making it easier for passengers to access services and information.
                </p>
              </div>
            </div>

            {/* Work Item 3 - Email Marketing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">Personalized Email Marketing</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our team developed personalized email marketing campaigns that improved conversion rates by 25%. By segmenting audiences and tailoring content to user preferences, we created engaging email flows that encouraged repeat bookings and enhanced customer loyalty.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop" alt="Email Marketing" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Work Item 4 - Traditional Marketing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop" alt="Traditional Marketing" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Optimizing Traditional Marketing</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We revitalized traditional marketing efforts by launching targeted print advertising campaigns, achieving a 20% increase in ROI and a 15% rise in customer acquisition. These campaigns were strategically designed to complement digital efforts, ensuring a cohesive brand presence across all channels.
                </p>
              </div>
            </div>

            {/* Work Item 5 - Lead Generation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">Boosting Lead Generation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  By optimizing email marketing campaigns and enhancing user engagement on social media platforms, we achieved a 30% increase in lead generation. Interactive content, timely promotions, and community-building initiatives fostered stronger connections with passengers.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Lead Generation" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Results Section --- */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4 sm:mb-6">The Results</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                The Ministry of Railways saw transformative outcomes from our digital and marketing strategies:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="20%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Increase in Online Ticketing Traffic</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="40%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Boost in Overall Revenue</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="50%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Growth in Website Traffic</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="25%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Improvement in Conversion Rates</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="30%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Increase in Lead Generation</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="20%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Rise in Traditional Marketing ROI</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="15%" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Increase in Customer Acquisition</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                  <AnimatedCounter value="10" suffix=" Million" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Passengers Served Daily</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Delivered Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Content & Services Delivered</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive digital solutions covering all aspects of modern transportation marketing.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Brand Messaging</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Content Strategy</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Digital Ad Design</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Social Media Content</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Email Campaign Development</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Digital Marketing</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Market Analysis</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">User Research</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">SEO Optimization</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Campaign Development</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Social Media Management</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Email Marketing</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Analytics and Reporting</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">E-commerce</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">User Interface Design</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Website Optimization</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Mobile App Enhancements</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h4 className="font-semibold text-gray-800">Data Analytics Integration</h4>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="relative py-24 text-center text-white" style={{ background: 'linear-gradient(135deg, #ff9933 0%, #ffffff 50%, #138808 100%)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mt-4 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with strategic SEO and digital marketing solutions.
            </p>
            <a 
              href="https://www.indianrailways.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-colors mr-4"
            >
              Visit Ministry of Railways
            </a>
            <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors">
              Start Your Digital Transformation!
            </button>
          </div>
        </section>

        {/* --- Four Column Icons Section --- */}
        <section className="bg-green-50 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><SEOOptimizationIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">SEO Excellence</h3>
              <p className="text-gray-600">Advanced SEO strategies that drove 50% increase in website traffic and improved search visibility.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><TrafficGrowthIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Traffic Growth</h3>
              <p className="text-gray-600">Comprehensive digital marketing approach resulting in significant traffic and conversion improvements.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><DigitalTransformIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Digital Transformation</h3>
              <p className="text-gray-600">Complete modernization of digital infrastructure and customer experience platforms.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><UserEngagementIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">User Engagement</h3>
              <p className="text-gray-600">Enhanced user experience design and engagement strategies for millions of daily passengers.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
