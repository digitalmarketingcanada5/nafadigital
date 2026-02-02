import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostHero from './components/BlogPostHero'
import BlogPostContent from './components/BlogPostContent'
import BlogPostSidebar from './components/BlogPostSidebar'
import RelatedPosts from './components/RelatedPosts'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// This would normally come from your CMS API
async function getPost(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?where[slug][equals]=${slug}&depth=2&limit=1`, {
      next: { revalidate: 60 } // Revalidate every minute
    })
    
    if (!response.ok) {
      return null
    }
    
    const data = await response.json()
    return data.docs[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription = post.seo?.metaDescription || post.excerpt
  const metaImage = post.seo?.metaImage?.url || post.featuredImage?.url

  return {
    title: `${metaTitle} - NafaDigital Blog`,
    description: metaDescription,
    keywords: post.tags?.map((tag: { tag: string }) => tag.tag).join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: metaImage ? [{ url: metaImage }] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: metaImage ? [metaImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPostHero post={post} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <BlogPostContent post={post} />
          </div>
          <div className="lg:col-span-1">
            <BlogPostSidebar post={post} />
          </div>
        </div>
      </div>

      <RelatedPosts currentPost={post} />
    </div>
  )
}