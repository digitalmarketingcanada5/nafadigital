'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialMediaMarketing() {
  const platforms = [
    {
      name: "Facebook",
      description: "Targeted advertising and community building",
      icon: "📘",
      features: ["Custom audiences", "Lead generation", "Brand awareness", "Event promotion"]
    },
    {
      name: "Instagram",
      description: "Visual storytelling and influencer partnerships",
      icon: "📷",
      features: ["Stories & Reels", "Shopping ads", "Influencer campaigns", "Visual content"]
    },
    {
      name: "LinkedIn",
      description: "B2B networking and professional marketing",
      icon: "💼",
      features: ["Professional targeting", "B2B lead generation", "Content marketing", "Thought leadership"]
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and trend marketing",
      icon: "🐦",
      features: ["Trending topics", "Real-time marketing", "Community management", "Customer service"]
    },
    {
      name: "TikTok",
      description: "Creative short-form video marketing",
      icon: "🎵",
      features: ["Viral content", "Gen-Z targeting", "Creative campaigns", "Hashtag challenges"]
    },
    {
      name: "YouTube",
      description: "Video marketing and brand channels",
      icon: "🎬",
      features: ["Video ads", "Channel optimization", "Content strategy", "Analytics tracking"]
    }
  ];

  const services = [
    {
      title: "Strategy Development",
      description: "Custom social media strategies aligned with your business goals",
      icon: "🎯"
    },
    {
      title: "Content Creation",
      description: "Engaging posts, stories, and videos that resonate with your audience",
      icon: "🎨"
    },
    {
      title: "Community Management",
      description: "Active engagement and relationship building with your followers",
      icon: "👥"
    },
    {
      title: "Paid Advertising",
      description: "Targeted social media ads that drive conversions and ROI",
      icon: "💰"
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed insights and performance metrics to optimize campaigns",
      icon: "📊"
    },
    {
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers in your industry",
      icon: "⭐"
    }
  ];

  const stats = [
    { number: "500%", label: "Average Engagement Increase" },
    { number: "250K+", label: "Followers Generated" },
    { number: "200+", label: "Social Campaigns" },
    { number: "98%", label: "Client Retention Rate" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Analyze your current social presence and identify opportunities"
    },
    {
      step: "02", 
      title: "Strategy Creation",
      description: "Develop platform-specific strategies and content calendars"
    },
    {
      step: "03",
      title: "Content Production",
      description: "Create engaging, on-brand content that drives engagement"
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "Deploy campaigns and continuously optimize for better results"
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
            <source src="https://cdn.coverr.co/videos/coverr-social-media-icons-animation-3844/1080p.mp4" type="video/mp4" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Social Media Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build meaningful connections with your audience across all major social platforms. Drive engagement, increase brand awareness, and boost conversions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Start Your Campaign
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

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Platforms We Master</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We create tailored strategies for each platform to maximize your reach and engagement across the social media landscape.
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
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
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
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Social Media Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive social media marketing solutions to grow your brand and engage your audience.
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
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
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
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A strategic approach to social media marketing that delivers measurable results.
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
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Viral?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a social media strategy that builds your brand, engages your audience, and drives real business results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Campaign
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