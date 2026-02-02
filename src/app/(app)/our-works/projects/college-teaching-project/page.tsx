'use client';

import React, { useEffect, useRef } from 'react';
import AnimatedCounter from '../../../../../components/AnimatedCounter';

// Icon Components for the four-column section
const CurriculumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const InstructionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    <path stroke="none" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const StudentSuccessIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const IndustryAlignmentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full fill-current stroke-current text-blue-500">
    <path stroke="none" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// Main App component
export default function CollegeTeachingProject() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video when component mounts
    const playVideo = () => {
      video.play().catch((error) => {
        console.log('Autoplay failed:', error);
      });
    };

    playVideo();
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <main>
        {/* --- Hero Section --- */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] text-white overflow-hidden">
          {/* Background with education theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 z-[1]"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white drop-shadow-lg mb-4 sm:mb-6">
              TEACHING - College Education Excellence
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl text-center text-white drop-shadow-md leading-relaxed mb-6 sm:mb-8">
              Empowering the next generation of marketers through innovative education across CDI College, ILAC College, Metro College, Citi College, and Evergreen College.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <button className="bg-blue-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Discover Our Educational Impact
              </button>
            </div>
          </div>
        </section>

        {/* --- Project Overview Section --- */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">Educational Excellence Project</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <p><strong>Institutions:</strong> CDI College, ILAC College, Metro College, Citi College, and Evergreen College</p>
                <p><strong>Industry:</strong> Education, Higher Learning</p>
                <p><strong>Market:</strong> B2C, Higher Education</p>
                <p><strong>Role:</strong> Senior Professor for Digital Marketing, E-commerce, Branding, Advertising, and Promotion</p>
                <p><strong>Location:</strong> Toronto, ON, Canada</p>
                <p><strong>Duration:</strong> October 2020 – Present</p>
                <p><strong>Scope of Work:</strong> Curriculum Development, Digital Marketing Instruction, E-commerce Training, Branding, Advertising, Promotion</p>
                <p>Leading private colleges in Canada offering career-focused education, specializing in practical, industry-aligned programs that bridge academic learning with real-world applications.</p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" alt="College Education" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* --- Challenge Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">The Challenge</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Preparing Students for a Dynamic Industry</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As a Senior Professor across multiple colleges (CDI College, ILAC College, Metro College, Citi College, and Evergreen College), the challenge was to design and deliver comprehensive curricula that equipped students with practical skills in digital marketing, e-commerce, branding, advertising, and promotion.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With diverse student backgrounds and rapidly evolving industry trends, the goal was to create engaging, relevant, and accessible educational experiences that prepared students for immediate career success.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Students Learning" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Approach Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Approach</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Building Industry-Relevant Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop" alt="Students Standing with Laptops" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We adopted a hands-on, student-centered approach, focusing on aligning course content with current industry demands. Through extensive research and collaboration with industry professionals, we developed 40 tailored curriculums that addressed emerging trends in digital marketing and e-commerce.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Our teaching methodology emphasized practical applications, case studies, and real-world projects to ensure students could seamlessly transition into professional roles.
                </p>
                <blockquote className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg italic text-gray-800 mb-4">
                    "The curriculums designed by this professor have transformed our students' ability to excel in the marketing industry."
                  </p>
                  <cite className="font-semibold text-blue-700">
                    - Academic Director, CDI College
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* --- Work Sections --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Educational Work</h2>
            
            {/* Work Item 1 - Comprehensive Instruction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Delivering Comprehensive Instruction</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Over the course of my tenure, I taught 1,700+ modules, dedicating 18,080 hours to instruction. This involved delivering engaging lectures, facilitating workshops, and mentoring students to develop expertise in digital marketing, e-commerce, branding, advertising, and promotion.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop" alt="Teaching in Action" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Work Item 2 - Curriculum Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="Curriculum Design" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Designing Tailored Curriculums</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I created 40 unique curriculums for 2,250+ students, ensuring alignment with industry trends and accommodating diverse educational backgrounds. These curriculums incorporated cutting-edge topics such as SEO, social media marketing, and e-commerce strategies, preparing students to meet the demands of a competitive job market.
                </p>
              </div>
            </div>

            {/* Work Item 3 - Student Evaluation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Evaluating Student Success</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I graded over 2,250 students, providing detailed feedback to foster growth and skill development. By implementing rigorous yet fair assessment methods, I ensured students mastered key concepts and could apply them in professional settings.
                </p>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" alt="Student Assessment and Grading" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Results Section --- */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 sm:mb-6">The Results</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                The educational initiatives delivered transformative outcomes for students and institutions:
              </p>
              <div className="text-left max-w-4xl mx-auto bg-blue-50 p-4 sm:p-6 rounded-lg">
                <ul className="text-gray-700 text-sm sm:text-base lg:text-lg space-y-2">
                  <li>• <strong>1,700+ modules taught</strong>, equipping students with in-demand skills</li>
                  <li>• <strong>18,080 hours dedicated to instruction</strong>, fostering deep learning</li>
                  <li>• <strong>2,250+ students graded</strong>, ensuring high standards of achievement</li>
                  <li>• <strong>40 curriculums designed</strong>, aligned with industry trends and diverse learner needs</li>
                </ul>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                  These efforts empowered students to launch successful careers in digital marketing, e-commerce, and branding, strengthening the colleges' reputations as leaders in career-focused education.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value="1700" suffix="+" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Modules Taught</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value="18080" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Hours of Instruction</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value="2250" suffix="+" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Students Graded</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value="40" />
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700">Curriculums Designed</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- College Logos Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Partner Institutions</h2>
              <p className="text-xl text-gray-600">Leading private colleges committed to excellence in education</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 text-lg">CDI College</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 text-lg">ILAC College</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 text-lg">Metro College</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 text-lg">Citi College</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 text-lg">Evergreen College</h4>
              </div>
            </div>
          </div>
        </section>

        {/* --- Content & Services Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Educational Content & Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive educational services covering all aspects of modern digital marketing education.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Curriculum Development</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Lecture Materials</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Case Studies</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Practical Workshops</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Student Assessments</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Education</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Digital Marketing Instruction</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">E-commerce Training</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Branding Strategy</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Advertising and Promotion</h4>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-200">
                <h4 className="font-semibold text-gray-800">Industry Trend Analysis</h4>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Banner --- */}
        <section className="relative py-24 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Level Up Your Brand's Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience excellence in digital marketing education and professional development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors">
                Visit Colleges
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </section>

        {/* --- Four Column Icons Section --- */}
        <section className="bg-blue-50 py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><CurriculumIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Curriculum Excellence</h3>
              <p className="text-gray-600">40 tailored curriculums designed to meet industry demands and diverse student backgrounds.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><InstructionIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Quality Instruction</h3>
              <p className="text-gray-600">Over 18,080 hours of dedicated instruction across 1,700+ modules with hands-on learning approach.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><StudentSuccessIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Student Success</h3>
              <p className="text-gray-600">2,250+ students graded with detailed feedback to ensure mastery of key concepts.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4"><IndustryAlignmentIcon /></div>
              <h3 className="text-2xl font-medium text-gray-800 mb-2">Industry Alignment</h3>
              <p className="text-gray-600">Programs aligned with current trends in digital marketing, e-commerce, and branding.</p>
            </div>
          </div>
        </section>

        {/* --- Footer CTA Section --- */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Level Up The Future of Your Brand</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to experience world-class education in digital marketing, e-commerce, and branding?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">
                Let's level up the future of your brand.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 Your Company Name. All rights reserved.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/terms-conditions" className="text-gray-400 hover:text-white text-sm">Terms and Conditions</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
