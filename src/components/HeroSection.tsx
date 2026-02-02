// START:HeroSection
// Hero Section Component
"use client";
import React from "react";
import MaterialIcon from "./MaterialIcon";
import { useChatBot } from "@/contexts/ChatBotContext";

const HeroSection = () => {
  const { openModal } = useChatBot();

  const features = [
    {
      icon: "layers_clear",
      title: "No Contracts",
      description: "Month-to-month flexibility that adapts to your business needs.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "account_balance_wallet",
      title: "Flexible Budgets",
      description: "Scale investments up or down based on your growth trajectory.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "money_off",
      title: "Flat-rate Fee",
      description: "Transparent, predictable pricing with no hidden surprises.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "auto_awesome",
      title: "Call Intelligence™",
      description: "Real-time insights into what drives your conversions.",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="container px-4 sm:px-12 lg:px-16 mx-auto relative">
        <div className="relative z-10 pt-20 md:pt-32 pb-16 md:pb-24">
          {/* Main Headline */}
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-sm font-semibold text-red-700">Award-Winning Digital Advertising</span>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold !leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-red-600 to-gray-900">
                Transform Clicks
              </span>
              <br />
              <span className="text-gray-900">Into Customers</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Data-driven advertising strategies that deliver measurable results.
              We help businesses grow with intelligent campaigns and transparent partnerships.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">1,005+ Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <MaterialIcon className="text-green-600 text-xl">verified</MaterialIcon>
                <span className="text-sm font-medium text-gray-700">300+ Active Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+91-761-934-1271"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <MaterialIcon className="text-xl">phone</MaterialIcon>
                  <span>Call +91-761-934-1271</span>
                </div>
              </a>

              <button
                onClick={openModal}
                className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <MaterialIcon className="text-xl group-hover:text-red-600 transition-colors">chat</MaterialIcon>
                  <span>Start Free Consultation</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative z-10 pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose NafaDigital?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent partnerships backed by cutting-edge technology and proven strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl`}></div>

                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <MaterialIcon className="text-2xl text-white">{feature.icon}</MaterialIcon>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover decoration */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
// END:HeroSection
