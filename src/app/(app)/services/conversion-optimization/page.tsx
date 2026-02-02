'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ConversionOptimization() {
  const services = [
    {
      title: "A/B Testing",
      description: "Data-driven testing to identify what converts best for your audience",
      icon: "🧪",
      features: ["Multivariate testing", "Statistical analysis", "Conversion tracking", "Performance insights"]
    },
    {
      title: "Landing Page Optimization",
      description: "Optimize landing pages for maximum conversion rates",
      icon: "📄",
      features: ["Page design", "CTA optimization", "Form optimization", "Load speed improvement"]
    },
    {
      title: "User Experience Analysis",
      description: "Deep UX analysis to identify conversion barriers",
      icon: "🔍",
      features: ["User journey mapping", "Heatmap analysis", "Session recordings", "Usability testing"]
    },
    {
      title: "Conversion Funnel Optimization",
      description: "Optimize every step of your conversion funnel",
      icon: "🎯",
      features: ["Funnel analysis", "Drop-off identification", "Step optimization", "Recovery strategies"]
    },
    {
      title: "E-commerce Optimization",
      description: "Specialized optimization for online stores and shopping carts",
      icon: "🛒",
      features: ["Checkout optimization", "Product page testing", "Cart abandonment", "Upsell strategies"]
    },
    {
      title: "Mobile Conversion Optimization",
      description: "Optimize conversions specifically for mobile devices",
      icon: "📱",
      features: ["Mobile UX", "Touch optimization", "Speed optimization", "App conversion"]
    }
  ];

  const optimizationAreas = [
    {
      area: "Call-to-Action Buttons",
      description: "Optimize button text, color, size, and placement for maximum clicks",
      improvement: "Up to 35% increase in click-through rates"
    },
    {
      area: "Form Optimization",
      description: "Reduce form abandonment with smart field optimization",
      improvement: "Up to 50% reduction in form abandonment"
    },
    {
      area: "Page Load Speed",
      description: "Improve site speed to reduce bounce rates and increase conversions",
      improvement: "Up to 25% increase in conversions per second saved"
    },
    {
      area: "Trust Signals",
      description: "Add testimonials, reviews, and security badges to build trust",
      improvement: "Up to 40% increase in conversion rates"
    },
    {
      area: "Value Proposition",
      description: "Clarify and strengthen your unique value proposition",
      improvement: "Up to 60% improvement in engagement"
    },
    {
      area: "Checkout Process",
      description: "Streamline checkout to reduce cart abandonment",
      improvement: "Up to 45% reduction in cart abandonment"
    }
  ];

  const stats = [
    { number: "180%", label: "Average Conversion Increase" },
    { number: "500+", label: "Conversion Tests Run" },
    { number: "95%", label: "Statistical Confidence" },
    { number: "30+", label: "Industries Optimized" }
  ];

  const process = [
    {
      step: "01",
      title: "Analysis & Audit",
      description: "Comprehensive analysis of current conversion performance and user behavior"
    },
    {
      step: "02", 
      title: "Hypothesis Development",
      description: "Identify optimization opportunities and develop testing hypotheses"
    },
    {
      step: "03",
      title: "Test Implementation",
      description: "Design and implement A/B tests with proper statistical methodology"
    },
    {
      step: "04",
      title: "Results & Optimization",
      description: "Analyze results and implement winning variations for continuous improvement"
    }
  ];

  const tools = [
    {
      name: "Google Analytics",
      description: "Comprehensive tracking and analysis of user behavior and conversions",
      icon: "📊"
    },
    {
      name: "Hotjar",
      description: "Heatmaps and session recordings to understand user interactions",
      icon: "🔥"
    },
    {
      name: "Optimizely",
      description: "Advanced A/B testing platform for statistical testing",
      icon: "🧪"
    },
    {
      name: "Google Optimize",
      description: "Free A/B testing tool integrated with Google Analytics",
      icon: "🎯"
    },
    {
      name: "Unbounce",
      description: "Landing page builder with built-in A/B testing capabilities",
      icon: "📄"
    },
    {
      name: "Crazy Egg",
      description: "Click tracking and heatmap analysis for user behavior insights",
      icon: "🥚"
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
            <source src="https://cdn.coverr.co/videos/coverr-conversion-analytics-dashboard-5738/1080p.mp4" type="video/mp4" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
              Conversion Rate Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Turn more visitors into customers with data-driven optimization strategies. Increase your conversion rates and maximize ROI from existing traffic.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Optimize My Conversions
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Learn More
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

      {/* Optimization Areas */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Optimization Areas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We focus on the elements that have the biggest impact on your conversion rates and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-500">{area.area}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                <div className="text-green-400 font-semibold">{area.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Optimization Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive conversion optimization services to maximize your website's performance and profitability.
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
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Tools Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Optimization Tools</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use industry-leading tools and platforms to ensure accurate testing and reliable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{tool.name}</h3>
                <p className="text-gray-300 leading-relaxed">{tool.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our CRO Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic, data-driven approach to conversion optimization that delivers measurable results.
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
            className="bg-gradient-to-r from-red-600 to-green-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Double Your Conversion Rate?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's analyze your current performance and create a data-driven optimization strategy that turns more visitors into customers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free CRO Audit
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