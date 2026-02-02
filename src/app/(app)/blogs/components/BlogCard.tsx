'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl, type ImageData } from '@/lib/image-utils'

interface BlogCardProps {
  post: {
    id: string
    title: string
    slug: string
    excerpt: string
    featuredImage?: ImageData
    author?: {
      name?: string
    }
    category?: {
      name?: string
      color?: string
    }
    publishedAt: string
    readTime?: number
  }
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const imageUrl = getImageUrl(post.featuredImage, 'card', '/logo.png')
  const categoryColor = post.category?.color || '#3B82F6'

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.featuredImage?.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 text-xs font-semibold text-white rounded-full"
              style={{ backgroundColor: categoryColor }}
            >
              {post.category?.name || 'Uncategorized'}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="font-medium">{post.author?.name || 'Naj Sher'}</span>
              {post.readTime && (
                <span>{post.readTime} min read</span>
              )}
            </div>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}