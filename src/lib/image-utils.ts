/**
 * Utility functions for handling images in the blog system
 * Prioritizes Cloudinary URLs over local URLs
 */

export interface ImageData {
  url?: string
  alt?: string
  sizes?: {
    thumbnail?: {
      url: string
      width: number
      height: number
    }
    card?: {
      url: string
      width: number
      height: number
    }
    hero?: {
      url: string
      width: number
      height: number
    }
  }
}

/**
 * Get the best available image URL, prioritizing Cloudinary URLs
 * @param imageData - The image data object
 * @param sizePreference - Preferred size ('thumbnail', 'card', 'hero')
 * @param fallbackUrl - Fallback URL if no image is found
 * @returns The best available image URL
 */
export function getImageUrl(
  imageData?: ImageData | null,
  sizePreference: 'thumbnail' | 'card' | 'hero' = 'card',
  fallbackUrl = '/logo.png'
): string {
  if (!imageData) {
    return fallbackUrl
  }

  // First check if there's a specific size URL (these are typically from Cloudinary)
  if (imageData.sizes?.[sizePreference]?.url) {
    return imageData.sizes[sizePreference]!.url
  }

  // Then check for main URL (could be Cloudinary or local)
  if (imageData.url) {
    return imageData.url
  }

  // Fallback
  return fallbackUrl
}

/**
 * Check if an image URL is from Cloudinary
 * @param url - The image URL to check
 * @returns true if the URL is from Cloudinary
 */
export function isCloudinaryUrl(url: string): boolean {
  return url.includes('cloudinary.com') || url.includes('res.cloudinary.com')
}

/**
 * Get image dimensions from image data
 * @param imageData - The image data object
 * @param sizePreference - Preferred size ('thumbnail', 'card', 'hero')
 * @returns Object with width and height, or null if not available
 */
export function getImageDimensions(
  imageData?: ImageData | null,
  sizePreference: 'thumbnail' | 'card' | 'hero' = 'card'
): { width: number; height: number } | null {
  if (!imageData) {
    return null
  }

  // Check specific size dimensions
  if (imageData.sizes?.[sizePreference]) {
    const size = imageData.sizes[sizePreference]!
    return {
      width: size.width,
      height: size.height,
    }
  }

  // For Cloudinary URLs, we can return default dimensions based on our configuration
  if (imageData.url && isCloudinaryUrl(imageData.url)) {
    const defaultDimensions = {
      thumbnail: { width: 400, height: 300 },
      card: { width: 768, height: 512 },
      hero: { width: 1200, height: 630 },
    }
    return defaultDimensions[sizePreference]
  }

  return null
}

/**
 * Generate a Cloudinary URL with transformations
 * @param publicId - The Cloudinary public ID
 * @param transformations - Object with transformation parameters
 * @returns The transformed Cloudinary URL
 */
export function generateCloudinaryUrl(
  publicId: string,
  transformations: {
    width?: number
    height?: number
    crop?: string
    quality?: string
    format?: string
  } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloudName) {
    console.warn('Cloudinary cloud name not configured')
    return ''
  }

  const params = []
  
  if (transformations.width) params.push(`w_${transformations.width}`)
  if (transformations.height) params.push(`h_${transformations.height}`)
  if (transformations.crop) params.push(`c_${transformations.crop}`)
  if (transformations.quality) params.push(`q_${transformations.quality}`)
  if (transformations.format) params.push(`f_${transformations.format}`)

  const transformString = params.length > 0 ? params.join(',') + '/' : ''
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}${publicId}`
}