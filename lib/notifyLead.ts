// Shared helper: fires a lead to the Apps Script webhook (Google Sheet + email
// notification), independent of whatever the GHL webhook does. Used across every
// lead-capturing form on the site so a submission anywhere always reaches the
// Sheet and triggers an email — not dependent on GHL automation being configured.
//
// Client-side only. Uses text/plain to avoid a CORS preflight against the Apps
// Script endpoint (it doesn't handle OPTIONS requests) — the script itself still
// JSON.parses the raw body regardless of the declared content type.
export function notifyLead(data: {
  name?: string
  whatsapp?: string
  email?: string
  country?: string
  budget?: string
  purpose?: string
  propertyType?: string
  timeline?: string
  source?: string
  notes?: string
}) {
  const webhookUrl = process.env.NEXT_PUBLIC_LEADS_WEBHOOK_URL
  if (!webhookUrl) return

  try {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      keepalive: true,
    }).catch(() => {
      /* silent — never block the user's flow on a notification failure */
    })
  } catch (_) {
    /* silent */
  }
}
