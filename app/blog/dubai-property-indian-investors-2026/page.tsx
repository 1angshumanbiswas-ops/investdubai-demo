import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dubai Property for Indian Investors 2026 — NRI Guide: Tax, ROI, LRS, Golden Visa | Shylesh Dubai',
  description: 'Complete guide for NRI and Indian investors buying Dubai property in 2026. LRS limits, FEMA rules, DTAA explained, best communities, step-by-step process, Golden Visa pathway.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can Indian residents (not NRIs) buy property in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indian residents living in India can purchase freehold property in Dubai under the RBI Liberalised Remittance Scheme (LRS). The LRS permits remittance of up to USD 250,000 per individual per financial year (April–March) for overseas property purchase. A couple can jointly remit up to USD 500,000. Remittances must be routed through an authorised dealer bank using purpose code S0005 and Form A2.' } },
    { '@type': 'Question', name: 'What is the LRS limit for buying Dubai property from India in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The RBI Liberalised Remittance Scheme (LRS) allows each resident individual to remit up to USD 250,000 (approximately ₹2.08 Crore) per financial year (April to March) for overseas property purchase. For a couple jointly buying, this doubles to USD 500,000. For off-plan properties, you can spread payments across multiple financial years — for example, a 60/40 payment plan lets you remit in Year 1 and Year 2 within separate LRS limits.' } },
    { '@type': 'Question', name: 'Do NRIs have an LRS limit when buying Dubai property?', acceptedAnswer: { '@type': 'Answer', text: 'No. NRIs (Non-Resident Indians) living and working outside India are not subject to the LRS cap. An NRI in the UAE, UK, USA, or any other country can purchase Dubai property at any budget without an annual remittance ceiling. NRIs typically use funds from their NRE (tax-free in India) or NRO accounts, or from income earned abroad, to fund property purchases.' } },
    { '@type': 'Question', name: 'Is Dubai rental income taxable in India?', acceptedAnswer: { '@type': 'Answer', text: 'Dubai charges 0% income tax on rental earnings. However, if you are a tax resident of India, you must declare Dubai rental income in your Indian Income Tax Return (ITR) under Schedule FSI and pay applicable Indian income tax on it. Under the India-UAE DTAA (in force since 1993), you are not double-taxed — but since UAE has no tax, there is no foreign tax credit to offset. NRIs who are UAE tax residents for 183+ days are typically not required to declare Dubai rental income in India, provided they file Form 10F and hold a UAE Tax Residency Certificate (TRC).' } },
    { '@type': 'Question', name: 'What is TCS on LRS remittances and how does it work?', acceptedAnswer: { '@type': 'Answer', text: 'Tax Collected at Source (TCS) of 20% applies to LRS remittances above INR 7 lakh per financial year (effective October 2023). This means your bank collects 20% of the remittance amount above INR 7 lakh at the time of transfer. This TCS is not a final tax — you claim it as a credit when filing your Indian ITR for the relevant financial year. If your total tax liability is lower than the TCS collected, you receive a refund. For property purchases, plan your remittance calendar accordingly.' } },
    { '@type': 'Question', name: 'What is the India-UAE DTAA and how does it help Indian property buyers?', acceptedAnswer: { '@type': 'Answer', text: 'The India-UAE Double Taxation Avoidance Agreement (DTAA), in force since September 1993, prevents the same income from being fully taxed in both countries. For Dubai property investors, it is most relevant for: (1) NRO account interest — taxed at 12.5% under DTAA instead of 30%; (2) dividends from Indian companies — taxed at 10% under DTAA. Dubai itself charges 0% on all property-related income. To claim DTAA benefits in India, you need a UAE Tax Residency Certificate (TRC) from the UAE Federal Tax Authority and Form 10F filed with Indian tax authorities.' } },
    { '@type': 'Question', name: 'Can Indian investors get a UAE Golden Visa through Dubai property?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indian nationals and NRIs are fully eligible for the UAE 10-Year Golden Visa through property investment. The requirement is AED 2,000,000 (approximately ₹4.56 Crore or USD 545,000) in a DLD-registered property, either fully paid ready or at least 50% paid off-plan. The Golden Visa covers the investor, spouse, children of any age, and up to 3 domestic staff. There is zero physical residency requirement to maintain it.' } },
    { '@type': 'Question', name: 'What are the best areas in Dubai for Indian NRI investors?', acceptedAnswer: { '@type': 'Answer', text: 'Popular communities for Indian investors include: JVC (highest yield 8–9.5%, entry from AED 480K), Dubai Silicon Oasis (tech community, 7.5–8.5% yield), Al Furjan (established, metro access, 7–8% yield), Business Bay (Burj Khalifa views, 6.5–7.5% yield, Golden Visa eligible), and Meydan (Crystal Lagoon waterfront, 7–8.5% yield). For Golden Visa eligibility (AED 2M+), Dubai Marina, Downtown Dubai, and Sobha Hartland are strong choices.' } },
    { '@type': 'Question', name: 'How do I remit money from India to buy Dubai property legally?', acceptedAnswer: { '@type': 'Answer', text: 'Remittance must go through your authorised dealer (AD) bank in India using purpose code S0005 (purchase of immovable property abroad) with Form A2. Funds must originate from your own account. You cannot use informal channels (hawala), international debit/credit cards for capital transactions, Indian bank loans, or route funds through a relative\'s NRI account. For NRIs, funds can be remitted from NRE accounts (tax-free in India), NRO accounts, or overseas bank accounts directly to the developer\'s DLD-registered escrow account in the UAE.' } },
    { '@type': 'Question', name: 'How does Dubai property compare to Mumbai or Bengaluru investment?', acceptedAnswer: { '@type': 'Answer', text: 'Dubai delivers 6–9.5% gross rental yield versus 2–3% in Mumbai and 2–3% in Bengaluru. Dubai charges 0% income tax, 0% capital gains tax, and 0% inheritance tax, versus India\'s 30%+ income tax on rental earnings and 12.5–20% capital gains tax. Dubai\'s AED is pegged to USD at 3.6725, providing a hard-currency hedge versus INR depreciation. Entry prices for a 1BR in JVC (AED 700K = ~₹1.6Cr) are competitive with equivalent Mumbai suburban apartments.' } },
    { '@type': 'Question', name: 'Do I need a visa to buy property in Dubai as an Indian national?', acceptedAnswer: { '@type': 'Answer', text: 'No. You do not need UAE residency or a visa to purchase property in Dubai. Indian passport holders receive a 30-day visa-free entry to the UAE (effective 2024), which is sufficient to visit and sign purchase documents. However, you may need to visit for document signing at the DLD or a RERA-registered trustee office. Many developers also offer remote/digital SPA signing for off-plan purchases. The property purchase itself — and the Golden Visa application — can be initiated without prior UAE residency.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dubai Property for Indian Investors 2026 — Complete NRI Guide',
  author: { '@type': 'Person', name: 'Shylesh Raj NK', jobTitle: 'RERA-Certified Dubai Property Advisor' },
  publisher: { '@type': 'Organization', name: 'Nexus Elite Properties LLC' },
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
}

const INR_COMPARE = [
  { metric: 'Gross Rental Yield', dubai: '6–9.5%', mumbai: '2–3%', bengaluru: '2.5–3.5%' },
  { metric: 'Income Tax on Rent', dubai: '0%', mumbai: '10–30%+', bengaluru: '10–30%+' },
  { metric: 'Capital Gains Tax', dubai: '0%', mumbai: '12.5–20%', bengaluru: '12.5–20%' },
  { metric: 'Stamp Duty', dubai: '4% DLD (one-time)', mumbai: '5–6%', bengaluru: '5–7%' },
  { metric: 'Currency', dubai: 'AED (USD-pegged)', mumbai: 'INR (depreciating)', bengaluru: 'INR (depreciating)' },
  { metric: 'Entry Price (1BR)', dubai: 'AED 620K (~₹1.4Cr)', mumbai: '₹1.5–2.5Cr+', bengaluru: '₹80L–1.5Cr' },
  { metric: 'Golden Visa / Residency', dubai: 'Yes — AED 2M+, 10 years', mumbai: 'N/A', bengaluru: 'N/A' },
  { metric: 'Foreign ownership', dubai: '100% freehold', mumbai: 'Restricted to citizens', bengaluru: 'Restricted to citizens' },
]

const LRS_STEPS = [
  { step: '01', title: 'Determine your LRS headroom', detail: 'Each resident individual can remit up to USD 250,000 per financial year (April–March). Check how much you have already used in the current year. A couple can pool USD 500,000 combined.' },
  { step: '02', title: 'Contact your AD bank', detail: 'Visit your authorised dealer (AD) bank — SBI, HDFC, ICICI, Axis, or any RBI-authorised bank. Inform them the purpose is overseas property purchase. They will guide you on Form A2 and documentation required.' },
  { step: '03', title: 'Complete Form A2 and KYC', detail: 'Fill Form A2 with purpose code S0005 (purchase of immovable property outside India). Provide KYC documents, PAN card, passport, property documents (SPA/booking agreement), and developer escrow account details.' },
  { step: '04', title: 'Bank remittance to escrow', detail: 'Your bank remits the amount directly to the developer\'s DLD-registered escrow account in the UAE. Funds must come from your own account — not a relative\'s NRI account or via hawala.' },
  { step: '05', title: 'Claim TCS credit in ITR', detail: 'If your remittance exceeds INR 7 lakh, your bank deducts TCS at 20%. Keep Form 27D (TCS certificate). Claim this as advance tax credit when filing your ITR. If TCS > tax liability, you receive a refund.' },
  { step: '06', title: 'Declare in ITR — Schedule FA', detail: 'Every financial year, declare your Dubai property in Schedule FA (Foreign Assets) of your Indian ITR. Report rental income in Schedule FSI. Failure to declare attracts penalties under the Black Money Act.' },
]

const BEST_AREAS = [
  { area: 'JVC (Jumeirah Village Circle)', yield: '8–9.5%', entryINR: '~₹1.1–2Cr', entryAED: 'AED 480K–900K', forWhom: 'First-time NRI investors, yield-first strategy. Highest yield in Dubai. Off-plan available.' },
  { area: 'Dubai Silicon Oasis', yield: '7.5–8.5%', entryINR: '~₹1.25–2.2Cr', entryAED: 'AED 550K–950K', forWhom: 'Tech professionals. Corporate tenant base from DSO free zone. Oasiz by Danube available.' },
  { area: 'Al Furjan', yield: '7–8%', entryINR: '~₹2–3Cr', entryAED: 'AED 850K–1.3M', forWhom: 'Established community, metro access. John Richmond District available. Family-oriented tenants.' },
  { area: 'Business Bay', yield: '6.5–7.5%', entryINR: '~₹2.5–5.5Cr', entryAED: 'AED 1.1M–2.5M', forWhom: 'Golden Visa eligible (AED 2M+). Corporate demand. Mercedes-Benz Places available.' },
  { area: 'Meydan / Crystal Lagoon', yield: '7–8.5%', entryINR: '~₹2.5–4.2Cr', entryAED: 'AED 1.1M–1.8M', forWhom: 'Waterfront lifestyle. Wynwood Horizon available. Strong rental demand from lifestyle-seeking tenants.' },
  { area: 'Dubai Marina / JBR', yield: '5.5–7%', entryINR: '~₹2.8–7Cr', entryAED: 'AED 1.2M–3M', forWhom: 'Short-term rental potential (Airbnb 10–14%). Golden Visa eligible. Strong resale liquidity.' },
]

const BUYING_STEPS = [
  { num: '01', title: 'Define Budget & LRS Plan', detail: 'Clarify whether you are a Resident Indian (LRS limit applies) or NRI (no LRS cap). Plan your LRS calendar across financial years if needed. For off-plan, spread payments to stay within annual limits.' },
  { num: '02', title: 'Get RERA Advisor + Property Shortlist', detail: 'Engage a RERA-registered broker (Shylesh, RERA #77789). Receive shortlist matched to your budget, yield target, and payment plan preference. No buyer commission in Dubai — developer pays broker fee.' },
  { num: '03', title: 'Reserve & Sign SPA', detail: 'Pay 5–10% booking amount (off-plan) or 10% MOU deposit (ready). Sign the Sales & Purchase Agreement (SPA). For off-plan, your funds go into DLD-registered escrow immediately.' },
  { num: '04', title: 'DLD Registration & Oqood/Title Deed', detail: 'Property is registered with the Dubai Land Department. For off-plan: Oqood registration. For ready: Title Deed issued. DLD fee: 4% of property value + AED 580 admin.' },
  { num: '05', title: 'Remit via LRS / NRE-NRO', detail: 'Resident Indians remit each instalment via AD bank Form A2 (purpose code S0005). NRIs remit directly from NRE/NRO or overseas accounts. All funds go to developer\'s DLD-registered escrow.' },
  { num: '06', title: 'Handover & Rental Setup', detail: 'On completion, receive keys and Title Deed. Appoint a RERA property management company for tenant sourcing, Ejari registration, and rent collection. Declare rental income in Indian ITR if tax resident of India.' },
]

export default function DubaiPropertyIndianInvestors2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-400/20 text-green-300 mb-4 inline-block">Country Guide</span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Dubai Property for Indian Investors —<br />Tax, ROI, LRS Rules & Golden Visa 2026
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

          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-gold pl-5">
            Indian nationals are the #1 foreign buyers in Dubai — accounting for <strong>20.6% of all foreign property purchases</strong> in early 2026 (DXBinteract / Harbor Real Estate data). This complete guide covers everything Indian and NRI investors need to know: LRS remittance rules, FEMA compliance, the India-UAE DTAA, best communities, step-by-step buying process, and the Golden Visa pathway.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Indian share of Dubai buyers', value: '20.6%' },
              { label: 'LRS limit (resident Indian)', value: '$250K/yr' },
              { label: 'Tax on Dubai rental income', value: '0% UAE' },
              { label: 'Golden Visa threshold', value: 'AED 2M+' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gold font-bold text-lg leading-tight">{f.value}</p>
                <p className="text-gray-500 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Section 1 — Why Indians choose Dubai */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Why Indian Investors Choose Dubai Over Mumbai or Bengaluru</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Dubai delivers everything the Indian domestic property market does not: hard-currency denomination, zero rental income tax, 6–9.5% gross yields, and a 10-year residency visa. With the INR depreciating against the USD at a historical average of 3–4% per year, a Dubai property purchase is simultaneously a yield play, a capital appreciation play, and a currency hedge.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">🇦🇪 Dubai</th>
                  <th className="text-left p-3 font-semibold">🇮🇳 Mumbai</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">🇮🇳 Bengaluru</th>
                </tr>
              </thead>
              <tbody>
                {INR_COMPARE.map((r, i) => (
                  <tr key={r.metric} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                    <td className="p-3 font-semibold text-navy text-xs align-top">{r.metric}</td>
                    <td className="p-3 text-green-700 font-semibold text-xs align-top">{r.dubai}</td>
                    <td className="p-3 text-gray-600 text-xs align-top">{r.mumbai}</td>
                    <td className="p-3 text-gray-600 text-xs align-top">{r.bengaluru}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mb-10">Exchange rate used: AED 1 = ₹22.8 (indicative, July 2026). Indian income tax rates for HNI (highest slab). Consult a CA for personal tax assessment.</p>

          {/* Section 2 — NRI vs Resident Indian */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">NRI vs Resident Indian — Who Can Buy and How</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Both Non-Resident Indians (NRIs) and Resident Indians living in India can purchase freehold property in Dubai. The process differs primarily in how funds are remitted.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                type: 'Non-Resident Indian (NRI)',
                sub: 'Indian living & working outside India',
                badge: 'No LRS cap',
                badgeColor: 'bg-green-100 text-green-700',
                points: [
                  'No annual remittance limit — can buy at any budget',
                  'Use NRE account (tax-free in India) or overseas funds',
                  'NRO funds can be repatriated up to USD 1M/year with CA certificate',
                  'No TCS deduction on overseas fund transfers',
                  'If UAE tax resident (183+ days): strong DTAA protection',
                  'Most Dubai-based Indian buyers fall into this category',
                ],
              },
              {
                type: 'Resident Indian',
                sub: 'Indian citizen living in India',
                badge: 'LRS limit: $250K/yr',
                badgeColor: 'bg-blue-100 text-blue-700',
                points: [
                  'LRS cap: USD 250,000 per person per financial year',
                  'Couples can jointly use USD 500,000 combined',
                  'Off-plan plans allow spreading across multiple years',
                  '20% TCS on remittances above INR 7 lakh (creditable in ITR)',
                  'Must use AD bank with Form A2, purpose code S0005',
                  'Must declare Dubai property in ITR Schedule FA each year',
                ],
              },
            ].map(g => (
              <div key={g.type} className="bg-cream rounded-xl p-5 border border-gray-100">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-display font-bold text-navy">{g.type}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${g.badgeColor}`}>{g.badge}</span>
                </div>
                <p className="text-gray-500 text-xs mb-3">{g.sub}</p>
                <ul className="space-y-1.5">
                  {g.points.map((p, i) => (
                    <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-gold shrink-0 mt-0.5">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 3 — LRS Step by Step */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">LRS Remittance — Step-by-Step for Resident Indians</h2>
          <p className="text-gray-500 text-sm mb-6">For NRIs: skip to Step 5 — remit from NRE/NRO or overseas account directly to UAE developer escrow.</p>
          <div className="space-y-4 mb-10">
            {LRS_STEPS.map(s => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-navy font-bold text-xs">{s.step}</span>
                </div>
                <div className="flex-1 bg-cream border border-gray-100 rounded-xl p-4">
                  <p className="font-semibold text-navy text-sm mb-1">{s.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TCS explainer box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
            <p className="font-semibold text-blue-800 text-sm mb-2">⚠ TCS on LRS Remittances — How It Works</p>
            <p className="text-blue-700 text-sm leading-relaxed mb-3">
              From October 2023, <strong>20% TCS</strong> applies to LRS remittances above INR 7 lakh per year. For a ₹50 lakh remittance, your bank deducts TCS of approximately ₹8.6 lakh at the time of transfer.
            </p>
            <p className="text-blue-700 text-sm leading-relaxed">
              <strong>This is not a final tax</strong> — it is an advance tax credit. Claim it in your Indian ITR (Form 27D). If your total tax liability for the year is lower than TCS deducted, you receive a refund from the Income Tax Department. Maintain cash flow reserves to cover TCS before the ITR refund cycle.
            </p>
          </div>

          {/* Section 4 — DTAA */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">India-UAE DTAA — Tax Implications Explained</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            The India-UAE Double Taxation Avoidance Agreement (DTAA) has been in force since September 1993. It governs how income flowing between India and the UAE is taxed. For Dubai property investors, the key provisions are:
          </p>
          <div className="space-y-3 mb-5">
            {[
              { title: 'Dubai rental income — UAE: 0% tax', body: 'UAE charges zero income tax on rental earnings. However, Indian tax residents must declare this income in Schedule FSI of their Indian ITR and pay applicable Indian income tax. NRIs who are UAE tax residents (183+ days in UAE) are generally not required to include this in their Indian ITR, provided they hold a UAE Tax Residency Certificate (TRC) from the UAE Federal Tax Authority.' },
              { title: 'Capital gains on Dubai property sale — UAE: 0%', body: 'The UAE charges zero capital gains tax on property sales. Under the India-UAE DTAA, gains from the sale of immovable property (real estate) are generally taxable in the country where the property is situated — which is the UAE (0%). Indian tax residents may still need to declare the gain and claim exemption under DTAA in their ITR. Consult a CA familiar with DTAA before selling.' },
              { title: 'NRO account interest — DTAA reduces to 12.5%', body: 'Without a DTAA claim, India deducts TDS on NRO interest at 30%. With a valid UAE TRC + Form 10F, this reduces to 12.5% under the India-UAE DTAA. NRE accounts are already tax-free in India regardless of DTAA.' },
              { title: 'Indian dividends — DTAA reduces to 10%', body: 'Dividends received from Indian companies are normally taxed at 20% in India. UAE residents with a valid TRC pay only 10% under the India-UAE DTAA.' },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-navy text-sm mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-10">
            <p className="font-semibold text-yellow-800 text-sm mb-1">📋 To claim DTAA benefits in India, you need:</p>
            <p className="text-yellow-700 text-sm">1. <strong>UAE Tax Residency Certificate (TRC)</strong> — issued by UAE Federal Tax Authority (FTA) after 183+ days of physical presence in UAE · 2. <strong>Form 10F</strong> — self-declaration filed electronically on the Indian income tax portal · Without both documents, Indian payers deduct TDS at full domestic rates.</p>
          </div>

          {/* Section 5 — Best areas */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Best Dubai Communities for Indian NRI Investors — 2026</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Entry prices below are shown in both AED and approximate INR at ₹22.8 per AED.
          </p>
          <div className="space-y-3 mb-10">
            {BEST_AREAS.map((a, i) => (
              <div key={i} className="bg-cream rounded-xl p-4 border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-navy text-sm">{a.area}</p>
                  <span className="text-green-600 font-bold text-sm">{a.yield} yield</span>
                </div>
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="text-xs bg-navy/10 text-navy px-2 py-0.5 rounded-full">{a.entryAED}</span>
                  <span className="text-xs bg-gold/20 text-navy px-2 py-0.5 rounded-full">{a.entryINR}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{a.forWhom}</p>
              </div>
            ))}
          </div>

          {/* Section 6 — Step by step buying */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Buying Dubai Property from India — Step by Step</h2>
          <div className="space-y-4 mb-12">
            {BUYING_STEPS.map(s => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-navy font-bold text-xs">{s.num}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-semibold text-navy text-sm mb-1">{s.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Visa callout */}
          <div className="bg-navy rounded-2xl p-6 mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">UAE Golden Visa for Indian Investors</p>
            <h3 className="font-display text-white text-xl font-bold mb-3">AED 2M+ Property = 10-Year UAE Residency</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Indian nationals who invest AED 2,000,000 (≈ ₹4.56 Crore) or above in Dubai property qualify for the UAE 10-Year Golden Visa. The Golden Visa covers you, your spouse, children of any age, and up to 3 domestic staff. Zero physical residency requirement. Renewable every 10 years.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: 'Minimum investment', value: 'AED 2M' },
                { label: 'In INR (approx)', value: '₹4.56 Cr' },
                { label: 'Visa validity', value: '10 Years' },
                { label: 'Physical presence req.', value: 'None' },
              ].map(f => (
                <div key={f.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-gold font-bold text-sm">{f.value}</p>
                  <p className="text-white/50 text-xs mt-1">{f.label}</p>
                </div>
              ))}
            </div>
            <Link href="/golden-visa" className="inline-block bg-gold text-navy px-5 py-2 rounded-lg text-sm font-bold hover:bg-yellow-400 transition">Check Golden Visa Eligibility →</Link>
          </div>

          {/* FAQs */}
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3 mb-12">
            {FAQ_SCHEMA.mainEntity.map((f, i) => (
              <details key={i} className="group bg-cream rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm">
                  {f.name}
                  <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Tax & Legal Disclaimer:</strong> This guide is for general information only and does not constitute tax, legal, or financial advice. LRS limits, TCS rates, DTAA provisions, and Indian income tax rules are subject to change. Always consult a qualified Chartered Accountant (CA) familiar with cross-border taxation before making any remittance or investment decision. Exchange rates are indicative only.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 text-center mb-12">
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Talk to a RERA-Certified Advisor</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Get a Personalised NRI Investment Brief</h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">Shylesh Raj NK (RERA #77789) has advised hundreds of Indian NRI and HNI investors on Dubai property entry strategy, LRS-optimised payment plans, and Golden Visa applications.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/properties" className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-yellow-400 transition text-sm">Browse All Properties →</Link>
              <Link href="/contact" className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">Book Free Consultation</Link>
            </div>
          </div>

          {/* Author */}
          <div className="bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img src="/shylesh.jpg" alt="Shylesh Raj NK" className="w-16 h-16 rounded-full object-cover object-top shrink-0" />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · UAE Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">Shylesh Raj NK is a RERA-certified Dubai property advisor who has guided hundreds of Indian NRI and HNI investors from Mumbai, Delhi, Bengaluru, Chennai, and across the GCC through the Dubai property investment process — from LRS planning through to Golden Visa issuance.</p>
              <Link href="/contact" className="inline-block mt-3 text-gold text-sm font-semibold hover:underline">Book a free consultation →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
