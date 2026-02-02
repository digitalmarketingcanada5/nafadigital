// START:AboutSection
// About Section
"use client";
import React from 'react';
import Image from 'next/image';
import AnimatedCounter from './AnimatedCounter';
import MaterialIcon from './MaterialIcon';

const AboutSection = () => {
    const stats = [
        { value: 300, suffix: '+', label: 'Active Clients', icon: 'groups' },
        { value: 1005, suffix: '+', label: '5-Star Reviews', icon: 'star' },
        { value: 98, suffix: '%', label: 'Client Retention', icon: 'trending_up' },
        { value: 24, suffix: '/7', label: 'Support Available', icon: 'support_agent' }
    ];

    return (
        <section className="w-full relative overflow-hidden py-20 md:py-32">
            {/* Diagonal Background Split */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-red-600/20 via-transparent to-transparent"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
                            <MaterialIcon className="text-red-400 text-lg">workspace_premium</MaterialIcon>
                            <span className="text-sm font-semibold text-red-400">Award-Winning Agency</span>
                        </div>

                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Building Bridges
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                                Between You & Your Customers
                            </span>
                        </h2>

                        <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                            We specialize in crafting high-performance lead generation campaigns tailored for small and mid-size businesses ready to scale.
                        </p>

                        <p className="mb-8 text-base text-gray-400 leading-relaxed">
                            Our mission is simple: combine human expertise with our proprietary Call Intelligence™ technology to plan, build, and execute digital advertising campaigns that deliver real, measurable growth.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform">
                                            <MaterialIcon className="text-white text-xl">{stat.icon}</MaterialIcon>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">
                                                <AnimatedCounter value={stat.value} />
                                                <span>{stat.suffix}</span>
                                            </div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/about-us/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                        >
                            <span className="tracking-tight">Discover Our Story</span>
                            <MaterialIcon className="text-xl group-hover:translate-x-1 transition-transform">arrow_forward</MaterialIcon>
                        </a>
                    </div>

                    {/* Right Image with Overlay Design */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-10"></div>
                                <Image
                                    src="/home_about_image1.png"
                                    alt="About NafaDigital"
                                    width={600}
                                    height={700}
                                    className="object-cover w-full h-[500px] md:h-[600px]"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                                        <MaterialIcon className="text-3xl text-white">emoji_events</MaterialIcon>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 font-medium">Google Premier</div>
                                        <div className="text-xl font-bold text-gray-900">Partner 2024</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Geometric Shapes */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl opacity-80 -z-10 hidden lg:block"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-red-500/30 rounded-2xl -z-10 hidden lg:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
// END:AboutSection
