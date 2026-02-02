'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContentMarketing() {
  const contentTypes = [
    {
      type: "Blog Content",
      description: "SEO-optimized articles that engage readers and drive traffic",
      icon: "📝",
      features: ["SEO optimization", "Research-backed", "Engaging writing", "Regular publishing"]
    },
    {
      type: "Video Content",
      description: "Compelling videos that tell your brand story and showcase products",
      icon: "🎥",
      features: ["Scriptwriting", "Professional filming", "Post-production", "Platform optimization"]
    },
    {
      type: "Social Content",
      description: "Platform-specific content that builds community and drives engagement",
      icon: "📱",
      features: ["Platform-native", "Visual storytelling", "Community building", "Trend adaptation"]
    },
    {
      type: "Email Campaigns",
      description: "Personalized email content that nurtures leads and retains customers",
      icon: "📧",
      features: ["Personalization", "A/B testing", "Automation", "List segmentation"]
    },
    {
      type: "Infographics",
      description: "Visual content that simplifies complex information and drives shares",
      icon: "📊",
      features: ["Data visualization", "Brand aligned", "Shareable design", "Information hierarchy"]
    },
    {
      type: "Case Studies",
      description: "Success stories that build credibility and influence purchase decisions",
      icon: "📋",
      features: ["Client success", "Detailed metrics", "Compelling narrative", "Social proof"]
    }
  ];

  const services = [
    {
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with your business objectives",
      icon: "🎯"
    },
    {
      title: "Content Creation",
      description: "High-quality, engaging content across all formats and platforms",
      icon: "✍️"
    },
    {
      title: "Content Distribution",
      description: "Strategic distribution across multiple channels for maximum reach",
      icon: "📡"
    },
    {
      title: "Content Optimization",
      description: "SEO and performance optimization for better visibility and engagement",
      icon: "⚡"
    },
    {
      title: "Content Analytics",
      description: "Data-driven insights to measure and improve content performance",
      icon: "📈"
    },
    {
      title: "Brand Storytelling",
      description: "Compelling narratives that connect emotionally with your audience",
      icon: "🎭"
    }
  ];

  const stats = [
    { number: "400%", label: "Increase in Organic Traffic" },
    { number: "1000+", label: "Content Pieces Created" },
    { number: "85%", label: "Content Engagement Rate" },
    { number: "50+", label: "Industries Served" }
  ];

  const process = [
    {
      step: "01",
      title: "Content Audit",
      description: "Analyze existing content and identify gaps and opportunities"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create comprehensive content strategy and editorial calendar"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Produce high-quality content across multiple formats and platforms"
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Monitor performance and optimize content for maximum impact"
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
            <source src="https://cdn.coverr.co/videos/coverr-content-creation-workspace-6547/1080p.mp4" type="video/mp4" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Content Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create compelling content that tells your brand story, engages your audience, and drives meaningful business results across all digital channels.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Start Creating Content
              </motion.a>
              <motion.a
                href="#content-types"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Explore Content Types
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

      {/* Content Types Section */}
      <section id="content-types" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Content We Create</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From blog posts to videos, we create diverse content formats that resonate with your audience and achieve your marketing goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{content.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{content.type}</h3>
                <p className="text-gray-300 mb-6">{content.description}</p>
                <ul className="space-y-2">
                  {content.features.map((feature, featureIndex) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Content Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end content marketing solutions that drive engagement, build authority, and generate leads.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Content Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to content marketing that ensures consistency, quality, and measurable results.
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
            className="bg-gradient-to-r from-red-600 to-purple-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create content that captures your brand essence, engages your audience, and drives real business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Content Strategy
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