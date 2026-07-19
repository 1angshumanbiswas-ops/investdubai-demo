'use client'

import { useState } from 'react'

const REPORT_STATS = [
  { value: '270K+', label: '2025 Transactions' },
  { value: 'AED 917B', label: 'Total Market Value' },
  { value: '5–9%', label: 'Gross Yields' },
  { value: '+60%', label: 'Prices Since 2022' },
]

const CHAPTERS = [
  { num: '01', title: 'Dubai Economic Outlook 2026' },
  { num: '02', title: 'Why Global Investors Are Moving Capital to Dubai' },
  { num: '03', title: 'Dubai Real Estate Market Overview' },
  { num: '04', title: 'Hottest Investment Locations in Dubai' },
  { num: '05', title: 'Luxury Real Estate & HNWI Trends' },
  { num: '06', title: 'Rental Yield & Cash Flow Analysis' },
  { num: '07', title: 'Golden Visa & Residency Through Real Estate' },
  { num: '08', title: 'Risks Every Investor Must Understand' },
  { num: '09', title: 'AI, Technology & the Future of Dubai Real Estate' },
  { num: '10', title: 'Best Investment Strategies for 2026' },
  { num: '11', title: 'Dubai Real Estate Forecast 2026–2030' },
  { num: '12', title: 'Action Plan for Investors' },
]

const COUNTRIES = [
  'India', 'UAE', 'Saudi Arabia', 'UK', 'USA', 'Canada',
  'Singapore', 'China', 'Germany', 'France', 'Australia', 'Other',
]

export default function InvestorReportPage() {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [country, setCountry] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const valid = name.trim().length > 1 && whatsapp.trim().length > 7 && country

  async function handleSubmit() {
    if (!valid) return
    setLoading(true)
    setError('')

    try {
      // Fire GHL webhook
      const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
      if (ghlUrl) {
        await fetch(ghlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            whatsapp,
            country,
            source: 'investor-report-download',
            leadMagnet: 'Dubai Real Estate Investor Report 2026',
            timestamp: new Date().toISOString(),
          }),
        })
      }
    } catch (_) { /* continue even if webhook fails */ }

    setSubmitted(true)
    setLoading(false)

    // Trigger PDF download
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/nexus-investor-report-2026.pdf'
      link.download = 'Dubai-Real-Estate-Investor-Report-2026-Nexus-Elite.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-cream">

      {/* Hero — dark, premium */}
      <section
        className="bg-navy relative overflow-hidden py-16 px-4"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, #1a3360 0%, #0B1C3D 60%)' }}
      >
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Free Download · June 2026 Edition</span>
            </div>
            <h1 className="font-display text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Dubai Real Estate<br />
              <span className="text-gold">Investor Report</span><br />
              2026
            </h1>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Investor-grade analysis covering market trends, community-by-community yield data, Golden Visa strategy, risk assessment, and a 2026–2030 forecast. Prepared exclusively for HNIs, NRIs, and global property investors.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {REPORT_STATS.map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <p className="text-gold font-bold text-xl">{s.value}</p>
                  <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* What's inside preview */}
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Inside this report</p>
            <div className="grid grid-cols-2 gap-1.5">
              {CHAPTERS.slice(0, 6).map(c => (
                <div key={c.num} className="flex items-start gap-2 text-xs text-white/60">
                  <span className="text-gold font-bold flex-shrink-0">{c.num}</span>
                  <span>{c.title}</span>
                </div>
              ))}
              <div className="col-span-2 text-xs text-gold/70 mt-1">+ 6 more chapters →</div>
            </div>
          </div>

          {/* Right — form or success */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-navy text-2xl font-bold mb-2">Your Report is Downloading</h2>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  The PDF should start downloading automatically. Shylesh will also personally reach out to share insights specific to your investment goals.
                </p>
                <a
                  href="/nexus-investor-report-2026.pdf"
                  download="Dubai-Real-Estate-Investor-Report-2026-Nexus-Elite.pdf"
                  className="block w-full bg-navy text-white rounded-xl py-3 text-sm font-semibold text-center hover:bg-navy/90 transition mb-3"
                >
                  ↓ Download Again
                </a>
                <a
                  href={`https://wa.me/971505818509?text=${encodeURIComponent(`Hi Shylesh, I just downloaded the Dubai Investor Report 2026. I'm from ${country} and would love to discuss investment opportunities.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white rounded-xl py-3 text-sm font-semibold text-center hover:bg-green-600 transition"
                >
                  💬 WhatsApp Shylesh to Discuss
                </a>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="font-display text-navy text-xl font-bold mb-1">Get the Free Report</h2>
                <p className="text-gray-400 text-sm mb-6">Enter your details to unlock the full analysis</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={e => setWhatsapp(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Shylesh may follow up with insights tailored to your market
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Your Country *
                    </label>
                    <select
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                    >
                      <option value="">Select your country</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  {error && <p className="text-red-500 text-xs">{error}</p>}

                  <button
                    onClick={handleSubmit}
                    disabled={!valid || loading}
                    className="w-full bg-gold text-navy rounded-xl py-4 font-bold text-sm hover:bg-gold/90 transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Preparing download…</span>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Free Report
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    No spam. Your details are shared only with Shylesh. You can opt out any time.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full chapter list */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest text-center mb-2">What&apos;s Inside</p>
        <h2 className="font-display text-navy text-3xl font-bold text-center mb-10">
          12 Chapters of Investor-Grade Analysis
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {CHAPTERS.map(c => (
            <div key={c.num} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <span className="text-gold font-bold text-2xl font-display leading-none flex-shrink-0 w-8">{c.num}</span>
              <p className="text-navy font-medium text-sm leading-snug pt-0.5">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key data preview */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Sample Data from the Report</p>
          <h2 className="font-display text-white text-3xl font-bold mb-10">Dubai vs Global Markets 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-gold text-xs uppercase tracking-wide text-left py-3 pr-4">Factor</th>
                  {['Dubai', 'London', 'New York', 'Singapore', 'Mumbai'].map(city => (
                    <th key={city} className={`text-xs uppercase tracking-wide py-3 px-2 ${city === 'Dubai' ? 'text-gold' : 'text-white/40'}`}>
                      {city}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Income Tax', '0%', '45%', '~50%', '24%', '~39%'],
                  ['Capital Gains Tax', '0%', '24%', '~24%', '0%', '12.5–20%'],
                  ['Annual Property Tax', 'None', 'Council', '1–2%+', 'Up to 36%', '~0.5%'],
                  ['Gross Rental Yield', '5–9%', '2.5–4%', '2.5–4%', '2.5–3.5%', '2.5–4%'],
                  ['Residency via Property', '✅ AED 2M', '—', '—', '—', 'N/A'],
                  ['Price / sq ft (USD)', '1,000–1,500', '2,500–4,000', '2,500–4,000', '2,800–3,800', '700–1,200'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : ''}>
                    <td className="text-white/60 text-xs py-3 pr-4 text-left">{row[0]}</td>
                    {row.slice(1).map((val, j) => (
                      <td key={j} className={`py-3 px-2 text-center text-xs font-medium ${j === 0 ? 'text-gold' : 'text-white/50'}`}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/30 text-xs mt-4">Source: Nexus Elite Private Wealth Research · 2025–26 market reports</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 text-center bg-cream">
        <h2 className="font-display text-navy text-3xl font-bold mb-3">
          Ready to Make Your First Dubai Investment?
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Download the report, then book a free consultation with Shylesh to discuss what the data means for your specific budget, country, and goals.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold/90 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download the Free Report
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy/90 transition"
          >
            Book a Consultation →
          </a>
        </div>
      </section>
    </div>
  )
}
