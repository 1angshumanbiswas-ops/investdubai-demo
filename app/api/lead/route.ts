import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, whatsapp, country, budget, email, source, conversationSummary, profession, purpose, goldenVisa } = body

    if (!name || !whatsapp) {
      return NextResponse.json({ error: 'Name and WhatsApp are required' }, { status: 400 })
    }

    const webhookUrl = process.env.GHL_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('GHL_WEBHOOK_URL not set')
      return NextResponse.json({ success: true }) // Fail silently in dev
    }

    // Send to GoHighLevel via webhook
    const ghlPayload = {
      name,
      phone: whatsapp.startsWith('+') ? whatsapp : `+${whatsapp}`,
      email: email ?? '',
      country,
      budget,
      source: source ?? 'AI Advisor',
      conversationSummary: conversationSummary ?? '',
      tags: ['AI Advisor Lead', country, budget, profession].filter(Boolean),
      customFields: {
        country,
        budget_range: budget,
        investment_source: source ?? 'AI Advisor',
        whatsapp_number: whatsapp,
        conversation_summary: conversationSummary ?? '',
        profession: profession ?? '',
      },
    }

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload),
    })

    if (!res.ok) {
      console.error('GHL webhook failed:', res.status, await res.text())
    }

    // Also notify via the Apps Script webhook (Sheet + email), independent of
    // GHL — so a lead through this route always reaches the same notification
    // path as the rest of the site's forms, even if GHL automation isn't set up.
    const leadsWebhookUrl = process.env.NEXT_PUBLIC_LEADS_WEBHOOK_URL
    if (leadsWebhookUrl) {
      fetch(leadsWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name,
          whatsapp,
          email: email ?? '',
          country,
          budget,
          purpose: purpose ?? '',
          source: source ?? 'AI Advisor',
          notes: [goldenVisa ? 'Interested in Golden Visa' : '', conversationSummary ?? ''].filter(Boolean).join(' — '),
        }),
      }).catch(() => { /* silent — never block the response on this */ })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 })
  }
}
