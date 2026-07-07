'use client'

import { useState, useEffect, useCallback } from 'react'

const COUNTRIES = ['India', 'UAE', 'Saudi Arabia', 'UK', 'USA', 'Canada', 'Singapore', 'Australia', 'Other']
const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '971505818509'

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) {
      try {
        if (localStorage.getItem('exit_seen')) return
        localStorage.setItem('exit_seen', '1')
      } catch { /* */ }
      setShow(true)
    }
  }, [])

  useEffect(() => {
    // Small delay so it doesn't fire immediately on page load
    const t = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)
    return () => {
      clearTimeout(t)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

  async function handleSubmit() {
    if (!name.trim() || !whatsapp.trim() || !country) return
    setLoading(true)
    try {
      const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
      if (ghlUrl) {
        await fetch(ghlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, whatsapp, country,
            source: 'exit-intent-popup',
            leadMagnet: 'Dubai Investor Report 2026 — Exit Intent',
            timestamp: new Date().toISOString(),
          }),
        })
      }
    } catch { /* silent */ }
    setDone(true)
    setLoading(false)
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/nexus-investor-report-2026.pdf'
      link.download = 'Dubai-Real-Estate-Investor-Report-2026.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 400)
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={e => { if (e.target === e.currentTarget) setShow(false) }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Top banner */}
        <div className="bg-navy px-6 pt-6 pb-5 relative">
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition"
            aria-label="Close"
          >✕</button>
          <div className="text-3xl mb-2">📊</div>
          <h2 className="font-display text-white text-xl font-bold leading-snug">
            Wait — don't leave empty-handed
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Get the free 27-page Dubai Real Estate Investor Report 2026 — used by HNIs and NRIs
            to make smarter property decisions.
          </p>
        </div>

        {/* What's inside */}
        <div className="px-6 py-4 bg-cream border-b border-gray-100">
          <p className="text-xs font-semibold text-navy uppercase tracking-widest mb-2">What's inside</p>
          <div className="grid grid-cols-2 gap-1">
            {[
              '5–9% rental yield data',
              'Golden Visa guide',
              'Community ROI breakdown',
              '2026–2030 forecast',
            ].map(i => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="text-gold">✓</span> {i}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-5">
          {done ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-navy mb-1">Your report is downloading!</p>
              <p className="text-gray-500 text-sm">Shylesh will be in touch shortly.</p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi Shylesh, I just downloaded the Dubai Investor Report.')}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-green-600 transition"
              >
                💬 WhatsApp Shylesh
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              <input
                type="text" value={name} onChange={e => setName(e.target.value)}
                placeholder="Your name *"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
              />
              <input
                type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                placeholder="WhatsApp number *"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
              />
              <select
                value={country} onChange={e => setCountry(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
              >
                <option value="">Your country *</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !whatsapp.trim() || !country || loading}
                className="w-full bg-gold text-navy rounded-xl py-3 font-bold text-sm hover:bg-gold/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Preparing…' : '↓ Send Me the Free Report'}
              </button>
              <p className="text-xs text-gray-400 text-center">No spam. Shared only with Shylesh Raj, RERA #77789.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
