'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PPCAdvertising() {
  const platforms = [
    {
      name: "Google Ads",
      description: "Capture high-intent searches and drive immediate results",
      icon: "🔍",
      features: ["Search campaigns", "Display ads", "Shopping ads", "YouTube ads", "Performance Max"]
    },
    {
      name: "Microsoft Ads (Bing)",
      description: "Reach professional audiences with lower competition",
      icon: "🌐",
      features: ["Search campaigns", "Audience targeting", "Lower CPCs", "Professional demographics"]
    },
    {
      name: "Facebook & Instagram Ads",
      description: "Target specific demographics and interests with precision",
      icon: "📱",
      features: ["Interest targeting", "Lookalike audiences", "Video ads", "Lead generation"]
    },
    {
      name: "LinkedIn Ads",
      description: "Target professionals and decision-makers for B2B success",
      icon: "💼",
      features: ["Job title targeting", "Company targeting", "Lead gen forms", "Sponsored content"]
    },
    {
      name: "Amazon Advertising",
      description: "Capture shoppers at the point of purchase",
      icon: "📦",
      features: ["Sponsored products", "Brand campaigns", "Display ads", "Video ads"]
    },
    {
      name: "Twitter Ads",
      description: "Engage audiences through trending topics and conversations",
      icon: "🐦",
      features: ["Promoted tweets", "Trend targeting", "Event targeting", "Conversation ads"]
    }
  ];

  const services = [
    {
      title: "Campaign Strategy",
      description: "Data-driven PPC strategies tailored to your business goals and budget",
      icon: "🎯"
    },
    {
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to identify high-converting opportunities",
      icon: "🔑"
    },
    {
      title: "Ad Creation",
      description: "Compelling ad copy and creative that drives clicks and conversions",
      icon: "🎨"
    },
    {
      title: "Landing Page Optimization",
      description: "Optimized landing pages that maximize conversion rates",
      icon: "📄"
    },
    {
      title: "Bid Management",
      description: "Advanced bidding strategies to maximize ROI and minimize costs",
      icon: "💰"
    },
    {
      title: "Performance Tracking",
      description: "Detailed analytics and reporting to measure and improve results",
      icon: "📊"
    }
  ];

  const stats = [
    { number: "450%", label: "Average ROI Increase" },
    { number: "$2.5M+", label: "Ad Spend Managed" },
    { number: "300+", label: "PPC Campaigns" },
    { number: "24/7", label: "Campaign Monitoring" }
  ];

  const process = [
    {
      step: "01",
      title: "Account Audit",
      description: "Comprehensive analysis of current campaigns and opportunities"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create data-driven PPC strategy aligned with business objectives"
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "Set up optimized campaigns with compelling ads and targeting"
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuous optimization and scaling for maximum performance"
    }
  ];

  const benefits = [
    {
      title: "Immediate Results",
      description: "Start driving traffic and conversions as soon as campaigns go live",
      icon: "⚡"
    },
    {
      title: "Precise Targeting",
      description: "Reach your exact audience with advanced demographic and behavioral targeting",
      icon: "🎯"
    },
    {
      title: "Budget Control",
      description: "Complete control over your advertising spend with real-time adjustments",
      icon: "💵"
    },
    {
      title: "Measurable ROI",
      description: "Track every dollar spent and measure exact return on investment",
      icon: "📈"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-20"
            poster="/api/placeholder/1920/1080"
          >
            <source src="https://cdn.coverr.co/videos/coverr-digital-advertising-dashboard-4821/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              PPC Advertising
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Drive immediate, targeted traffic with precision PPC campaigns. Maximize your ROI with data-driven strategies across all major advertising platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Launch Your Campaign
              </motion.a>
              <motion.a
                href="#platforms"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Explore Platforms
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose PPC Advertising?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              PPC advertising delivers immediate, measurable results with complete control over your marketing investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-red-500">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Advertising Platforms We Master</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We create and manage high-performing campaigns across all major advertising platforms to maximize your reach and ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{platform.name}</h3>
                <p className="text-gray-300 mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 flex items-center">
                      <span className="text-red-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our PPC Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive PPC management services that drive results and maximize your advertising investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our PPC Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to PPC management that ensures optimal performance and continuous improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive Immediate Results?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create high-performing PPC campaigns that deliver immediate traffic, leads, and sales for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Launch Your PPC Campaign
              </motion.a>
              <motion.a
                href="tel:+917619341271"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}