import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Evaluate an Off-Plan Developer in Dubai — 2026 Guide | Shylesh Dubai',
  description: 'Not all Dubai developers are equal. RERA registration, escrow verification, delivery track record, financial strength, SPA review — the complete due diligence checklist for off-plan buyers.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I check if a Dubai developer is RERA registered?', acceptedAnswer: { '@type': 'Answer', text: 'Visit the official Dubai Land Department portal at dubailand.gov.ae or use the Dubai REST mobile app. Search the developer by name or license number to confirm their registration status, active licence, and compliance history. You should also verify that the specific project you are buying into has its own RERA project number and a registered escrow account — developer registration and project registration are separate checks.' } },
    { '@type': 'Question', name: 'What is a RERA escrow account and how does it protect buyers?', acceptedAnswer: { '@type': 'Answer', text: 'Under Law No. 13 of 2008, all Dubai off-plan developers are legally required to hold buyer payments in a DLD-registered escrow account managed by an approved third-party bank. The developer can only draw funds from the escrow when RERA verifies that construction has reached the corresponding milestone — for example, 20% funds release when foundations are complete. This prevents developers from misusing buyer money for other purposes. You can verify a project\'s escrow account on the DLD website or Dubai REST app before making any payment.' } },
    { '@type': 'Question', name: 'What percentage of Dubai off-plan projects are delayed?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 40–50% of Dubai off-plan projects experience some form of handover delay, ranging from a few months to over two years, based on 2025–2026 data. The average delay across all developers is 8–9 months. However, this varies dramatically by developer tier: Emaar and Sobha deliver on time 80–90% of the time with average delays of only 3–5 months, while smaller or newer developers can average 12–18 months of delay and fall below 70% on-time delivery.' } },
    { '@type': 'Question', name: 'What is the Mashrooi dashboard and how do I use it?', acceptedAnswer: { '@type': 'Answer', text: 'Mashrooi (meaning "my project" in Arabic) is the DLD\'s real-time project tracking dashboard, accessible through dubailand.gov.ae or the Dubai REST app. It shows each registered off-plan project\'s actual construction completion percentage versus the developer\'s stated progress. If a developer claims a project is 60% complete but Mashrooi shows 25%, that is a significant red flag. Use Mashrooi to cross-check any developer\'s claims before purchase and to monitor progress after purchase.' } },
    { '@type': 'Question', name: 'Can I cancel an off-plan purchase if the developer delays delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under RERA regulations and Law No. 13 of 2008, if a developer delays handover by more than 12 months beyond the contractual date in the SPA, you can file a complaint with RERA requesting cancellation and a full refund from the escrow account. If RERA mediation does not resolve the matter, you can escalate to the Dubai Courts or DIFC Courts (for DIFC-registered contracts). Always ensure your SPA includes specific delay compensation clauses before signing.' } },
    { '@type': 'Question', name: 'What is the difference between a tier-1 and a tier-2 developer in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Tier-1 developers (Emaar, Sobha, Ellington, Danube, Binghatti) have long track records of on-time or near-on-time delivery, established brand recognition that supports resale liquidity, and in many cases in-house construction teams reducing third-party contractor risk. Tier-2 developers may offer lower launch prices but carry higher delivery risk, weaker resale markets, and less predictable construction quality. For first-time off-plan buyers, tier-1 developers are strongly recommended despite their premium pricing.' } },
    { '@type': 'Question', name: 'What should I check in the SPA before signing?', acceptedAnswer: { '@type': 'Answer', text: 'Key SPA provisions to review before signing: (1) Exact handover date with day/month/year specified — not just "Q4 2027"; (2) Penalty clauses for developer delay — what compensation applies per day or month of overrun; (3) Unit specifications — floor, view, finishing grade, exact sqft; (4) Payment schedule linked to construction milestones, not arbitrary dates; (5) Cancellation rights and refund process; (6) Service charge estimate per square foot; (7) RERA project number and escrow account details on the face of the document. Always have a RERA-registered agent or independent legal counsel review the SPA before signing.' } },
    { '@type': 'Question', name: 'How do I check a developer\'s delivery history?', acceptedAnswer: { '@type': 'Answer', text: 'Check the DLD project tracker on dubailand.gov.ae or the Dubai REST app for the developer\'s completed projects and actual handover dates versus promised dates. Search news archives for the developer name plus "delay" or "handover" to find any press coverage of past issues. Visit physical completed projects by the same developer to assess build quality, common area maintenance, and amenity delivery. Ask your RERA-registered broker for their independent assessment of the developer\'s track record — experienced brokers have direct visibility of handover histories.' } },
    { '@type': 'Question', name: 'Is a new developer with no track record in Dubai automatically high risk?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. New developer names in Dubai 2026 are often backed by sovereign wealth funds, large international conglomerates, or established UAE business groups with strong capitalisation. The risk lies specifically in independent private developers with no UAE footprint, no local banking relationships, and no corporate parent guaranteeing completion. For any new name, verify: who is the ultimate beneficial owner, do they have bank-approved project financing, is the escrow registered and funded, and does the project have all planning permissions from the relevant authority.' } },
    { '@type': 'Question', name: 'What is the Mollak system in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Mollak is the Dubai Land Department\'s digital platform for managing service charges and owners association (OA) accounts in strata properties. It ensures that service charges collected from owners are properly held and spent on building maintenance. Buyers evaluating a developer\'s post-handover performance can check Mollak data for older projects to assess service charge transparency, OA management quality, and whether the developer has delivered on their promised amenities and maintenance standards — all of which directly affect rental yield and resale value.' } },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Evaluate an Off-Plan Developer in Dubai — 2026 Guide',
  author: { '@type': 'Person', name: 'Shylesh Raj NK', jobTitle: 'RERA-Certified Dubai Property Advisor' },
  publisher: { '@type': 'Organization', name: 'Nexus Elite Properties LLC' },
  datePublished: '2026-07-16',
  dateModified: '2026-07-16',
}

const SEVEN_CHECKS = [
  {
    num: '01',
    title: 'RERA & DLD Registration — Two Separate Checks',
    body: 'Step one is always verifying that the developer is RERA-registered and in good standing on dubailand.gov.ae or the Dubai REST app. But developer registration alone is not enough — the specific project must also have its own RERA project number, a valid No Objection Certificate (NOC) from the master developer (if applicable), and all relevant planning permits. Confirm both on the DLD portal before proceeding.',
    tool: 'Tool: dubailand.gov.ae → Developer Services → Search by name or licence number',
    flag: 'Red flag: Developer or project not findable on DLD portal. Any request to pay before escrow registration.',
  },
  {
    num: '02',
    title: 'Escrow Account Verification',
    body: 'Under Law No. 13 of 2008, every off-plan project must have a dedicated DLD-registered escrow account. Buyer payments go into this account and are only released to the developer when RERA verifies corresponding construction milestones. Verify the escrow account number, the escrow bank name, and that it is active and associated with your specific project — not a pooled account covering multiple projects. Never pay to a developer\'s general operating account.',
    tool: 'Tool: Dubai REST app → Projects → Search project → Escrow Details',
    flag: 'Red flag: Developer cannot provide escrow account details. Payments requested to personal or general company accounts.',
  },
  {
    num: '03',
    title: 'Delivery Track Record — Completed Projects',
    body: '40–50% of Dubai off-plan projects experience handover delays. Top-tier developers (Emaar, Sobha) deliver on time 80–90% of the time with average delays of 3–5 months. Smaller developers average 12–18 months of delay. Check the DLD project tracker for the developer\'s completed projects and compare promised handover dates against actual delivery dates. Search news archives for "[developer name] + delay" to surface any press coverage of past issues.',
    tool: 'Tool: Dubai REST app → Projects → Filter by Developer → Completed Projects',
    flag: 'Red flag: No completed projects to reference. Multiple projects with delays exceeding 12 months. Cancelled projects in portfolio.',
  },
  {
    num: '04',
    title: 'Construction Progress vs. Claimed Progress',
    body: 'The Mashrooi dashboard on the DLD portal shows real-time, RERA-verified construction completion percentages for every registered off-plan project. Cross-reference any marketing claim a developer makes about construction progress against the Mashrooi data. A significant gap between claimed and verified progress is a serious red flag indicating either poor project management or misleading marketing.',
    tool: 'Tool: dubailand.gov.ae → Mashrooi → Search project name or RERA number',
    flag: 'Red flag: Claimed 60% complete, Mashrooi shows 20%. No Mashrooi listing for the project at all.',
  },
  {
    num: '05',
    title: 'Financial Strength & Ownership Structure',
    body: 'A developer\'s financial health determines their ability to complete construction even if market conditions deteriorate. For listed developers (Emaar, Damac), review annual financial reports. For private developers, ask: who is the ultimate beneficial owner, is the project bank-approved by a UAE bank (a strong solvency signal), and does the developer have in-house construction capability or rely entirely on third-party contractors? In-house construction (Sobha\'s model) reduces subcontractor risk significantly.',
    tool: 'Tool: For listed developers — ADX/DFM financial disclosures. For private — ask for bank-approved project certificate.',
    flag: 'Red flag: Developer unwilling to disclose beneficial ownership. No UAE bank approval for the project. 100% reliant on off-plan sales to fund construction.',
  },
  {
    num: '06',
    title: 'SPA Quality — Key Clauses Before You Sign',
    body: 'The Sales & Purchase Agreement (SPA) is your legal protection. Key provisions to check: (1) Exact handover date — specific day/month/year, not a vague quarter reference; (2) Delay compensation clauses — what penalty per day applies if the developer overruns; (3) Unit specifications — floor, aspect, finishing grade, exact sq ft with +/- tolerance; (4) Payment schedule explicitly linked to construction milestones; (5) Cancellation and refund rights; (6) RERA project number and escrow account on the face of the document.',
    tool: 'Tool: Have a RERA-registered advisor or independent UAE legal counsel review the SPA before signing.',
    flag: 'Red flag: Handover stated as "approximately Q4 2028" without a firm date. No delay penalty clause. No escrow reference in the SPA.',
  },
  {
    num: '07',
    title: 'Post-Handover Quality & Management — Visit Existing Projects',
    body: 'The best predictor of what your handover unit will look like is the developer\'s existing 3–5 year old projects. Visit them in person or send a trusted local contact. Assess: finish quality in common areas, functioning of promised amenities (pool, gym, concierge), building maintenance standards, and resident feedback. Check the Mollak system for service charge transparency and owners association quality. Strong post-handover management directly affects rental yield and resale value.',
    tool: 'Tool: Mollak system (mollak.ae) — service charge records. Google the building name + "reviews" for resident feedback.',
    flag: 'Red flag: Poorly maintained lobbies in 3-year-old buildings. Amenities promised on brochure not delivered. High owner complaints about service charges.',
  },
]

const RED_FLAGS = [
  { flag: 'No RERA project registration', why: 'Every legal off-plan sale in Dubai must be registered. No registration = no buyer protection.' },
  { flag: 'Payment before escrow is open', why: 'Any request for funds before the DLD-registered escrow account is active is illegal under Dubai law.' },
  { flag: 'Payment plan heavily front-loaded', why: 'If 60%+ of payments are due before significant physical construction, escrow protections are weakened.' },
  { flag: 'No completed projects to reference', why: 'A developer with zero delivered projects in Dubai has no verifiable track record. Higher due diligence required.' },
  { flag: 'Gap between claimed and Mashrooi construction %', why: 'If the developer claims 50% complete but RERA data shows 15%, something is wrong.' },
  { flag: 'Vague handover date in SPA', why: '"Expected Q4 2028" gives the developer unlimited delay room. Insist on a specific date with penalty clauses.' },
  { flag: 'Offshore or opaque ownership', why: 'If the developer refuses to disclose beneficial ownership or is structured through opaque offshore vehicles, escalate due diligence significantly.' },
  { flag: 'No UAE bank approval', why: 'Bank approval for off-plan sales signals that a UAE bank has independently assessed the developer\'s solvency and project viability.' },
]

const OUR_DEVELOPERS = [
  {
    name: 'Emaar',
    tier: 'Tier 1',
    founded: '1997',
    completedProjects: '200+',
    onTimeDelivery: '80–90%',
    avgDelay: '3–5 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'DFM',
    ourProjects: ['Mareva 2 — The Oasis (ID 1)'],
    summary: 'Largest developer in Dubai by volume. Creator of Downtown Dubai, Dubai Marina, Dubai Hills. Publicly listed on DFM with full financial transparency. Gold standard for buyer confidence.',
  },
  {
    name: 'Sobha Realty',
    tier: 'Tier 1',
    founded: '1976',
    completedProjects: '100+',
    onTimeDelivery: '85–90%',
    avgDelay: '3–6 months',
    inHouseConstruction: true,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['Sobha Central (ID 5)', 'Sobha Elwood (ID 11)', 'Sobha SkyParks (ID 12)', 'Sobha Sanctuary (ID 13)'],
    summary: 'Unique in Dubai for its fully vertically integrated model — Sobha designs, builds, and delivers in-house. This eliminates subcontractor risk entirely. PNC Menon-founded, 50+ year track record across India and UAE.',
  },
  {
    name: 'Binghatti',
    tier: 'Tier 1',
    founded: '2008',
    completedProjects: '50+',
    onTimeDelivery: '80–85%',
    avgDelay: '4–8 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['Binghatti Sky Terraces (ID 2)', 'Mercedes-Benz Places (ID 3)', 'Binghatti Wraith (ID 10)'],
    summary: 'Known for fast construction timelines and distinctive architectural design. Flagship brand collaboration with Mercedes-Benz sets new luxury benchmark. Strong resale market in completed projects.',
  },
  {
    name: 'Danube',
    tier: 'Tier 1',
    founded: '2014',
    completedProjects: '20+',
    onTimeDelivery: '78–85%',
    avgDelay: '6–10 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['Serenz by Danube (ID 4)', 'Greenz by Danube (ID 14)', 'Oasiz by Danube (ID 8)'],
    summary: 'Fastest-growing mid-market developer in Dubai. Pioneer of the 1% per month post-handover payment plan. Known for innovative amenities (private plunge pools in every unit at Oasiz). Part of the Danube Group — an AED 4B+ conglomerate.',
  },
  {
    name: 'Ellington',
    tier: 'Tier 1',
    founded: '2014',
    completedProjects: '15+',
    onTimeDelivery: '82–88%',
    avgDelay: '4–8 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['Windsor House (ID 6)'],
    summary: 'Boutique design-led developer targeting the luxury segment. Known for highest-grade finishes, art-inspired lobbies, and exceptional post-handover management. Strong resale premium versus comparable buildings.',
  },
  {
    name: 'Imtiaz',
    tier: 'Tier 1',
    founded: '2012',
    completedProjects: '10+',
    onTimeDelivery: '78–84%',
    avgDelay: '6–12 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['Beach Walk Residence 4 (ID 7)', 'Cove Boulevard (ID 15)', 'Cove Grand (ID 16)', 'Sunset Bay 4 (ID 17)', 'Wynwood Horizon (ID 18)'],
    summary: 'Specialist in Dubai Islands and Meydan waterfront developments. Crystal Lagoon partnership for Wynwood Horizon sets lifestyle benchmark. Competitive 60/40 payment plans. Growing portfolio with strong pre-sales track record.',
  },
  {
    name: 'Mira Developments',
    tier: 'Tier 2',
    founded: '2015',
    completedProjects: '5+',
    onTimeDelivery: '75–80%',
    avgDelay: '8–14 months',
    inHouseConstruction: false,
    bankApproved: true,
    listedExchange: 'Private',
    ourProjects: ['John Richmond District (ID 9)'],
    summary: 'Mid-tier developer focusing on branded residences in Al Furjan. John Richmond fashion house collaboration elevates the product positioning. Smaller portfolio — verify project-specific escrow and progress carefully before committing.',
  },
]

export default function EvaluateOffPlanDeveloperDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-400/20 text-purple-300 mb-4 inline-block">Developer Guide</span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            How to Evaluate an Off-Plan<br />Developer in Dubai — 2026 Guide
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
            40–50% of Dubai off-plan projects experience some form of handover delay. The developer
            you choose carries as much weight as the location. This guide gives you the 7-point
            due diligence framework used by experienced HNI investors — from RERA registration
            checks through to SPA clause review and post-handover quality assessment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Projects delayed (industry avg)', value: '40–50%' },
              { label: 'Tier-1 on-time delivery', value: '80–90%' },
              { label: 'Average industry delay', value: '8–9 months' },
              { label: 'Tier-1 avg delay', value: '3–5 months' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gold font-bold text-lg leading-tight">{f.value}</p>
                <p className="text-gray-500 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Why it matters */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Why Developer Selection is as Important as Location</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In a mature property market, you buy a postcode. In Dubai&apos;s off-plan market, you buy
            a promise — and the quality of that promise depends entirely on the developer making it.
            Two projects 500 metres apart in the same community can deliver radically different
            outcomes if one is built by Emaar and the other by an unproven name launching its first
            tower.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            The good news: Dubai has one of the most regulated off-plan frameworks in the emerging
            world. RERA escrow protection, the Mashrooi tracking dashboard, and Law No. 13 of 2008
            give buyers real tools to verify claims before committing. The investor who uses them is
            significantly better protected than one who buys on brand recognition alone.
          </p>

          {/* 7 Checks */}
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The 7-Point Developer Due Diligence Checklist</h2>
          <div className="space-y-5 mb-12">
            {SEVEN_CHECKS.map(c => (
              <div key={c.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-navy font-bold text-xs">{c.num}</span>
                </div>
                <div className="flex-1 bg-cream border border-gray-100 rounded-xl p-5">
                  <p className="font-display font-bold text-navy mb-2">{c.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.body}</p>
                  <p className="text-blue-700 text-xs bg-blue-50 rounded-lg px-3 py-2 mb-2">🔧 {c.tool}</p>
                  <p className="text-red-700 text-xs bg-red-50 rounded-lg px-3 py-2">⚠ {c.flag}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Red flags grid */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">8 Red Flags — Walk Away If You See These</h2>
          <div className="space-y-3 mb-12">
            {RED_FLAGS.map((r, i) => (
              <div key={i} className="bg-red-50/40 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-700 text-sm mb-1">✗ {r.flag}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{r.why}</p>
              </div>
            ))}
          </div>

          {/* DLD Tools */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">The 3 DLD Tools Every Off-Plan Buyer Must Use</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { tool: 'Dubai REST App', what: 'Official DLD mobile app', use: 'Verify developer registration, project escrow status, Oqood (off-plan registration), broker RERA BRN, and project completion percentage in real time.', url: 'Download: DLD Dubai REST on App Store / Google Play' },
              { tool: 'Mashrooi Dashboard', what: 'RERA project tracker', use: 'Cross-check the developer\'s claimed construction progress against RERA-verified milestone data. Search any project by name or RERA number. Essential for spotting progress discrepancies.', url: 'Access at: dubailand.gov.ae → Mashrooi' },
              { tool: 'Mollak System', what: 'Service charge platform', use: 'Review service charge transparency, OA management history, and actual vs. promised amenity delivery for the developer\'s existing completed buildings. Predicts post-handover quality.', url: 'Access at: mollak.ae' },
            ].map(t => (
              <div key={t.tool} className="bg-cream rounded-xl p-4 border border-gray-100">
                <p className="font-display font-bold text-navy text-sm mb-0.5">{t.tool}</p>
                <p className="text-gold text-xs font-semibold mb-3">{t.what}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{t.use}</p>
                <p className="text-blue-600 text-xs font-medium">{t.url}</p>
              </div>
            ))}
          </div>

          {/* Our developers */}
          <h2 className="font-display text-2xl font-bold text-navy mb-2">Our Portfolio Developers — Track Record Analysis</h2>
          <p className="text-gray-500 text-sm mb-6">Every developer on this platform has been independently assessed against our due diligence framework. Here is our analysis.</p>
          <div className="space-y-4 mb-12">
            {OUR_DEVELOPERS.map(d => (
              <div key={d.name} className="bg-cream rounded-xl border border-gray-100 overflow-hidden">
                <div className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-navy text-base">{d.name}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.tier === 'Tier 1' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{d.tier}</span>
                        {d.inHouseConstruction && <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">In-house build</span>}
                        {d.listedExchange !== 'Private' && <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Listed: {d.listedExchange}</span>}
                      </div>
                      <p className="text-gray-500 text-xs">Founded {d.founded} · {d.completedProjects} completed projects</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold text-sm">{d.onTimeDelivery}</p>
                      <p className="text-gray-400 text-xs">on-time delivery</p>
                      <p className="text-gray-500 text-xs mt-0.5">avg delay: {d.avgDelay}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{d.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.ourProjects.map(p => (
                      <span key={p} className="text-xs bg-navy/10 text-navy px-2 py-0.5 rounded-full">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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

          {/* CTA */}
          <div className="bg-navy rounded-2xl p-8 text-center mb-12">
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Buy With Confidence</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">Every Developer on This Platform is Pre-Vetted</h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">Shylesh Raj NK (RERA #77789) has personally assessed every developer and project in our 18-property portfolio against the 7-point framework above. You get transparent track record data — not marketing brochures.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/properties" className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-yellow-400 transition text-sm">Browse All 18 Properties →</Link>
              <Link href="/contact" className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">Book Free Consultation</Link>
            </div>
          </div>

          {/* Author */}
          <div className="bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img src="/shylesh.jpg" alt="Shylesh Raj NK" className="w-16 h-16 rounded-full object-cover object-top shrink-0" />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · UAE Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">Shylesh Raj NK is a RERA-certified Dubai property advisor with 25+ years of UAE market experience and deep working knowledge of every major developer in the Dubai off-plan ecosystem.</p>
              <Link href="/contact" className="inline-block mt-3 text-gold text-sm font-semibold hover:underline">Book a free consultation →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
