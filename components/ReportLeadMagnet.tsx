'use client'

import { useState } from 'react'
import Link from 'next/link'

const COUNTRIES = [
  'India', 'UAE', 'Saudi Arabia', 'UK', 'USA', 'Canada',
  'Singapore', 'China', 'Germany', 'France', 'Australia', 'Other',
]

interface Props {
  variant?: 'full' | 'compact'  // full = homepage banner, compact = sidebar/inline
  sourceTag?: string             // for GHL tracking e.g. 'homepage', 'india-page'
}

export default function ReportLeadMagnet({ variant = 'full', sourceTag = 'site' }: Props) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const valid = name.trim().length > 1 && whatsapp.trim().length > 7 && country

  async function handleDownload() {
    if (!valid) return
    setLoading(true)

    try {
      const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
      if (ghlUrl) {
        await fetch(ghlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, whatsapp, country,
            source: `report-widget-${sourceTag}`,
            leadMagnet: 'Dubai Real Estate Investor Report 2026',
            timestamp: new Date().toISOString(),
          }),
        })
      }
    } catch (_) { /* silent */ }

    setSubmitted(true)
    setLoading(false)

    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/nexus-investor-report-2026.pdf'
      link.download = 'Dubai-Real-Estate-Investor-Report-2026-Nexus-Elite.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 400)
  }

  // ── COMPACT variant (sidebar / country pages / inline) ──────────────────────
  if (variant === 'compact') {
    if (submitted) {
      return (
        <div className="bg-navy rounded-2xl p-5 text-center">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-semibold text-sm mb-1">Report downloading!</p>
          <a href="/nexus-investor-report-2026.pdf" download className="text-gold text-xs underline">
            Click here if it doesn&apos;t start
          </a>
        </div>
      )
    }

    return (
      <div className="bg-navy rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Free Investor Report</p>
            <p className="text-white/50 text-xs">Dubai Real Estate 2026</p>
          </div>
        </div>
        <div className="space-y-2.5">
          <input
            type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold"
          />
          <input
            type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp number"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold"
          />
          <select
            value={country} onChange={e => setCountry(e.target.value)}
            className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
          >
            <option value="" className="text-gray-900">Your country</option>
            {COUNTRIES.map(c => <option key={c} value={c} className="text-gray-900">{c}</option>)}
          </select>
          <button
            onClick={handleDownload}
            disabled={!valid || loading}
            className="w-full bg-gold text-navy rounded-lg py-2.5 text-sm font-bold hover:bg-gold/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Preparing…' : '↓ Download Free Report'}
          </button>
        </div>
      </div>
    )
  }

  // ── FULL variant (homepage section / standalone banner) ─────────────────────
  if (submitted) {
    return (
      <section className="bg-navy py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-white text-2xl font-bold mb-2">Your Report is Downloading</h3>
          <p className="text-white/60 text-sm mb-6">
            Shylesh will also personally reach out with insights specific to your investment goals.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/nexus-investor-report-2026.pdf"
              download="Dubai-Real-Estate-Investor-Report-2026.pdf"
              className="inline-flex items-center gap-2 bg-white text-navy px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition"
            >
              ↓ Download Again
            </a>
            <a
              href={`https://wa.me/971505818509?text=${encodeURIComponent(`Hi Shylesh, I just downloaded the Dubai Investor Report 2026. I'm from ${country} and interested in discussing investment opportunities.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp Shylesh
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-navy py-14 px-4">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Free · June 2026</span>
          </div>
          <h2 className="font-display text-white text-3xl lg:text-4xl font-bold mb-3">
            Dubai Real Estate<br />
            <span className="text-gold">Investor Report 2026</span>
          </h2>
          <p className="text-white/60 mb-6 leading-relaxed">
            Investor-grade analysis covering market trends, community yields, Golden Visa strategy,
            risk assessment, and a 2026–2030 forecast. Prepared exclusively for HNIs, NRIs, and global investors.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              '270K+ transactions in 2025',
              '5–9% gross yields across Dubai',
              'Community-by-community ROI data',
              'Dubai vs London vs Singapore vs NYC',
              'Golden Visa strategy guide',
              '2026–2030 market forecast',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-white/60">
                <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-xs">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/investor-report"
            className="inline-block mt-5 text-gold/70 text-xs underline hover:text-gold transition">
            View full report details →
          </Link>
        </div>

        {/* Right form */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <h3 className="font-display text-navy text-lg font-bold mb-1">Get the Free Report</h3>
          <p className="text-gray-400 text-xs mb-5">Enter your details to unlock the download</p>
          <div className="space-y-3">
            <input
              type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder="Full name *"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
            />
            <input
              type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
              placeholder="WhatsApp number *"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
            />
            <select
              value={country} onChange={e => setCountry(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
            >
              <option value="">Your country *</option>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button
              onClick={handleDownload}
              disabled={!valid || loading}
              className="w-full bg-gold text-navy rounded-xl py-3.5 font-bold text-sm hover:bg-gold/90 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Preparing…' : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Free Report
                </>
              )}
            </button>
            <p className="text-xs text-gray-400 text-center">
              No spam. Shared only with Shylesh Raj, RERA #77789.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
