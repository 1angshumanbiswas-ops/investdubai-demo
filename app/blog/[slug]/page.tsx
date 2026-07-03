import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { BLOG_POST_QUERY, ALL_BLOG_SLUGS_QUERY } from '@/lib/queries'

type BlogPost = {
  title: string
  slug: { current: string }
  publishDate: string
  category: string
  excerpt?: string
  faqs?: { question: string; answer: string }[]
  seoTitle?: string
  seoDescription?: string
  lastUpdated: string
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>(ALL_BLOG_SLUGS_QUERY)
    return slugs.map(s => ({ slug: s.slug }))
  } catch { return [] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await sanityFetch<BlogPost>(BLOG_POST_QUERY, { slug })
    if (!post) return {}
    return {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
    }
  } catch { return {} }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post: BlogPost | null = null
  try {
    post = await sanityFetch<BlogPost>(BLOG_POST_QUERY, { slug })
  } catch { notFound() }
  if (!post) notFound()

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
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
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
  }

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gold text-sm hover:underline mb-4 block">← Knowledge Hub</Link>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gold/20 text-gold mb-4 inline-block">{post.category}</span>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-white/50 text-sm">
            <span>By Shylesh Raj NK — RERA Broker #77789</span>
            <span>•</span>
            <span>{post.publishDate}</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          {post.excerpt && <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-gold pl-4">{post.excerpt}</p>}

          <div className="prose-luxury text-gray-600 leading-relaxed">
            <p>Full article content will appear here once published in Sanity Studio.</p>
            <p>To add content: log in to <strong>investdubai.sanity.studio</strong> → Blog Posts → select this article → add body content using the rich text editor.</p>
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {post.faqs.map((f, i) => (
                  <details key={i} className="group bg-cream rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm">
                      {f.question}
                      <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Author bio */}
          <div className="mt-12 bg-cream rounded-2xl p-6 flex gap-4 items-start border border-gray-100">
            <img src="/shylesh.jpg" alt="Shylesh Raj" className="w-16 h-16 rounded-full object-cover object-top shrink-0" />
            <div>
              <p className="font-semibold text-navy">Shylesh Raj NK</p>
              <p className="text-gold text-xs mb-2">RERA Broker #77789 • CEO, Nexus Elite Properties LLC • Golden Visa Holder</p>
              <p className="text-gray-500 text-sm leading-relaxed">Shylesh Raj NK is a RERA-certified Dubai property advisor with 25+ years of UAE market experience, specialising in off-plan, ready, and secondary market investments for NRIs, HNIs, and global investors.</p>
              <Link href="/contact" className="inline-block mt-3 text-gold text-sm font-semibold hover:underline">Book a free consultation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
