import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'category', '_status', 'updatedAt'],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 2000, // Autosave every 2 seconds
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Brief summary for blog cards and SEO',
      },
      validate: (value: unknown, { data }: { data: { _status?: string } }) => {
        if (data?._status === 'published' && (!value || (typeof value === 'string' && value.trim() === ''))) {
          return 'Excerpt is required for published posts'
        }
        return true
      }
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main image displayed in blog cards and post header',
      },
      validate: (value: unknown, { data }: { data: { _status?: string } }) => {
        if (data?._status === 'published' && !value) {
          return 'Featured image is required for published posts'
        }
        return true
      }
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
      validate: (value: unknown, { data }: { data: { _status?: string } }) => {
        if (data?._status === 'published' && !value) {
          return 'Content is required for published posts'
        }
        return true
      }
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      validate: (value: unknown, { data }: { data: { _status?: string } }) => {
        if (data?._status === 'published' && !value) {
          return 'Author is required for published posts'
        }
        return true
      }
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
      validate: (value: unknown, { data }: { data: { _status?: string } }) => {
        if (data?._status === 'published' && !value) {
          return 'Category is required for published posts'
        }
        return true
      }
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'readTime',
      type: 'number',
      admin: {
        description: 'Estimated reading time in minutes',
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Custom meta title (if different from post title)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Custom meta description for SEO',
          },
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Custom social sharing image',
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'When the post was published (auto-filled on first publish)',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          // Auto-generate slug from title if not provided
          if (data.title && !data.slug) {
            data.slug = data.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          }
          
          // Auto-set publishedAt when publishing for the first time
          if (data._status === 'published' && !data.publishedAt) {
            data.publishedAt = new Date()
          }
          
          // Auto-calculate read time if content exists
          if (data.content) {
            try {
              // Convert rich text to plain text for word count
              const contentStr = JSON.stringify(data.content)
              const wordCount = contentStr.replace(/<[^>]*>/g, '').split(/\s+/).filter(word => word.length > 0).length
              data.readTime = Math.max(1, Math.ceil(wordCount / 200)) // Minimum 1 minute
            } catch (error) {
              console.warn('Error calculating read time:', error)
              data.readTime = 1
            }
          }
        }
        return data
      },
    ],
  },
  access: {
    read: ({ req: { user } }) => {
      // If user is logged in, they can read all posts including drafts
      if (user) {
        return true
      }
      
      // Public users can only read published posts
      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: ({ req: { user } }) => {
      // Only authenticated users can create posts
      return Boolean(user)
    },
    update: ({ req: { user } }) => {
      // Only authenticated users can update posts
      return Boolean(user)
    },
    delete: ({ req: { user } }) => {
      // Only admins can delete posts
      return user?.role === 'admin'
    },
  },
}