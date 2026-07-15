import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Dubai Property in 2026 — The Complete Investment Case | Shylesh Dubai',
  description: '0% capital gains tax, 6–8% rental yields, AED-USD peg stability, and a DLD-regulated market. The complete data-driven case for Dubai property investment in 2026.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Dubai property a good investment in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dubai delivered AED 761 billion in transaction volume in 2024, its highest ever. In 2026, fundamentals remain strong: population growth above 100,000 new residents per year, constrained supply in prime areas, 0% capital gains and income tax, and gross rental yields of 6–9% in high-demand communities — all significantly ahead of London, Singapore, or New York equivalents.' }
    },
    {
      '@type': 'Question',
      name: 'What taxes do I pay on Dubai property?',
      acceptedAnswer: { '@type': 'Answer', text: 'The UAE charges zero income tax on rental earnings, zero capital gains tax on property sale profits, zero inheritance tax, and zero wealth tax. The only recurring government cost is the 4% DLD transfer fee paid once at purchase, plus a nominal annual service charge to the developer or RERA-registered management company.' }
    },
    {
      '@type': 'Question',
      name: 'What is the average rental yield in Dubai in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gross rental yields in Dubai range from 5.5% to 9.5% depending on community and asset type. Jumeirah Village Circle (JVC) averages 8–9.5%, Dubai Silicon Oasis 7–8.5%, Business Bay 6.5–7.5%, Dubai Marina 5.5–7%, and Dubai Hills Estate 5.5–6.5%. Furnished short-term rentals on platforms like Airbnb can yield 10–15% gross in premium tourist areas.' }
    },
    {
      '@type': 'Question',
      name: 'Is buying off-plan in Dubai safe?',
      acceptedAnswer: { '@type': 'Answer', text: 'Off-plan purchases in Dubai are heavily regulated by RERA and the DLD. All off-plan projects are required by law to hold buyer funds in a DLD-registered escrow account, releasing funds to the developer only against verified construction milestones. You also have a 14-day cooling-off period after signing. The key risk is developer delay — always check the developer\'s track record and RERA registration status.' }
    },
    {
      '@type': 'Question',
      name: 'Can foreigners buy property in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Foreign nationals can purchase freehold property in designated freehold areas of Dubai — which cover all major investment communities including Downtown Dubai, Dubai Marina, Palm Jumeirah, JVC, Business Bay, Dubai Hills, and many more. There are no restrictions on nationality, and 100% foreign ownership is permitted.' }
    },
    {
      '@type': 'Question',
      name: 'Can I get residency in the UAE by buying property in Dubai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Purchasing a property worth AED 2,000,000 or above qualifies you for the UAE 10-Year Golden Visa, which covers you, your spouse, children, and domestic staff. For properties between AED 750,000 and AED 2,000,000 in a completed (ready) project, you may qualify for a 2-year or 3-year UAE investor residency visa instead.' }
    },
    {
      '@type': 'Question',
      name: 'What is the AED-USD peg and why does it matter?',
      acceptedAnswer: { '@type': 'Answer', text: 'The UAE Dirham (AED) has been pegged to the US Dollar at a fixed rate of 3.6725 AED per USD since 1997. This means your Dubai property investment is effectively denominated in USD, protecting you from currency depreciation risk. For investors from countries with weaker currencies (INR, GBP, EUR), the USD peg provides a stable, hard-currency asset base.' }
    },
    {
      '@type': 'Question',
      name: 'How does Dubai compare to London or Singapore for property investment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dubai offers 6–9% gross rental yields versus 3–4% in London and 3–4% in Singapore. Dubai charges 0% capital gains tax and 0% income tax versus 24–28% CGT in the UK and 17–22% in Singapore. Dubai\'s entry price (AED 620,000–1,500,000 for a 1BR) is 30–50% below comparable London or Singapore units. The trade-off is Dubai\'s younger property cycle and higher short-term price volatility.' }
    },
    {
      '@type': 'Question',
      name: 'What is the DLD and how does it protect property buyers?',
      acceptedAnswer: { '@type': 'Answer', text: 'The Dubai Land Department (DLD) is the government authority that registers all property transactions in Dubai. Every title deed is issued by the DLD, every off-plan project must escrow buyer funds with the DLD, and every developer and broker must be RERA-registered. This framework makes Dubai one of the most transparent and regulated property markets in the emerging world.' }
    },
    {
      '@type': 'Question',
      name: 'What are the risks of Dubai property investment?',
      acceptedAnswer: { '@type': 'Answer', text: 'Key risks include: (1) off-plan delivery delays — some projects have historically been delayed 12–24 months; (2) oversupply in certain segments — some communities have seen price softening due to excess inventory; (3) oil price correlation — the UAE economy is partially correlated to oil and global liquidity cycles; (4) no mortgage guarantee for off-plan — if you default, you lose prior payments up to RERA-set percentages. Mitigate by choosing tier-1 developers, established communities, and getting RERA-registered advisory.' }
    },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Dubai Property in 2026 — The Complete Investment Case',
  author: {
    '@type': 'Person',
    name: 'Shylesh Raj NK',
    jobTitle: 'RERA-Certified Dubai Property Advisor',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nexus Elite Properties LLC',
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-15',
}

const YIELD_DATA = [
  { area: 'Jumeirah Village Circle (JVC)', type: 'Studio / 1BR', yield: '8.0–9.5%', entryAED: 'AED 620K–900K' },
  { area: 'Dubai Silicon Oasis', type: 'Studio / 1BR', yield: '7.5–8.5%', entryAED: 'AED 650K–950K' },
  { area: 'Business Bay', type: '1BR / 2BR', yield: '6.5–7.5%', entryAED: 'AED 1.1M–2.5M' },
  { area: 'Dubai Marina', type: '1BR / 2BR', yield: '5.5–7.0%', entryAED: 'AED 1.2M–3M' },
  { area: 'Downtown Dubai', type: '1BR / 2BR', yield: '5.0–6.5%', entryAED: 'AED 1.8M–5M' },
  { area: 'Dubai Hills Estate', type: '1BR / 2BR', yield: '5.5–6.5%', entryAED: 'AED 1.2M–3M' },
  { area: 'Al Furjan', type: '1BR / 2BR', yield: '7.0–8.0%', entryAED: 'AED 850K–1.5M' },
  { area: 'Meydan (Crystal Lagoon)', type: '1BR / 2BR', yield: '7.0–8.5%', entryAED: 'AED 1.1M–2.5M' },
]

const TAX_COMPARE = [
  { city: 'Dubai', cgt: '0%', incomeTax: '0%', inheritanceTax: '0%', dldFee: '4% (one-time)', avgYield: '6–9%' },
  { city: 'London', cgt: '18–24%', incomeTax: '20–45%', inheritanceTax: '40%', dldFee: 'SDLT up to 12%', avgYield: '3–4%' },
  { city: 'Singapore', cgt: '0–22%*', incomeTax: '17–22%', inheritanceTax: '0%', dldFee: 'ABSD up to 60%', avgYield: '3–4%' },
  { city: 'Mumbai', cgt: '12.5–20%', incomeTax: '10–30%', inheritanceTax: '0%', dldFee: 'Stamp duty 5–6%', avgYield: '2–3%' },
  { city: 'New York', cgt: '20–23.8%', incomeTax: '37%+', inheritanceTax: 'Up to 40%', dldFee: 'Mansion tax 1–3.9%', avgYield: '3–4%' },
]

const REASONS = [
  {
    icon: '🏛️',
    title: 'World-Class Regulatory Framework',
    body: 'The Dubai Land Department (DLD) and Real Estate Regulatory Authority (RERA) provide mandatory escrow protection for all off-plan funds, title deed registration for every transaction, and a transparent ownership registry — placing Dubai among the most investor-safe emerging markets in the world.',
  },
  {
    icon: '📈',
    title: 'Population Growth Driving Demand',
    body: "Dubai's population grew by over 100,000 new residents in 2024 and is projected to reach 5.8 million by 2040 (from 3.8 million today). This sustained demographic demand provides a structural floor for both rental and capital values.",
  },
  {
    icon: '💱',
    title: 'USD-Pegged Currency — Hard Asset Security',
    body: 'The AED has been fixed at 3.6725 per USD since 1997 — through financial crises, oil crashes, and pandemics. Owning Dubai property is effectively owning a USD-denominated asset, shielding investors from currency depreciation in INR, GBP, EUR, or RUB terms.',
  },
  {
    icon: '🌍',
    title: 'Global Connectivity Hub',
    body: 'Dubai International Airport serves 260+ destinations, making Dubai the most connected city on Earth by flight frequency. This drives tourism (17M+ visitors in 2024), talent migration, and corporate HQ relocations — all feeding property demand.',
  },
  {
    icon: '🏗️',
    title: 'Disciplined Supply via Land Control',
    body: 'The UAE government controls land release to developers, preventing the chronic oversupply that plagued the market in 2015–2020. Master-planned communities with phased delivery — like Emaar\'s The Oasis and Sobha Realty\'s Hartland — are matched to absorption rates.',
  },
  {
    icon: '🎯',
    title: 'Flexible Entry via Off-Plan Payment Plans',
    body: '70/30 and 60/40 payment plans — with some developers offering 1% per month over 5 years — allow investors to control AED 1–3M assets with as little as 20–30% down, maximising capital efficiency and effectively providing leverage without bank financing.',
  },
]

const RISKS = [
  {
    risk: 'Off-plan delivery delays',
    detail: 'Some off-plan projects have been delivered 12–36 months late, particularly during the 2017–2021 period.',
    mitigation: 'Select developers with a proven on-time delivery record: Emaar, Sobha, Ellington, Danube. Verify RERA project status and escrow compliance before signing.',
  },
  {
    risk: 'Community oversupply in fringe areas',
    detail: 'Peripheral communities with no established infrastructure or connectivity have seen yield compression and capital loss.',
    mitigation: 'Invest in established or master-planned communities with metro access, retail, schools, and corporate employment nearby. Avoid speculative distant zones.',
  },
  {
    risk: 'Global macro correlation',
    detail: "Dubai's real estate market is sensitive to global liquidity cycles, oil prices, and US Federal Reserve interest rate decisions.",
    mitigation: 'Take a 5+ year investment horizon. Dubai\'s long-term population and GDP trajectory overrides short-term macro cycles in most scenarios.',
  },
  {
    risk: 'Regulatory changes to Golden Visa / foreign ownership',
    detail: 'The UAE can change its visa and ownership rules, though the trend since 2019 has been consistently towards liberalisation.',
    mitigation: 'Secure your residency visa at current thresholds. The UAE government has consistently expanded investor rights — not reduced them.',
  },
]

export default function WhyDubaiProperty2026Page() {
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
            Why Dubai Property in 2026 —<br />The Complete Investment Case
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

          {/* Lead paragraph */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-gold pl-5">
            Dubai remains the world&apos;s most investor-friendly real estate market — 0% capital gains
            tax, 0% income tax on rental yield, 6–9% gross yields, a USD-pegged currency, and a
            RERA-regulated framework that protects every dirham you invest. This is the complete,
            data-driven investment case for 2026.
          </p>

          {/* Quick facts strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Capital Gains Tax', value: '0%' },
              { label: 'Avg. Gross Yield', value: '6–9%' },
              { label: 'Transaction Volume 2024', value: 'AED 761B' },
              { label: 'New Residents / Year', value: '100,000+' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gold font-bold text-lg leading-tight">{f.value}</p>
                <p className="text-gray-500 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Section 1 — The Market in 2026 */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Dubai Property in 2026 — Where the Market Stands
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dubai&apos;s real estate market delivered AED 761 billion in total transaction value in 2024
            — a record that eclipsed the previous peak by 23%. In the first half of 2026, transaction
            volumes remained 15% above the same period in 2024, driven by continued population
            inflows, a growing base of international HNI investors, and a pipeline of masterplan
            communities from tier-1 developers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Critically, Dubai&apos;s growth in 2026 is not speculative froth. It is underpinned by
            genuine end-user demand: the UAE now hosts over 3.8 million residents in Dubai alone,
            with projections of 5.8 million by 2040 under the Dubai Urban Master Plan. Each new
            resident requires housing — and the rental market tightness in established communities
            like JVC, Business Bay, and Dubai Hills confirms that demand continues to outpace
            quality supply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            For international investors, the combination of zero taxes, hard-currency denomination,
            and a 10-year Golden Visa pathway creates an investment proposition that major financial
            centres — London, Singapore, New York — simply cannot replicate.
          </p>

          {/* Section 2 — The Tax Advantage */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            The Tax Advantage — What You Keep vs What You Lose Elsewhere
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The most significant structural advantage of Dubai property is the complete absence of
            property-related taxes. No income tax on rental income. No capital gains tax on sale
            profits. No inheritance or estate tax. No annual wealth tax. This transforms the net
            return profile dramatically against comparable markets.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">City</th>
                  <th className="text-left p-3 font-semibold">Capital Gains Tax</th>
                  <th className="text-left p-3 font-semibold">Rental Income Tax</th>
                  <th className="text-left p-3 font-semibold">Transfer / Stamp</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Avg. Gross Yield</th>
                </tr>
              </thead>
              <tbody>
                {TAX_COMPARE.map((r, i) => (
                  <tr key={r.city} className={`${i % 2 === 0 ? 'bg-cream' : 'bg-white'} ${r.city === 'Dubai' ? 'font-semibold' : ''}`}>
                    <td className={`p-3 align-top ${r.city === 'Dubai' ? 'text-gold' : 'text-navy'}`}>{r.city}</td>
                    <td className={`p-3 align-top ${r.city === 'Dubai' ? 'text-green-600' : 'text-gray-600'}`}>{r.cgt}</td>
                    <td className={`p-3 align-top ${r.city === 'Dubai' ? 'text-green-600' : 'text-gray-600'}`}>{r.incomeTax}</td>
                    <td className="p-3 text-gray-600 align-top">{r.dldFee}</td>
                    <td className={`p-3 align-top ${r.city === 'Dubai' ? 'text-green-600' : 'text-gray-600'}`}>{r.avgYield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mb-10">* Singapore ABSD rates for foreigners introduced in 2023. CGT for non-residents on property gains. Rates subject to change.</p>

          {/* Section 3 — Yield by Area */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Rental Yields by Community — 2026 Data
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Gross rental yields in Dubai vary significantly by community, asset type, and furnishing
            status. The data below represents typical gross yields for unfurnished long-term rentals.
            Furnished short-term rentals (Airbnb/VRBO) in tourist-facing areas can yield 10–15%
            gross but require active management or a licensed holiday home operator.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">Community</th>
                  <th className="text-left p-3 font-semibold">Asset Type</th>
                  <th className="text-left p-3 font-semibold">Gross Yield</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Entry Price</th>
                </tr>
              </thead>
              <tbody>
                {YIELD_DATA.map((r, i) => (
                  <tr key={r.area} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                    <td className="p-3 font-medium text-navy align-top">{r.area}</td>
                    <td className="p-3 text-gray-600 align-top">{r.type}</td>
                    <td className="p-3 text-green-600 font-semibold align-top">{r.yield}</td>
                    <td className="p-3 text-gray-600 align-top">{r.entryAED}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 — 6 Reasons */}
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            6 Structural Reasons Dubai Outperforms
          </h2>
          <div className="space-y-4 mb-12">
            {REASONS.map((r, i) => (
              <div key={r.title} className="bg-cream rounded-xl p-5 border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{r.icon}</span>
                  <div>
                    <p className="font-semibold text-navy mb-1 text-sm">
                      <span className="text-gold mr-2">0{i + 1}.</span>{r.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 — Payment Plans */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Off-Plan Payment Plans — Maximising Capital Efficiency
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            One of Dubai&apos;s unique advantages for HNI and NRI investors is the developer-funded
            payment plan structure on off-plan properties. Unlike mortgaged purchases (which require
            bank qualification and 20%+ down payment), off-plan payment plans allow you to spread
            the purchase cost over the construction period — typically 2–5 years.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {[
              {
                plan: '70/30 Plan',
                desc: 'Pay 70% during construction in milestone instalments, 30% on handover. The most common structure across Emaar, Sobha, Ellington.',
                when: 'Best for: investors who want manageable cash flow during construction',
              },
              {
                plan: '60/40 Plan',
                desc: 'Pay 60% during construction, 40% on handover. Common with Imtiaz, Danube. Lower upfront commitment.',
                when: 'Best for: investors prioritising capital preservation pre-handover',
              },
              {
                plan: '1% / Month Post-Handover',
                desc: 'Pay 20–30% upfront, then 1% per month for 36–74 months after handover. No bank required. Danube Oasiz offers 74-month post-handover.',
                when: 'Best for: NRIs and investors who want rental income to cover instalments',
              },
            ].map(p => (
              <div key={p.plan} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="font-display font-bold text-navy text-sm mb-2">{p.plan}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{p.desc}</p>
                <p className="text-gold text-xs font-semibold">{p.when}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mb-10">
            Note: Off-plan buyer funds are held in a RERA-mandated escrow account and released to
            the developer only against verified construction milestones. This is enforced by the DLD.
          </p>

          {/* Section 6 — Who is buying */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Who is Buying Dubai Property in 2026?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Dubai&apos;s buyer base has shifted significantly since 2020. The pre-COVID era was
            dominated by speculative flipping and overleveraged local investors. Today&apos;s market
            is characterised by a far more diverse, fundamental-driven international buyer base.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                group: '🇮🇳 Indian / NRI Investors',
                detail: 'The largest single buyer nationality in Dubai, representing 22–25% of transactions. Driven by the AED-INR depreciation hedge, Golden Visa pathway, and the 0% tax advantage versus Indian property (where stamp duty, capital gains, and wealth tax erode returns).',
              },
              {
                group: '🇷🇺 Russian & CIS Investors',
                detail: 'Accelerated since 2022 as sanctions created urgent demand for non-Western, hard-currency property. Russia is consistently the 2nd or 3rd largest buyer nationality in Dubai. Cash transactions are the norm.',
              },
              {
                group: '🇬🇧 UK & European Investors',
                detail: 'UK buyers citing post-Brexit economic uncertainty, 24% CGT, and high stamp duty land tax (SDLT up to 12%) are rotating capital into Dubai. German and French HNIs similarly attracted by the 0% inheritance tax advantage.',
              },
              {
                group: '🇨🇳 Chinese Investors',
                detail: 'China lifted outbound investment restrictions in late 2023. Dubai has emerged as a preferred destination for Chinese HNI capital seeking non-USD, non-Western diversification with strong tourism infrastructure.',
              },
              {
                group: '🇸🇦🇰🇼🇶🇦 GCC Buyers',
                detail: 'Saudi, Kuwaiti, and Qatari investors use Dubai as a second home and investment base — particularly in luxury segments (Palm Jumeirah, Downtown Dubai, Business Bay) where they represent 15–20% of transactions.',
              },
              {
                group: '🌍 Global HNI Relocators',
                detail: 'A growing cohort of US, UK, and European high-income earners are physically relocating to Dubai for the income tax advantage, lifestyle quality, and international school access — driving long-term owner-occupier demand in villa and townhouse communities.',
              },
            ].map(g => (
              <div key={g.group} className="bg-cream rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-navy text-sm mb-1">{g.group}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{g.detail}</p>
              </div>
            ))}
          </div>

          {/* Section 7 — Risks */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Risks to Know — And How to Mitigate Them
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            No market is without risk. A RERA-certified advisor will always walk you through the
            downside scenario before any investment recommendation. Here are the four main risks in
            the Dubai market and how to manage them.
          </p>
          <div className="space-y-3 mb-12">
            {RISKS.map((r, i) => (
              <div key={i} className="border border-red-100 rounded-xl p-4 bg-red-50/30">
                <p className="font-semibold text-red-700 text-sm mb-1">⚠ {r.risk}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">{r.detail}</p>
                <p className="text-gray-700 text-xs">
                  <span className="text-green-700 font-semibold">Mitigation: </span>
                  {r.mitigation}
                </p>
              </div>
            ))}
          </div>

          {/* Section 8 — FAQs */}
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
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Ready to Invest?</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Get a Personalised Dubai Property Strategy
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">
              Shylesh Raj NK (RERA #77789) provides a free 30-minute consultation covering the
              right community, payment plan, entry price, and rental yield projection for your
              budget and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/properties"
                className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-yellow-400 transition text-sm"
              >
                Browse All 18 Properties →
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Author bio */}
          <div className="bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img
              src="/shylesh.jpg"
              alt="Shylesh Raj NK"
              className="w-16 h-16 rounded-full object-cover object-top shrink-0"
            />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · UAE Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Shylesh Raj NK is a RERA-certified Dubai property advisor with 25+ years of UAE market
                experience. He advises HNI clients across India, the GCC, Europe, and Southeast Asia on
                entry strategy, developer selection, payment plan optimisation, and Golden Visa pathways.
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
