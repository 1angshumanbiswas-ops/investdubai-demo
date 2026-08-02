'use client'

import { useState } from 'react'

interface Props {
  languageLabel: string
  pdfHref: string
  onClose: () => void
}

export default function LeadGateModal({ languageLabel, pdfHref, onClose }: Props) {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim().length > 1 && whatsapp.trim().length > 7 && email.trim().includes('@') && consent

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid || loading) return
    setLoading(true)

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_LEADS_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            whatsapp,
            email,
            source: `Brochure Download — ${languageLabel}`,
          }),
        })
      }
    } catch (_) {
      /* silent — never block the download on a webhook failure */
    }

    setSubmitted(true)
    setLoading(false)

    setTimeout(() => {
      window.open(pdfHref, '_blank', 'noopener,noreferrer')
    }, 300)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-navy transition"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-navy font-semibold text-lg mb-1">Your guide is on its way.</p>
            <p className="text-gray-500 text-sm">
              Opening the {languageLabel} edition now — if it didn&apos;t open,{' '}
              <a href={pdfHref} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                click here
              </a>.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-1">
              {languageLabel} edition
            </p>
            <h3 className="text-navy font-display font-bold text-lg mb-1">
              A few details before your guide
            </h3>
            <p className="text-gray-500 text-sm mb-5">
              Your copy is sent instantly — Shylesh may follow up once, only if you want him to.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp number — with country code"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold"
              />

              <label className="flex items-start gap-2 text-xs text-gray-500 pt-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5"
                />
                <span>
                  Send me the guide and allow Shylesh to contact me once about my enquiry. I can ask to be
                  removed at any time.
                </span>
              </label>

              <button
                type="submit"
                disabled={!valid || loading}
                className="w-full bg-gold text-navy font-semibold py-2.5 rounded-xl hover:bg-gold-light transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Send Me the Guide'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
