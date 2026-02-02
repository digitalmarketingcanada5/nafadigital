import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export interface CloudinaryUploadResult {
  public_id: string
  version: number
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder?: string
  access_mode: string
  original_filename: string
  eager?: Array<{
    transformation: string
    width: number
    height: number
    bytes: number
    format: string
    url: string
    secure_url: string
  }>
}

export const uploadToCloudinary = async (
  file: Buffer,
  options: {
    filename: string
    mimetype: string
    folder?: string
    transformation?: unknown
  }
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      resource_type: 'auto' as const,
      folder: options.folder || 'agency-blog',
      public_id: options.filename.split('.')[0],
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
      ...(typeof options.transformation === 'object' && options.transformation ? options.transformation : {}),
    }

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
      .end(file)
  })
}

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        console.error('Cloudinary delete error:', error)
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

export const getCloudinaryUrl = (publicId: string, transformation?: unknown) => {
  return cloudinary.url(publicId, {
    secure: true,
    ...(typeof transformation === 'object' && transformation ? transformation : {}),
  })
}

export default cloudinary