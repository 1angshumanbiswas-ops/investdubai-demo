import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Off-Plan vs Ready Property in Dubai — 2026 Comparison | Shylesh Dubai',
  description: 'Off-plan vs ready property in Dubai — payment plans, ROI potential, risk profile, capital appreciation, and which suits your investment goals in 2026.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is off-plan or ready property better for investment in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on your goal. Off-plan is better for capital appreciation — you buy at launch price and benefit from price growth during construction (typically 20–40% over 2–4 years). Ready property is better for immediate rental income — you can earn rental yield from day one without waiting for handover. Investors with a 3–5 year horizon typically favour off-plan; those needing immediate cash flow prefer ready.' }
    },
    {
      '@type': 'Question',
      name: 'What is the typical payment plan for off-plan property in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most common off-plan payment structures are 70/30 (pay 70% during construction in milestone-linked instalments, 30% on handover) and 60/40 (pay 60% during construction, 40% on handover). Some developers offer post-handover plans where you pay 20–30% upfront and 1% per month for 36–74 months after handover. No bank mortgage is required for developer payment plans.' }
    },
    {
      '@type': 'Question',
      name: 'Can I rent out an off-plan property before handover?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Off-plan properties cannot be rented until they are handed over and a title deed is issued. During the construction period, you are committed to the payment schedule but receive no rental income. This is why off-plan is classified as a capital appreciation play, not a yield play.' }
    },
    {
      '@type': 'Question',
      name: 'What are the risks of buying off-plan in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'The primary risks are: (1) construction delays — some projects are delivered 12–24 months late; (2) developer insolvency — mitigated by the RERA escrow requirement that all buyer funds be held in a DLD-registered escrow account; (3) market price decline during construction — though this is rare in established communities with tier-1 developers; (4) unit not matching brochure specifications — always check RERA-approved floor plans and specifications.' }
    },
    {
      '@type': 'Question',
      name: 'How much can I save by buying off-plan vs ready in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Off-plan properties in Dubai are typically priced 20–35% below the equivalent completed unit in the same community. By the time the project is handed over (typically 2–4 years), comparable ready units in that area are usually priced significantly higher — creating an unrealised gain on the off-plan investor\'s position. This is the primary driver of off-plan demand in Dubai.' }
    },
    {
      '@type': 'Question',
      name: 'Do I need a mortgage to buy off-plan in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Off-plan purchases use developer payment plans — not bank mortgages. You pay directly to the developer in instalments tied to construction milestones. No bank qualification, no credit check, no interest charges. Ready properties can be purchased with a UAE mortgage (20–25% down payment required) or in cash.' }
    },
    {
      '@type': 'Question',
      name: 'What is the DLD fee for off-plan vs ready property?',
      acceptedAnswer: { '@type': 'Answer', text: 'The DLD transfer fee is 4% of the property value for both off-plan and ready property. For off-plan, it is typically paid upfront at registration (either by buyer or split with developer as a promotional incentive). For ready property, the 4% DLD fee plus AED 580 admin fee is paid at the time of title deed transfer.' }
    },
    {
      '@type': 'Question',
      name: 'Can I resell an off-plan property before handover in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Off-plan properties can be resold before handover in what is called a "resale off-plan" or "sub-sale" transaction. You sell your SPA (Sales and Purchase Agreement) rights to a new buyer. The buyer pays you the current market value and takes over any remaining payment obligations. A new Oqood (DLD registration) is issued to the buyer. This is a common exit strategy in bull market cycles.' }
    },
    {
      '@type': 'Question',
      name: 'Which Dubai areas have the best off-plan projects in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'In 2026, the strongest off-plan demand is concentrated in: Dubai Islands (coastal lifestyle), Meydan (Crystal Lagoon waterfront), Dubai South (Expo City precinct), Jumeirah Village Circle (JVC — high yield), Al Furjan, and Dubai Silicon Oasis. Key projects include Emaar\'s The Oasis, Sobha Realty\'s Hartland and Sanctuary, Imtiaz\'s Wynwood Horizon, and Danube\'s Oasiz.' }
    },
    {
      '@type': 'Question',
      name: 'Is ready property safer than off-plan in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ready property eliminates construction risk and delivery delay risk — you can inspect the unit, get a mortgage, and receive rental income immediately. However, "safer" depends on your definition. Ready property in a declining market can still lose value. Off-plan with a tier-1 RERA-registered developer and RERA escrow protection has a strong regulatory backstop. Both asset types carry market risk; only off-plan carries construction risk.' }
    },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Off-Plan vs Ready Property in Dubai — 2026 Comparison',
  author: { '@type': 'Person', name: 'Shylesh Raj NK', jobTitle: 'RERA-Certified Dubai Property Advisor' },
  publisher: { '@type': 'Organization', name: 'Nexus Elite Properties LLC' },
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
}

const COMPARISON = [
  { factor: 'Entry Price', offplan: '20–35% below market value at launch', ready: 'Current market price — no discount' },
  { factor: 'Payment', offplan: 'Developer instalment plan (no bank needed)', ready: 'Full cash or UAE mortgage (20–25% down)' },
  { factor: 'Rental Income', offplan: 'None until handover (1–4 years away)', ready: 'Immediate from day one' },
  { factor: 'Capital Gain Potential', offplan: 'High — 20–40% appreciation by handover typical', ready: 'Moderate — market-rate appreciation only' },
  { factor: 'Risk Level', offplan: 'Moderate — construction + delivery risk', ready: 'Low — no construction risk' },
  { factor: 'DLD Fee', offplan: '4% (sometimes developer-paid as incentive)', ready: '4% + AED 580 admin fee' },
  { factor: 'Golden Visa Eligibility', offplan: 'Yes, if price ≥ AED 2M and 50%+ paid', ready: 'Yes, if price ≥ AED 2M (immediate)' },
  { factor: 'Inspection Before Buy', offplan: 'No — buying from plans/renders', ready: 'Yes — full physical inspection possible' },
  { factor: 'Resale Before Completion', offplan: 'Yes — sub-sale / SPA transfer', ready: 'Yes — standard resale process' },
  { factor: 'Best For', offplan: 'Capital appreciation, 3–5 year investors', ready: 'Immediate yield, Golden Visa, end-users' },
]

const OFFPLAN_PROS = [
  { point: 'Launch price discount', detail: 'Off-plan properties are priced 20–35% below equivalent ready units in the same community. This instant equity is the primary driver of HNI off-plan demand.' },
  { point: 'Flexible payment without bank', detail: 'Developer payment plans require no mortgage qualification, no credit assessment, and no interest. You pay in construction-linked instalments over 2–5 years.' },
  { point: 'Capital appreciation during construction', detail: 'In active market cycles, off-plan units in established communities appreciate 20–40% between launch and handover — before any rental income is earned.' },
  { point: 'RERA escrow protection', detail: 'All buyer funds paid on Dubai off-plan projects are held in a DLD-registered escrow account. The developer can only draw funds against RERA-verified construction milestones.' },
  { point: 'Sub-sale exit before handover', detail: 'You can resell your off-plan unit before completion, locking in construction-phase gains without waiting for handover. This is a common HNI exit strategy.' },
]

const OFFPLAN_CONS = [
  { point: 'No rental income during construction', detail: 'You are paying instalments for 2–4 years with zero income from the asset. This requires capital reserves or another income source to cover payments.' },
  { point: 'Delivery risk and delays', detail: 'Some projects are handed over 12–36 months behind schedule. Even with RERA protection, delays erode your effective return on capital.' },
  { point: 'Buying from renders, not reality', detail: 'The finished unit may differ from brochure finishes, view angles, or community development around it. Always review the RERA-approved floor plan and specifications before signing.' },
  { point: 'Longer Golden Visa wait', detail: 'For off-plan Golden Visa eligibility, you must have paid at least 50% of the property value. This may take 12–24 months into the payment schedule.' },
]

const READY_PROS = [
  { point: 'Immediate rental income', detail: 'The unit is tenanted or tenantable from day one. For investors targeting 6–9% gross yields, ready property delivers cash flow without a 2–4 year wait.' },
  { point: 'No construction or delivery risk', detail: 'You inspect and buy what exists. No render vs reality gap, no construction timeline uncertainty, no developer financial risk during a build phase.' },
  { point: 'Instant Golden Visa eligibility', detail: 'A ready property at AED 2M+ qualifies immediately for the 10-year Golden Visa upon DLD registration — no payment percentage threshold to wait for.' },
  { point: 'Mortgage financing available', detail: 'UAE banks offer mortgages on ready properties at 3.5–5.5% interest (2026 rates), requiring 20% down for expats. This enables higher-leverage returns if managed carefully.' },
  { point: 'Established community infrastructure', detail: 'Schools, retail, metro connections, and community amenities are already built and operating — reducing lifestyle and rental demand uncertainty.' },
]

const READY_CONS = [
  { point: 'Higher entry price', detail: 'Ready properties are priced at current market value with no launch discount. The capital appreciation upside from construction-phase growth is already priced in.' },
  { point: 'Full payment upfront or mortgage required', detail: 'Unlike off-plan instalment plans, ready property requires either full cash payment or a UAE bank mortgage — requiring income qualification and 20–25% down payment.' },
  { point: 'Older specifications', detail: 'A 2019 ready unit will have 2019 fittings, layouts, and technology. Off-plan projects deliver the latest developer specifications, smart home systems, and amenity concepts.' },
  { point: 'No sub-sale arbitrage', detail: 'Ready properties do not have the construction-phase price arbitrage available to off-plan investors. Capital gains come from market appreciation only.' },
]

const INVESTOR_PROFILES = [
  {
    profile: 'Choose Off-Plan if…',
    color: 'border-blue-200 bg-blue-50/40',
    titleColor: 'text-blue-700',
    points: [
      'You have a 3–5 year investment horizon',
      'You want capital appreciation more than immediate yield',
      'You have liquidity to cover instalments without rental income',
      'You want to use a developer payment plan (no bank needed)',
      'You are targeting a specific new community or developer brand',
      'You want to buy at launch-price and exit before or at handover',
    ],
  },
  {
    profile: 'Choose Ready Property if…',
    color: 'border-green-200 bg-green-50/40',
    titleColor: 'text-green-700',
    points: [
      'You need immediate rental income from day one',
      'You want to qualify for the Golden Visa immediately',
      'You want to inspect the unit before committing',
      'You plan to use it as a second home or primary residence',
      'You prefer a mortgage to maximise capital efficiency',
      'You want zero construction or delivery risk',
    ],
  },
]

export default function OffPlanVsReadyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      {/* ── HERO ── */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-400/20 text-blue-300 mb-4 inline-block">
            Investment Guide
          </span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Off-Plan vs Ready Property in Dubai —<br />2026 Comparison
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-white/50 text-sm">
            <span>By Shylesh Raj NK — RERA Broker #77789</span>
            <span>•</span>
            <span>July 2026</span>
            <span>•</span>
            <span>Last updated July 2026</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white px-4">
        <div className="max-w-3xl mx-auto">

          {/* Lead */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-gold pl-5">
            The single most common question from first-time Dubai investors: should I buy off-plan
            or ready? The answer depends entirely on whether you prioritise capital appreciation
            or immediate rental yield — and how much construction risk you are comfortable carrying.
            This guide gives you the complete data-driven comparison.
          </p>

          {/* Quick verdict strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="font-display font-bold text-blue-800 text-lg mb-1">Off-Plan</p>
              <p className="text-blue-600 text-sm font-semibold mb-2">Best for: Capital Appreciation</p>
              <p className="text-blue-700 text-xs leading-relaxed">20–35% launch discount · No bank needed · 20–40% gain by handover · Sub-sale exit possible</p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <p className="font-display font-bold text-green-800 text-lg mb-1">Ready Property</p>
              <p className="text-green-600 text-sm font-semibold mb-2">Best for: Immediate Yield & Golden Visa</p>
              <p className="text-green-700 text-xs leading-relaxed">6–9% yield from day one · Inspect before buying · Instant Golden Visa · No delivery risk</p>
            </div>
          </div>

          {/* Full comparison table */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold w-1/4">Factor</th>
                  <th className="text-left p-3 font-semibold w-[37.5%]">🏗 Off-Plan</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold w-[37.5%]">🏢 Ready Property</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r, i) => (
                  <tr key={r.factor} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                    <td className="p-3 font-semibold text-navy align-top text-xs">{r.factor}</td>
                    <td className="p-3 text-blue-700 align-top text-xs leading-relaxed">{r.offplan}</td>
                    <td className="p-3 text-green-700 align-top text-xs leading-relaxed">{r.ready}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Off-plan pros */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">
            Off-Plan — Advantages
          </h2>
          <p className="text-gray-500 text-sm mb-5">Why 65%+ of Dubai transactions in 2024 were off-plan</p>
          <div className="space-y-3 mb-8">
            {OFFPLAN_PROS.map((p, i) => (
              <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-xl p-4">
                <p className="font-semibold text-blue-800 text-sm mb-1">✓ {p.point}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Off-plan cons */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">
            Off-Plan — Risks to Know
          </h2>
          <div className="space-y-3 mb-12">
            {OFFPLAN_CONS.map((p, i) => (
              <div key={i} className="bg-red-50/30 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-700 text-sm mb-1">⚠ {p.point}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Ready pros */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">
            Ready Property — Advantages
          </h2>
          <div className="space-y-3 mb-8">
            {READY_PROS.map((p, i) => (
              <div key={i} className="bg-green-50/50 border border-green-100 rounded-xl p-4">
                <p className="font-semibold text-green-800 text-sm mb-1">✓ {p.point}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Ready cons */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">
            Ready Property — Limitations
          </h2>
          <div className="space-y-3 mb-12">
            {READY_CONS.map((p, i) => (
              <div key={i} className="bg-red-50/30 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-700 text-sm mb-1">⚠ {p.point}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Investor profile decision guide */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Which is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {INVESTOR_PROFILES.map(p => (
              <div key={p.profile} className={`rounded-xl p-5 border-2 ${p.color}`}>
                <p className={`font-display font-bold text-lg mb-4 ${p.titleColor}`}>{p.profile}</p>
                <ul className="space-y-2">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`font-bold mt-0.5 shrink-0 ${p.titleColor}`}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Payment plan deep dive */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Off-Plan Payment Plans — How They Work
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Dubai off-plan payment plans are funded directly by the developer — no bank, no
            interest, no mortgage qualification required. Funds are released to the developer from
            a RERA-mandated DLD escrow account only against verified construction milestones.
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                plan: '70/30 Payment Plan',
                example: 'AED 1,500,000 property: Pay AED 1,050,000 across 6–8 construction milestone instalments, AED 450,000 on handover.',
                who: 'Most common structure. Suits investors who want manageable milestone payments and a defined exit at handover.',
                developers: 'Emaar, Sobha, Ellington, Binghatti',
              },
              {
                plan: '60/40 Payment Plan',
                example: 'AED 1,500,000 property: Pay AED 900,000 during construction, AED 600,000 on handover.',
                who: 'Lower construction-phase commitment. Suits investors preserving capital pre-handover for other opportunities.',
                developers: 'Imtiaz, Danube, Mira Developments',
              },
              {
                plan: '1% Per Month Post-Handover',
                example: 'AED 1,500,000 property: Pay 20% (AED 300,000) upfront, then AED 15,000/month for 80 months after handover.',
                who: 'Designed for investors who want rental income to offset monthly payments. Danube Oasiz offers 74 months. No bank required.',
                developers: 'Danube (Oasiz — 74 months), select Imtiaz projects',
              },
            ].map(p => (
              <div key={p.plan} className="bg-cream rounded-xl p-5 border border-gray-100">
                <p className="font-display font-bold text-navy mb-2">{p.plan}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">
                  <span className="font-semibold text-navy">Example: </span>{p.example}
                </p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">
                  <span className="font-semibold text-navy">Best for: </span>{p.who}
                </p>
                <p className="text-gold text-xs font-semibold">{p.developers}</p>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 mb-12">
            {FAQ_SCHEMA.mainEntity.map((f, i) => (
              <details key={i} className="group bg-cream rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm">
                  {f.name}
                  <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 text-center mb-12">
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Not Sure Which to Choose?</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Get a Free Off-Plan vs Ready Analysis
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">
              Shylesh Raj NK (RERA #77789) will review your budget, yield targets, and timeline
              and recommend whether off-plan or ready property is the right fit — with specific
              property shortlist from Dubai&apos;s top developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/properties" className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-yellow-400 transition text-sm">
                Browse All Properties →
              </Link>
              <Link href="/contact" className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Author */}
          <div className="bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img src="/shylesh.jpg" alt="Shylesh Raj NK" className="w-16 h-16 rounded-full object-cover object-top shrink-0" />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · UAE Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Shylesh Raj NK is a RERA-certified Dubai property advisor with 25+ years of UAE market
                experience, advising HNI clients across India, the GCC, Europe, and Southeast Asia on
                off-plan developer selection, payment plan optimisation, and ready property yield strategies.
              </p>
              <Link href="/contact" className="inline-block mt-3 text-gold text-sm font-semibold hover:underline">
                Book a free consultation →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
