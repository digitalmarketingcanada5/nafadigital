import type { CollectionConfig } from 'payload'
import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // Completely disable local storage and file handling
    disableLocalStorage: true,
    staticDir: undefined,
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    // Disable all file operations that expect local files
    resizeOptions: undefined,
    formatOptions: undefined,
    crop: false,
    focalPoint: false,
    imageSizes: undefined,
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        // Handle file upload to Cloudinary on create
        if (operation === 'create' && req.file) {
          try {
            console.log('Uploading file to Cloudinary:', req.file.name)
            console.log('File object keys:', Object.keys(req.file))
            console.log('File size:', req.file.size)
            console.log('File mimetype:', req.file.mimetype)
            console.log('File tempFilePath:', req.file.tempFilePath)
            console.log('File data type:', typeof req.file.data)
            console.log('File data length:', req.file.data ? req.file.data.length : 'no data')
            
            // Check if file was truncated due to size limits
            if (req.file.data && req.file.data.length >= 5000000) {
              throw new Error(`File may be too large or truncated. Consider uploading a smaller image. Current size: ${req.file.data.length} bytes`)
            }
            
            // Validate file type
            if (!req.file.mimetype || !req.file.mimetype.startsWith('image/')) {
              throw new Error(`Invalid file type: ${req.file.mimetype}. Please upload an image file.`)
            }
            
            const uploadResult = await new Promise<Record<string, unknown>>((resolve, reject) => {
              const uploadOptions = {
                resource_type: 'auto' as const,
                folder: 'agency-blog',
                public_id: req.file!.name.split('.')[0],
                use_filename: true,
                unique_filename: true,
                overwrite: false,
                eager: [
                  {
                    width: 400,
                    height: 300,
                    crop: 'fill',
                    gravity: 'center',
                    quality: 'auto:good',
                    fetch_format: 'auto',
                  },
                  {
                    width: 768,
                    height: 512,
                    crop: 'fill',
                    gravity: 'center',
                    quality: 'auto:good',
                    fetch_format: 'auto',
                  },
                  {
                    width: 1200,
                    height: 630,
                    crop: 'fill',
                    gravity: 'center',
                    quality: 'auto:good',
                    fetch_format: 'auto',
                  },
                ],
                eager_async: false,
              }

              // Use tempFilePath if available (better for large files)
              if (req.file!.tempFilePath) {
                console.log('Using tempFilePath:', req.file!.tempFilePath)
                cloudinary.uploader.upload(req.file!.tempFilePath, uploadOptions, (error, result) => {
                  if (error) {
                    console.error('Cloudinary upload error:', error)
                    reject(error)
                  } else if (result) {
                    resolve(result)
                  } else {
                    reject(new Error('Upload failed: No result returned'))
                  }
                })
              } else {
                // Fallback to buffer if tempFilePath not available
                console.log('Using buffer, length:', req.file!.data?.length)
                cloudinary.uploader
                  .upload_stream(uploadOptions, (error, result) => {
                    if (error) {
                      console.error('Cloudinary upload error:', error)
                      reject(error)
                    } else if (result) {
                      resolve(result)
                    } else {
                      reject(new Error('Upload failed: No result returned'))
                    }
                  })
                  .end(req.file!.data)
              }
            })

            console.log('Cloudinary upload successful:', uploadResult.public_id)

            // Generate sizes from eager transformations
            const sizes: Record<string, unknown> = {}
            const result = uploadResult as Record<string, unknown> & {
              eager?: Array<{
                secure_url: string;
                width: number;
                height: number;
                format: string;
                bytes: number;
              }>;
              public_id: string;
              original_filename?: string;
            }
            if (result.eager && result.eager.length > 0) {
              result.eager.forEach((eager, index: number) => {
                const sizeName = index === 0 ? 'thumbnail' : index === 1 ? 'card' : 'hero'
                sizes[sizeName] = {
                  url: eager.secure_url,
                  width: eager.width,
                  height: eager.height,
                  mimeType: `image/${eager.format}`,
                  filesize: eager.bytes,
                  filename: `${result.public_id}_${sizeName}.${eager.format}`,
                }
              })
            }

            // Sanitize filename to remove special characters and spaces
            const sanitizedFilename = (result.original_filename || req.file.name)
              .replace(/[^a-zA-Z0-9.-]/g, '_') // Replace special chars with underscore
              .replace(/_{2,}/g, '_') // Replace multiple underscores with single
              .toLowerCase()
            
            // Return data with Cloudinary URLs (no local file references)
            return {
              ...data,
              filename: sanitizedFilename,
              mimeType: uploadResult.resource_type === 'image' ? `image/${uploadResult.format}` : req.file!.mimetype,
              filesize: uploadResult.bytes,
              width: uploadResult.width,
              height: uploadResult.height,
              url: uploadResult.secure_url, // Main Cloudinary URL
              sizes, // Size-specific Cloudinary URLs
              cloudinaryData: uploadResult,
            }
          } catch (error) {
            console.error('Error uploading to Cloudinary:', error)
            throw new Error(`Failed to upload to Cloudinary: ${error}`)
          }
        }
        return data
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        // Delete from Cloudinary when document is deleted
        try {
          if (doc.cloudinaryData?.public_id) {
            console.log('Deleting from Cloudinary:', doc.cloudinaryData.public_id)
            await cloudinary.uploader.destroy(doc.cloudinaryData.public_id)
            console.log('Cloudinary delete successful')
          }
        } catch (error) {
          console.error('Error deleting from Cloudinary:', error)
          // Don't throw error to prevent blocking the delete operation
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    // Required fields for Payload upload functionality
    {
      name: 'filename',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'mimeType',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'filesize',
      type: 'number',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'width',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'height',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'sizes',
      type: 'json',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'cloudinaryData',
      type: 'json',
      admin: {
        hidden: true,
      },
    },
  ],
  access: {
    read: () => true,
  },
}