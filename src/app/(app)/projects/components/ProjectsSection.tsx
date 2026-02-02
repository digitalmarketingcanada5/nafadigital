"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    // {
    //   title: "Digital Marketing Website",
    //   tech1: "React",
    //   tech2: "Next.js",
    //   tech3: "Tailwind CSS",
    //   tech4: "TypeScript",
    //   image: "/projects/p8-1.png",
    //   description: "A comprehensive digital marketing website that drives growth with smart digital advertising strategies. The website features transparent partnerships, data-driven strategies, and cutting-edge technology that delivers measurable results. Built with React, Next.js, and Tailwind CSS, it provides an engaging and professional presentation for potential clients seeking digital marketing excellence.",
    //   url: "https://www.nafadigital.com/"
    // },
    {
      title: "Landing pages",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "TypeScript",
      image: "/projects/p9-1.png",
      description: "A professional law firm website for Artisan Law LLP, featuring elegant design and comprehensive legal service information. The website showcases the firm's expertise as Greater Toronto Area's most trusted legal partners, offering personalized, practical, and results-driven legal solutions. Built with modern web technologies to ensure a professional and trustworthy online presence.",
      url: "https://www.artisanlawllp.com/"
    },
    {
      title: "Zionel - Agency Website",
      tech1: "React",
      tech2: "Next.js",
      tech3: "CSS",
      tech4: "TypeScript",
      image: "/projects/p6-1.png",
      description: "A comprehensive digital marketing agency website that showcases services, portfolio, and client success stories. It features a modern, responsive design with interactive elements and smooth animations. The website is built using React and Next.js, incorporating best practices in UI/UX design to ensure an engaging and professional presentation for potential clients.",
      url: "https://zionel.vercel.app/"
    },
    {
      title: "Advertising Website",
      tech1: "React",
      tech2: "Three js",
      tech3: "Tailwind CSS",
      tech4: "G SAP",
      image: "/projects/p3-1.png",
      description: "A pixel-perfect clone of the Apple website, showcasing responsive design, smooth animations, and a seamless user experience. This project replicates the elegant design and functionality that Apple is known for. The website is built using React, Three.js, and Tailwind CSS, ensuring a smooth and intuitive user experience.",
      url: "https://apple-website-green-psi.vercel.app/"
    },
    {
      title: "Vu Global - Consultancy Agency Website",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "TypeScript",
      image: "/projects/p7-1.png",
      description: "This is a consulting agency website, built with React and Next.js, offering a wide range of services for businesses and individuals. The UI is designed to be modern and responsive, ensuring a seamless experience across all devices.",
      url: "https://vu-global.vercel.app/"
    },
    {
      title: "AI SAAS application",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "TypeScript",
      image: "/projects/p1-1.png",
      description: "This is an AI-powered image editor that allows users to enhance, modify, and create stunning images with ease. Utilizing advanced AI algorithms, it offers features like background removal, color correction, and image upscaling, making professional-grade editing accessible to everyone. The application is built using React, Next.js, and Tailwind CSS, ensuring a seamless and intuitive user experience.",
      url: "https://imagener-phi.vercel.app/"
    },
    {
      title: "Video Calling Application",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "TypeScript",
      image: "/projects/p2-1.png",
      description: "A robust video calling application designed for seamless, real-time communication. It offers high-definition video, screen sharing, and a user-friendly interface, making it ideal for both personal and professional use. The application is built using React, Next.js, and Tailwind CSS, ensuring a smooth and responsive user experience.",
      url: "https://pip-meet.vercel.app/"
    },
    {
      title: "DentalCare Website",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "MongoDB",
      image: "/projects/p4-1.png",
      description: "A comprehensive website for a dental care service, offering easy appointment scheduling, service descriptions, and patient testimonials. The design emphasizes clarity and accessibility, making it user-friendly for all patients. The website is built using React, Next.js, and Tailwind CSS, ensuring a smooth and responsive user experience.",
      url: "https://smilemakers-dentalcare.vercel.app/"
    },
    {
      title: "WomenCare Hospital Website",
      tech1: "React",
      tech2: "Next.js",
      tech3: "Tailwind CSS",
      tech4: "TypeScript",
      image: "/projects/p5-1.png",
      description: "This is a dynamic website for a women's health care center, designed to provide a user-friendly and visually appealing interface for patients and visitors. It offers a range of features such as online appointment booking, patient registration, user subscriptions, and more. The website is built using React, Next.js, and Tailwind CSS, ensuring a seamless and responsive user experience.",
      url: "https://dr-suvarchala-womencare-j29o.vercel.app/"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-6"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recent <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest work spanning web applications, digital platforms, and innovative solutions that push the boundaries of modern technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 px-6"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative design solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;