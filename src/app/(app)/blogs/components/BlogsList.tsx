'use client'

import { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import LoadingSpinner from './LoadingSpinner'
import { toast } from 'react-hot-toast'
import { type ImageData } from '@/lib/image-utils'

interface Post {
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

interface BlogsResponse {
  docs: Post[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export default function BlogsList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const fetchPosts = async (page: number = 1, category: string = '') => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '9',
        depth: '2',
        where: JSON.stringify({
          _status: { equals: 'published' },
          ...(category && { 'category.slug': { equals: category } })
        })
      })

      const response = await fetch(`/api/posts?${params}`)
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      const data: BlogsResponse = await response.json()
      setPosts(data.docs)
      setTotalPages(data.totalPages)
      setCurrentPage(data.page)
      setHasNextPage(data.hasNextPage)
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast.error('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts(1, selectedCategory)
  }, [selectedCategory])

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchPosts(currentPage + 1, selectedCategory)
    }
  }

  if (loading && posts.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">No posts found</h3>
        <p className="text-gray-600">
          {selectedCategory 
            ? `No posts found in the selected category.`
            : 'Check back soon for new content!'
          }
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {hasNextPage && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center">
                <LoadingSpinner size="small" />
                <span className="ml-2">Loading...</span>
              </span>
            ) : (
              'Load More Posts'
            )}
          </button>
        </div>
      )}
    </div>
  )
}