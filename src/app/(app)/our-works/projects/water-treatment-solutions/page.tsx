'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedCounter from '../../../../../components/AnimatedCounter';

export default function WaterTreatmentSolutionsPage() {
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
          {/* Test Background to see if video covers it */}
          <div className="absolute inset-0 bg-yellow-400 z-[1] flex items-center justify-center text-black text-xl font-bold">
            🟡 TEST BACKGROUND - Video should cover this
          </div>
          
          {/* Ultra-Simplified Video Element with Multiple Cloudinary Optimizations */}
          <video 
            ref={videoRef}
            controls
            muted 
            preload="auto"
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 15
            }}
          >
            {/* Multiple Cloudinary optimizations - browser will try each in order */}
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_auto,q_auto,c_scale,w_1920/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_mp4,q_70,br_3000k/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/f_webm,q_auto/loopedheadervideo50sec_ou70xy.webm" type="video/webm" />
            <source src="https://res.cloudinary.com/dgq8orvtt/video/upload/q_auto:low,f_auto/loopedheadervideo50sec_ou70xy.mp4" type="video/mp4" />
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>

          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-transparent px-4 sm:px-6 lg:px-8"
               style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#5bb1dc] drop-shadow-lg mb-4 sm:mb-6">
              Kinetico Corporate Partnership with Costco
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl text-center text-white drop-shadow-md leading-relaxed">
              Driving digital transformation for Kinetico water systems through strategic marketing and exclusive partnership with Costco Wholesale Canada.
            </p>
          </div>
        </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Project Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value="285%" />
              </div>
              <p className="text-sm sm:text-base text-gray-600">Increase in Lead Generation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                <AnimatedCounter value="$2.3M" />
              </div>
              <p className="text-sm sm:text-base text-gray-600">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter value="65%" />
              </div>
              <p className="text-sm sm:text-base text-gray-600">Reduction in Cost Per Lead</p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto px-4">
            Kinetico Corporate, a leading water treatment solutions provider, partnered with us to 
            enhance their digital presence and drive customer acquisition through their strategic 
            partnership with Costco. Our comprehensive digital marketing approach transformed their 
            online performance and delivered exceptional ROI.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kinetico faced significant challenges in their digital marketing efforts:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Low online visibility in competitive water treatment market
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  High cost per lead with poor conversion rates
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Ineffective targeting and messaging strategy
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  Limited analytics and performance tracking
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Initial Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monthly Leads</span>
                  <span className="font-semibold text-red-600">124</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost Per Lead</span>
                  <span className="font-semibold text-red-600">$185</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion Rate</span>
                  <span className="font-semibold text-red-600">2.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>ROAS</span>
                  <span className="font-semibold text-red-600">2.1x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive audit and competitor analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Audience Targeting</h3>
              <p className="text-gray-600 text-sm">
                Refined targeting and persona development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Campaign Optimization</h3>
              <p className="text-gray-600 text-sm">
                Multi-channel campaign management
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Performance Tracking</h3>
              <p className="text-gray-600 text-sm">
                Advanced analytics and reporting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Work & Solutions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The Work & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Strategic Implementation</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold mb-2">Search Engine Optimization</h4>
                  <p className="text-gray-700">
                    Comprehensive SEO strategy targeting high-value water treatment keywords, 
                    improving organic visibility by 340%.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold mb-2">Pay-Per-Click Advertising</h4>
                  <p className="text-gray-700">
                    Strategic Google Ads and Bing campaigns with advanced targeting, 
                    reducing cost per click by 45% while increasing quality scores.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold mb-2">Social Media Marketing</h4>
                  <p className="text-gray-700">
                    Targeted Facebook and LinkedIn campaigns focusing on homeowners 
                    and commercial clients, generating 2,500+ qualified leads monthly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold text-blue-600">Analytics</h4>
                    <p className="text-sm text-gray-600 mt-2">Google Analytics 4, GTM, Data Studio</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold text-green-600">Advertising</h4>
                    <p className="text-sm text-gray-600 mt-2">Google Ads, Facebook Ads, Bing Ads</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold text-purple-600">CRM Integration</h4>
                    <p className="text-sm text-gray-600 mt-2">Salesforce, HubSpot, Zapier</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold text-orange-600">Optimization</h4>
                    <p className="text-sm text-gray-600 mt-2">Optimizely, Hotjar, Unbounce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Exceptional Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value="285%" />
              </div>
              <p className="text-blue-100">Lead Increase</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value="$2.3M" />
              </div>
              <p className="text-green-100">Revenue Generated</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value="65%" />
              </div>
              <p className="text-purple-100">CPL Reduction</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value="8.7x" />
              </div>
              <p className="text-orange-100">Return on Ad Spend</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Before vs After</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Monthly Leads</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 font-semibold">
                      <AnimatedCounter value="124" />
                    </span>
                    <span>→</span>
                    <span className="text-green-600 font-semibold">
                      <AnimatedCounter value="477" />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cost Per Lead</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 font-semibold">
                      <AnimatedCounter value="$185" />
                    </span>
                    <span>→</span>
                    <span className="text-green-600 font-semibold">
                      <AnimatedCounter value="$64" />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Conversion Rate</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 font-semibold">
                      <AnimatedCounter value="2.3%" />
                    </span>
                    <span>→</span>
                    <span className="text-green-600 font-semibold">
                      <AnimatedCounter value="7.8%" />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>ROAS</span>
                  <div className="flex items-center gap-4">
                    <span className="text-red-600 font-semibold">
                      <AnimatedCounter value="2.1x" />
                    </span>
                    <span>→</span>
                    <span className="text-green-600 font-semibold">
                      <AnimatedCounter value="8.7x" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Increased organic search visibility by 340%</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Generated 2,500+ qualified leads monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Improved Google Ads quality scores to 8.5+</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <span>Achieved 92% customer satisfaction rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Services Delivered */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Content & Services Delivered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Digital Marketing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SEO Strategy & Implementation</li>
                <li>• Google Ads Management</li>
                <li>• Social Media Campaigns</li>
                <li>• Content Marketing</li>
                <li>• Email Marketing Automation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Analytics & Reporting</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Google Analytics Setup</li>
                <li>• Custom Dashboard Creation</li>
                <li>• Monthly Performance Reports</li>
                <li>• ROI Tracking & Analysis</li>
                <li>• Conversion Rate Optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Strategic Consulting</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Market Research & Analysis</li>
                <li>• Competitor Intelligence</li>
                <li>• Customer Journey Mapping</li>
                <li>• Growth Strategy Development</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you achieve similar remarkable results. Our proven strategies and 
            expert team are ready to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              href="/our-works"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View More Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Four Column Icon Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Expertise</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of delivering exceptional ROI and measurable growth for our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge strategies and technologies to stay ahead of market trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Specialized professionals with deep expertise in digital marketing and analytics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
              <p className="text-gray-600">
                Clear communication, detailed reporting, and full transparency throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
