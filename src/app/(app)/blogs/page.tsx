import { Metadata } from 'next'
import BlogsHero from './components/BlogsHero'
import BlogsList from './components/BlogsList'
import BlogsCategories from './components/BlogsCategories'

export const metadata: Metadata = {
  title: 'Blog - NafaDigital Digital Marketing Insights',
  description: 'Stay updated with the latest digital marketing trends, Google Ads strategies, and industry insights from our expert team.',
  keywords: 'digital marketing blog, Google Ads tips, PPC strategies, online marketing insights',
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogsList />
          </div>
          <div className="lg:col-span-1">
            <BlogsCategories />
          </div>
        </div>
      </div>
    </div>
  )
}