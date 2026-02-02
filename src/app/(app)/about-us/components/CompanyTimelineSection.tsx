import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

const CompanyTimelineSection: React.FC = () => {
  const milestones = [
    {
      badge: "Foundation",
      title: "The Vision Born",
      description: "Founded with a mission to democratize digital advertising for small and medium businesses through innovative technology and human expertise.",
      icon: "lightbulb",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      badge: "Innovation",
      title: "First Breakthrough",
      description: "Launched our proprietary Call Intelligence™ platform, revolutionizing how businesses track and optimize their lead generation campaigns.",
      icon: "psychology",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      badge: "Expansion",
      title: "Rapid Growth",
      description: "Reached 100+ active clients and established partnerships with major advertising platforms, expanding our service capabilities significantly.",
      icon: "trending_up",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      badge: "Excellence",
      title: "Industry Recognition",
      description: "Achieved Google Premier Partner status and won multiple industry awards for innovation in digital marketing automation and client success.",
      icon: "emoji_events",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      badge: "Evolution",
      title: "Future Forward",
      description: "Expanding into AI-driven campaign optimization and preparing to launch advanced predictive analytics for even better client outcomes.",
      icon: "rocket_launch",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm16.02 4.326l1 1.732-17.32 10-1-1.732 17.32-10zm2.846 18.134h20v2H53V23.3zm-4.326 16.02l1.732 1-10 17.32-1.732-1 10-17.32zm-15.134 2.134l1 1.732-17.32 10-1-1.732 17.32-10zM0 53h20v2H0v-2zm1.732 16.02l1.732-1 10 17.32-1.732 1-10-17.32zM20.134 51.16l1-1.732 17.32 10-1 1.732-17.32-10z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full mb-8">
            <MaterialIcon className="text-gray-600 text-lg">history</MaterialIcon>
            <span className="text-sm font-semibold text-gray-700">Our Journey</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Building Excellence
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              One Milestone at a Time
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From a vision to transform digital advertising to becoming a trusted partner for hundreds of businesses, 
            here's how we've grown while staying true to our core mission.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {milestones.map((milestone, index) => (
                <div key={milestone.badge} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-400 rounded-full z-10 hidden lg:block shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:-translate-y-2">
                      {/* Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${milestone.gradient} rounded-full mb-6 shadow-lg`}>
                        <MaterialIcon className="text-white text-lg">{milestone.icon}</MaterialIcon>
                        <span className="text-white font-bold text-lg">{milestone.badge}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {milestone.title}
                      </h3>

                      <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                        {milestone.description}
                      </p>

                      {/* Decorative Element */}
                      <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${milestone.gradient} rounded-full group-hover:w-24 transition-all duration-500`}></div>

                      {/* Mobile Timeline Connector */}
                      <div className="lg:hidden mt-8 flex justify-center">
                        <div className="w-1 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Story Continues
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're just getting started. Our commitment to innovation, client success, and industry leadership 
              drives us to continuously evolve and set new standards in digital advertising.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/our-works"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>See Our Impact</span>
                <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
              </a>

              <a
                href="/join-our-team"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                <MaterialIcon className="text-xl">people</MaterialIcon>
                <span>Join Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;
