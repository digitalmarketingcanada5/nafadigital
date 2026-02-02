'use client'

import { motion } from 'framer-motion'

export default function BlogsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Digital Marketing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Insights
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Stay ahead of the curve with expert insights, proven strategies, and the latest trends in digital marketing and Google Ads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              📊 Data-Driven Insights
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              🎯 PPC Strategies
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              📈 Growth Tactics
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              🚀 Industry Trends
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}