"use client";

import React, { useState, useEffect } from "react";
import { useChatBot } from "@/contexts/ChatBotContext";
import MaterialIcon from "./MaterialIcon";

const CallToActionBand = () => {
  const { openModal } = useChatBot();
  const [variant, setVariant] = useState(0);

  // Track which instance this is by incrementing a counter
  useEffect(() => {
    const ctaCount = document.querySelectorAll('[data-cta-band]').length;
    setVariant(ctaCount % 3);
  }, []);

  const variants = [
    {
      bg: "bg-gradient-to-r from-red-600 via-orange-600 to-red-600",
      text: "text-white",
      title: "Ready to Transform Your Advertising?",
      subtitle: "Connect with our team for a personalized strategy session",
      buttonStyle: "primary"
    },
    {
      bg: "bg-gradient-to-r from-blue-50 to-purple-50",
      text: "text-gray-900",
      title: "Let's Build Your Success Story",
      subtitle: "Free consultation • No commitments • Expert guidance",
      buttonStyle: "secondary"
    },
    {
      bg: "bg-gradient-to-r from-gray-900 via-gray-800 to-black",
      text: "text-white",
      title: "Questions About Our Services?",
      subtitle: "Our specialists are standing by to help you succeed",
      buttonStyle: "tertiary"
    }
  ];

  const current = variants[variant];

  return (
    <section
      className={`py-12 md:py-16 ${current.bg} relative overflow-hidden`}
      data-cta-band
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex-1">
            <h3 className={`text-2xl md:text-3xl font-bold ${current.text} mb-2`}>
              {current.title}
            </h3>
            <p className={`text-base md:text-lg ${current.text === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>
              {current.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {current.buttonStyle === 'primary' && (
              <>
                <a
                  href="tel:+91-761-934-1271"
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">phone</MaterialIcon>
                  <span>+91-761-934-1271</span>
                </a>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">chat</MaterialIcon>
                  <span>Start Chat</span>
                </button>
              </>
            )}

            {current.buttonStyle === 'secondary' && (
              <>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">forum</MaterialIcon>
                  <span>Get Free Consultation</span>
                </button>
                <a
                  href="tel:+91-761-934-1271"
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">call</MaterialIcon>
                  <span>Call Now</span>
                </a>
              </>
            )}

            {current.buttonStyle === 'tertiary' && (
              <>
                <a
                  href="tel:+91-761-934-1271"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">support_agent</MaterialIcon>
                  <span>Speak to Expert</span>
                </a>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <MaterialIcon className="text-xl">message</MaterialIcon>
                  <span>Send Message</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBand;
