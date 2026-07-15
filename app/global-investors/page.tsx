import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Global Investors — UAE Property Investment | Shylesh Dubai',
  description:
    'Discover why global HNI investors choose Dubai, Abu Dhabi, and Ras Al Khaimah for tax-free property returns. Tier-1 developers, 8%+ ROI, Golden Visa eligibility.',
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const STATS = [
  { value: '0%', label: 'Income & Capital Gains Tax' },
  { value: '8.4%', label: 'Average Gross Rental Yield' },
  { value: 'AED 2M+', label: 'Golden Visa Threshold' },
  { value: '200+', label: 'Nationalities Investing' },
  { value: '100%', label: 'Foreign Ownership Allowed' },
]

const EMIRATES = [
  {
    name: 'Dubai',
    tag: 'Global Capital · Zero Tax · World-Class Infrastructure',
    headline: 'The World\'s Most Liquid Property Market',
    body:
      'Dubai continues to attract the highest concentration of ultra-high-net-worth individuals in the MENA region. With direct flights to over 240 destinations, a DLD-regulated off-plan market, and no property tax, it delivers returns that mature markets simply cannot match.',
    bullets: [
      'DLD-registered off-plan projects with developer escrow protection',
      'Record transaction volumes — AED 761B in 2024',
      'Areas like JVC, Dubai Islands, and Meydan delivering 7–10% gross yields',
      'Long-term resident visa through AED 2M+ investment',
    ],
    // Swap this URL if it doesn't load — Dubai downtown/Burj Khalifa night shot
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    imgAlt: 'Dubai downtown skyline at night with Burj Khalifa',
    linkHref: '/properties',
    linkLabel: 'Browse Dubai Properties →',
    reverse: false,
  },
  {
    name: 'Abu Dhabi',
    tag: 'Capital City · Sovereign Wealth · Mega Projects',
    headline: 'The UAE\'s Capital: Sovereign-Backed, Ultra-Stable',
    body:
      'Abu Dhabi is home to ADNOC, Mubadala, and ADIA — three of the world\'s largest sovereign wealth funds. The government\'s Ghadan 21 economic plan is driving $13.6B in private-sector investment, fuelling demand for luxury residential and mixed-use real estate.',
    bullets: [
      'Yas Island and Saadiyat Island mega-developments underway',
      'Tourism spike post-Louvre Abu Dhabi and F1 infrastructure expansion',
      '10-year Golden Visa available on AED 2M+ property purchase',
      'Average property prices still 30–40% below comparable Dubai areas',
    ],
    // Swap this URL if it doesn't load — Abu Dhabi Sheikh Zayed Mosque / Corniche
    img: 'https://images.unsplash.com/photo-1578895949071-f1f6e4a88c26?auto=format&fit=crop&w=1200&q=80',
    imgAlt: 'Abu Dhabi skyline and Sheikh Zayed Grand Mosque',
    linkHref: '/contact',
    linkLabel: 'Enquire About Abu Dhabi →',
    reverse: true,
  },
  {
    name: 'Ras Al Khaimah',
    tag: 'Emerging Market · High Yield · Tourism Boom',
    headline: 'The UAE\'s Fastest-Growing Investment Frontier',
    body:
      'RAK is the highest-yielding emirate in the UAE, with gross rental yields exceeding 9% in select projects. The Wynn Al Marjan Island integrated resort — the first legal casino in the Arab world — is expected to draw 2M+ additional visitors annually, creating an unprecedented demand surge for residential and hospitality assets.',
    bullets: [
      'Al Marjan Island: luxury waterfront inventory at 40–60% below Dubai prices',
      'Wynn Resort opening driving pre-launch investor demand',
      'Growing expat population from Dubai professionals seeking affordability',
      'Direct access to East Coast beaches and Hajar Mountains',
    ],
    // Swap this URL if it doesn't load — RAK waterfront/Al Marjan Island
    img: 'https://images.unsplash.com/photo-1621775324959-33df66703dc7?auto=format&fit=crop&w=1200&q=80',
    imgAlt: 'Ras Al Khaimah waterfront and mountains',
    linkHref: '/contact',
    linkLabel: 'Get RAK Investment Brief →',
    reverse: false,
  },
]

const DEVELOPER_GALLERY = [
  {
    developer: 'Binghatti',
    project: 'Mercedes-Benz Places',
    img: '/images/properties/mercedes-benz-places-aerial.jpg',
    tag: 'Brand Residences',
  },
  {
    developer: 'Sobha Realty',
    project: 'Sobha Sanctuary — Lagoon',
    img: '/images/properties/sobha-sanctuary-lagoon.jpg',
    tag: 'Waterfront Living',
  },
  {
    developer: 'Danube',
    project: 'Oasiz — Sky Lounge',
    img: '/images/properties/oasiz-skylounge-night.jpg',
    tag: 'Burj Khalifa Views',
  },
  {
    developer: 'Imtiaz',
    project: 'Wynwood Horizon',
    img: '/images/properties/wynwood-rooftop-pool.jpg',
    tag: 'Crystal Lagoon',
  },
  {
    developer: 'Ellington',
    project: 'Windsor House',
    img: '/images/properties/windsor-house-pool.jpg',
    tag: 'Resort-Style Pool',
  },
  {
    developer: 'Sobha Realty',
    project: 'Sobha SkyParks',
    img: '/images/properties/sobha-skyparks-pool.jpg',
    tag: 'Skyline Amenities',
  },
  {
    developer: 'Imtiaz',
    project: 'Sunset Bay 4 — Dubai Islands',
    img: '/images/properties/sunset-bay-4-coastal.jpg',
    tag: 'Coastal Frontage',
  },
  {
    developer: 'Binghatti',
    project: 'Binghatti Wraith — Aerial',
    img: '/images/properties/binghatti-wraith-aerial.jpg',
    tag: 'Al Jaddaf',
  },
  {
    developer: 'Sobha Realty',
    project: 'Sobha Elwood',
    img: '/images/properties/sobha-elwood-pool2.jpg',
    tag: 'Forest Living',
  },
]

const WHY_NOW = [
  {
    icon: '🏛️',
    title: 'Regulatory Fortress',
    body: 'DLD escrow laws, RERA oversight, and mandatory SPA registration protect every dirham of your investment.',
  },
  {
    icon: '✈️',
    title: 'Global Connectivity',
    body: 'Dubai and Abu Dhabi airports connect to 240+ destinations — your asset is always accessible, always liquid.',
  },
  {
    icon: '💼',
    title: 'Business-First Ecosystem',
    body: 'Freezone ownership, 100% repatriation of profits, and zero capital gains tax make the UAE a natural wealth hub.',
  },
  {
    icon: '📈',
    title: 'Supply Discipline',
    body: 'UAE government-controlled land releases prevent oversupply. Demand from 3M+ annual new residents keeps prices firm.',
  },
]

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function GlobalInvestorsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
          alt="Dubai skyline aerial night view"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            UAE Property Investment Advisory
          </p>
          <h1 className="font-display text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Where the World&apos;s Smartest<br />
            <span className="text-gold">Capital Comes to Grow</span>
          </h1>
          <p className="text-white/75 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dubai. Abu Dhabi. Ras Al Khaimah. Three of the world&apos;s most compelling
            investment destinations — zero property tax, 8%+ yields, and a
            regulatory framework built for global investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="inline-block bg-gold text-navy px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition"
            >
              Explore All Properties
            </Link>
            <Link
              href="/roi-calculator"
              className="inline-block border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:border-gold hover:text-gold transition"
            >
              Calculate My ROI
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gold py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl lg:text-3xl font-bold text-navy">{s.value}</p>
                <p className="text-navy/70 text-xs mt-1 font-medium leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE EMIRATES ── */}
      {EMIRATES.map((em) => (
        <section
          key={em.name}
          className={`py-16 lg:py-20 px-4 ${em.reverse ? 'bg-cream' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex flex-col ${
                em.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                <img
                  src={em.img}
                  alt={em.imgAlt}
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  {em.tag}
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4 leading-snug">
                  <span className="text-gold">{em.name} —</span> {em.headline}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{em.body}</p>
                <ul className="space-y-2.5 mb-8">
                  {em.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={em.linkHref}
                  className="inline-block bg-navy text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gold hover:text-navy transition"
                >
                  {em.linkLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── DEVELOPER GALLERY ── */}
      <section className="bg-navy py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Exclusive Developer Portfolio
            </p>
            <h2 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4">
              Tier-1 Projects. Trusted Developers.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              Every project on this platform is handpicked from Dubai&apos;s top-rated
              developers — Emaar, Binghatti, Sobha, Danube, Imtiaz, and Ellington.
            </p>
          </div>

          {/* 3-column masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEVELOPER_GALLERY.map((item, i) => (
              <div
                key={`${item.developer}-${i}`}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.img}
                  alt={`${item.developer} — ${item.project}`}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-0.5">
                    {item.developer}
                  </p>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {item.project}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/properties"
              className="inline-block bg-gold text-navy px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition"
            >
              View All 18 Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY INVEST NOW ── */}
      <section className="bg-cream py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              The Investment Case
            </p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-bold">
              Why UAE Property, Why Now
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_NOW.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-display text-navy font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM CTA ── */}
      <section className="bg-navy py-16 lg:py-20 px-4">
        <div className="max-w-xl mx-auto text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Speak to a RERA-Certified Advisor
          </p>
          <h2 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4">
            Get Your Personalised<br />Investment Brief
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Shylesh Raj NK (RERA #77789) advises HNI clients across India, Europe,
            Singapore, and the GCC on optimal UAE property entry strategy, tax
            structuring, and Golden Visa pathways.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <LeadForm source="Global Investors Page" />
        </div>
      </section>
    </>
  )
}
