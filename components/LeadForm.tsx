'use client'

import Link from 'next/link'
import { useState } from 'react'

const COUNTRIES = [
  'India', 'UAE Resident', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Qatar', 'Oman',
  'United Kingdom', 'United States', 'Canada', 'Singapore', 'Australia',
  'Germany', 'France', 'Ireland', 'China / Hong Kong', 'Other',
]

const BUDGETS = [
  'AED 1M – 2M ($272K – $545K)', 'AED 2M – 5M ($545K – $1.36M)',
  'AED 5M – 10M ($1.36M – $2.72M)', 'AED 10M – 30M ($2.72M – $8.17M)', 'AED 30M+ ($8.17M+)',
]

interface Props {
  title?: string
  source?: string
  preselectedCountry?: string
  className?: string
}

export default function LeadForm({ title, source, preselectedCountry, className }: Props) {
  const [form, setForm] = useState({
    name: '', whatsapp: '', email: '',
    country: preselectedCountry ?? '',
    budget: '', purpose: '', goldenVisa: false, gdprConsent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [field]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.whatsapp) return
    setLoading(true)
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, source: source ?? 'Contact Form' }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">✅</p>
        <h3 className="text-xl font-display font-bold text-navy mb-2">Thank You, {form.name}!</h3>
        <p className="text-gray-600 mb-4">Shylesh will personally contact you within 24 hours via WhatsApp to discuss your investment goals.</p>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          💬 WhatsApp Shylesh Now
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 ${className ?? ''}`}>
      {title && <h3 className="font-display text-navy text-xl font-bold mb-6">{title}</h3>}

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Full Name *</label>
            <input type="text" required value={form.name} onChange={set('name')}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">WhatsApp Number *</label>
            <input type="tel" required value={form.whatsapp} onChange={set('whatsapp')}
              placeholder="+91 98765 43210"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy mb-1">Email Address</label>
          <input type="email" value={form.email} onChange={set('email')}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Your Country</label>
            <select value={form.country} onChange={set('country')}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
              <option value="">Select country...</option>
              {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Budget Range</label>
            <select value={form.budget} onChange={set('budget')}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
              <option value="">Select budget...</option>
              {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy mb-1">Investment Purpose</label>
          <select value={form.purpose} onChange={set('purpose')}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
            <option value="">Select purpose...</option>
            {['Rental Income', 'Capital Appreciation', 'Golden Visa', 'Own Use / Family', 'Portfolio Diversification', 'Resale'].map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={form.goldenVisa}
            onChange={e => setForm(p => ({ ...p, goldenVisa: e.target.checked }))}
            className="w-4 h-4 accent-gold" />
          <span className="text-sm text-charcoal">I am interested in the UAE Golden Visa</span>
        </label>

        {/* #10c GDPR consent checkbox — required for UK/EU visitors */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.gdprConsent}
            onChange={e => setForm(p => ({ ...p, gdprConsent: e.target.checked }))}
            className="w-4 h-4 mt-0.5 accent-gold shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to Nexus Elite Properties LLC storing my details to contact me about Dubai property investment.{' '}
            <Link href="/privacy" className="text-gold hover:underline">Read our Privacy Policy.</Link>
          </span>
        </label>

        <button type="submit" disabled={loading || !form.gdprConsent}
          className="w-full bg-gold text-white rounded-xl py-3.5 font-semibold hover:bg-gold-light transition disabled:opacity-60">
          {loading ? 'Sending...' : 'Request Free Consultation →'}
        </button>
      </div>
    </form>
  )
}
