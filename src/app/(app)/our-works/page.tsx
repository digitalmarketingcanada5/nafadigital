'use client';

import Image from 'next/image';
import React from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

interface Category {
  title: string;
  description: string;
  projects: Project[];
}

export default function OurWorks() {
  const categories: Category[] = [
        {
      title: "Digital Marketing",
      description: "Strategic digital campaigns that drive results and maximize your ROI across all platforms.",
      projects: [
        {
          id: "marketing-1",
          title: "PPC Advertising",
          category: "Digital Marketing",
          description: "Lead generation campaigns with 300% ROI increase across all platforms",
          image: "https://placehold.co/400x400/DC2626/FFF?text=PPC+Ads",
          link: "/services/ppc-advertising"
        },
        {
          id: "marketing-2",
          title: "Social Media Marketing",
          category: "Digital Marketing", 
          description: "Strategic social media campaigns that build communities and drive engagement",
          image: "https://placehold.co/400x400/DC2626/FFF?text=Social+Media",
          link: "/services/social-media-marketing"
        },
        {
          id: "marketing-3",
          title: "SEO Services",
          category: "Digital Marketing",
          description: "Complete SEO optimization resulting in top search rankings",
          image: "https://placehold.co/400x400/DC2626/FFF?text=SEO",
          link: "/services/seo"
        }
      ]
    },
        {
      title: "E-commerce",
      description: "Complete e-commerce solutions from strategy to implementation and optimization.",
      projects: [
        {
          id: "ecommerce-1",
          title: "E-commerce Development",
          category: "E-commerce",
          description: "Custom online stores built for maximum conversions and growth",
          image: "https://placehold.co/400x400/DC2626/FFF?text=E-commerce+Dev",
          link: "/services/ecommerce-development"
        },
        {
          id: "ecommerce-2",
          title: "Conversion Optimization",
          category: "E-commerce",
          description: "CRO strategies that turn more visitors into paying customers",
          image: "https://placehold.co/400x400/DC2626/FFF?text=CRO",
          link: "/services/conversion-optimization"
        }
      ]
    },
    {
      title: "Content",
      description: "We make media that reflects your values, clarifies your message, and captures your customers.",
      projects: [
        {
          id: "content-1",
          title: "Content Marketing",
          category: "Content",
          description: "Strategic content creation that engages audiences and drives conversions",
          image: "https://placehold.co/400x400/DC2626/FFF?text=Content+Marketing",
          link: "/services/content-marketing"
        },
        {
          id: "content-2", 
          title: "Video Production",
          category: "Content",
          description: "Professional video content for brand storytelling and marketing",
          image: "https://placehold.co/400x400/DC2626/FFF?text=Video+Production",
          link: "/services/content-marketing"
        },
        {
          id: "content-3",
          title: "Brand Content",
          category: "Content", 
          description: "Compelling brand content across all digital platforms",
          image: "https://placehold.co/400x400/DC2626/FFF?text=Brand+Content",
          link: "/services/content-marketing"
        }
      ]
    },
  ];

  const featuredEngagements = [
    {
      title: "CHEVROLET",
      description: "We made a television commercial for one of North America's largest automotive manufacturers."
    },
    {
      title: "YAMAHA", 
      description: "We made extensive marketing content for Yamaha's Timbersled Snowbike platform."
    },
    {
      title: "POLARIS",
      description: "We worked with a leading outdoors brand over several seasons to launch campaigns."
    },
    {
      title: "EONS",
      description: "We helped a new wellness brand gather and interpret customer data."
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-24 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="text-left py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We turn raw ideas to refined success with an integrated approach to the digital customer journey.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Explore our portfolio of successful projects across content creation, digital marketing, and e-commerce solutions.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-left">Our Latest Projects</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Discover our featured projects showcasing innovation, creativity, and exceptional results across various industries.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Project Card 1 - Water Treatment Solutions */}
            <div className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:-translate-y-1" 
                 onClick={() => window.location.href = '/our-works/projects/water-treatment-solutions'}>
              <div className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-80">
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-3">
                      Water Technology
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    Kinetico Water Treatment Solutions
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Complete water treatment platform featuring advanced filtration systems, smart technology integration, and exceptional user experience design.
                  </p>
                  <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                    <span>Explore Project</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="https://www.kinetico.com/media/dzydqdcc/watertest2.png" 
                    alt="Water Treatment Solutions Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Card 2 - Adobe CRM Automation */}
            <div className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:-translate-y-1"
                 onClick={() => window.location.href = '/our-works/projects/adobe-consulting-crm-automation'}>
              <div className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-80">
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-3">
                      CRM Automation
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    Adobe Consulting - CRM Automation
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Intelligent CRM automation platform with Adobe Experience Cloud, delivering 40% increase in lead conversion and 60% reduction in manual processes.
                  </p>
                  <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                    <span>Explore Project</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="https://placehold.co/600x400/DC2626/FFF?text=Adobe+CRM" 
                    alt="Adobe CRM Automation Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Card 3 - Ministry of Railways SEO */}
             <div className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:-translate-y-1"
                 onClick={() => window.location.href = '/our-works/projects/ministry-of-railways-seo'}>
              <div className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-80">
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-3">
                      SEO & Digital Marketing
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    Ministry of Railways - SEO Transformation
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Comprehensive digital transformation for India's national railway system, achieving 50% website traffic growth and 40% revenue increase through strategic SEO.
                  </p>
                  <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                    <span>Explore Project</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="/indian-trains.jpg" 
                    alt="Ministry of Railways SEO Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div> 

            {/* Project Card 4 - Teaching at Canadian Colleges */}
             <div className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 transform hover:-translate-y-1"
                 onClick={() => window.location.href = '/our-works/projects/college-teaching-project'}>
              <div className="grid grid-cols-1 md:grid-cols-3 h-64 md:h-80">
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-3">
                      Education
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    Teaching at Canadian Colleges
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Educational excellence program featuring innovative curriculum design, student success initiatives, and industry-aligned learning outcomes across Canadian institutions.
                  </p>
                  <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors">
                    <span>Explore Project</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop&crop=center" 
                    alt="Teaching at Canadian Colleges Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-left">Case Studies</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Dive deep into our most successful projects and see how we've helped businesses achieve their goals through strategic digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1: CIBC Nation-Wide Activations */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/cibc-nation-wide-activations'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-1.jpeg"
                    alt="CIBC Nation-Wide Activations case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Activations
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    CIBC: Nation-Wide Activations
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Nationwide brand activation campaign for one of Canada's largest financial institutions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: Lactalis Activation - Khaas Dahi at The Taste of India */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/lactalis-activation-khaas-dahi'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-2.jpeg"
                    alt="Lactalis Activation - Khaas Dahi case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Food & Beverage
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    Lactalis Activation - Khaas Dahi at The Taste of India
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Cultural food activation showcasing authentic Indian dairy products at major cultural events.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: Public Mobile (Telus): Ontario & BC Activations */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/public-mobile-telus-activations'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-3.jpeg"
                    alt="Public Mobile (Telus) Activations case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Telecommunications
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    Public Mobile (Telus): Ontario & BC Activations
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Regional mobile service activations across Ontario and British Columbia markets.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4: Toronto Area Ford Dealers: Interactive Carpool Karaoke */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/toronto-ford-dealers-carpool-karaoke'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-4.jpeg"
                    alt="Toronto Ford Dealers Carpool Karaoke case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Automotive
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    Toronto Area Ford Dealers: Interactive Carpool Karaoke
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Innovative automotive experience combining entertainment and test drives for Ford dealerships.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>8 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 5: BC Dairy & The Dairy Farmers of Canada Activations */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/bc-dairy-farmers-canada-activations'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-5.jpeg"
                    alt="BC Dairy & Dairy Farmers of Canada Activations case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Agriculture
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    BC Dairy & The Dairy Farmers of Canada Activations
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Provincial dairy industry activations promoting local farming and dairy products.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>9 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 6: TATA's Quick Tea and Ready-to-Eat Curries + Sampling Activation */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/tata-quick-tea-sampling-activation'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-6.jpeg"
                    alt="TATA Quick Tea Sampling Activation case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Food & Beverage
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    TATA's Quick Tea and Ready-to-Eat Curries + Sampling Activation
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Product sampling and demonstration activation for TATA's convenience food products.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 7: Hampster Foods: Nation Wide Activation Campaign */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/hampster-foods-nation-wide-campaign'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-7.jpeg"
                    alt="Hampster Foods Nation Wide Campaign case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Food & Beverage
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    Hampster Foods: Nation Wide Activation Campaign
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Comprehensive nationwide campaign for specialty food products across multiple markets.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 8: Rama Gaming House: Activations at Retail Outlets, Events & Brand Locations */}
            <div className="group cursor-pointer" onClick={() => window.location.href = '/our-works/case-studies/rama-gaming-house-activations'}>
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src="/case-studies/case-study-8.jpeg"
                    alt="Rama Gaming House Activations case study"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Gaming & Entertainment
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    Rama Gaming House: Activations at Retail Outlets, Events & Brand Locations
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Multi-location gaming experience activations across retail, events, and branded venues.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-500 font-medium">Read Case Study →</span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>8 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-700 my-16" />

        {/* Portfolio Categories */}
        {categories.map((category, index) => (
          <section key={category.title} className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project) => (
                  <a 
                    key={project.id} 
                    href={project.link} 
                    className="group cursor-pointer block"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-150 transition-colors duration-300">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                        <span className="text-xs text-red-500 font-medium">Learn More →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <hr className="border-gray-700 my-16" />

        {/* Featured Engagements Section */}
        {/* <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-left">Featured engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEngagements.map((engagement, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-3 text-red-500">{engagement.title}</h3>
                <p className="text-gray-400">{engagement.description}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Founder's Message Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-left">A Message from Our Founder</h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <p className="text-lg italic mb-6">
              "At NafaDigital, we've built a proven system that helps businesses create successful subscription programs with monthly recurring revenue. Our approach frees up our clients' time to focus on what matters most - making their products the best they can be. We're passionate about delivering results that exceed expectations."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NJ</span>
              </div>
              <div>
                <p className="font-bold">Naj Sher</p>
                <p className="text-gray-400">Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how we can help bring your vision to life.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-red-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+917619341271"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
