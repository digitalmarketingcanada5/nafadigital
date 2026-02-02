import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { filename } = await params

    // Query the media collection to get the Cloudinary URL
    const media = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: filename
        }
      },
      limit: 1
    })

    if (media.docs.length > 0 && media.docs[0].url) {
      // Redirect to Cloudinary URL
      return NextResponse.redirect(media.docs[0].url, { status: 302 })
    } else {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
  } catch (error) {
    console.error('Error serving media file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}