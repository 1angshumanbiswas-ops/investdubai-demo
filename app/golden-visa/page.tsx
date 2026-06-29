import type { Metadata } from 'next'
import GoldenVisaChecker from '@/components/GoldenVisaChecker'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'UAE Golden Visa Through Dubai Property Investment | 10-Year Residency',
  description: 'Get a UAE 10-Year Golden Visa by investing AED 2,000,000+ in Dubai ready property. Expert guidance from Shylesh Raj, RERA-certified advisor. Check your eligibility instantly.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the minimum investment for a Dubai Golden Visa?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum investment for the UAE Golden Visa through real estate is AED 2,000,000 in a ready (completed) property that is fully paid (not mortgaged). For off-plan properties, the investment must be in a DLD-approved project and the same AED 2M minimum applies.' } },
    { '@type': 'Question', name: 'Can NRIs from India get a UAE Golden Visa through property?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Indian nationals and NRIs are fully eligible for the UAE Golden Visa through property investment. There are no nationality restrictions. You need to invest AED 2,000,000 or more in a ready Dubai property registered with the Dubai Land Department (DLD).' } },
    { '@type': 'Question', name: 'Does the Golden Visa include family members?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The UAE 10-Year Golden Visa covers the primary investor, their spouse, children of any age (unmarried daughters and sons under 25 if studying), and up to 3 domestic staff members.' } },
    { '@type': 'Question', name: 'Can I get the Golden Visa with an off-plan property?', acceptedAnswer: { '@type': 'Answer', text: 'Off-plan properties can qualify for the Golden Visa if the developer is approved by the Dubai Land Department (DLD) and the investment is AED 2,000,000 or above. The visa is typically issued after handover or when 50% of the payment is completed, depending on the project.' } },
    { '@type': 'Question', name: 'How long does the Golden Visa process take?', acceptedAnswer: { '@type': 'Answer', text: 'The full process — from property purchase to Golden Visa issuance — typically takes 4–8 weeks after the property is registered with the DLD. The process involves a property valuation, DLD registration, ICA application, medical fitness test, and Emirates ID issuance.' } },
  ],
}

const STEPS = [
  { step: '01', title: 'Select Eligible Property', desc: 'Choose a ready property priced at AED 2,000,000 or above. Shylesh will verify Golden Visa eligibility before you commit.' },
  { step: '02', title: 'Register with Dubai Land Department', desc: 'The property must be registered in your name with the DLD. Shylesh handles all paperwork and DLD coordination.' },
  { step: '03', title: 'Obtain Property Valuation Certificate', desc: 'The DLD issues a valuation certificate confirming the property value meets the AED 2M threshold.' },
  { step: '04', title: 'Apply to ICA (Federal Authority for Identity)', desc: "Submit the Golden Visa application to the UAE's Federal Authority for Identity and Citizenship (ICA) online." },
  { step: '05', title: 'Medical Fitness Test', desc: 'Complete a UAE medical fitness test at an approved health centre. Usually takes 1–2 days.' },
  { step: '06', title: 'Emirates ID Issuance', desc: 'Once approved, your Emirates ID is issued — the primary identity document in the UAE.' },
  { step: '07', title: 'Visa Stamp & Residency', desc: 'Your passport is stamped with the 10-year UAE Golden Residency Visa. The family sponsorship process begins.' },
]

export default function GoldenVisaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">UAE Golden Visa Advisory</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">
            Get a UAE 10-Year Golden Visa<br />
            <span className="text-gold">Through Dubai Property Investment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Invest AED 2,000,000+ in Dubai ready property and receive a 10-year renewable UAE residence visa for you and your family. Zero physical residency requirement.
          </p>
          <a href="#eligibility-checker" className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
            Check My Eligibility Instantly →
          </a>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-6 text-center">What is the UAE Golden Visa?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            The UAE Golden Visa is a long-term residence programme launched in 2019 that grants 10-year renewable UAE residency to property investors, business owners, exceptional talents, and their families. Unlike a standard UAE visa, it does not require employer sponsorship and has no minimum physical residency requirement.
          </p>
          {/* Key facts grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '📅', label: 'Visa Duration', value: '10 Years' },
              { icon: '💰', label: 'Min. Investment', value: 'AED 2,000,000' },
              { icon: '👨‍👩‍👧', label: 'Family Coverage', value: 'Spouse + Children' },
              { icon: '🌍', label: 'Residency Required', value: 'None' },
            ].map(f => (
              <div key={f.label} className="bg-white rounded-xl p-5 text-center border border-gray-100">
                <span className="text-3xl block mb-2">{f.icon}</span>
                <p className="text-xs text-gray-400 mb-1">{f.label}</p>
                <p className="font-bold text-navy font-display">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">Investment Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-3">✅ Ready Property (Easiest Route)</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>▸ Property must be fully paid (no outstanding mortgage)</li>
                <li>▸ Minimum value: AED 2,000,000</li>
                <li>▸ Must be registered with the Dubai Land Department</li>
                <li>▸ Joint ownership allowed — each owner's share must be AED 2M+</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h3 className="font-bold text-yellow-800 text-lg mb-3">🟡 Off-Plan Property (Conditions Apply)</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>▸ Developer must be DLD-approved for Golden Visa</li>
                <li>▸ Minimum investment: AED 2,000,000</li>
                <li>▸ Typically eligible after 50% payment or handover</li>
                <li>▸ Shylesh will confirm eligibility for specific projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white text-center mb-10">7 Steps from Property to Golden Visa</h2>
          <div className="space-y-4">
            {STEPS.map(s => (
              <div key={s.step} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center font-display font-bold text-lg shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility checker */}
      <section id="eligibility-checker" className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-center mb-8">Check Your Golden Visa Eligibility</h2>
          <GoldenVisaChecker />
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {[
              'Buying off-plan with a developer not approved by DLD for Golden Visa',
              'Purchasing with a mortgage — the mortgaged portion does not count toward the AED 2M threshold',
              'Joint ownership where each individual share is below AED 2M',
              'Not registering the property with DLD before applying for the visa',
              'Missing the Emirates ID biometrics appointment deadline',
            ].map((m, i) => (
              <div key={i} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                <span className="text-red-500 shrink-0 mt-0.5">⚠️</span>
                <p className="text-sm text-red-800">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-center mb-8">Golden Visa FAQs</h2>
          <div className="space-y-3">
            {FAQ_SCHEMA.mainEntity.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
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
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 bg-navy">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white text-center mb-8">Book a Free Golden Visa Consultation</h2>
          <LeadForm source="Golden Visa Page" title="" />
        </div>
      </section>
    </>
  )
}
