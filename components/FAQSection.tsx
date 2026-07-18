import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

interface Props {
  items: FAQItem[]
  title?: string
  showViewAllLink?: boolean
}

export default function FAQSection({ items, title = 'Frequently Asked Questions', showViewAllLink = false }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Got Questions?</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Straight answers on buying, owning, and investing in Dubai property — from a RERA-certified advisor.</p>
        </div>
        <div className="space-y-3">
          {items.map((f, i) => (
            <details key={i} className="group bg-cream rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy text-sm">
                {f.question}
                <span className="text-gold group-open:rotate-180 transition-transform ml-3 shrink-0">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                {f.answer}
              </div>
            </details>
          ))}
        </div>
        {showViewAllLink && (
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-block text-gold text-sm font-semibold hover:underline">
              See All FAQs →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
