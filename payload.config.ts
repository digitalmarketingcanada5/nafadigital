import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import path from 'path'

// Collections
import { Posts } from './src/collections/Posts'
import { Categories } from './src/collections/Categories'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Users, Posts, Categories, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve('./src/payload-types.ts'),
  },
  db: mongooseAdapter({
    // Database connection string from environment variables
    url: process.env.DATABASE_URI as string,
    connectOptions: {
      dbName: 'efflingcms',                    // Database name
      appName: 'efflingcms',                   // Application identifier for MongoDB
      serverSelectionTimeoutMS: 10000,        // Timeout for finding MongoDB server
      maxPoolSize: 10,                         // Maximum concurrent database connections
      socketTimeoutMS: 45000,                  // Timeout for individual database operations
      family: 4,                               // Use IPv4, avoid IPv6 connection issues
      retryWrites: true,                       // Automatically retry failed writes
      w: 'majority',                           // Write concern for data consistency
    },
  }),
  email: nodemailerAdapter(),
  upload: {
    limits: {
      fileSize: 10000000, // 10MB (increased from 5MB)
    },
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
})