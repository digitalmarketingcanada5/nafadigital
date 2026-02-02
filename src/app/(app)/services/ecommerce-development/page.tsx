'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EcommerceDevelopment() {
  const platforms = [
    {
      name: "Shopify",
      description: "Complete e-commerce solution with powerful customization",
      icon: "🛍️",
      features: ["Custom themes", "App integrations", "Payment processing", "Inventory management", "Multi-channel selling"]
    },
    {
      name: "WooCommerce",
      description: "Flexible WordPress-based e-commerce platform",
      icon: "🌐",
      features: ["WordPress integration", "Unlimited customization", "SEO friendly", "Plugin ecosystem", "Cost effective"]
    },
    {
      name: "Magento",
      description: "Enterprise-grade e-commerce for complex requirements",
      icon: "🏢",
      features: ["Enterprise features", "B2B capabilities", "Multi-store management", "Advanced reporting", "Scalability"]
    },
    {
      name: "BigCommerce",
      description: "All-in-one e-commerce platform with built-in features",
      icon: "📦",
      features: ["Built-in features", "API-first approach", "Multi-channel", "No transaction fees", "Enterprise ready"]
    },
    {
      name: "Custom Solutions",
      description: "Tailor-made e-commerce solutions for unique needs",
      icon: "⚙️",
      features: ["Custom development", "Unique features", "Full control", "Scalable architecture", "Integration capabilities"]
    },
    {
      name: "Headless Commerce",
      description: "Modern, API-driven e-commerce architecture",
      icon: "🚀",
      features: ["API-first", "Frontend flexibility", "Performance optimized", "Omnichannel ready", "Developer friendly"]
    }
  ];

  const services = [
    {
      title: "E-commerce Strategy",
      description: "Comprehensive planning and strategy for your online store success",
      icon: "🎯"
    },
    {
      title: "Custom Development",
      description: "Tailored e-commerce solutions built for your specific business needs",
      icon: "⚙️"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      icon: "🎨"
    },
    {
      title: "Payment Integration",
      description: "Secure payment processing with multiple gateway options",
      icon: "💳"
    },
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems",
      icon: "📊"
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization and technical improvements for better conversions",
      icon: "⚡"
    }
  ];

  const stats = [
    { number: "300%", label: "Average Revenue Increase" },
    { number: "150+", label: "E-commerce Stores Built" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support & Monitoring" }
  ];

  const features = [
    {
      title: "Mobile-First Design",
      description: "Responsive designs optimized for mobile commerce and conversions",
      icon: "📱"
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO features to help your store rank higher in search results",
      icon: "🔍"
    },
    {
      title: "Security & Compliance",
      description: "PCI DSS compliance and advanced security measures to protect customer data",
      icon: "🔒"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics to track sales, customers, and performance metrics",
      icon: "📈"
    },
    {
      title: "Multi-Channel Integration",
      description: "Seamless integration with marketplaces, social media, and other sales channels",
      icon: "🔗"
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise level",
      icon: "📊"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understand your business needs and create a comprehensive e-commerce strategy"
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create user-centered designs and interactive prototypes for approval"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build your e-commerce store with all required features and integrations"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing and successful launch with ongoing support"
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
            <source src="https://cdn.coverr.co/videos/coverr-ecommerce-shopping-online-7423/1080p.mp4" type="video/mp4" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              E-commerce Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful, scalable online stores that convert visitors into customers. From concept to launch and beyond, we create e-commerce solutions that drive sales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300"
              >
                Start Your Store
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">E-commerce Platforms We Master</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with all major e-commerce platforms and can recommend the best solution for your specific business needs.
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

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Essential E-commerce Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every e-commerce store we build includes these essential features to ensure success and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our E-commerce Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive e-commerce development services to build, launch, and grow your online business.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology for building successful e-commerce stores that drive sales and growth.
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
            className="bg-gradient-to-r from-red-600 to-blue-500 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build a powerful e-commerce platform that converts visitors into customers and grows your business online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your E-commerce Project
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