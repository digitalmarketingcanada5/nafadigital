import dotenv from 'dotenv'
dotenv.config()

import { getPayload } from 'payload'
import config from '../payload.config'

const seed = async () => {
  console.log('Starting seed process...')

  try {
    // Get Payload instance
    const payload = await getPayload({ config })

    // Create admin user
    const adminUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@agency.com',
        password: 'admin123',
        name: 'Admin User',
        role: 'admin',
      },
    })

    console.log(`✅ Admin user created: ${adminUser.email}`)

    // Create sample categories
    const webDesignCategory = await payload.create({
      collection: 'categories',
      data: {
        name: 'Web Design',
        slug: 'web-design',
        description: 'Web design and development insights',
      },
    })

    const digitalMarketingCategory = await payload.create({
      collection: 'categories',
      data: {
        name: 'Digital Marketing',
        slug: 'digital-marketing', 
        description: 'Digital marketing strategies and tips',
      },
    })

    console.log(`✅ Categories created: ${webDesignCategory.name}, ${digitalMarketingCategory.name}`)

    // Create sample blog post
    const samplePost = await payload.create({
      collection: 'posts',
      data: {
        title: 'Welcome to Our Blog',
        slug: 'welcome-to-our-blog',
        excerpt: 'Learn about the latest trends in digital marketing and web development.',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    text: 'Welcome to our blog! Here you\'ll find the latest insights on digital marketing, web design, and business growth strategies.',
                  },
                ],
              },
            ],
          },
        },
        author: adminUser.id,
        category: digitalMarketingCategory.id,
        readTime: 3,
        publishedAt: new Date().toISOString(),
        _status: 'published',
      },
    })

    console.log(`✅ Sample blog post created: ${samplePost.title}`)
    console.log('🎉 Seed process completed successfully!')

  } catch (error) {
    console.error('❌ Seed process failed:', error)
    throw error
  }
}

// Run the seed function
seed().then(() => {
  console.log('Seeding completed. You can now access the admin panel.')
  process.exit(0)
}).catch((error) => {
  console.error('Seeding failed:', error)
  process.exit(1)
})