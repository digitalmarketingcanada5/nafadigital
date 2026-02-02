'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlogCard from '../../components/BlogCard'
import { type ImageData } from '@/lib/image-utils'

interface RelatedPostsProps {
  currentPost: {
    id: string
    category: {
      id: string
      slug: string
    }
  }
}

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: ImageData
  author: {
    name: string
  }
  category: {
    name: string
    color?: string
  }
  publishedAt: string
  readTime?: number
}

export default function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const fetchRelatedPosts = useCallback(async () => {
    try {
      setLoading(true)
      
      // First try to get posts from the same category
      const categoryParams = new URLSearchParams({
        limit: '3',
        depth: '2',
        where: JSON.stringify({
          _status: { equals: 'published' },
          id: { not_equals: currentPost.id },
          'category.id': { equals: currentPost.category.id }
        })
      })

      let response = await fetch(`/api/posts?${categoryParams}`)
      let data = await response.json()
      
      // If we don't have enough posts from the same category, get recent posts
      if (data.docs.length < 3) {
        const recentParams = new URLSearchParams({
          limit: '3',
          depth: '2',
          sort: '-publishedAt',
          where: JSON.stringify({
            _status: { equals: 'published' },
            id: { not_equals: currentPost.id }
          })
        })
        
        response = await fetch(`/api/posts?${recentParams}`)
        data = await response.json()
      }
      
      setRelatedPosts(data.docs.slice(0, 3))
    } catch (error) {
      console.error('Error fetching related posts:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPost.id, currentPost.category.id])

  useEffect(() => {
    fetchRelatedPosts()
  }, [fetchRelatedPosts])

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Related Posts
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View All Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}