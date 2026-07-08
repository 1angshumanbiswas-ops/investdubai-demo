'use client'

import { useState } from 'react'

const BUDGETS = [
  'AED 1M – 2M ($272K – $545K)',
  'AED 2M – 5M ($545K – $1.36M)',
  'AED 5M – 10M ($1.36M – $2.72M)',
  'AED 10M – 30M ($2.72M – $8.17M)',
  'AED 30M+ ($8.17M+)',
]

const PURPOSES = [
  'Rental income (buy-to-let)',
  'Capital appreciation',
  'Golden Visa eligibility',
  'Holiday / personal use',
  'Family relocation',
  'Resale / flip',
]

const TYPES = [
  'Apartment',
  'Villa / Townhouse',
  'Luxury / Penthouse',
  'Off-plan only',
  'Ready to move',
  'No preference',
]

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '971505818509'

interface Props {
  variant?: 'page' | 'section'
}

export default function PropertyShortlistForm({ variant = 'section' }: Props) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [budget, setBudget] = useState('')
  const [purpose, setPurpose] = useState('')
  const [type, setType] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const valid = name.trim().length > 1 && whatsapp.trim().length > 7 && budget && purpose

  async function handleSubmit() {
    if (!valid) return
    setLoading(true)
    try {
      const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
      if (ghlUrl) {
        await fetch(ghlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, whatsapp, budget, purpose, propertyType: type,
            source: `property-shortlist-${variant}`,
            leadType: 'Shortlist Request',
            timestamp: new Date().toISOString(),
          }),
        })
      }
    } catch { /* silent */ }

    setDone(true)
    setLoading(false)

    // Luxury investors (AED 10M+) go to luxury page, others open WhatsApp
    const isLuxury = budget === 'AED 30M+ ($8.17M+)'
    setTimeout(() => {
      if (isLuxury) {
        window.location.href = '/luxury-properties#enquire'
      } else {
        const msg = `Hi Shylesh, I'd like a free property shortlist.\n\nBudget: ${budget}\nPurpose: ${purpose}${type ? `\nProperty type: ${type}` : ''}\n\nPlease send me your top 3 recommendations.`
        window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
      }
    }, 800)
  }

  if (done) {
    const isLuxury = budget === 'AED 30M+ ($8.17M+)'
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {isLuxury ? (
          <>
            <h3 className="font-display text-2xl font-bold text-navy mb-2">Taking You to Our Luxury Advisory</h3>
            <p className="text-gray-500 mb-4 max-w-sm mx-auto">
              For your investment level, Shylesh provides private, discreet advisory — not public listings.
              Redirecting you now…
            </p>
          </>
        ) : (
          <>
            <h3 className="font-display text-2xl font-bold text-navy mb-2">Shortlist Request Received!</h3>
            <p className="text-gray-500 mb-2 max-w-sm mx-auto">
              Shylesh will personally review your requirements and send you 3 handpicked properties via WhatsApp within 24 hours.
            </p>
            <p className="text-sm text-gold font-semibold">WhatsApp opening now…</p>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={variant === 'page' ? 'max-w-xl mx-auto' : ''}>
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text" value={name} onChange={e => setName(e.target.value)}
          placeholder="Your name *"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
        />
        <input
          type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
          placeholder="WhatsApp number *"
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
        />
        <select
          value={budget} onChange={e => setBudget(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
        >
          <option value="">Budget range *</option>
          {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <select
          value={purpose} onChange={e => setPurpose(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
        >
          <option value="">Investment purpose *</option>
          {PURPOSES.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <select
          value={type} onChange={e => setType(e.target.value)}
          className="sm:col-span-2 border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
        >
          <option value="">Property type (optional)</option>
          {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!valid || loading}
        className="mt-4 w-full bg-gold text-navy rounded-xl py-4 font-bold text-sm hover:bg-gold/90 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? 'Sending…' : (
          <>
            <span>Send Me My Free Property Shortlist</span>
            <span>→</span>
          </>
        )}
      </button>
      <p className="text-xs text-gray-400 text-center mt-2">
        Delivered via WhatsApp within 24 hours · No obligation · RERA #77789
      </p>
    </div>
  )
}
