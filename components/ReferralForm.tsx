'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Props {
  className?: string
}

export default function ReferralForm({ className }: Props) {
  const [form, setForm] = useState({
    name: '', whatsapp: '', email: '', profession: '', message: '', gdprConsent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [field]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.whatsapp) return
    setLoading(true)
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        whatsapp: form.whatsapp,
        email: form.email,
        profession: form.profession,
        conversationSummary: form.message,
        source: 'Partner Program',
      }),
    })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">✅</p>
        <h3 className="text-xl font-display font-bold text-navy mb-2">Thank You, {form.name}!</h3>
        <p className="text-gray-600 mb-4">Shylesh will personally reach out within 24 hours to discuss the partnership.</p>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi Shylesh, I'd like to discuss the referral partner program.`}
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
              placeholder="+971 50 000 0000"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Email Address</label>
            <input type="email" value={form.email} onChange={set('email')}
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Profession / Company</label>
            <input type="text" value={form.profession} onChange={set('profession')}
              placeholder="e.g. Real estate agent, wealth advisor, family office"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy mb-1">Tell us about your network</label>
          <textarea rows={3} value={form.message} onChange={set('message')}
            placeholder="Briefly describe the buyers or investors you can introduce (region, typical budget, etc.)"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold resize-none" />
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.gdprConsent}
            onChange={e => setForm(p => ({ ...p, gdprConsent: e.target.checked }))}
            className="w-4 h-4 mt-0.5 accent-gold shrink-0"
          />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to Nexus Elite Properties LLC storing my details to contact me about the referral partner program.{' '}
            <Link href="/privacy" className="text-gold hover:underline">Read our Privacy Policy.</Link>
          </span>
        </label>

        <button type="submit" disabled={loading || !form.gdprConsent}
          className="w-full bg-gold text-white rounded-xl py-3.5 font-semibold hover:bg-gold-light transition disabled:opacity-60">
          {loading ? 'Sending...' : 'Apply to Become a Partner →'}
        </button>
      </div>
    </form>
  )
}
