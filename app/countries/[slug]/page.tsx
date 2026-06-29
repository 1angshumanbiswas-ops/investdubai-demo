import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/lib/sanity'
import { COUNTRY_PAGE_QUERY, ALL_COUNTRY_SLUGS_QUERY } from '@/lib/queries'
import ROICalculator from '@/components/ROICalculator'
import LeadForm from '@/components/LeadForm'
import GoldenVisaChecker from '@/components/GoldenVisaChecker'
import type { CountryPage } from '@/lib/types'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(ALL_COUNTRY_SLUGS_QUERY)
  return slugs.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await sanityFetch<CountryPage>(COUNTRY_PAGE_QUERY, { slug })
  if (!page) return {}
  return {
    title: page.seoTitle ?? `Dubai Property Investment for ${page.countryName} Investors`,
    description: page.seoDescription,
    alternates: { canonical: `/countries/${slug}` },
  }
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params
  const page = await sanityFetch<CountryPage>(COUNTRY_PAGE_QUERY, { slug })
  if (!page) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.investindubaiwithshylesh.com' },
      { '@type': 'ListItem', position: 2, name: 'Countries', item: 'https://www.investindubaiwithshylesh.com/countries' },
      { '@type': 'ListItem', position: 3, name: page.countryName, item: `https://www.investindubaiwithshylesh.com/countries/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Dubai Property Investment</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">{page.heroHeadline}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{page.heroSubheadline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#lead-form" className="bg-gold text-navy px-6 py-3 rounded-xl font-bold hover:bg-gold-light transition">
              Get a Free Property Shortlist →
            </a>
            <a href="#roi-calculator" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition">
              Calculate ROI
            </a>
          </div>
        </div>
      </section>

      {/* Why Dubai for this country */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
            Why {page.countryName} Investors Choose Dubai
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.whyDubaiPoints.map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-3">
                <span className="text-gold font-bold text-lg mt-0.5">▸</span>
                <p className="text-charcoal text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key notes: currency, tax, Golden Visa */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6">
            <h3 className="font-display font-bold text-navy text-lg mb-3">💱 Currency</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{page.currencyNote}</p>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="font-display font-bold text-navy text-lg mb-3">✅ Tax Benefits</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{page.taxNote}</p>
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
            <h3 className="font-display font-bold text-navy text-lg mb-3">🏅 Golden Visa</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{page.goldenVisaAngle}</p>
          </div>
        </div>
      </section>

      {/* Investment process */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
            How {page.countryName} Investors Buy Dubai Property
          </h2>
          <div className="space-y-4">
            {page.investmentProcess.map((step, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                <p className="text-charcoal text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best communities */}
      {page.bestCommunities.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
              Best Dubai Communities for {page.countryName} Investors
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.bestCommunities.map(c => (
                <div key={c.name} className="bg-cream rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-navy mb-1">{c.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{c.area}</p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Avg ROI</p>
                      <p className="font-bold text-gold">{c.avgROI}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Rental Yield</p>
                      <p className="font-bold text-navy">{c.avgYield}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-16 bg-navy">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white text-center mb-8">
            Calculate Your Dubai Investment ROI
          </h2>
          <ROICalculator />
        </div>
      </section>

      {/* FAQs */}
      {page.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
              Frequently Asked Questions — {page.countryName} Investors
            </h2>
            <div className="space-y-4">
              {page.faqs.map((f, i) => (
                <details key={i} className="group bg-cream rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy">
                    {f.question}
                    <span className="text-gold group-open:rotate-180 transition-transform ml-3">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {f.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead form */}
      <section id="lead-form" className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-center mb-8">
            {page.leadFormTitle ?? `Get a Free Dubai Property Shortlist for ${page.countryName} Investors`}
          </h2>
          <LeadForm source={`Country Page - ${page.countryName}`} preselectedCountry={page.countryName} />
        </div>
      </section>
    </>
  )
}
