import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Book a Free Dubai Property Consultation | Shylesh Raj',
  description: 'Book a free 30-minute consultation with Shylesh Raj, RERA-certified Dubai property advisor. Get a personalised property shortlist and ROI analysis within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4">Book a Free Consultation</h1>
          <p className="text-white/70 text-lg">Shylesh will personally review your investment goals and send a curated property shortlist within 24 hours.</p>
        </div>
      </section>

      <section className="py-16 bg-cream px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">What to expect</h2>
            <div className="space-y-4">
              {[
                { icon: '📞', title: 'Personal Call Within 24 Hours', desc: 'Shylesh calls you directly — not an assistant or call centre.' },
                { icon: '📋', title: 'Curated Property Shortlist', desc: 'Based on your budget, goals, and preferred areas — 3–5 hand-picked options.' },
                { icon: '📊', title: 'ROI Analysis for Each Property', desc: 'Realistic rental yield, capital appreciation, and net return projections.' },
                { icon: '🏅', title: 'Golden Visa Assessment', desc: 'Shylesh will assess your Golden Visa eligibility and guide you through the process.' },
                { icon: '🌍', title: 'Multilingual Support', desc: 'Consultations available in English, Hindi, Malayalam, and Arabic.' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl">
              <p className="text-sm font-semibold text-charcoal mb-2">Prefer WhatsApp?</p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi Shylesh, I'd like a free consultation about Dubai property investment.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] font-semibold text-sm hover:underline"
              >
                💬 Message Shylesh on WhatsApp →
              </a>
            </div>
          </div>

          <LeadForm title="Request Your Free Consultation" source="Contact Page" />
        </div>
      </section>
    </div>
  )
}
