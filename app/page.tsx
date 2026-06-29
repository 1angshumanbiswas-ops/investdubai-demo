import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { FEATURED_PROPERTIES_QUERY, TESTIMONIALS_QUERY } from '@/lib/queries'
import ROICalculator from '@/components/ROICalculator'
import LeadForm from '@/components/LeadForm'
import type { Property, Testimonial } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Invest in Dubai Properties with a RERA-Certified Advisor | 25+ Years UAE Experience',
  description: 'AI-powered Dubai property investment advisory for global investors. Off-plan, ready, and secondary market. Golden Visa guidance. Serving NRIs, HNIs, and investors from 15+ countries.',
}

const TRUST_STATS = [
  { value: '25+', label: 'Years UAE Experience' },
  { value: 'RERA', label: 'Certified Advisor' },
  { value: '500+', label: 'Investors Served' },
  { value: '15+', label: 'Countries Served' },
]

const WHO_WE_SERVE = [
  { icon: '🇮🇳', label: 'NRI Investors', href: '/countries/india' },
  { icon: '💎', label: 'HNI Clients', href: '/investors/hni' },
  { icon: '🏅', label: 'Golden Visa Seekers', href: '/golden-visa' },
  { icon: '🏢', label: 'Business Owners', href: '/investors/business-owners' },
  { icon: '🌍', label: 'GCC Investors', href: '/countries/gcc' },
  { icon: '🇬🇧', label: 'UK Investors', href: '/countries/united-kingdom' },
]

const WHY_DUBAI = [
  { icon: '0%', label: 'Capital Gains Tax', desc: 'No tax on property profits — ever' },
  { icon: '6–8%', label: 'Rental Yield', desc: '3× higher than London or Mumbai' },
  { icon: '10yr', label: 'Golden Visa', desc: 'Invest AED 2M+ for residency' },
  { icon: '↗️', label: 'Market Growth', desc: 'Consistent appreciation since 2020' },
]

export default async function HomePage() {
  const [properties, testimonials] = await Promise.all([
    sanityFetch<Property[]>(FEATURED_PROPERTIES_QUERY),
    sanityFetch<Testimonial[]>(TESTIMONIALS_QUERY),
  ])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gold/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold text-sm mb-6">
              <span>🏅</span> RERA Broker #77789  •  BRN Verified  •  25+ Years UAE
            </div>
            <h1 className="font-display text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Invest in Dubai Properties with a{' '}
              <span className="text-gold">RERA-Certified Advisor</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              AI-powered property advisory for global investors seeking off-plan, ready,
              secondary market, ROI-focused, and Golden Visa-linked Dubai property opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-gold text-navy px-6 py-3 rounded-xl font-bold hover:bg-gold-light transition">
                Book Free Consultation →
              </Link>
              <Link href="/roi-calculator" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition">
                Calculate ROI
              </Link>
            </div>
          </div>
        <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src="/shylesh.jpg"
                alt="Shylesh Raj - RERA Certified Dubai Property Advisor"
                className="w-80 h-96 object-cover object-top rounded-2xl border-4 border-gold/30 shadow-2xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur-sm rounded-xl p-3 border border-gold/20">
                <p className="text-white font-semibold text-sm">Shylesh Raj</p>
                <p className="text-gold text-xs">RERA Broker #77789</p>
                <p className="text-white/60 text-xs">Nexus Elite Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-navy">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Global Investors, One Trusted Advisor</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Shylesh Raj has helped investors from 15+ countries navigate Dubai's property market with confidence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WHO_WE_SERVE.map(w => (
              <Link key={w.href} href={w.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition text-center group">
                <span className="text-3xl">{w.icon}</span>
                <span className="text-sm font-semibold text-navy group-hover:text-gold transition">{w.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DUBAI ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Why Smart Investors Choose Dubai</h2>
            <p className="text-white/60 max-w-2xl mx-auto">In 2026, Dubai remains the world's most investor-friendly real estate market — zero taxes, strong yields, and a stable currency.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_DUBAI.map(w => (
              <div key={w.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-gold mb-2">{w.icon}</p>
                <p className="font-semibold text-white mb-1">{w.label}</p>
                <p className="text-white/50 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ──────────────────────────────────────────────── */}
      {properties.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-2">Featured Properties</h2>
                <p className="text-gray-500">Hand-picked opportunities across Dubai's top communities</p>
              </div>
              <Link href="/properties" className="text-gold text-sm font-semibold hover:underline hidden sm:block">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map(p => (
                <Link key={p.slug.current} href={`/properties/${p.slug.current}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition">
                  <div className="h-52 bg-gray-100 relative overflow-hidden">
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        p.status === 'off-plan' ? 'bg-blue-100 text-blue-700' :
                        p.status === 'ready' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>{p.status}</span>
                      {p.goldenVisaEligible && <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/20 text-gold">🏅 Golden Visa</span>}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{p.area} {p.developer && `• ${p.developer.name}`}</p>
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GOLDEN VISA CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block">🏅</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Get a UAE Golden Visa Through Property</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Invest AED 2,000,000+ in ready Dubai property and receive a 10-year renewable UAE residence visa for you, your spouse, children, and domestic staff.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/golden-visa" className="bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
              Check My Eligibility →
            </Link>
            <Link href="/contact" className="bg-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-navy-dark transition">
              Book Golden Visa Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy text-center mb-12">What Investors Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t, i) => (
                <div key={i} className="bg-cream rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, s) => <span key={s} className="text-gold text-sm">★</span>)}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONSULTATION FORM ────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Book Your Free Consultation</h2>
            <p className="text-white/60">Shylesh will personally review your investment goals and send a curated property shortlist within 24 hours.</p>
          </div>
          <LeadForm title="" source="Homepage Form" />
        </div>
      </section>
    </>
  )
}
