import Link from 'next/link'

// Dubai Market Pulse — sourced from Dubai Land Department (DLD) official Q1 2026 release.
// Format deliberately different from competitor sites (no ranked numbered list) —
// presented as a stat dashboard consistent with the rest of this site's design language.
const MARKET_PULSE = [
  { value: 'AED 252B', label: 'Q1 2026 Transaction Value', note: '+31% YoY' },
  { value: '60,303', label: 'Q1 2026 Transactions', note: '+6% YoY' },
  { value: '72–78%', label: 'Off-Plan Share of Deals', note: 'vs. ready market' },
  { value: '6–9%', label: 'Gross Rental Yields', note: 'up to 8.5% in JVC' },
]

const FEATURED_STORIES = [
  {
    title: 'Why Dubai Property in 2026 — The Complete Investment Case',
    category: 'Investment Guide',
    excerpt: "Dubai remains the world's most investor-friendly real estate market with 0% capital gains tax, 6-8% rental yields, and a stable currency.",
    href: '/blog/why-dubai-property-2026',
  },
  {
    title: 'Best Areas for Rental Yield in Dubai 2026 — Data Analysis',
    category: 'Market Analysis',
    excerpt: 'Which Dubai communities deliver the highest rental yields in 2026? Data-driven analysis of JVC, Dubai Hills, Creek Harbour, Business Bay, and more.',
    href: '/blog/best-rental-yield-areas-dubai-2026',
  },
  {
    title: 'Dubai Golden Visa Through Property — Step-by-Step Guide',
    category: 'Golden Visa',
    excerpt: 'AED 2M minimum investment, 8-step application process, documents checklist, cost breakdown, and 6 common mistakes to avoid.',
    href: '/blog/dubai-golden-visa-guide',
  },
]

export default function NewsAndTrends() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Latest News &amp; Trends</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Dubai Market Pulse</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Live market data and investor insights — updated as the Dubai Land Department releases new figures.</p>
        </div>

        {/* Market Pulse stat dashboard */}
        <div className="bg-navy rounded-2xl p-6 lg:p-8 mb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKET_PULSE.map(m => (
              <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="font-display text-2xl lg:text-3xl font-bold text-gold mb-1">{m.value}</p>
                <p className="text-white text-sm font-semibold mb-1">{m.label}</p>
                <p className="text-white/50 text-xs">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mb-12">Source: Dubai Land Department (DLD) official Q1 2026 release</p>

        {/* Featured articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_STORIES.map(s => (
            <Link key={s.href} href={s.href}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold hover:shadow-md transition">
              <span className="text-xs font-semibold text-gold uppercase tracking-wide">{s.category}</span>
              <h3 className="font-semibold text-navy mt-3 mb-2 leading-snug group-hover:text-gold transition">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block text-gold text-sm font-semibold hover:underline">
            View All Insights →
          </Link>
        </div>
      </div>
    </section>
  )
}
