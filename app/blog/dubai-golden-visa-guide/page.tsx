import Link from 'next/link'

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum investment for a UAE Golden Visa through property?',
      acceptedAnswer: { '@type': 'Answer', text: 'The minimum is AED 2,000,000 (approximately USD 545,000) in a ready, completed property. The property must be registered with the Dubai Land Department (DLD) in your name and be fully paid — no mortgage on the portion used for eligibility.' }
    },
    {
      '@type': 'Question',
      name: 'Can I get a Golden Visa with an off-plan property?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, off-plan properties can qualify if the developer is DLD-approved and the purchase price is AED 2,000,000 or above. The visa is typically processed after handover or when you have paid at least 50% of the property value, whichever comes first.' }
    },
    {
      '@type': 'Question',
      name: 'Does the UAE Golden Visa include family members?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The 10-year Golden Visa covers the primary investor, their spouse, children of any age (unmarried daughters, sons up to age 25 if enrolled in full-time education), and up to 3 domestic staff.' }
    },
    {
      '@type': 'Question',
      name: 'Can NRIs and Indian nationals apply for the Golden Visa?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. All nationalities including Indian nationals and NRIs are fully eligible. There are no nationality restrictions for the UAE Golden Visa through property.' }
    },
    {
      '@type': 'Question',
      name: 'Do I need to live in Dubai to keep my Golden Visa?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Unlike standard UAE residency visas, the Golden Visa has no physical presence requirement. You can live anywhere in the world and keep your 10-year UAE Golden Visa valid.' }
    },
    {
      '@type': 'Question',
      name: 'How long does the Golden Visa process take?',
      acceptedAnswer: { '@type': 'Answer', text: 'The full process — from property registration to Golden Visa issuance — typically takes 4 to 8 weeks. This includes DLD registration, property valuation, ICA application, medical fitness test, and Emirates ID issuance.' }
    },
    {
      '@type': 'Question',
      name: 'What happens if I sell the property?',
      acceptedAnswer: { '@type': 'Answer', text: 'If you sell the property that qualified you for the Golden Visa, the visa is linked to the property. You would need to purchase another qualifying property (AED 2M+) to maintain eligibility, or the visa will not be renewed upon expiry.' }
    },
    {
      '@type': 'Question',
      name: 'Can I use a mortgage to qualify for the Golden Visa?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your property is mortgaged, you must have at least AED 2,000,000 of paid equity (not the total property value). The DLD will assess the unpaid mortgage balance against your equity at the time of application.' }
    },
    {
      '@type': 'Question',
      name: 'What is the DLD fee for Golden Visa property registration?',
      acceptedAnswer: { '@type': 'Answer', text: 'The standard DLD property transfer fee is 4% of the property value. This is a one-time cost paid at the time of purchase. There is no separate fee for the Golden Visa application itself beyond standard ICA processing charges.' }
    },
    {
      '@type': 'Question',
      name: 'Is the UAE Golden Visa renewable?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Golden Visa is valid for 10 years and renewable, provided the property remains registered in your name and meets the AED 2M eligibility threshold at the time of renewal.' }
    },
  ],
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dubai Golden Visa Through Property — Step-by-Step Guide 2026',
  author: {
    '@type': 'Person',
    name: 'Shylesh Raj NK',
    jobTitle: 'RERA-Certified Dubai Property Advisor',
    url: 'https://www.investindubaiwithshylesh.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Nexus Elite Properties LLC',
    url: 'https://www.investindubaiwithshylesh.com',
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
}

const STEPS = [
  {
    num: '01',
    title: 'Select an Eligible Property',
    detail: 'Choose a ready (completed) property priced at AED 2,000,000 or above, registered with the Dubai Land Department. For off-plan, ensure the developer is DLD-approved and the purchase price meets the AED 2M threshold.',
    tag: 'Week 1–2',
  },
  {
    num: '02',
    title: 'Sign MOU & Pay Deposit',
    detail: 'Sign the Memorandum of Understanding with the seller or developer. Pay the standard 10% deposit (for secondary market) or the off-plan booking amount. Both parties sign at the DLD or a RERA-registered trustee office.',
    tag: 'Week 1–2',
  },
  {
    num: '03',
    title: 'Pay DLD Transfer Fees & Register Title Deed',
    detail: 'Pay the DLD transfer fee of 4% of the purchase price plus AED 580 admin fee. The Title Deed (Oqood for off-plan or full Title Deed for ready) is issued in your name — this is the core document for Golden Visa eligibility.',
    tag: 'Week 2–3',
  },
  {
    num: '04',
    title: 'Obtain DLD Property Valuation Certificate',
    detail: 'Request an official property valuation certificate from the DLD confirming the property value meets the AED 2,000,000 minimum. This is required for the Golden Visa application and costs approximately AED 2,000.',
    tag: 'Week 3',
  },
  {
    num: '05',
    title: 'Apply via ICA (Federal Authority for Identity & Citizenship)',
    detail: 'Submit the Golden Visa application online through the ICA smart services portal (smartservices.ica.gov.ae) or the GDRFA Dubai portal. Upload the Title Deed, DLD valuation certificate, passport copy, and supporting documents.',
    tag: 'Week 4',
  },
  {
    num: '06',
    title: 'Complete Medical Fitness Test',
    detail: 'Attend a UAE-approved health centre for the mandatory medical fitness test (blood test, chest X-ray). Results are available within 1–2 working days. If applying from outside the UAE, you enter on a visit visa, complete the test, and finalise the residency stamping.',
    tag: 'Week 4–5',
  },
  {
    num: '07',
    title: 'Emirates ID Enrolment',
    detail: 'Attend an Emirates ID centre to complete biometric registration (fingerprints and photo). The Emirates ID is your primary UAE identity document and arrives within 7–10 working days.',
    tag: 'Week 5–6',
  },
  {
    num: '08',
    title: 'Visa Stamp & Golden Residency Issued',
    detail: 'Your passport is stamped with the 10-year UAE Golden Residency Visa. You can now sponsor your spouse, children, and domestic staff on UAE residency under your Golden Visa.',
    tag: 'Week 6–8',
  },
]

const DOCUMENTS = [
  { doc: 'Valid passport', note: 'Original + copy. Must have at least 6 months validity.' },
  { doc: 'Dubai Title Deed (or Oqood)', note: 'Issued by DLD. Must be in your name, property value AED 2M+.' },
  { doc: 'DLD Property Valuation Certificate', note: 'Obtained from DLD post-registration. Costs approx. AED 2,000.' },
  { doc: 'Recent passport-size photographs', note: 'White background. Taken within last 3 months.' },
  { doc: 'Health insurance policy', note: 'Valid UAE health insurance. Required before residency stamp.' },
  { doc: 'Entry permit (if outside UAE)', note: 'Tourist or visit visa to enter UAE for medical and biometrics.' },
  { doc: 'Marriage certificate (for spouse)', note: 'Attested by UAE Embassy in home country + MOFA UAE attestation.' },
  { doc: 'Birth certificates (for children)', note: 'Attested. Required for each child to be added to the visa.' },
]

const MISTAKES = [
  { title: 'Buying off-plan from a non-DLD-approved developer', fix: 'Verify DLD developer registration before signing. Shylesh confirms this as part of his due diligence for every off-plan recommendation.' },
  { title: 'Using a mortgaged property without sufficient equity', fix: 'Your paid equity (not total property value) must be at least AED 2M. If you have a mortgage, ensure the outstanding balance keeps your equity above this threshold.' },
  { title: 'Purchasing jointly without clarifying eligibility', fix: 'In a joint purchase (e.g. husband and wife each owning 50%), each owner\'s share must individually reach AED 2M for each person to qualify. Confirm ownership structure before purchase.' },
  { title: 'Missing health insurance before visa stamping', fix: 'UAE requires valid health insurance before processing residency. Arrange an approved UAE health insurance policy before attending the ICA/GDRFA stage.' },
  { title: 'Not attesting family documents before arriving', fix: 'Marriage and birth certificates must be attested by the UAE Embassy in your home country, then counter-attested by the UAE Ministry of Foreign Affairs (MOFA). This takes 2–4 weeks — start early.' },
  { title: 'Assuming the Golden Visa is automatic after purchase', fix: 'The Golden Visa is not issued automatically. You must proactively apply through ICA or GDRFA after obtaining the Title Deed and DLD valuation certificate.' },
]

export default function GoldenVisaGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-400/20 text-gold mb-4 inline-block">
            Golden Visa Guide
          </span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Dubai Golden Visa Through Property —<br />Step-by-Step Guide 2026
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
            The UAE Golden Visa through property gives foreign nationals a 10-year renewable UAE
            residency by investing AED 2,000,000 (approx. USD 545,000) in Dubai real estate. It
            covers your spouse, children, and domestic staff — with zero physical residency requirement.
          </p>

          {/* Quick facts strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Minimum Investment', value: 'AED 2,000,000' },
              { label: 'Visa Duration', value: '10 Years' },
              { label: 'Renewable', value: 'Yes, indefinitely' },
              { label: 'Processing Time', value: '4–8 Weeks' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gold font-bold text-lg leading-tight">{f.value}</p>
                <p className="text-gray-500 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Section 1 — What is it */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            What is the UAE Golden Visa?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The UAE Golden Visa is a long-term residency programme introduced by the UAE Government
            in 2019 and significantly expanded in 2022. It grants qualifying investors, entrepreneurs,
            and professionals a 10-year renewable residency visa — without the traditional requirement
            of an Emirati employer or local sponsor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Property investment is one of the most straightforward routes to the Golden Visa. Unlike
            other categories (which require points-based assessments or specialist qualifications),
            the real estate pathway has a single primary condition: own a property in Dubai registered
            with the Dubai Land Department (DLD) with a minimum value of AED 2,000,000.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Since 2022, the UAE removed the previous requirement that properties be fully paid in cash.
            Mortgaged properties are now eligible, provided the paid equity portion meets the AED
            2,000,000 threshold.
          </p>

          {/* Section 2 — Eligibility */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Who Qualifies? — Eligibility Criteria
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                heading: 'Ready Property',
                body: 'A completed, handed-over property priced at AED 2,000,000 or above, registered with the DLD in your name. If mortgaged, the paid equity must equal or exceed AED 2M.',
              },
              {
                heading: 'Off-Plan Property',
                body: 'Off-plan properties qualify if the developer is registered and approved by the DLD, the purchase price is AED 2,000,000 or above, and at least 50% of the payment has been completed. The visa may be issued before full handover if this 50% threshold is met.',
              },
              {
                heading: 'Joint Ownership',
                body: 'In joint purchases (e.g. two siblings or a couple), each owner\'s individual share must separately reach AED 2,000,000 for each person to individually qualify for their own Golden Visa.',
              },
              {
                heading: 'Multiple Properties',
                body: 'You may combine the value of multiple DLD-registered properties to meet the AED 2M threshold, provided they are all registered in your sole name.',
              },
              {
                heading: 'Nationality',
                body: 'There are no nationality restrictions. Citizens and residents of India, GCC countries, the UK, US, Europe, and all other countries are eligible.',
              },
            ].map(e => (
              <div key={e.heading} className="bg-cream rounded-xl p-5 border border-gray-100">
                <p className="font-semibold text-navy mb-1">{e.heading}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>

          {/* Section 3 — 8-step process */}
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            The 8-Step Process — From Purchase to Golden Visa
          </h2>
          <div className="space-y-4 mb-12">
            {STEPS.map(s => (
              <div key={s.num} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-navy font-bold text-xs">{s.num}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-navy text-sm">{s.title}</p>
                    <span className="text-xs text-gold font-semibold shrink-0">{s.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 — Documents */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Documents Required
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            Prepare these documents before starting the ICA application. Documents in a language other
            than Arabic or English must be legally translated by a UAE-certified translation office.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">Document</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS.map((d, i) => (
                  <tr key={d.doc} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                    <td className="p-3 font-medium text-navy align-top">{d.doc}</td>
                    <td className="p-3 text-gray-600 align-top">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5 — Costs */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Cost Breakdown
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            The following are the key government and processing fees associated with purchasing a
            qualifying property and obtaining the Golden Visa. Developer and agency fees are separate.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">Fee</th>
                  <th className="text-left p-3 font-semibold">Amount</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Payable To</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { fee: 'DLD Transfer Fee', amount: '4% of property price', to: 'Dubai Land Department' },
                  { fee: 'DLD Admin Fee', amount: 'AED 580', to: 'Dubai Land Department' },
                  { fee: 'Property Valuation Certificate', amount: 'AED 2,000 (approx)', to: 'DLD-approved valuator' },
                  { fee: 'Golden Visa ICA Application', amount: 'AED 2,492–3,892 (varies)', to: 'ICA / GDRFA' },
                  { fee: 'Medical Fitness Test', amount: 'AED 700–900', to: 'UAE-approved health centre' },
                  { fee: 'Emirates ID', amount: 'AED 100–270 (10-year)', to: 'ICA' },
                  { fee: 'Health Insurance (1 year)', amount: 'AED 700–2,500+', to: 'UAE-registered insurer' },
                ].map((r, i) => (
                  <tr key={r.fee} className={i % 2 === 0 ? 'bg-cream' : 'bg-white'}>
                    <td className="p-3 font-medium text-navy align-top">{r.fee}</td>
                    <td className="p-3 text-gray-600 align-top">{r.amount}</td>
                    <td className="p-3 text-gray-500 align-top">{r.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6 — Family benefits */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Family Sponsorship — Who Can You Include?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            One of the most important benefits of the property Golden Visa is the ability to sponsor
            your immediate family on UAE residency under your visa. There is no restriction on the
            number of dependants you can sponsor.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { who: 'Spouse', detail: 'Husband or wife. Marriage certificate must be attested by UAE Embassy + MOFA UAE.' },
              { who: 'Children (any age)', detail: 'Unmarried daughters of any age. Sons up to age 25 if enrolled in full-time education. Disabled children are sponsored regardless of age.' },
              { who: 'Domestic Staff', detail: 'Up to 3 domestic staff members (maids, drivers, cooks) can be sponsored under the Golden Visa.' },
              { who: 'Parents', detail: 'Parents can be sponsored for long-term residency in some cases. Confirm current ICA rules at the time of application, as this category has eligibility conditions.' },
            ].map(f => (
              <div key={f.who} className="bg-cream rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-navy text-sm mb-1">{f.who}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>

          {/* Section 7 — Common mistakes */}
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            6 Common Mistakes to Avoid
          </h2>
          <div className="space-y-3 mb-12">
            {MISTAKES.map((m, i) => (
              <div key={i} className="border border-red-100 rounded-xl p-4 bg-red-50/30">
                <p className="font-semibold text-red-700 text-sm mb-1">✗ {m.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-green-700 font-semibold">How to avoid it: </span>
                  {m.fix}
                </p>
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
            <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Ready to Apply?</p>
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Check Your Golden Visa Eligibility
            </h2>
            <p className="text-white/60 mb-6 max-w-lg mx-auto text-sm">
              Enter your property details and get an instant eligibility result — or book a free
              consultation with Shylesh to get a personalised Golden Visa strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/golden-visa" className="inline-block bg-gold text-navy px-7 py-3 rounded-xl font-bold hover:bg-gold-light transition text-sm">
                Check Eligibility Instantly →
              </Link>
              <Link href="/contact" className="inline-block bg-white/10 text-white border border-white/20 px-7 py-3 rounded-xl font-semibold hover:bg-white/20 transition text-sm">
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
              <p className="text-gold text-xs mb-2">RERA Broker #77789 · CEO, Nexus Elite Properties LLC · Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Shylesh Raj NK is a RERA-certified Dubai property advisor with 25+ years of UAE market
                experience, personally holding the UAE Golden Visa through property. He has guided
                hundreds of NRI, HNI, and global investors through the Dubai property investment and
                Golden Visa process.
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
