import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, whatsapp, country, budget, email, source, conversationSummary, profession } = body

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

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 })
  }
}
