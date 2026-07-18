import type { Metadata } from 'next'
import ReferralForm from '@/components/ReferralForm'

export const metadata: Metadata = {
  title: 'Partner & Referral Program | Earn 20–30% Commission | Nexus Elite Properties',
  description: 'Join the Nexus Elite Properties Associate Partner Program. Earn 20–30% referral commission introducing qualified Dubai property buyers and investors. RERA-certified, transparent, ethical partnership model.',
}

const WHY_PARTNER = [
  { icon: '🏛️', title: 'RERA-Certified Brokerage', desc: 'Every deal you refer is handled by a fully licensed, RERA-approved Dubai brokerage — protecting your reputation and your client\u2019s investment.' },
  { icon: '🌍', title: 'Trusted by Global Investors', desc: 'Serving NRIs, HNIs and investors across India, GCC, UK, USA, Canada, Singapore and beyond — your referrals are handled with the same global-standard advisory.' },
  { icon: '🤝', title: 'Strong Developer Network', desc: 'Channel partnerships with Emaar, Sobha, DAMAC, Danube, Binghatti, Ellington, Omniyat and 24+ more — access to prime inventory and launch pricing.' },
  { icon: '⚖️', title: 'Transparent, Ethical Model', desc: 'Clear commission structure, honest deal tracking, and long-term relationships — not one-off transactions.' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Introduce a Qualified Buyer', desc: 'Refer an investor, NRI client, or HNI contact looking to buy Dubai property — ready, off-plan, or Golden Visa-linked.' },
  { step: '02', title: 'We Handle the Advisory', desc: 'Shylesh and the Nexus Elite team manage the full journey — property selection, DLD documentation, Golden Visa processing, and after-sales support.' },
  { step: '03', title: 'Deal Closes', desc: 'Your referral completes their purchase through Nexus Elite Properties LLC, RERA Broker #77789.' },
  { step: '04', title: 'You Earn 20–30% Commission', desc: 'Commission is paid on successful transaction closure — transparent tracking, no disputes.' },
]

const WHO_SHOULD_PARTNER = [
  { icon: '🏢', label: 'Real Estate Agents & Brokers' },
  { icon: '💼', label: 'Wealth & Financial Advisors' },
  { icon: '🏛️', label: 'Family Offices' },
  { icon: '📊', label: 'CAs & Business Consultants' },
  { icon: '🌐', label: 'Immigration & Golden Visa Consultants' },
  { icon: '🤝', label: 'Existing Clients & Well-Connected Investors' },
]

// Video IDs supplied by Shylesh — order as specified
const VIDEOS = ['vC3gxe-l6QM', 'KhbiyuHWLYo', 'aJhYftSUgr0', '9g3aBeiQB2M']

export default function PartnerProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">Associate Partner &amp; Referral Program</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-6">
            Earn 20–30% Commission<br />
            <span className="text-gold">Referring Dubai Property Investors</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Partner with a RERA-certified brokerage trusted by global HNIs. Introduce qualified buyers — we handle the rest, and you earn on every closed deal.
          </p>
          <a href="#apply" className="inline-block bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
            Apply to Become a Partner →
          </a>
        </div>
      </section>

      {/* Commission facts */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">Are You Planning to Bring Investors to Dubai?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '💰', label: 'Referral Commission', value: '20–30%' },
              { icon: '🏅', label: 'Brokerage', value: 'RERA #77789' },
              { icon: '🤝', label: 'Developer Partners', value: '30+' },
              { icon: '🌍', label: 'Emirates Covered', value: '4' },
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

      {/* Why partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Why Nexus Elite Properties</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A brokerage built on trust, licensing, and long-term relationships — the foundation every referral partnership needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_PARTNER.map(f => (
              <div key={f.title} className="bg-cream rounded-2xl p-6 border border-gray-100 hover:border-gold hover:shadow-md transition">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-navy mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Nexus Elite in action — video block */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">See Nexus Elite in Action</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A closer look at the Dubai market, the process, and the team your referrals will work with.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {VIDEOS.map(id => (
              <div key={id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: '9 / 16' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Nexus Elite Properties"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-center mb-10">How the Partnership Works</h2>
          <div className="space-y-4">
            {HOW_IT_WORKS.map(s => (
              <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center font-display font-bold text-lg shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should partner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Who Should Partner With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">If you have access to investors looking at Dubai, this program is built for you.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WHO_SHOULD_PARTNER.map(w => (
              <div key={w.label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition text-center">
                <span className="text-3xl">{w.icon}</span>
                <span className="text-xs font-semibold text-navy">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 bg-navy">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Apply to Become a Partner</h2>
            <p className="text-white/60">Shylesh will personally review your application and follow up within 24 hours.</p>
          </div>
          <ReferralForm />
        </div>
      </section>
    </>
  )
}
