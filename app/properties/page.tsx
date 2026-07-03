import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { ALL_PROPERTIES_QUERY } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Dubai Properties for Investment | Off-Plan, Ready & Secondary Market',
  description: 'Hand-picked Dubai investment properties — off-plan, ready, and secondary market. Apartments, villas, townhouses, and luxury residences across Dubai, Abu Dhabi, and Ras Al Khaimah.',
}

type Property = {
  title: string
  slug: { current: string }
  price: number
  currency: string
  area: string
  roiPercent: number
  goldenVisaEligible: boolean
  status: string
  developer?: { name: string }
  image?: unknown
}

const STATUS_COLORS: Record<string, string> = {
  'off-plan': 'bg-blue-100 text-blue-700',
  'ready': 'bg-green-100 text-green-700',
  'secondary': 'bg-orange-100 text-orange-700',
}

export default async function PropertiesPage() {
  let properties: Property[] = []
  try {
    properties = await sanityFetch<Property[]>(ALL_PROPERTIES_QUERY)
  } catch { properties = [] }

  return (
    <>
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Investment Properties</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">Dubai Properties for Global Investors</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Off-plan, ready, and secondary market opportunities hand-picked by Shylesh Raj across Dubai, Abu Dhabi, Ras Al Khaimah, and Sharjah.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['All', 'Off-Plan', 'Ready', 'Secondary Market'].map(f => (
              <span key={f} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm cursor-pointer hover:border-gold hover:text-gold transition">{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream px-4">
        <div className="max-w-7xl mx-auto">
          {properties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map(p => (
                <div key={p.slug.current} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition group">
                  <div className="h-52 bg-gray-100 relative">
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${STATUS_COLORS[p.status] ?? 'bg-gray-100 text-gray-600'}`}>{p.status}</span>
                      {p.goldenVisaEligible && <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/20 text-gold">🏅 Golden Visa</span>}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{p.area}{p.developer ? ` • ${p.developer.name}` : ''}</p>
                    <h3 className="font-semibold text-navy mb-3 group-hover:text-gold transition">{p.title}</h3>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Starting from</p>
                        <p className="text-xl font-bold text-navy font-display">AED {p.price.toLocaleString()}</p>
                      </div>
                      {p.roiPercent && (
                        <div className="text-right">
                          <p className="text-xs text-gray-400">ROI</p>
                          <p className="text-lg font-bold text-gold">{p.roiPercent}%</p>
                        </div>
                      )}
                    </div>
                    <Link href={`/contact?property=${p.slug.current}`}
                      className="mt-4 block w-full text-center bg-navy text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-navy-dark transition">
                      Enquire About This Property →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state — before Sanity is populated */
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🏙️</p>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Properties Being Added</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Shylesh is curating a selection of Dubai's best investment properties. In the meantime, book a free consultation and get a personalised shortlist sent directly to you.</p>
              <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
                Get a Personalised Property Shortlist →
              </Link>
            </div>
          )}

          {/* CTA regardless of content */}
          <div className="mt-16 bg-navy rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-white/60 mb-6">Shylesh has access to 30+ developer inventories and off-market opportunities. Tell him your requirements and get a curated shortlist within 24 hours.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
                Request a Property Shortlist →
              </Link>
              <Link href="/roi-calculator" className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition">
                Calculate ROI First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
