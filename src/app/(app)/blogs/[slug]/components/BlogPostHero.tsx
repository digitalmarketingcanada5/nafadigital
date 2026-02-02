'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl, type ImageData } from '@/lib/image-utils'

interface BlogPostHeroProps {
  post: {
    title: string
    excerpt: string
    featuredImage: ImageData
    author: {
      name: string
    }
    category: {
      name: string
      slug: string
      color?: string
    }
    publishedAt: string
    readTime?: number
  }
}

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  const imageUrl = getImageUrl(post.featuredImage, 'hero')
  const categoryColor = post.category.color || '#3B82F6'

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={post.featuredImage.alt || post.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Category */}
          <Link
            href={`/blogs?category=${post.category.slug}`}
            className="inline-block mb-4"
          >
            <span
              className="px-4 py-2 text-sm font-semibold text-white rounded-full hover:opacity-80 transition-opacity duration-200"
              style={{ backgroundColor: categoryColor }}
            >
              {post.category.name}
            </span>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="font-medium text-white">{post.author.name}</span>
            </div>
            
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>

            {post.readTime && (
              <>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}