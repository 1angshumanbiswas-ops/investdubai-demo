import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Shylesh Raj | RERA-Certified Dubai Property Advisor | CEO Nexus Elite Properties',
  description: 'Shylesh Raj NK — Founder & CEO of Nexus Elite Properties LLC, RERA-Certified Real Estate Consultant, UAE Golden Visa Holder with 25+ years of UAE market experience. Channel partner with 30+ leading Dubai developers.',
}

const CREDENTIALS = [
  { icon: '🏛️', label: 'RERA Certified Real Estate Consultant', detail: 'RERA Broker #77789 — Dubai Real Estate Regulatory Agency' },
  { icon: '🏢', label: 'Founder & CEO, Nexus Elite Properties LLC', detail: 'RERA-Approved Brokerage Firm, Dubai' },
  { icon: '📅', label: '25+ Years UAE Experience', detail: 'Living and working in the UAE since the late 1990s' },
  { icon: '🏅', label: 'UAE Government Golden Visa Holder', detail: '10-Year UAE Residency — first-hand knowledge of the Golden Visa process' },
  { icon: '🤝', label: 'Channel Partner — 30+ Developers', detail: 'Emaar, Sobha, DAMAC, Danube, Binghatti, Ellington, Omniyat, Tiger, Imtiaz, Nakheel and more' },
  { icon: '🌆', label: '4 Emirates Coverage', detail: 'Dubai, Abu Dhabi, Ras Al Khaimah, and Sharjah' },
]

const DEVELOPERS = [
  'Emaar', 'Sobha', 'DAMAC', 'Danube', 'Binghatti',
  'Ellington', 'Omniyat', 'Tiger', 'Imtiaz', 'Nakheel',
  'Meraas', 'Dubai Properties', 'BNW', 'Deyaar', 'Azizi',
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shylesh Raj NK',
  jobTitle: 'Founder & CEO, RERA-Certified Dubai Property Investment Advisor',
  description: 'Shylesh Raj NK is a RERA-Certified real estate consultant and Founder & CEO of Nexus Elite Properties LLC with 25+ years of UAE market experience. UAE Golden Visa holder specialising in off-plan, ready, and secondary market properties for global investors.',
  worksFor: { '@type': 'Organization', name: 'Nexus Elite Properties LLC', url: 'https://www.nexuseliteproperties.com' },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'RERA Certification', credentialCategory: 'Real Estate Broker', recognizedBy: { '@type': 'Organization', name: 'Dubai Real Estate Regulatory Agency' } },
  ],
  url: 'https://www.investindubaiwithshylesh.com/about',
  knowsAbout: ['Dubai Real Estate', 'Off-Plan Properties', 'Golden Visa UAE', 'Property Investment Advisory', 'Secondary Market Properties'],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-widest">About Shylesh Raj</p>
            <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              25+ Years of UAE Market Expertise
            </h1>
            <p className="text-gold/80 font-semibold mb-6">Founder & CEO — Nexus Elite Properties LLC, Dubai</p>
            <p className="text-white/70 leading-relaxed mb-8">
              Shylesh Raj NK is one of Dubai's most trusted RERA-certified property investment advisors, 
              with over 25 years of living and professional experience in the UAE. As a UAE Golden Visa holder 
              himself, Shylesh brings first-hand knowledge to every investor consultation — whether you are 
              seeking off-plan opportunities, ready properties, secondary market deals, or a clear Golden Visa pathway.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bg-gold text-navy px-6 py-3 rounded-xl font-bold hover:bg-gold-light transition">
                Book a Free Consultation →
              </Link>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                💬 WhatsApp Shylesh
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img src="/shylesh.jpg" alt="Shylesh Raj NK — RERA Certified Dubai Property Advisor"
                className="w-72 h-88 object-cover object-top rounded-2xl border-4 border-gold/30 shadow-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-navy/90 backdrop-blur-sm rounded-xl p-3 border border-gold/20">
                <p className="text-white font-semibold text-sm">Shylesh Raj NK</p>
                <p className="text-gold text-xs">RERA Broker #77789 • Golden Visa Holder</p>
                <p className="text-white/60 text-xs">CEO, Nexus Elite Properties LLC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy text-center mb-10">Credentials & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {CREDENTIALS.map(c => (
              <div key={c.label} className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-4">
                <span className="text-3xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-semibold text-navy mb-1 text-sm">{c.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio + Video */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-6">The Advisor Behind the Platform</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>Shylesh Raj NK has spent over 25 years building his career, his network, and his deep understanding of the UAE property market. What began as a passion for real estate evolved into Nexus Elite Properties LLC — a fully RERA-approved brokerage firm that today serves investors from India, GCC, UK, USA, Canada, Singapore, Europe, and other global markets.</p>
              <p>Unlike many brokers who represent only a single developer, Shylesh operates as an independent investor-first advisor. His channel partnerships with 30+ leading Dubai developers — including Emaar, Sobha, DAMAC, Danube, Binghatti, Ellington, and Omniyat — give his clients access to the widest range of investment opportunities across all price points and communities.</p>
              <p>As a UAE Golden Visa holder himself, Shylesh understands the Golden Visa process from the inside. He guides investors through every step — from identifying eligible properties to DLD registration, visa application, and Emirates ID issuance — with clarity and confidence that only lived experience can provide.</p>
              <p>Shylesh's advisory philosophy is simple: every investor deserves personalised guidance, transparent data, and an advisor who puts their financial interest first.</p>
            </div>
          </div>
          {/* Video 2 — Properties */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-t-2xl"
                  src="https://www.youtube.com/embed/NeQNPHG-Wyk?rel=0&modestbranding=1"
                  title="Dubai Investment Properties — Shylesh Raj"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-navy text-sm mb-1">Dubai Investment Properties</p>
                <p className="text-gray-500 text-xs leading-relaxed">A walkthrough of Dubai property investment opportunities — presented by Shylesh Raj, RERA Broker #77789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Partners */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white text-center mb-4">Developer Partnerships</h2>
          <p className="text-white/60 text-center mb-10">Channel partner with 30+ of Dubai's leading property developers</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {DEVELOPERS.map(d => (
              <Link key={d} href={`/properties?developer=${encodeURIComponent(d)}`}
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 hover:border-gold/50 transition">
                <p className="text-white text-sm font-semibold">{d}</p>
              </Link>
            ))}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-3 text-center">
              <p className="text-gold text-sm font-semibold">+15 More</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-4">Ready to Invest with Shylesh?</h2>
          <p className="text-gray-600 mb-8">Book a free 30-minute consultation. Shylesh will personally review your goals and send a curated property shortlist within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gold text-navy px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition">
              Book Free Consultation →
            </Link>
            <Link href="/roi-calculator" className="bg-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-navy-dark transition">
              Calculate My ROI
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
