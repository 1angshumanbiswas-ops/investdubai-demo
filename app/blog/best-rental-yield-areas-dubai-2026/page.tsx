import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Areas for Rental Yield in Dubai 2026 — Data Analysis | Shylesh Dubai',
  description: 'Which Dubai communities deliver the highest rental yields in 2026? Data-driven analysis of JVC, Business Bay, Dubai Silicon Oasis, Al Furjan, Dubai Marina and more.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which area in Dubai has the highest rental yield in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Jumeirah Village Circle (JVC) consistently delivers the highest gross rental yields in Dubai — averaging 8.0–9.5% for studios and 1-bedroom units. Dubai Silicon Oasis (7.5–8.5%), Al Furjan (7.0–8.0%), and Arjan/Dubailand (7.5–8.5%) also rank among the top-yielding communities. Premium areas like Downtown Dubai and Palm Jumeirah yield less (5.0–6.5%) but offer stronger capital appreciation.' } },
    { '@type': 'Question', name: 'What is a good rental yield in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'A gross rental yield of 6% or above is considered good in Dubai. Yields of 7–9% are excellent and achievable in mid-market communities. Yields above 9% typically require furnished short-term rental (Airbnb) management in tourist-facing locations. For comparison, London averages 3–4%, Singapore 3–4%, and Mumbai 2–3% gross rental yield.' } },
    { '@type': 'Question', name: 'What is the difference between gross and net rental yield in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Gross rental yield is the annual rent divided by the property purchase price. Net yield deducts operating costs: service charges (AED 8–25 per sq ft/year), property management fees (5–10% of annual rent), maintenance, and vacancy periods. Net yields in Dubai are typically 1.5–2.5% below gross yields. A property with 8% gross yield may net 5.5–6.5% after costs.' } },
    { '@type': 'Question', name: 'How much can I earn from renting a 1-bedroom apartment in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Annual rental income for a 1-bedroom in Dubai varies by location. In JVC, a 1BR rents for AED 55,000–75,000/year (entry price AED 700,000–900,000 = 7–9% yield). In Business Bay, AED 80,000–110,000/year (entry AED 1.1M–1.6M = 6–7.5% yield). In Downtown Dubai, AED 100,000–140,000/year (entry AED 1.8M–2.5M = 5–6% yield).' } },
    { '@type': 'Question', name: 'Does Dubai have a property tax on rental income?', acceptedAnswer: { '@type': 'Answer', text: 'No. Dubai charges zero income tax on rental earnings from property. There is no capital gains tax, no wealth tax, and no inheritance tax. The only recurring government cost is the annual service charge paid to the developer or owners association, ranging from AED 8–25 per square foot depending on the community.' } },
    { '@type': 'Question', name: 'Is short-term rental (Airbnb) better than long-term rental in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Short-term furnished rentals can yield 10–15% gross in tourist-facing areas like Downtown Dubai, Dubai Marina, Palm Jumeirah, and JBR — but require a DTCM holiday home licence, active management, higher furnishing costs, and greater vacancy risk. Long-term unfurnished rentals offer 6–9% gross with minimal management and stable, predictable income. Most HNI investors prefer long-term for simplicity unless they have an active management operator.' } },
    { '@type': 'Question', name: 'What are service charges in Dubai and how do they affect yield?', acceptedAnswer: { '@type': 'Answer', text: 'Service charges are annual fees paid by property owners for the maintenance of common areas and building services. They range from AED 8–12 per sq ft in mid-market communities (JVC, Al Furjan) to AED 18–30 per sq ft in luxury buildings (Downtown Dubai, Dubai Marina). On a 700 sq ft apartment in JVC at AED 10/sq ft, the annual service charge is AED 7,000 — directly reducing net yield.' } },
    { '@type': 'Question', name: 'Which Dubai communities are best for Indian NRI investors targeting yield?', acceptedAnswer: { '@type': 'Answer', text: 'For NRI investors focused on rental yield, JVC, Dubai Silicon Oasis, Al Furjan, and Arjan/Dubailand offer the best yield-to-entry price ratios. For NRIs also targeting the Golden Visa, properties in Business Bay, Dubai Marina, or Meydan at AED 2M+ deliver strong yields of 6.5–7.5% while qualifying for the 10-year residency. Sobha Realty and Danube projects are particularly popular with Indian buyers.' } },
    { '@type': 'Question', name: 'Can I manage my Dubai rental property from abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most Dubai investors manage their property remotely through a RERA-registered property management company (typically 5–8% of annual rent). The management company handles tenant sourcing, Ejari registration, rent collection, maintenance, and RERA compliance. This is the standard model for NRI and international investors who do not reside in Dubai.' } },
    { '@type': 'Question', name: 'What is the Ejari system in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Ejari is the Dubai government online tenancy contract registration system, managed by RERA. All rental contracts in Dubai must be registered on Ejari — it is a legal requirement. The Ejari registration protects both landlord and tenant and is required for utility connections (DEWA), visa applications by the tenant, and any RERA rental dispute resolution. Registration costs approximately AED 220.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Areas for Rental Yield in Dubai 2026 — Data Analysis',
  author: { '@type': 'Person', name: 'Shylesh Raj NK', jobTitle: 'RERA-Certified Dubai Property Advisor' },
  publisher: { '@type': 'Organization', name: 'Nexus Elite Properties LLC' },
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
}

const YIELD_TABLE = [
  { rank: '01', area: 'Jumeirah Village Circle (JVC)', type: 'Studio / 1BR', grossYield: '8.0–9.5%', avgRent: 'AED 40K–75K/yr', entryPrice: 'AED 480K–900K', serviceCharge: 'AED 9–12/sqft', why: 'Highest yield in Dubai. Strong tenant demand from mid-income professionals. Upcoming metro connectivity boosting capital values.' },
  { rank: '02', area: 'Arjan / Dubailand', type: 'Studio / 1BR', grossYield: '7.5–8.5%', avgRent: 'AED 38K–65K/yr', entryPrice: 'AED 480K–800K', serviceCharge: 'AED 8–11/sqft', why: 'Emerging community with competitive entry prices and growing demand. Close to Dubai Hills Mall and Miracle Garden.' },
  { rank: '03', area: 'Dubai Silicon Oasis (DSO)', type: 'Studio / 1BR', grossYield: '7.5–8.5%', avgRent: 'AED 42K–72K/yr', entryPrice: 'AED 550K–950K', serviceCharge: 'AED 9–13/sqft', why: 'Tech free zone drives steady corporate tenant base. Oasiz by Danube (our listing) with plunge pools and 74-month payment plan.' },
  { rank: '04', area: 'Al Furjan', type: '1BR / 2BR', grossYield: '7.0–8.0%', avgRent: 'AED 65K–100K/yr', entryPrice: 'AED 850K–1.3M', serviceCharge: 'AED 10–14/sqft', why: 'Established community with metro station. Family-friendly with villas and apartments. John Richmond District (our listing) located here.' },
  { rank: '05', area: 'Motor City / Sports City', type: 'Studio / 1BR', grossYield: '7.0–8.0%', avgRent: 'AED 45K–75K/yr', entryPrice: 'AED 580K–950K', serviceCharge: 'AED 9–12/sqft', why: 'Binghatti Sky Terraces (our listing) in Motor City. Niche community with strong tenant loyalty and lower vacancy rates.' },
  { rank: '06', area: 'Meydan / Crystal Lagoon', type: '1BR / 2BR', grossYield: '7.0–8.5%', avgRent: 'AED 75K–130K/yr', entryPrice: 'AED 1.1M–1.8M', serviceCharge: 'AED 11–15/sqft', why: 'Emerging waterfront community. Wynwood Horizon (our listing) overlooks Crystal Lagoon with Burj Khalifa skyline. High yield for price point.' },
  { rank: '07', area: 'Business Bay', type: '1BR / 2BR', grossYield: '6.5–7.5%', avgRent: 'AED 80K–130K/yr', entryPrice: 'AED 1.1M–2.2M', serviceCharge: 'AED 13–18/sqft', why: 'Central location, Burj Khalifa views, strong corporate demand. Mercedes-Benz Places (our listing) sets the luxury benchmark here.' },
  { rank: '08', area: 'Dubai Marina', type: '1BR / 2BR', grossYield: '5.5–7.0%', avgRent: 'AED 85K–140K/yr', entryPrice: 'AED 1.2M–2.5M', serviceCharge: 'AED 15–22/sqft', why: 'Premium brand. High short-term rental potential (10–14% furnished). Strong capital appreciation track record. Higher service charges compress net yield.' },
  { rank: '09', area: 'Dubai Hills Estate', type: '1BR / 2BR / Villa', grossYield: '5.5–6.5%', avgRent: 'AED 80K–200K/yr', entryPrice: 'AED 1.3M–5M+', serviceCharge: 'AED 12–18/sqft', why: 'Master-planned Emaar community with golf course, mall, and schools. Lower yield but strongest capital appreciation. Family end-user demand dominant.' },
  { rank: '10', area: 'Downtown Dubai', type: '1BR / 2BR', grossYield: '5.0–6.5%', avgRent: 'AED 110K–200K/yr', entryPrice: 'AED 1.8M–5M', serviceCharge: 'AED 18–28/sqft', why: 'Trophy asset. Burj Khalifa address commands premium rents but high entry price limits gross yield. Best for capital growth and short-term rental income (10–14%).' },
]

const YIELD_FACTORS = [
  { factor: 'Location & Metro Access', impact: 'High', detail: 'Communities with existing or planned metro stations command rental premiums of 10–20% over equivalent non-metro areas. JVC, Al Furjan, and Dubai Silicon Oasis all benefit from metro connectivity.' },
  { factor: 'Unit Size & Type', impact: 'High', detail: 'Studios and 1-bedroom units deliver the highest percentage yields. Larger units (3BR+) have lower yield percentages but higher absolute rent. The sweet spot for yield-focused investors is 1BR in the AED 700K–1.2M range.' },
  { factor: 'Service Charge Rate', impact: 'Medium', detail: 'Service charges directly reduce net yield. A property with 8.5% gross yield but AED 20/sqft service charge on 750 sqft pays AED 15,000/year — reducing net yield by 1.5–2% versus a community with AED 10/sqft charges.' },
  { factor: 'Furnishing Status', impact: 'Medium', detail: 'Furnished units command 20–35% rent premiums over unfurnished in the same building — but require ongoing maintenance, replacement, and management costs. Short-term furnished (Airbnb) can achieve 10–15% gross yield in tourist areas.' },
  { factor: 'Developer & Building Quality', impact: 'Medium', detail: 'Tier-1 developers (Emaar, Sobha, Ellington, Danube) command 10–20% rent premiums over comparable secondary-market buildings. Quality finish and amenities attract quality tenants and reduce vacancy.' },
  { factor: 'Community Infrastructure', impact: 'Medium', detail: 'Completed retail, schools, and leisure amenities reduce tenant churn and support stable rents. Emerging communities may offer lower entry prices but face higher vacancy risk until infrastructure catches up.' },
]

export default function BestRentalYieldAreasDubai2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-400/20 text-blue-300 mb-4 inline-block">Market Analysis</span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Best Areas for Rental Yield<br />in Dubai 2026 — Data Analysis
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
            Dubai delivers gross rental yields of 5–9.5% — significantly ahead of London (3–4%), Singapore (3–4%), or Mumbai (2–3%) — with zero income tax on rental earnings. But not all communities are equal. This data-driven breakdown ranks the top 10 Dubai areas by 2026 gross yield, with entry prices, average rents, and service charge rates.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Highest Gross Yield', value: '9.5%' },
              { label: 'Top Community', value: 'JVC' },
              { label: 'Tax on Rental Income', value: '0%' },
              { label: 'vs London Average', value: '3× more' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gold font-bold text-lg leading-tight">{f.value}</p>
                <p className="text-gray-500 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">Why Rental Yield Varies Across Dubai</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Dubai&apos;s residential market spans communities from ultra-luxury (Palm Jumeirah, Downtown) to mid-market family suburbs (JVC, Al Furjan, Dubai Silicon Oasis). The relationship between entry price and achievable rent determines yield — and in Dubai, mid-market communities consistently outperform premium areas on a percentage yield basis, even if absolute rent values are lower.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Understanding this yield-vs-capital-appreciation trade-off is the foundation of effective Dubai property investment. High-yield communities deliver superior income returns; premium communities deliver superior capital appreciation. The right choice depends entirely on your investment objectives.
          </p>

          <h2 className="font-display text-2xl font-bold text-navy mb-2">Top 10 Communities by Gross Rental Yield — 2026</h2>
          <p className="text-gray-500 text-xs mb-5">Gross yield = annual rent ÷ purchase price. Data reflects unfurnished long-term rental market, Q2 2026. Service charges are annual and paid by the owner.</p>

          <div className="space-y-4 mb-12">
            {YIELD_TABLE.map((c) => (
              <div key={c.rank} className="bg-cream rounded-xl border border-gray-100 overflow-hidden">
                <div className="flex items-start gap-4 p-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-navy font-bold text-xs">{c.rank}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold text-navy text-base">{c.area}</h3>
                      <span className="text-green-600 font-bold text-lg">{c.grossYield}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">{c.why}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div><p className="text-gray-400 text-[10px] uppercase tracking-wide">Unit Type</p><p className="text-navy text-xs font-semibold">{c.type}</p></div>
                      <div><p className="text-gray-400 text-[10px] uppercase tracking-wide">Annual Rent</p><p className="text-navy text-xs font-semibold">{c.avgRent}</p></div>
                      <div><p className="text-gray-400 text-[10px] uppercase tracking-wide">Entry Price</p><p className="text-navy text-xs font-semibold">{c.entryPrice}</p></div>
                      <div><p className="text-gray-400 text-[10px] uppercase tracking-wide">Service Charge</p><p className="text-navy text-xs font-semibold">{c.serviceCharge}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">Gross vs Net Yield — What You Actually Take Home</h2>
          <p className="text-gray-600 leading-relaxed mb-5">The figures above are gross yields. Net yield deducts the annual costs of ownership. Here is a worked example for a typical JVC 1-bedroom apartment.</p>
          <div className="bg-cream rounded-xl border border-gray-100 overflow-hidden mb-4">
            <div className="bg-navy px-5 py-3">
              <p className="text-white font-semibold text-sm">Example: JVC 1BR — Purchase Price AED 800,000</p>
            </div>
            <div className="p-5">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { item: 'Annual rental income', amount: 'AED 64,000', note: '(8.0% gross yield)' },
                    { item: 'Less: Service charge', amount: '− AED 8,000', note: '(AED 10/sqft × 800 sqft)' },
                    { item: 'Less: Property management', amount: '− AED 4,480', note: '(7% of annual rent)' },
                    { item: 'Less: Maintenance / misc', amount: '− AED 2,000', note: '(estimated)' },
                    { item: 'Less: Ejari + admin', amount: '− AED 500', note: '(approx. annual admin)' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-white/60'}>
                      <td className="py-2 text-gray-700">{r.item}</td>
                      <td className="py-2 text-right font-semibold text-navy">{r.amount}</td>
                      <td className="py-2 pl-3 text-gray-400 text-xs">{r.note}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gold">
                    <td className="py-3 font-bold text-navy">Net annual income</td>
                    <td className="py-3 text-right font-bold text-green-600 text-base">AED 49,020</td>
                    <td className="py-3 pl-3 text-green-600 font-semibold text-xs">6.13% net yield</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-500 text-xs mb-10">Net yield excludes DLD transfer fee (4%, paid once at purchase). Income tax on rental earnings: 0% in the UAE.</p>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">6 Factors That Drive Rental Yield in Dubai</h2>
          <div className="space-y-3 mb-12">
            {YIELD_FACTORS.map((f, i) => (
              <div key={i} className="bg-cream rounded-xl p-4 border border-gray-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-semibold text-navy text-sm">{f.factor}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${f.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{f.impact} impact</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">Short-Term vs Long-Term Rental — Which Yields More?</h2>
          <p className="text-gray-600 leading-relaxed mb-5">Dubai permits both long-term (annual Ejari contracts) and short-term furnished holiday home rentals (licensed by DTCM). The income potential differs significantly.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Long-Term Rental', yield: '6–9.5% gross yield', points: ['Annual Ejari contract — stable income', 'No furnishing or daily management required', 'RERA-regulated tenancy protections', 'Low vacancy risk in established communities', 'Suitable for remote / NRI investors'] },
              { title: 'Short-Term / Holiday Home', yield: '10–15% gross yield (tourist areas)', points: ['DTCM licence required (AED 1,520–3,720/yr)', 'Furnished fitout cost AED 25,000–60,000', 'Active management or operator required', 'Higher gross but higher operating costs', 'Best in Downtown, Marina, JBR, Palm'] },
            ].map(p => (
              <div key={p.title} className="bg-cream rounded-xl p-5 border border-gray-100">
                <p className="font-display font-bold text-navy mb-1">{p.title}</p>
                <p className="text-gold text-sm font-semibold mb-3">{p.yield}</p>
                <ul className="space-y-1.5">
                  {p.points.map((pt, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-gold shrink-0">✓</span>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">High-Yield Properties Available Now</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">Several properties in our current portfolio are located in the top-yielding communities above, with confirmed developer payment plans and projected rental yields.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { name: 'Oasiz by Danube', location: 'Dubai Silicon Oasis', yield: '7.5–8.5%', price: 'AED 699,000', link: '/properties/8' },
              { name: 'Binghatti Sky Terraces', location: 'Motor City', yield: '7.0–8.0%', price: 'AED 850,000', link: '/properties/2' },
              { name: 'John Richmond District', location: 'Al Furjan', yield: '7.0–8.0%', price: 'AED 913,000', link: '/properties/9' },
              { name: 'Wynwood Horizon', location: 'Meydan', yield: '7.0–8.5%', price: 'AED 1,690,000', link: '/properties/18' },
            ].map(p => (
              <Link key={p.name} href={p.link} className="group bg-cream rounded-xl p-4 border border-gray-100 hover:border-gold/50 transition-colors">
                <p className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">{p.name}</p>
                <p className="text-gray-500 text-xs mb-2">{p.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-sm">{p.yield} yield</span>
                  <span className="text-navy font-semibold text-sm">From {p.price}</span>
                </div>
                <p className="text-gold text-xs mt-2 font-semibold">View property →</p>
              </Link>
            ))}
          </div>

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

          <div className="bg-navy rounded-2xl p-8 text-center mb-12">
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Maximise Your Rental Return</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Get a Free Yield Analysis for Your Budget</h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">Shylesh Raj NK (RERA #77789) will identify the highest-yielding properties available within your budget — with projected net yield, payment plan, and community analysis.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/roi-calculator" className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-yellow-400 transition text-sm">Calculate My ROI →</Link>
              <Link href="/contact" className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">Book Free Consultation</Link>
            </div>
          </div>

          <div className="bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img src="/shylesh.jpg" alt="Shylesh Raj NK" className="w-16 h-16 rounded-full object-cover object-top shrink-0" />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · UAE Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">Shylesh Raj NK is a RERA-certified Dubai property advisor specialising in yield-optimised portfolio construction for HNI and NRI investors across India, the GCC, and Southeast Asia.</p>
              <Link href="/contact" className="inline-block mt-3 text-gold text-sm font-semibold hover:underline">Book a free consultation →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
