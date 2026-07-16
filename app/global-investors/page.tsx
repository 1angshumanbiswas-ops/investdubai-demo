import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import GlobalInvestorExplorer from '@/components/GlobalInvestorExplorer'

export const metadata: Metadata = {
  title: 'Global Investors — UAE Property Investment | Shylesh Dubai',
  description: 'Discover why global HNI investors choose Dubai, Abu Dhabi, and Ras Al Khaimah for tax-free property returns. Tier-1 developers, 8%+ ROI, Golden Visa eligibility.',
}

/* ── FAQ SCHEMA (#7) ── */
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can an Indian citizen buy property in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indian citizens can buy freehold property in Dubai with 100% ownership. You do not need to live in the UAE. Resident Indians can remit up to USD 250,000 per person per year under the RBI Liberalised Remittance Scheme (LRS). NRIs living abroad have no remittance cap.' } },
    { '@type': 'Question', name: 'Can a UK citizen buy property in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. UK nationals can purchase freehold property in Dubai with 100% foreign ownership. There is no stamp duty land tax (SDLT) in Dubai — only a one-time 4% DLD transfer fee. UK buyers must declare rental income to HMRC, but the UAE charges 0% tax, so no double taxation arises. A DIFC Will is recommended to control inheritance outside UAE Sharia default rules.' } },
    { '@type': 'Question', name: 'Can a US citizen buy property in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. US citizens can purchase property in Dubai with no restrictions. The UAE charges 0% income tax and 0% capital gains tax. US citizens must report foreign property to the IRS (FBAR if rental income passes through a foreign account, and FATCA Form 8938 if total foreign financial assets exceed USD 50,000). No US tax is due on UAE rental income until it is remitted to a US account or exceeds US tax thresholds.' } },
    { '@type': 'Question', name: 'What is the minimum investment for the UAE Golden Visa through property?', acceptedAnswer: { '@type': 'Answer', text: 'AED 2,000,000 (approximately USD 545,000 or GBP 430,000). The property must be DLD-registered freehold. For off-plan properties, at least 50% of the purchase price must have been paid. The visa is valid for 10 years, renewable, and covers the investor, spouse, children of any age, and up to 3 domestic staff. No physical residency requirement.' } },
    { '@type': 'Question', name: 'Is there property tax in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'No. Dubai charges 0% income tax on rental earnings, 0% capital gains tax on property sales, 0% inheritance tax, and 0% wealth tax. The only one-time government cost is the 4% DLD transfer fee payable at purchase. Annual service charges are paid to the building management company, not to the government.' } },
    { '@type': 'Question', name: 'What is the average rental yield on Dubai property?', acceptedAnswer: { '@type': 'Answer', text: 'Gross rental yields in Dubai average 8.4% across all residential properties. Mid-market communities such as Jumeirah Village Circle deliver 8–9.5% gross. Premium areas like Downtown Dubai and Dubai Marina deliver 5–7% gross but offer stronger capital appreciation. Source: Dubai Land Department, Q4 2024.' } },
    { '@type': 'Question', name: 'How do I send money from India to buy property in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Resident Indians must use the RBI Liberalised Remittance Scheme (LRS). Each individual can remit up to USD 250,000 per financial year (April to March). Use Form A2 at your authorised dealer bank with purpose code S0005. Your bank will deduct 20% TCS on remittances above INR 7 lakh — claim this back as a tax credit in your annual ITR filing. NRIs can remit from NRE or NRO accounts without an annual cap.' } },
    { '@type': 'Question', name: 'What happens to my Dubai property if I die?', acceptedAnswer: { '@type': 'Answer', text: 'By default, UAE law applies Sharia inheritance rules to property owned in Dubai, regardless of the nationality of the owner. This means your property may not pass to your intended heirs. To choose your own beneficiaries, register a DIFC Will through the DIFC Wills Service. Cost: approximately AED 10,000. The DIFC Will is legally recognised by the Dubai courts and allows you to name any beneficiary under any inheritance system.' } },
    { '@type': 'Question', name: 'Should I buy Dubai property in my personal name or a company name?', acceptedAnswer: { '@type': 'Answer', text: 'Personal name: simpler, lower cost, no annual compliance. Suitable for most individual buyers. Company name (UAE free zone or mainland LLC): useful for holding multiple properties, estate planning across jurisdictions, or separating property from personal liability. Company ownership adds AED 10,000–25,000 annual compliance cost. Discuss with a UAE tax adviser before deciding.' } },
    { '@type': 'Question', name: 'How do I transfer rental income from Dubai back to India or the UK?', acceptedAnswer: { '@type': 'Answer', text: 'There are no UAE restrictions on remitting rental income abroad. Funds can be transferred via SWIFT from your UAE bank account to any overseas account. Indian NRIs can repatriate up to USD 1 million per year from an NRO account with a CA certificate. For UK residents, rental income must be declared to HMRC. No UAE tax is withheld on outgoing transfers.' } },
    { '@type': 'Question', name: 'What do US citizens need to report to the IRS when owning Dubai property?', acceptedAnswer: { '@type': 'Answer', text: 'US citizens must file FBAR (FinCEN Form 114) if they hold a foreign bank account used for rental income with a balance exceeding USD 10,000 at any point in the year. FATCA Form 8938 is required if total foreign financial assets exceed USD 50,000 (single filer). Rental income from Dubai must be reported on Schedule E of your US tax return. The UAE charges 0% tax, so no foreign tax credit offsets are available — but no double tax arises as rental income falls under standard US rates only if remitted or reported.' } },
    { '@type': 'Question', name: 'Is Dubai property safe for foreign investors?', acceptedAnswer: { '@type': 'Answer', text: 'Dubai is one of the most regulated property markets in the emerging world. The Dubai Land Department (DLD) registers all freehold transactions. RERA requires all off-plan developers to hold buyer funds in escrow accounts released only against verified construction milestones. The UAE has no history of property nationalisation or foreign ownership restrictions. The AED has been pegged to the USD at 3.6725 since 1997.' } },
  ],
}

/* ── DATA ── */

const STATS = [
  { value: '0%',      label: 'Income & Capital Gains Tax',    source: 'UAE Ministry of Finance' },
  { value: '8.4%',   label: 'Average Gross Rental Yield',    source: 'Dubai Land Department, Q4 2024' },
  { value: 'AED 2M+', label: 'Golden Visa Threshold',        source: 'UAE ICA, 2024' },
  { value: '200+',   label: 'Nationalities Investing',       source: 'DLD Transaction Report 2024' },
  { value: '100%',   label: 'Foreign Ownership Allowed',     source: 'UAE Property Law 2002 (amended 2019)' },
]

const EMIRATES = [
  {
    name: 'Dubai',
    tag: 'Global Capital · Zero Tax · World-Class Infrastructure',
    headline: "The World's Most Liquid Property Market",
    body: 'Dubai continues to attract the highest concentration of ultra-high-net-worth individuals in the MENA region. With direct flights to over 240 destinations (IATA, 2024), a DLD-regulated off-plan market, and no property tax, it delivers returns that mature markets simply cannot match.',
    bullets: [
      'DLD-registered off-plan projects with developer escrow protection',
      'Record transaction volumes — AED 761 billion in 2024 (Dubai Land Department)',
      'Communities like JVC, Dubai Islands, and Meydan delivering 7–10% gross yields',
      '10-year resident visa through AED 2M+ freehold investment',
    ],
    img: '/images/properties/sobha-sanctuary-lagoon.jpg',
    imgAlt: 'Sobha Sanctuary — luxury lagoon development, Dubai',
    linkHref: '/properties',
    linkLabel: 'Browse Dubai Properties →',
    reverse: false,
  },
  {
    name: 'Abu Dhabi',
    tag: 'Capital City · Sovereign Wealth · Mega Projects',
    headline: "The UAE's Capital: Sovereign-Backed, Ultra-Stable",
    body: "Abu Dhabi is home to ADNOC, Mubadala, and ADIA — three of the world's largest sovereign wealth funds. The government's Ghadan 21 economic plan is driving $13.6B in private-sector investment (Abu Dhabi Executive Council, 2024), fuelling demand for luxury residential and mixed-use real estate.",
    bullets: [
      'Yas Island and Saadiyat Island mega-developments underway',
      'Tourism surge post-Louvre Abu Dhabi and F1 infrastructure expansion',
      '10-year Golden Visa available on AED 2M+ property purchase',
      'Average property prices still 30–40% below comparable Dubai areas',
    ],
    img: '/images/properties/mercedes-benz-places-aerial.jpg',
    imgAlt: 'Mercedes-Benz Places — branded luxury residences, UAE',
    linkHref: '/contact',
    linkLabel: 'Enquire About Abu Dhabi →',
    reverse: true,
  },
  {
    name: 'Ras Al Khaimah',
    tag: 'Emerging Market · High Yield · Tourism Boom',
    headline: "The UAE's Fastest-Growing Investment Frontier",
    body: "RAK is the highest-yielding emirate in the UAE, with gross rental yields exceeding 9% in select projects (Bayut RAK Market Report, Q1 2026). The Wynn Al Marjan Island integrated resort — expected to draw 2M+ additional visitors annually — is creating unprecedented demand for residential and hospitality assets.",
    bullets: [
      'Al Marjan Island: luxury waterfront inventory at 40–60% below Dubai prices',
      'Wynn Resort opening driving pre-launch investor demand',
      'Growing expat population from Dubai professionals seeking affordability',
      'Direct access to East Coast beaches and Hajar Mountains',
    ],
    img: '/images/properties/sunset-bay-4-coastal.jpg',
    imgAlt: 'Sunset Bay 4 — coastal luxury development, Dubai Islands',
    linkHref: '/contact',
    linkLabel: 'Get RAK Investment Brief →',
    reverse: false,
  },
]

const DEVELOPER_GALLERY = [
  { developer: 'Binghatti', project: 'Mercedes-Benz Places', img: '/images/properties/mercedes-benz-places-aerial.jpg', tag: 'Brand Residences' },
  { developer: 'Sobha Realty', project: 'Sobha Sanctuary', img: '/images/properties/sobha-sanctuary-lagoon.jpg', tag: 'Waterfront Living' },
  { developer: 'Danube', project: 'Oasiz — Sky Lounge', img: '/images/properties/oasiz-skylounge-night.jpg', tag: 'Burj Khalifa Views' },
  { developer: 'Imtiaz', project: 'Wynwood Horizon', img: '/images/properties/wynwood-rooftop-pool.jpg', tag: 'Crystal Lagoon' },
  { developer: 'Ellington', project: 'Windsor House', img: '/images/properties/windsor-house-pool.jpg', tag: 'Resort-Style Pool' },
  { developer: 'Sobha Realty', project: 'Sobha SkyParks', img: '/images/properties/sobha-skyparks-pool.jpg', tag: 'Skyline Amenities' },
  { developer: 'Imtiaz', project: 'Sunset Bay 4', img: '/images/properties/sunset-bay-4-coastal.jpg', tag: 'Coastal Frontage' },
  { developer: 'Binghatti', project: 'Binghatti Wraith', img: '/images/properties/binghatti-wraith-aerial.jpg', tag: 'Al Jaddaf' },
  { developer: 'Sobha Realty', project: 'Sobha Elwood', img: '/images/properties/sobha-elwood-pool2.jpg', tag: 'Forest Living' },
]

const WHY_NOW = [
  { icon: '🏛️', title: 'Regulatory Fortress', body: 'DLD escrow laws, RERA oversight, and mandatory SPA registration protect every dirham of your investment.' },
  { icon: '✈️', title: 'Global Connectivity', body: 'Dubai and Abu Dhabi airports connect to 240+ destinations — your asset is always accessible, always liquid.' },
  { icon: '💼', title: 'Business-First Ecosystem', body: 'Freezone ownership, 100% repatriation of profits, and zero capital gains tax make the UAE a natural wealth hub.' },
  { icon: '📈', title: 'Supply Discipline', body: 'UAE government-controlled land releases prevent oversupply. Demand from 100,000+ annual new residents keeps prices firm.' },
]

const HOW_TO_BUY = [
  {
    country: '🇮🇳 Buying from India',
    items: [
      { q: 'How much can I send from India?', a: 'Each resident Indian can remit USD 250,000 per financial year under the RBI LRS. A family of four can jointly remit USD 1,000,000. NRIs living abroad have no annual cap.' },
      { q: 'What is TCS and do I pay it?', a: 'Your bank deducts 20% TCS (Tax Collected at Source) on LRS remittances above INR 7 lakh. This is not a final tax — claim it back as a credit when filing your ITR. Keep Form 27D from your bank.' },
      { q: 'How does DTAA apply?', a: 'India and UAE have a DTAA since 1993. Dubai rental income is taxed at 0% in UAE. Indian tax residents must declare it in Schedule FSI of their ITR. NRIs who are UAE tax residents (183+ days) generally do not need to declare in India if they hold a UAE Tax Residency Certificate.' },
    ],
  },
  {
    country: '⚖️ Inheritance — What Happens When You Die?',
    items: [
      { q: 'Does UAE Sharia law apply to my property?', a: 'By default, yes. Without a registered will, UAE courts apply Sharia inheritance rules to your Dubai property regardless of your nationality. This may not distribute assets to your intended beneficiaries.' },
      { q: 'How do I protect my heirs?', a: 'Register a DIFC Will through the DIFC Wills Service. Cost: approximately AED 10,000. Legally recognised by Dubai courts. Allows you to name any beneficiary under any inheritance framework — English law, Indian succession law, or any other system.' },
      { q: 'Is a DIFC Will enough for global estate planning?', a: 'A DIFC Will covers your UAE assets. You will still need a separate will in your home country for non-UAE assets. Consult an international estate planning lawyer for a coordinated structure.' },
    ],
  },
  {
    country: '🏢 Personal Name vs Company Name',
    items: [
      { q: 'Should I buy as an individual or through a company?', a: 'Personal name is simpler and cheaper — lower setup cost, no annual compliance. Suitable for most single-property investors. Company name (UAE free zone or mainland LLC) is useful for holding multiple properties, separating personal liability, or estate planning across jurisdictions.' },
      { q: 'How much does a UAE company cost to set up?', a: 'A UAE free zone company costs AED 15,000–25,000 to incorporate and AED 10,000–20,000 per year to maintain. A UAE mainland LLC costs AED 20,000–35,000 to set up with similar annual fees. Neither structure is necessary for a single property purchase.' },
    ],
  },
  {
    country: '💸 Repatriation — Getting Money Back Home',
    items: [
      { q: 'Can I send rental income back to India?', a: 'Yes. UAE has no restrictions on outward remittances. Indian NRIs can repatriate up to USD 1M per year from an NRO account (with CA certificate). Resident Indians receiving UAE rental income into an Indian account follow standard FEMA rules.' },
      { q: 'Can I send sale proceeds back to the UK?', a: 'Yes. No UAE restrictions. UK residents must declare capital gains to HMRC — though UAE charges 0% CGT, the gain is subject to UK CGT rates (18–24% for property). Private Residence Relief may apply if the property was your primary home.' },
    ],
  },
  {
    country: '🇬🇧 UK Buyers — HMRC Reporting',
    items: [
      { q: 'Do I pay UK tax on Dubai rental income?', a: 'Yes, if you are a UK tax resident. Dubai charges 0%, but HMRC taxes your worldwide income. Dubai rental income is declared on your UK Self Assessment return under foreign income. No double tax arises as there is no UAE tax to offset, but the income is taxed at your marginal UK rate (20–45%).' },
      { q: 'Do I pay UK CGT when I sell?', a: 'Yes. UK residents pay CGT on gains from overseas property: 18% (basic rate) or 24% (higher rate) from April 2024. Report via HMRC Self Assessment. A DIFC Will ensures the property passes to your chosen UK heirs without UAE Sharia applying.' },
    ],
  },
  {
    country: '🇺🇸 US Buyers — IRS Reporting',
    items: [
      { q: 'What must I report to the IRS?', a: 'FBAR (FinCEN 114): required if a foreign bank account used for rental income exceeds USD 10,000 at any point. FATCA Form 8938: required if foreign financial assets exceed USD 50,000 (single). Rental income on Schedule E. No US tax is due on UAE income until it exceeds standard US thresholds — and no foreign tax credit is available since UAE charges 0%.' },
      { q: 'Is there a US-UAE tax treaty?', a: 'No. The US and UAE do not have a bilateral income tax treaty. US citizens are taxed on worldwide income. Dubai rental income is fully reportable to the IRS. However, the Foreign Earned Income Exclusion does not apply to passive rental income — only to earned income from employment.' },
    ],
  },
]

export default function GlobalInvestorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/properties/sobha-sanctuary-lagoon.jpg"
          alt="Sobha Sanctuary luxury lagoon development Dubai"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
          {/* #10d — RERA at top */}
          <p className="text-white/60 text-xs font-semibold mb-3">
            RERA Broker #77789 · Nexus Elite Properties LLC · Licensed by Dubai Land Department
          </p>
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
            <Link href="/properties" className="inline-block bg-gold text-navy px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition">
              Explore All Properties
            </Link>
            <Link href="/roi-calculator" className="inline-block border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:border-gold hover:text-gold transition">
              Calculate My ROI
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP — with sources (#2) ── */}
      <section className="bg-gold py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl lg:text-3xl font-bold text-navy">{s.value}</p>
                <p className="text-navy/70 text-xs mt-1 font-medium leading-tight">{s.label}</p>
                <p className="text-navy/50 text-[10px] mt-0.5 leading-tight">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLAG + BUDGET EXPLORER ── */}
      <GlobalInvestorExplorer />

      {/* ── THREE EMIRATES ── */}
      {EMIRATES.map((em) => (
        <section key={em.name} className={`py-16 lg:py-20 px-4 ${em.reverse ? 'bg-cream' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col ${em.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
                <img src={em.img} alt={em.imgAlt} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
              </div>
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
                      <span className="text-gold font-bold mt-0.5 shrink-0">✓</span>{b}
                    </li>
                  ))}
                </ul>
                <Link href={em.linkHref} className="inline-block bg-navy text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-gold hover:text-navy transition">
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
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Exclusive Developer Portfolio</p>
            <h2 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4">Tier-1 Projects. Trusted Developers.</h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              Every project on this platform is handpicked from Dubai&apos;s top-rated developers — Emaar, Binghatti, Sobha, Danube, Imtiaz, and Ellington. All RERA-registered with DLD escrow protection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEVELOPER_GALLERY.map((item, i) => (
              <div key={`${item.developer}-${i}`} className="relative group rounded-xl overflow-hidden shadow-lg">
                <img src={item.img} alt={`${item.developer} — ${item.project}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">{item.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-0.5">{item.developer}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{item.project}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/properties" className="inline-block bg-gold text-navy px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition">
              View All 18 Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY INVEST NOW ── */}
      <section className="bg-cream py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The Investment Case</p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-bold">Why UAE Property, Why Now</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_NOW.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-display text-navy font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ACTUALLY BUY (#5 — BIGGEST WIN) ── */}
      <section className="bg-white py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Practical Investor Guide</p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-bold mb-4">
              How Do I Actually Buy Dubai Property?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Most investor pages explain why Dubai is good. This section explains how investors from
              India, the UK, and the US actually complete a purchase — including the tax, remittance,
              inheritance, and reporting steps that no other Dubai agent website covers properly.
            </p>
          </div>
          <div className="space-y-6">
            {HOW_TO_BUY.map((section) => (
              <div key={section.country} className="bg-cream rounded-2xl border border-gray-100 overflow-hidden">
                <div className="bg-navy px-6 py-4">
                  <h3 className="font-display text-white font-bold text-base">{section.country}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {section.items.map((item, i) => (
                    <details key={i} className="group">
                      <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-navy text-sm hover:text-gold transition list-none">
                        {item.q}
                        <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            This guide is for general information only. Always consult a qualified tax adviser, CA, or legal professional before making any investment or remittance decision.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION (#7) ── */}
      <section className="bg-cream py-16 lg:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Frequently Asked Questions</p>
            <h2 className="font-display text-navy text-3xl lg:text-4xl font-bold">
              Dubai Property — Investor Q&amp;A
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_SCHEMA.mainEntity.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm list-none">
                  {f.name}
                  <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM CTA ── */}
      <section className="bg-navy py-16 lg:py-20 px-4">
        <div className="max-w-xl mx-auto text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">RERA Broker #77789 · Nexus Elite Properties LLC</p>
          <h2 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4">
            Get Your Personalised<br />Investment Brief
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Shylesh Raj NK (RERA #77789) advises HNI clients across India, Europe,
            Singapore, and the GCC on UAE property entry strategy, tax structuring,
            DIFC Will setup, and Golden Visa pathways.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <LeadForm source="Global Investors Page" />
        </div>
      </section>
    </>
  )
}
