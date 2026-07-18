import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import { FAQ_ITEMS } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'Dubai Property FAQs | Buying, Ownership & Golden Visa Questions Answered',
  description: 'Answers to the most common questions on buying Dubai property as a foreign investor — ownership rules, off-plan process, mortgages, DLD fees, Golden Visa eligibility, and rental yields.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Dubai Property FAQs</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Know<br />
            <span className="text-gold">Before Investing in Dubai</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Straight answers on ownership, financing, fees, and the Golden Visa — from a RERA-certified advisor with 25+ years in the UAE market.
          </p>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} title="" />

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">Shylesh personally answers every enquiry — get a direct response within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
              Book a Free Consultation →
            </Link>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
              💬 WhatsApp Shylesh
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
