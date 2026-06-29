// Simple in-memory rate limiter (resets on serverless cold start)
// For production, replace with Redis or Upstash

const map = new Map<string, { count: number; reset: number }>()

export function rateLimit(ip: string, limit = 50, windowMs = 3_600_000): boolean {
  const now = Date.now()
  const entry = map.get(ip)

  if (!entry || now > entry.reset) {
    map.set(ip, { count: 1, reset: now + windowMs })
    return true // allowed
  }

  if (entry.count >= limit) return false // blocked

  entry.count++
  return true // allowed
}
