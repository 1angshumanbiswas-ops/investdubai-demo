import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// ── Typed fetcher ──────────────────────────────────────────────────────────
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return client.fetch<T>(query, params)
}
