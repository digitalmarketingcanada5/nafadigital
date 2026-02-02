import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

const GettingStartedEasySection: React.FC = () => {
  const steps = [
    {
      icon: "forum",
      title: "Initial Consultation",
      description: "We start with a comprehensive discovery session to understand your business goals, target audience, and current challenges.",
      gradient: "from-cyan-500 to-blue-600",
      number: "01"
    },
    {
      icon: "rocket_launch",
      title: "Strategic Setup",
      description: "Our experts handle all technical setup, platform integrations, and account optimizations to ensure a lightning-fast launch.",
      gradient: "from-purple-500 to-indigo-600",
      number: "02"
    },
    {
      icon: "tune",
      title: "Continuous Optimization",
      description: "Your dedicated team continuously monitors, analyzes, and optimizes campaigns using our proprietary AI-driven insights.",
      gradient: "from-emerald-500 to-green-600",
      number: "03"
    },
    {
      icon: "support_agent",
      title: "Ongoing Partnership",
      description: "Receive dedicated support, regular strategy reviews, and comprehensive training to maximize your campaign success.",
      gradient: "from-orange-500 to-red-600",
      number: "04"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q400,100 800,300 T1600,300" stroke="url(#line-gradient)" strokeWidth="2" fill="none" opacity="0.3">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" 
              values="M0,300 Q400,100 800,300 T1600,300;M0,250 Q400,150 800,250 T1600,250;M0,300 Q400,100 800,300 T1600,300"/>
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <MaterialIcon className="text-cyan-400 text-lg">timeline</MaterialIcon>
            <span className="text-sm font-semibold text-cyan-300">Simple Process</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Your Success Journey
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Simplified
            </span>
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We've streamlined our process to make getting started effortless, so you can focus on what you do best 
            while we handle the complex world of digital advertising.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="group relative">
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform translate-x-6 translate-y-1"></div>
                )}

                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/15 hover:border-white/20 transition-all duration-500 group-hover:scale-105 transform hover:shadow-2xl">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                    <MaterialIcon className="text-4xl text-white">{step.icon}</MaterialIcon>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                    {step.description}
                  </p>

                  {/* Subtle Gradient Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${step.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 pt-16 border-t border-white/10">
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Ready to Begin Your
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Growth Story?
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join the hundreds of businesses that have transformed their digital presence with our proven process. 
                Let's start building your success story today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-purple-700 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg">Start Your Journey</span>
                <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedEasySection;
