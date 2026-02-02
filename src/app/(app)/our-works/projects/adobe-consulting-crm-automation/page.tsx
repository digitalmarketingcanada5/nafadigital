'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedCounter from '../../../../../components/AnimatedCounter';

// Icon Components for the four-column section
const MarketingAutomationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const TeamLeadershipIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4H4zM3 8v6h3l2-6H3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM21 9h-2.5l-.5 2h-.75l-1.5-6H9.25l1.5 6H10.5l.5-2H8.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);

const AdobeExpertiseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const DataAnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-red-500">
    <path stroke="none" d="M7 17l3-3 4 4 6.39-6.39a.996.996 0 0 1 1.41 0c.39.39.39 1.02 0 1.41L14.41 20.41a.996.996 0 0 1-1.41 0L10 17.41 7.41 20a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.02 0-1.41L7 17zm12-10h-2v4h2V7zM9 13h2V7H9v6zm4 0h2V7h-2v6z"/>
  </svg>
);

// Main App component
export default function AdobeConsultingCRMAutomation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = React.useState('Loading...');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setVideoStatus('Video element not found');
      return;
    }

    console.log('Video element found:', video);
    console.log('Video currentSrc:', video.currentSrc);
    console.log('Video readyState:', video.readyState);

    const handleLoadStart = () => {
      console.log('Video load started');
      setVideoStatus('Loading started...');
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setVideoStatus('Data loaded');
    };

    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
      console.log('Video duration:', video?.duration);
      console.log('Video videoWidth:', video?.videoWidth);
      console.log('Video videoHeight:', video?.videoHeight);
      setVideoStatus('Metadata loaded');
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      console.log('Video buffered ranges:', video?.buffered.length);
      setVideoStatus('Can play - attempting autoplay');
      // Try to autoplay when video can play
      if (video.paused) {
        video.play().then(() => {
          console.log('Autoplay successful');
          setVideoStatus('Playing');
        }).catch((error) => {
          console.error('Autoplay failed:', error);
          setVideoStatus(`Autoplay failed: ${error.message}`);
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      console.error('Video error details:', video.error);
      const errorMessages = {
        1: 'MEDIA_ERR_ABORTED: Aborted by user',
        2: 'MEDIA_ERR_NETWORK: Network error',
        3: 'MEDIA_ERR_DECODE: Decode error',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED: Source not supported'
      };
      const errorCode = video.error?.code as keyof typeof errorMessages;
      const errorMsg = errorCode ? errorMessages[errorCode] : 'Unknown error';
      setVideoStatus(`Error: ${errorMsg}`);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Check initial state
    if (video.readyState >= 3) {
      console.log('Video already ready, attempting play');
      video.play().catch((error) => {
        console.error('Initial play failed:', error);
        setVideoStatus(`Initial play failed: ${error.message}`);
      });
    }

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* --- Hero Video Section --- */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 z-[1]"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white drop-shadow-lg mb-4 sm:mb-6">
              Adobe Consulting - CRM Automation
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl text-center text-white drop-shadow-md leading-relaxed">
              Transforming marketing automation for global brands with Adobe Experience Cloud
            </p>
          </div>
        </section>

        {/* --- Project Overview Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 sm:mb-6">Project Overview</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p><strong>Company:</strong> Perkuto (Trusted Adobe Partner)</p>
                <p><strong>Industry:</strong> Technology, Marketing Automation</p>
                <p><strong>Market:</strong> B2B, Enterprise</p>
                <p><strong>Role:</strong> Senior Consultant & Team Lead, Channel Partner Marketing Automation (Canada)</p>
                <p><strong>Location:</strong> Toronto, ON, Canada</p>
                <p><strong>Duration:</strong> October 2021 – October 2022</p>
                <p><strong>Scope of Work:</strong> Marketing Automation, Campaign Management, Data Analytics, Team Leadership, Adobe Experience Cloud, Adobe Marketo, Adobe Measure</p>
                <p className="leading-relaxed">Global leader in digital experience and marketing automation solutions, serving leading brands across diverse industries with headquarters in San Jose, CA, and operations worldwide.</p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Adobe Experience Cloud" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* --- Challenge Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">Challenge</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Scaling Marketing Efficiency for Global Brands</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As a Senior Consultant and Team Lead at Perkuto, an accredited Adobe Partner, the challenge was to optimize marketing automation for leading brands using Adobe Experience Cloud, Adobe Marketo, and Adobe Measure. Clients needed scalable, data-driven solutions to enhance campaign performance, reduce costs, and drive measurable ROI in a competitive market.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Managing a $750 million budget required strategic oversight to ensure efficiency and impact across all marketing initiatives.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Marketing Challenge" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Approach Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">Approach</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Leveraging Adobe Expertise</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop" alt="Adobe Strategy" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We began by conducting in-depth client assessments to identify inefficiencies in existing marketing workflows. As a Subject Matter Expert in Adobe Experience Cloud, I led a team of 15 consultants to implement tailored solutions using Adobe Marketo and Adobe Measure.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Our approach combined strategic campaign management with advanced analytics to deliver personalized, high-impact marketing programs.
                </p>
                <blockquote className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <p className="italic text-gray-700">"The strategic leadership and Adobe expertise brought transformative results to our marketing efforts."</p>
                  <cite className="block mt-4 text-red-600 not-italic">Client Executive, Leading Brand</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* --- Work Sections --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Work</h2>
            
            {/* Work Item 1 - Campaign Efficiency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-red-400 mb-4">Driving Campaign Efficiency</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  By implementing Adobe Marketo Measure Partner MAC, we achieved a 75% increase in campaign efficiency and a 35% rise in conversion rates. Our team optimized workflows, streamlined audience segmentation, and leveraged real-time analytics to ensure campaigns resonated with target audiences.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Campaign Efficiency" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Work Item 2 - Budget Optimization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" alt="Budget Management" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-red-400 mb-4">Optimizing a $750M Budget</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Leading strategic management of a $750 million marketing budget, we reduced expenses by 40% through data-driven decision-making and process automation. This resulted in a 28% boost in ROI, enabling clients to reinvest savings into high-impact campaigns.
                </p>
              </div>
            </div>

            {/* Work Item 3 - Customer Engagement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-red-400 mb-4">Enhancing Customer Engagement</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our implementation of Adobe Marketo Measure Partner MAC drove a 20% increase in marketing campaign efficiency and a 15% rise in customer engagement. By integrating advanced attribution models, we provided clients with actionable insights to refine their marketing strategies and foster stronger customer relationships.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" alt="Customer Engagement" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Results Section --- */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-4 sm:mb-6">The Results</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">The Adobe Consulting project delivered transformative outcomes for clients:</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="75%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Increase in Campaign Efficiency</p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="35%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Rise in Conversion Rates</p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="40%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Decrease in Marketing Expenses</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="28%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Boost in ROI</p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="20%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Increase in Marketing Campaign Efficiency</p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter value="15%" />
                </div>
                <p className="text-red-100 text-sm sm:text-base">Increase in Customer Engagement</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                These results solidified our clients' ability to compete in a digital-first market, leveraging Adobe's powerful tools to drive measurable success.
              </p>
            </div>
          </div>
        </section>

        {/* --- Content & Services Delivered Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">Content & Services Delivered</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Content Column */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Content</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Campaign Strategy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Marketing Automation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Data-Driven Content Creation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Customer Journey Mapping
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Digital Marketing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Market Analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Campaign Optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Attribution Modeling
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Analytics and Reporting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Adobe Experience Cloud Implementation
                  </li>
                </ul>
              </div>

              {/* Leadership Column */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Leadership</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Team Management (15 consultants)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Budget Oversight ($750M)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Strategic Consulting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Subject Matter Expertise (Adobe Experience Cloud)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-red-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing Automation?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you achieve similar remarkable results with Adobe Experience Cloud. Our proven strategies and 
              expert team are ready to accelerate your marketing success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact-us"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/our-works"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                View More Cases
              </Link>
            </div>
            <div>
              <a href="https://adobe.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-red-200 transition-colors">
                Visit Adobe
              </a>
            </div>
          </div>
        </section>

        {/* --- Four Column Icon Section --- */}
        <section className="bg-red-50 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Why Choose Our Adobe Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <MarketingAutomationIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing Automation Excellence</h3>
                <p className="text-gray-600">
                  Deep expertise in Adobe Experience Cloud, Marketo, and Measure with proven track record of success.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <TeamLeadershipIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Leadership</h3>
                <p className="text-gray-600">
                  Strategic leadership managing large teams and budgets to deliver exceptional results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <AdobeExpertiseIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Adobe Certified Expertise</h3>
                <p className="text-gray-600">
                  Subject Matter Expert in Adobe technologies with trusted partner status and global experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                  <DataAnalyticsIcon />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven Results</h3>
                <p className="text-gray-600">
                  Advanced analytics and attribution modeling that deliver measurable ROI and business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
