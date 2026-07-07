import type { Metadata } from 'next'
import PropertyShortlistForm from '@/components/PropertyShortlistForm'

export const metadata: Metadata = {
  title: 'Get a Free Dubai Property Shortlist | Matched to Your Budget in 24 Hours',
  description: 'Tell Shylesh your budget and goals. Get 3 handpicked Dubai properties matched to your requirements — delivered via WhatsApp within 24 hours. Free. No obligation.',
}

const HOW_IT_WORKS = [
  { step: '01', title: 'Fill in 4 quick fields', detail: 'Budget, purpose, property type, and your WhatsApp number. Takes 60 seconds.' },
  { step: '02', title: 'Shylesh reviews personally', detail: 'Within 24 hours, Shylesh hand-picks 3 properties from 30+ developer partnerships that match your exact criteria.' },
  { step: '03', title: 'You receive the shortlist on WhatsApp', detail: 'Full details: price, ROI, payment plan, handover date, and Golden Visa eligibility. No fluff, no generic listings.' },
  { step: '04', title: 'Book a call or pass — your choice', detail: 'Zero obligation. If you like what you see, book a free 30-minute consultation to go deeper.' },
]

export default function PropertyShortlistPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 text-gold text-sm mb-5">
            <span>🏠</span> 100% Free · No Obligation · Delivered in 24 Hours
          </div>
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Get Your Free Dubai<br />
            <span className="text-gold">Property Shortlist</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Tell Shylesh your budget and goals. He'll personally send you 3 handpicked Dubai
            properties that match your requirements — via WhatsApp, within 24 hours.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-cream border-b border-gray-100 py-4 px-4">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          {[
            '✓ RERA Certified Broker #77789',
            '✓ 30+ Developer Partnerships',
            '✓ 25+ Years UAE Experience',
            '✓ Golden Visa Holder',
          ].map(t => (
            <span key={t} className="text-navy font-semibold">{t}</span>
          ))}
        </div>
      </div>

      {/* Form section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <h2 className="font-display text-xl font-bold text-navy mb-1">Request Your Shortlist</h2>
            <p className="text-gray-400 text-sm mb-6">Fill in your requirements — takes 60 seconds</p>
            <PropertyShortlistForm variant="page" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map(h => (
              <div key={h.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <span className="text-navy font-bold text-xs">{h.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">{h.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-navy mb-3">
            What Your Shortlist Includes
          </h2>
          <p className="text-gray-500 mb-8 text-sm max-w-lg mx-auto">
            Every property Shylesh recommends comes with full investment details —
            not just a listing card.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💰', label: 'Price in AED + your currency', detail: 'Converted to INR, USD, GBP, SGD, or AED' },
              { icon: '📈', label: 'Expected ROI %', detail: 'Gross and net rental yield estimates' },
              { icon: '📋', label: 'Payment plan breakdown', detail: '60/40, post-handover, or ready payment' },
              { icon: '📅', label: 'Handover date', detail: 'For off-plan: expected completion date' },
              { icon: '🏅', label: 'Golden Visa eligibility', detail: 'Whether the property qualifies at AED 2M+' },
              { icon: '🏙️', label: 'Community overview', detail: 'Location, nearby amenities, target tenant profile' },
            ].map(f => (
              <div key={f.label} className="bg-cream rounded-xl p-4 border border-gray-100 text-left">
                <span className="text-2xl block mb-2">{f.icon}</span>
                <p className="font-semibold text-navy text-sm mb-1">{f.label}</p>
                <p className="text-gray-500 text-xs">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 bg-navy text-center">
        <h2 className="font-display text-2xl font-bold text-white mb-3">
          Ready? It Takes 60 Seconds
        </h2>
        <p className="text-white/50 mb-6 text-sm">Scroll up to fill in your requirements above.</p>
        <a
          href="#top"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold/90 transition text-sm"
        >
          Get My Free Shortlist →
        </a>
      </section>
    </>
  )
}
