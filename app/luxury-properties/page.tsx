import type { Metadata } from 'next'
import Link from 'next/link'
import PropertyShortlistForm from '@/components/PropertyShortlistForm'

export const metadata: Metadata = {
  title: 'Ultra-Luxury Dubai Property | Private Advisory | Shylesh Raj NK',
  description: 'Private advisory for ultra-luxury Dubai property investment. Palm Jumeirah, Emirates Hills, Jumeirah Bay Island and branded residences. By appointment only. RERA #77789.',
}

const COMMUNITIES = [
  {
    name: 'Palm Jumeirah',
    icon: '🌴',
    tier: 'Ultra Luxury',
    desc: 'The most iconic address in the UAE. Signature villas, private beach estates and branded apartments. Home to Atlantis The Royal Residences, One Palm and Palma.',
  },
  {
    name: 'Emirates Hills',
    icon: '🏡',
    tier: 'Ultra Luxury',
    desc: 'Dubai\'s most exclusive gated community. Custom-designed villas with private golf course access, ultra-discreet ownership and a community of global billionaires.',
  },
  {
    name: 'Jumeirah Bay Island',
    icon: '🏝️',
    tier: 'Ultra Luxury',
    desc: 'Home to Bulgari Residences — one of the rarest addresses in the world. Ultra-exclusive branded estates with private marina and superyacht docking.',
  },
  {
    name: 'Downtown Dubai — Ultra',
    icon: '🏙️',
    tier: 'Premium',
    desc: 'The Address Residences, The Opera Grand and DIFC ultra-luxury penthouses. Burj Khalifa frontage, world-class concierge and the finest branded finishes.',
  },
  {
    name: 'Dubai Hills Mansions',
    icon: '⛳',
    tier: 'Premium',
    desc: 'Bespoke golf-course mansions on oversized plots. Privacy, greenery and proximity to the city — a rare combination in Dubai\'s premium segment.',
  },
  {
    name: 'DIFC & Marasi',
    icon: '💼',
    tier: 'Premium',
    desc: 'Dubai\'s financial district. Branded residences, serviced apartments and ultra-modern penthouses favoured by international executives and family offices.',
  },
]

const SERVICES = [
  {
    icon: '🔒',
    title: 'Off-Market Properties',
    desc: 'Many ultra-luxury listings in Dubai are never publicly advertised. Shylesh maintains direct relationships with owners, developers and family offices to access private inventory.',
  },
  {
    icon: '🤝',
    title: 'Developer & Owner Direct',
    desc: 'Access to Emaar, Omniyat, Ellington, Alpago Properties and select ultra-luxury developers — many with pre-launch pricing available exclusively through registered partners.',
  },
  {
    icon: '🌍',
    title: 'Cross-Border Structuring',
    desc: 'Advisory on corporate ownership, offshore structuring, power of attorney arrangements and multi-jurisdiction asset holding for international HNI buyers.',
  },
  {
    icon: '🏅',
    title: 'Golden Visa Processing',
    desc: 'Full end-to-end UAE Golden Visa processing for the investor and immediate family. Shylesh handles DLD registration, ICA application and Emirates ID issuance.',
  },
  {
    icon: '⚖️',
    title: 'Legal & Due Diligence',
    desc: 'Title deed verification, encumbrance checks, developer track record review and coordination with RERA-registered legal advisors before any commitment.',
  },
  {
    icon: '🏦',
    title: 'Private Finance Advisory',
    desc: 'Introductions to UAE private banks and wealth managers offering tailored mortgage and Lombard lending solutions for high-value property purchases.',
  },
]

export default function LuxuryPropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-navy to-[#0d1f3c]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 text-gold text-sm mb-6">
            💎 By Appointment Only · Private Advisory · Ultra-Luxury Segment
          </div>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Ultra-Luxury Dubai<br />
            <span className="text-gold">Property Advisory</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Private, discreet advisory for discerning global investors seeking Dubai&apos;s most
            prestigious addresses — Palm Jumeirah, Emirates Hills, Jumeirah Bay Island and
            landmark branded residences.
          </p>
          <p className="text-white/40 text-sm mb-8 italic">
            Properties in this segment are shared privately after a consultation.
            No public listings. No generic shortlists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#enquire" className="bg-gold text-navy px-8 py-3.5 rounded-xl font-bold hover:bg-gold/90 transition text-sm">
              Request Private Consultation →
            </Link>
            <a
              href={`https://wa.me/971505818509?text=${encodeURIComponent('Hi Shylesh, I am interested in ultra-luxury Dubai property. Can we arrange a private consultation?')}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition text-sm"
            >
              💬 WhatsApp Shylesh Directly
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-gold/10 border-y border-gold/20 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          {[
            'RERA Certified #77789',
            '25+ Years UAE Experience',
            'Golden Visa Holder',
            'Off-Market Access',
            'HNI Clients from 13+ Countries',
          ].map(t => (
            <span key={t} className="text-navy font-semibold">✓ {t}</span>
          ))}
        </div>
      </div>

      {/* Communities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">
              Dubai&apos;s Most Prestigious Addresses
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Shylesh has active relationships and inventory across every ultra-luxury
              community in Dubai — including properties not available to the general market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMUNITIES.map(c => (
              <div key={c.name} className="bg-cream rounded-2xl border border-gray-100 p-6 hover:border-gold hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{c.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    c.tier === 'Ultra Luxury'
                      ? 'bg-gold/20 text-gold'
                      : 'bg-navy/10 text-navy'
                  }`}>{c.tier}</span>
                </div>
                <p className="font-display font-bold text-navy mb-2">{c.name}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">
              What Shylesh Provides HNI Investors
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ultra-luxury property requires discretion, speed and depth of relationships.
              Shylesh has all three — built over 25+ years in the UAE market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <span className="text-2xl block mb-3">{s.icon}</span>
                <p className="font-semibold text-navy mb-2">{s.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private enquiry form */}
      <section id="enquire" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Private Enquiry</p>
            <h2 className="font-display text-3xl font-bold text-navy mb-3">
              Request a Private Consultation
            </h2>
            <p className="text-gray-500">
              Share your requirements below. Shylesh will personally review and reach out
              within 24 hours with properties matched to your profile — shared privately,
              not publicly listed.
            </p>
          </div>
          <div className="bg-cream rounded-2xl border border-gray-100 shadow-lg p-8">
            <PropertyShortlistForm variant="page" />
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            All enquiries are handled with complete discretion · RERA Certified #77789
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 bg-navy text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Prefer to Talk?</p>
        <h2 className="font-display text-2xl font-bold text-white mb-4">
          Shylesh Responds to Every Enquiry Personally
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mb-6 text-sm">
          No assistants. No call centres. Shylesh Raj NK personally handles every
          ultra-luxury enquiry — 25+ years of UAE relationships at your service.
        </p>
        <a
          href={`https://wa.me/971505818509?text=${encodeURIComponent('Hi Shylesh, I am interested in ultra-luxury Dubai property. Can we arrange a private consultation?')}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-600 transition text-sm"
        >
          💬 WhatsApp Shylesh Now
        </a>
      </section>
    </>
  )
}
