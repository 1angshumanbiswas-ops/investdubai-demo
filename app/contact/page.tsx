'use client'

import { useState } from 'react'

// ─── Shylesh's confirmed contact details (from Nexus Elite brochures) ────────
const CONTACT = {
  whatsapp: '971505818509',
  whatsappDisplay: '+971 50 581 8509',
  phone2: '+971 56 158 0683',
  phoneIndia: '+91 9072 984534',
  email: 'shylesh@nexuseliteproperties.com',
  address: '1st Floor, Madina Mall-Al Qusais, Muhaisnah 4, Dubai',
  rera: '77789',
  mapsLink: 'https://maps.google.com/?q=Madina+Mall+Al+Qusais+Dubai',
}

const BUDGETS = [
  'Under AED 1M', 'AED 1M – 2M', 'AED 2M – 5M', 'AED 5M – 10M', 'AED 10M+',
]
const PURPOSES = [
  'Investment / Rental Yield', 'Golden Visa', 'Own Use / Relocation',
  'Capital Appreciation', 'Portfolio Diversification',
]
const PROPERTY_TYPES = ['Apartment', 'Villa / Townhouse', 'Penthouse', 'Any / Flexible']
const TIMELINES = ['Within 1 month', '1–3 months', '3–6 months', '6+ months', 'Just exploring']

type Step = 1 | 2 | 3

interface FormData {
  name: string
  whatsapp: string
  email: string
  country: string
  budget: string
  purpose: string
  propertyType: string
  timeline: string
  message: string
}

const EMPTY: FormData = {
  name: '', whatsapp: '', email: '', country: '',
  budget: '', purpose: '', propertyType: '', timeline: '', message: '',
}

export default function ContactPage() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<FormData>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const set = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }))

  const step1Complete = form.name.trim() && form.whatsapp.trim() && form.country.trim()
  const step2Complete = form.budget && form.purpose && form.propertyType && form.timeline

  async function handleSubmit() {
    setSubmitting(true)
    try {
      const payload = { ...form, source: 'contact-page', timestamp: new Date().toISOString() }
      const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
      if (ghlUrl) {
        await fetch(ghlUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }
    } catch (_) { /* webhook is optional until GHL is connected */ }

    // Always open WhatsApp as the primary CTA
    const msg = `Hi Shylesh, I'd like to book a consultation.

Name: ${form.name}
Country: ${form.country}
Budget: ${form.budget}
Purpose: ${form.purpose}
Property Type: ${form.propertyType}
Timeline: ${form.timeline}
${form.message ? `\nNote: ${form.message}` : ''}`

    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-navy text-3xl font-bold mb-3">Request Sent!</h2>
          <p className="text-gray-500 mb-6">
            WhatsApp has opened with your consultation request. Shylesh personally responds to every inquiry — typically within a few hours.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 text-left mb-6">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Your Details</p>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-400">Name:</span> <span className="text-navy font-medium">{form.name}</span></p>
              <p><span className="text-gray-400">Country:</span> <span className="text-navy font-medium">{form.country}</span></p>
              <p><span className="text-gray-400">Budget:</span> <span className="text-navy font-medium">{form.budget}</span></p>
              <p><span className="text-gray-400">Purpose:</span> <span className="text-navy font-medium">{form.purpose}</span></p>
            </div>
          </div>
          <button onClick={() => { setSubmitted(false); setForm(EMPTY); setStep(1) }}
            className="text-navy underline text-sm">
            Submit another request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Free Consultation</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4">
            Book an Investor Consultation
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Shylesh personally handles every consultation — no junior brokers, no call centres. Share your requirements and he will send a curated shortlist within 24 hours.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gold/10 border-b border-gold/20 py-3 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-navy font-medium">
          <span>✅ RERA #77789</span>
          <span>✅ Zero brokerage fees</span>
          <span>✅ 25+ years UAE experience</span>
          <span>✅ Golden Visa holder</span>
          <span>✅ Personal response guaranteed</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-5 gap-10">

        {/* Left — Form */}
        <div className="lg:col-span-3">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            {([1, 2, 3] as Step[]).map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-navy text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {step > s ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${step >= s ? 'text-navy' : 'text-gray-400'}`}>
                  {s === 1 ? 'Your Details' : s === 2 ? 'Investment Goals' : 'Confirm'}
                </span>
                {s < 3 && <div className={`w-8 h-px ${step > s ? 'bg-navy' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step 1 — Contact details */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-display text-navy text-xl font-bold mb-1">Your Details</h2>
              <p className="text-gray-400 text-sm mb-6">How Shylesh will reach you</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
                  <input
                    type="text" value={form.name} onChange={e => set('name', e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">WhatsApp Number *</label>
                  <input
                    type="tel" value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                  />
                  <p className="text-xs text-gray-400 mt-1">Shylesh will WhatsApp you directly</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email Address</label>
                  <input
                    type="email" value={form.email} onChange={e => set('email', e.target.value)}
                    placeholder="e.g. rahul@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Country / City *</label>
                  <input
                    type="text" value={form.country} onChange={e => set('country', e.target.value)}
                    placeholder="e.g. Mumbai, India"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!step1Complete}
                className="mt-6 w-full bg-navy text-white rounded-xl py-3.5 font-semibold text-sm hover:bg-navy/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue to Investment Goals →
              </button>
            </div>
          )}

          {/* Step 2 — Investment goals */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-display text-navy text-xl font-bold mb-1">Investment Goals</h2>
              <p className="text-gray-400 text-sm mb-6">Helps Shylesh send you the right shortlist</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Budget Range *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {BUDGETS.map(b => (
                      <button key={b} onClick={() => set('budget', b)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-left transition ${form.budget === b ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Investment Purpose *</label>
                  <div className="space-y-2">
                    {PURPOSES.map(p => (
                      <button key={p} onClick={() => set('purpose', p)}
                        className={`w-full px-3 py-2.5 rounded-xl text-xs font-semibold border text-left transition ${form.purpose === p ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Property Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {PROPERTY_TYPES.map(t => (
                      <button key={t} onClick={() => set('propertyType', t)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-left transition ${form.propertyType === t ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">When are you planning to invest? *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {TIMELINES.map(t => (
                      <button key={t} onClick={() => set('timeline', t)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-left transition ${form.timeline === t ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-500 rounded-xl py-3 text-sm font-semibold hover:border-navy hover:text-navy transition">
                  ← Back
                </button>
                <button onClick={() => setStep(3)} disabled={!step2Complete}
                  className="flex-[2] bg-navy text-white rounded-xl py-3 font-semibold text-sm hover:bg-navy/90 transition disabled:opacity-40 disabled:cursor-not-allowed">
                  Review & Send →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Review */}
          {step === 3 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-display text-navy text-xl font-bold mb-1">Review & Send</h2>
              <p className="text-gray-400 text-sm mb-6">Confirm your details before sending to Shylesh</p>

              <div className="bg-cream rounded-xl p-4 space-y-2 text-sm mb-5">
                {[
                  ['Name', form.name], ['WhatsApp', form.whatsapp],
                  ['Country', form.country], ['Budget', form.budget],
                  ['Purpose', form.purpose], ['Property Type', form.propertyType],
                  ['Timeline', form.timeline],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <span className="text-gray-400 flex-shrink-0">{k}</span>
                    <span className="text-navy font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Any specific message? (optional)</label>
                <textarea
                  value={form.message} onChange={e => set('message', e.target.value)}
                  placeholder="e.g. I'm interested in Golden Visa properties near Downtown..."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold placeholder-gray-300 resize-none"
                />
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-5 text-xs text-green-700 flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Clicking Send opens WhatsApp with your details pre-filled. Shylesh personally receives and responds to every message.
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-gray-500 rounded-xl py-3 text-sm font-semibold hover:border-navy hover:text-navy transition">
                  ← Back
                </button>
                <button onClick={handleSubmit} disabled={submitting}
                  className="flex-[2] bg-green-500 text-white rounded-xl py-3 font-semibold text-sm hover:bg-green-600 transition disabled:opacity-50 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  {submitting ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right — Contact info sidebar */}
        <div className="lg:col-span-2 space-y-5">

          {/* Direct contact card */}
          <div className="bg-navy rounded-2xl p-6">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Direct Contact</p>
            <p className="text-white font-display text-xl font-bold mb-1">Shylesh Raj NK</p>
            <p className="text-white/60 text-sm mb-5">RERA Broker #{CONTACT.rera} · Nexus Elite Properties LLC</p>

            <div className="space-y-3">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 transition rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-white/80 text-xs">{CONTACT.whatsappDisplay}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 transition rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-white/70 text-xs break-all">{CONTACT.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">Phone (UAE)</p>
                  <p className="text-white/70 text-xs">{CONTACT.phone2}</p>
                  <p className="text-white/70 text-xs">{CONTACT.phoneIndia}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office address */}
          <a href={CONTACT.mapsLink} target="_blank" rel="noopener noreferrer"
            className="block bg-white rounded-2xl border border-gray-100 p-5 hover:border-navy transition">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-semibold text-sm mb-0.5">Office Address</p>
                <p className="text-gray-500 text-sm leading-relaxed">{CONTACT.address}</p>
                <p className="text-gold text-xs font-medium mt-1.5">Open in Google Maps →</p>
              </div>
            </div>
          </a>

          {/* What to expect */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-navy font-semibold text-sm mb-4">What happens next</p>
            <div className="space-y-3">
              {[
                { icon: '💬', step: 'Instant WhatsApp', desc: 'Your details go directly to Shylesh' },
                { icon: '⏱️', step: 'Response within 24hrs', desc: 'Personal response, not a bot' },
                { icon: '🏠', step: 'Curated shortlist', desc: 'Matched to your budget and goals' },
                { icon: '📞', step: 'Zoom or call', desc: 'Deep-dive consultation at your convenience' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-navy font-medium text-sm">{item.step}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zero fees note */}
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-4 text-sm text-navy">
            <p className="font-semibold mb-1">🏅 No brokerage fees</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Shylesh&apos;s advisory service is completely free for buyers. Developer commission covers all services — including property shortlisting, Golden Visa guidance, legal support, and post-sale assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
