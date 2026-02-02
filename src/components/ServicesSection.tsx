// START:ServicesSection
// Services Section
"use client";
import React from 'react';
import MaterialIcon from './MaterialIcon';

const ServicesSection = () => {
    const services = [
        {
            icon: 'campaign',
            title: 'Ads Management',
            description: 'Reach customers at the perfect moment with strategic ad placement',
            features: ['Google Ads', 'Display Campaigns', 'Remarketing'],
            gradient: 'from-blue-600 to-cyan-600',
            href: '/ad-management'
        },
        {
            icon: 'verified_user',
            title: 'Local Services Ads',
            description: 'Build trust with Google verification and generate quality leads',
            features: ['Google Verified', 'Priority Placement', 'Lead Generation'],
            gradient: 'from-green-600 to-emerald-600',
            href: '/local-services-ads'
        },
        {
            icon: 'web',
            title: 'Web Services',
            description: 'High-converting websites designed for modern lead generation',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
            gradient: 'from-purple-600 to-pink-600',
            href: '/web-services'
        },
        {
            icon: 'psychology',
            title: <>Call Intelligence<sup>™</sup></>,
            description: 'AI-powered call analysis to understand what drives conversions',
            features: ['Call Scoring', 'Auto Summaries', 'ROI Tracking'],
            gradient: 'from-orange-600 to-red-600',
            href: '/call-intelligence'
        }
    ];

    return (
        <section className="relative overflow-hidden py-20 md:py-32 bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-12 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                        <MaterialIcon className="text-blue-600 text-lg">deployed_code</MaterialIcon>
                        <span className="text-sm font-semibold text-blue-700">Comprehensive Solutions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Everything You Need to
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
                            Dominate Digital Advertising
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        From strategy to execution, we deliver expert management across all major advertising platforms,
                        specializing in home and professional services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <a
                            href={service.href}
                            key={service.href}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:-translate-y-2"
                            style={{ willChange: 'transform, box-shadow' }}
                        >
                            {/* Top Accent */}
                            <div className={`h-1.5 w-24 bg-gradient-to-r ${service.gradient} rounded-full mb-6 group-hover:w-full transition-all duration-500`}></div>

                            {/* Icon */}
                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <MaterialIcon className="text-4xl text-white">{service.icon}</MaterialIcon>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 group-hover:border-gray-300 transition-colors"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className={`flex items-center gap-2 font-bold group-hover:gap-3 transition-all duration-300 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                <span>Explore Service</span>
                                <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform duration-300">arrow_forward</MaterialIcon>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6">
                        Not sure which service is right for you?
                    </p>
                    <a
                        href="/contact-us"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                    >
                        <span>Get a Free Consultation</span>
                        <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
// END:ServicesSection
