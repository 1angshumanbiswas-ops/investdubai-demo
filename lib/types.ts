import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sanityFetch } from '@/lib/sanity'
import { PERSONA_PAGE_QUERY, ALL_PERSONA_SLUGS_QUERY } from '@/lib/queries'
import LeadForm from '@/components/LeadForm'
import ROICalculator from '@/components/ROICalculator'
type InvestorPersona = {
  personaType: string
  slug: { current: string }
  headline: string
  description: string
  recommendedProperties: { title: string; slug: { current: string }; price: number; area: string; roiPercent: number; images: unknown[] }[]
  faqs: { question: string; answer: string }[]
  seoTitle: string
  seoDescription: string
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>(ALL_PERSONA_SLUGS_QUERY)
  return slugs.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await sanityFetch<InvestorPersona>(PERSONA_PAGE_QUERY, { slug })
  if (!page) return {}
  return {
    title: page.seoTitle ?? `Dubai Properties for ${page.personaType}`,
    description: page.seoDescription,
  }
}

export default async function PersonaPage({ params }: Props) {
  const { slug } = await params
  const page = await sanityFetch<InvestorPersona>(PERSONA_PAGE_QUERY, { slug })
  if (!page) notFound()

  const faqSchema = page.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Dubai Property Investment</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">{page.headline}</h1>
          <p className="text-white/70 text-lg">{page.description}</p>
        </div>
      </section>

      {page.recommendedProperties.length > 0 && (
        <section className="py-16 bg-cream px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Recommended Properties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.recommendedProperties.map(p => (
                <div key={p.slug.current} className="bg-white rounded-xl border border-gray-100 p-5">
                  <p className="text-xs text-gray-400 mb-1">{p.area}</p>
                  <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
                  <p className="text-xl font-bold text-navy font-display">AED {p.price.toLocaleString()}</p>
                  {p.roiPercent && <p className="text-gold font-bold text-sm mt-1">ROI: {p.roiPercent}%</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Calculate Your Returns</h2>
          <ROICalculator />
        </div>
      </section>

      {page.faqs.length > 0 && (
        <section className="py-16 bg-cream px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {page.faqs.map((f, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm">
                    {f.question}
                    <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-navy px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-8">Get a Personalised Property Shortlist</h2>
          <LeadForm source={`Persona Page - ${page.personaType}`} />
        </div>
      </section>
    </>
  )
}

