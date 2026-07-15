import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { RECENT_BLOG_POSTS_QUERY } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Dubai Property Investment Knowledge Hub | Guides, Reports & FAQs',
  description: 'Expert Dubai property investment guides, Golden Visa information, market analysis, and investor FAQs. Written by Shylesh Raj, RERA-certified advisor with 25+ years UAE experience.',
}

type BlogPost = {
  title: string
  slug: { current: string }
  publishDate: string
  category: string
  excerpt?: string
}

const CATEGORIES = ['All', 'Investment Guide', 'Golden Visa', 'Country Guide', 'Developer Guide', 'Community Guide', 'Market Analysis']

const PLACEHOLDER_ARTICLES: { title: string; category: string; excerpt: string; date: string; href?: string }[] = [
  { title: 'Why Dubai Property in 2026 — The Complete Investment Case', category: 'Investment Guide', excerpt: 'Dubai remains the world\'s most investor-friendly real estate market with 0% capital gains tax, 6-8% rental yields, and a stable currency pegged to the USD.', date: 'July 2026', href: '/blog/why-dubai-property-2026' },
  { title: 'Off-Plan vs Ready Property in Dubai — 2026 Comparison', category: 'Investment Guide', excerpt: 'A detailed comparison of off-plan and ready properties — payment plans, ROI potential, risk profile, and which suits your investment goals.', date: 'July 2026', href: '/blog/offplan-vs-ready-dubai-2026' },
  { title: 'Dubai Golden Visa Through Property — Step-by-Step Guide', category: 'Golden Visa', excerpt: 'AED 2M minimum investment, 8-step application process, documents checklist, cost breakdown, family sponsorship rules, and 6 common mistakes to avoid.', date: 'July 2026', href: '/blog/dubai-golden-visa-guide' },
  { title: 'Dubai Property for Indian Investors — Tax, ROI, Golden Visa, Process', category: 'Country Guide', excerpt: 'A complete guide for NRIs and Indian investors — currency comparison, tax advantages, best communities, and how to buy Dubai property from India.', date: 'Coming soon' },
  { title: 'Best Areas for Rental Yield in Dubai 2026 — Data Analysis', category: 'Market Analysis', excerpt: 'Which Dubai communities deliver the highest rental yields in 2026? Data-driven analysis of JVC, Dubai Hills, Creek Harbour, Business Bay, and more.', date: 'July 2026', href: '/blog/best-rental-yield-areas-dubai-2026' },
  { title: 'How to Evaluate an Off-Plan Developer in Dubai', category: 'Developer Guide', excerpt: 'Not all developers are equal. Here\'s how to assess track record, RERA registration, delivery history, and financial strength before committing to an off-plan purchase.', date: 'Coming soon' },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Investment Guide': 'bg-blue-100 text-blue-700',
  'Golden Visa': 'bg-yellow-100 text-yellow-700',
  'Country Guide': 'bg-green-100 text-green-700',
  'Developer Guide': 'bg-purple-100 text-purple-700',
  'Community Guide': 'bg-orange-100 text-orange-700',
  'Market Analysis': 'bg-red-100 text-red-700',
}

export default async function BlogPage() {
  let posts: BlogPost[] = []
  try {
    posts = await sanityFetch<BlogPost[]>(RECENT_BLOG_POSTS_QUERY)
  } catch { posts = [] }

  const allArticles = posts.length > 0 ? posts : []

  return (
    <>
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Knowledge Hub</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">Dubai Investor Education Centre</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">In-depth guides, market analysis, Golden Visa information, and country-specific investor resources — written by Shylesh Raj, RERA-certified advisor with 25+ years UAE experience.</p>
        </div>
      </section>

      <section className="py-16 bg-cream px-4">
        <div className="max-w-6xl mx-auto">

          {/* Live articles from Sanity */}
          {allArticles.length > 0 && (
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allArticles.map(p => (
                  <Link key={p.slug.current} href={`/blog/${p.slug.current}`}
                    className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold hover:shadow-md transition group">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_COLORS[p.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {p.category}
                    </span>
                    <h3 className="font-semibold text-navy mt-3 mb-2 group-hover:text-gold transition leading-snug">{p.title}</h3>
                    {p.excerpt && <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>}
                    <p className="text-xs text-gray-400 mt-3">{p.publishDate}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Coming soon articles */}
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-2">Coming Soon</h2>
            <p className="text-gray-500 mb-6 text-sm">In-depth guides being published shortly</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLACEHOLDER_ARTICLES.map(a => a.href ? (
                <Link key={a.title} href={a.href}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold hover:shadow-md transition group">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {a.category}
                  </span>
                  <h3 className="font-semibold text-navy mt-3 mb-2 leading-snug group-hover:text-gold transition">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
                  <p className="text-xs text-gold mt-3 font-semibold">Read guide →</p>
                </Link>
              ) : (
                <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-6 opacity-75">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {a.category}
                  </span>
                  <h3 className="font-semibold text-navy mt-3 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.excerpt}</p>
                  <p className="text-xs text-gold mt-3 font-semibold">{a.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-navy rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Want Personalised Advice?</h2>
            <p className="text-white/60 mb-6">Guides give you knowledge — Shylesh gives you a personalised strategy for your goals, budget, and country.</p>
            <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
