import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

const AboutUsHero: React.FC = () => (
  <section className="relative w-full pt-[76px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    </div>

    {/* Geometric Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,1 85,25 85,75 50,99 15,75 15,25" stroke="currentColor" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)"/>
      </svg>
    </div>

    <div className="container mx-auto px-4 sm:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <MaterialIcon className="text-cyan-400 text-lg">business_center</MaterialIcon>
            <span className="text-sm font-semibold text-cyan-300">Digital Marketing Innovators</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              About
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              NafaDigital
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-medium text-gray-200">
              Transforming Digital Connections
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We're a forward-thinking digital advertising agency that specializes in creating 
              high-impact lead generation campaigns for ambitious small and mid-size businesses 
              ready to scale their success.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="/contact-us" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="tracking-tight">Start Your Journey</span>
              <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
            </a>
            
            <a 
              href="#our-story" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <MaterialIcon className="text-xl">play_circle</MaterialIcon>
              <span>Discover Our Story</span>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
          {[
            { value: '500+', label: 'Successful Campaigns' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Expert Support' },
            { value: '5★', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <MaterialIcon className="text-white/60 text-3xl">keyboard_arrow_down</MaterialIcon>
    </div>
  </section>
);

export default AboutUsHero;
