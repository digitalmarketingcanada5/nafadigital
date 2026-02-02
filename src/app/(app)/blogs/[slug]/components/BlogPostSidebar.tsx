'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPostSidebarProps {
  post: {
    author?: {
      name?: string
    }
    category?: {
      name?: string
      slug?: string
      color?: string
    }
    publishedAt?: string
    readTime?: number
  }
}

export default function BlogPostSidebar({ post }: BlogPostSidebarProps) {
  const categoryColor = post.category?.color || '#3B82F6'
  const authorName = post.author?.name || 'Naj Sher'
  const authorInitial = authorName.charAt(0).toUpperCase()

  return (
    <div className="space-y-6">
      {/* Author Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {authorInitial}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{authorName}</h4>
            <p className="text-sm text-gray-600">Digital Marketing Expert</p>
          </div>
        </div>
      </motion.div>

      {/* Post Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Post Details</h3>
        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-600">Category:</span>
            <Link
              href={`/blogs?category=${post.category?.slug || ''}`}
              className="block mt-1"
            >
              <span
                className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundColor: categoryColor }}
              >
                {post.category?.name || 'Uncategorized'}
              </span>
            </Link>
          </div>
          
          <div>
            <span className="text-sm text-gray-600">Published:</span>
            <p className="text-gray-900 mt-1">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Not published'}
            </p>
          </div>

          {post.readTime && (
            <div>
              <span className="text-sm text-gray-600">Reading Time:</span>
              <p className="text-gray-900 mt-1">{post.readTime} minutes</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          <a
            href="#introduction"
            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            1. Understanding Digital Marketing
          </a>
          <a
            href="#strategies"
            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            2. Key Strategies
          </a>
          <a
            href="#implementation"
            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            3. Implementation Tips
          </a>
          <a
            href="#conclusion"
            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            4. Conclusion
          </a>
        </nav>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold mb-3">Need Help?</h3>
        <p className="text-blue-100 mb-4 text-sm">
          Get expert digital marketing advice for your business.
        </p>
        <Link
          href="/contact-us"
          className="block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  )
}