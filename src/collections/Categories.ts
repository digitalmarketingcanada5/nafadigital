import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the name',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Hex color code for the category (e.g., #3B82F6)',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if ((operation === 'create' || operation === 'update') && data) {
          // Auto-generate slug from name if not provided
          if (data.name && !data.slug) {
            data.slug = data.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
          }
        }
        return data
      },
    ],
  },
  access: {
    read: () => true,
  },
}