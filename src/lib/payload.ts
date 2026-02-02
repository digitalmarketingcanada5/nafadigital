import { getPayload } from 'payload'
import configPromise from '../payload.config'

let cachedPayload: unknown = null

export async function getPayloadClient() {
  if (cachedPayload) {
    return cachedPayload
  }

  cachedPayload = await getPayload({ config: configPromise })
  return cachedPayload
}

export { configPromise as payloadConfig }