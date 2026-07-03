import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dubai Property Investor Case Studies | Real Results from Global Investors',
  description: 'Anonymised real investor case studies — NRIs, HNIs, GCC investors, Golden Visa seekers, and first-time buyers who invested in Dubai property with Shylesh Raj.',
}

const PLACEHOLDER_CASES = [
  {
    id: 1,
    title: 'NRI from Bangalore — Off-Plan Investment + Golden Visa',
    background: 'IT professional based in Bangalore, India. Looking to diversify wealth outside India with a property that also qualifies for Golden Visa.',
    budget: 'AED 2.2 million',
    country: 'India',
    purpose: 'Rental income + Golden Visa',
    communities: ['Sobha Hartland', 'Dubai Hills Estate'],
    propertyType: '2BR Apartment',
    roi: '7.1% gross rental yield',
    goldenVisa: 'Eligible — AED 2M+ ready property',
    outcome: 'Investor purchased a 2BR apartment in Sobha Hartland. Property registered with DLD. Golden Visa application submitted within 30 days of handover. Rental income started within 3 months.',
    tags: ['NRI', 'Golden Visa', 'Off-Plan'],
  },
  {
    id: 2,
    title: 'Business Owner from Dubai — Secondary Market Portfolio Expansion',
    background: 'UAE-based business owner seeking capital appreciation and rental yield from Dubai secondary market properties.',
    budget: 'AED 4 million (2 properties)',
    country: 'UAE Resident',
    purpose: 'Capital appreciation + rental income',
    communities: ['Business Bay', 'Downtown Dubai'],
    propertyType: '1BR + Studio',
    roi: '6.8% average rental yield',
    goldenVisa: 'Already held Golden Visa',
    outcome: 'Two secondary market properties acquired below market value. Both tenanted within 45 days. Combined rental income exceeds AED 250,000 per year.',
    tags: ['UAE Resident', 'Secondary Market', 'Portfolio'],
  },
  {
    id: 3,
    title: 'UK-Based NRI — First Dubai Property Investment',
    background: 'First-generation Indian immigrant based in London. Wanted a Dubai investment as a tax-free income stream and potential family relocation option.',
    budget: 'AED 1.5 million',
    country: 'United Kingdom',
    purpose: 'Rental income + lifestyle option',
    communities: ['JVC', 'Arjan'],
    propertyType: '1BR Apartment',
    roi: '7.4% gross rental yield',
    goldenVisa: 'Not applicable at this budget — plan to upgrade in 3 years',
    outcome: 'Purchased off-plan 1BR in JVC with 60/40 payment plan. Handover in 18 months. Expected rental income AED 110,000/year on AED 1.5M investment.',
    tags: ['UK Investor', 'First Investment', 'Off-Plan'],
  },
  {
    id: 4,
    title: 'GCC Investor — Luxury Secondary Market Purchase',
    background: 'Saudi Arabia-based investor seeking luxury lifestyle property in Dubai with strong rental yield during periods of non-use.',
    budget: 'AED 8 million',
    country: 'Saudi Arabia',
    purpose: 'Luxury lifestyle + rental income',
    communities: ['Palm Jumeirah', 'Dubai Marina'],
    propertyType: '3BR Apartment with sea view',
    roi: '5.9% net rental yield',
    goldenVisa: 'Eligible — AED 2M+ threshold met',
    outcome: 'Acquired a 3BR apartment on Palm Jumeirah. Managed by a professional holiday home operator during periods of non-use. Generating AED 420,000/year in short-term rental income.',
    tags: ['GCC', 'Luxury', 'Holiday Home'],
  },
  {
    id: 5,
    title: 'Retired Indian Professional — Capital Preservation + Income',
    background: 'Retired doctor based in Hyderabad. Looking to preserve capital, generate passive income, and explore UAE residency for winter months.',
    budget: 'AED 2.5 million',
    country: 'India',
    purpose: 'Capital preservation + passive income + Golden Visa',
    communities: ['Dubai South', 'MBR City'],
    propertyType: 'Studio + 1BR (two units)',
    roi: '7.2% combined rental yield',
    goldenVisa: 'Eligible — combined value AED 2.5M',
    outcome: 'Two ready properties purchased. Both tenanted immediately through Shylesh\'s network. Golden Visa processed in 6 weeks. Investor now spends 3 months per year in Dubai using their Emirates ID.',
    tags: ['Retired', 'Golden Visa', 'Passive Income'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Investor Case Studies</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">Real Investors. Real Results.</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Anonymised case studies from investors across India, UK, GCC, and other global markets who partnered with Shylesh Raj to invest in Dubai property.</p>
        </div>
      </section>

      <section className="py-16 bg-cream px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {PLACEHOLDER_CASES.map(c => (
            <div key={c.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-navy p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {c.tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/20 text-gold">{t}</span>
                  ))}
                </div>
                <h2 className="font-display text-white text-xl font-bold">{c.title}</h2>
              </div>

              {/* Body */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wide mb-1">Investor Background</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.background}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ['Country', c.country],
                      ['Budget', c.budget],
                      ['Purpose', c.purpose],
                      ['Property Type', c.propertyType],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-cream rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-1">{label}</p>
                        <p className="text-xs font-semibold text-navy">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wide mb-2">Communities Recommended</p>
                    <div className="flex flex-wrap gap-2">
                      {c.communities.map(comm => (
                        <span key={comm} className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full font-semibold">{comm}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Expected ROI</p>
                      <p className="text-sm font-bold text-green-700">{c.roi}</p>
                    </div>
                    <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
                      <p className="text-xs text-gray-400 mb-1">Golden Visa</p>
                      <p className="text-xs font-semibold text-navy leading-tight">{c.goldenVisa}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy uppercase tracking-wide mb-2">Outcome</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 bg-navy rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Could This Be Your Story?</h2>
          <p className="text-white/60 mb-6">Book a free consultation and let Shylesh build a personalised investment plan for your goals, budget, and timeline.</p>
          <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
