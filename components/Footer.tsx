import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold text-navy text-sm">SR</div>
              <span className="text-white font-bold text-sm leading-tight">Invest in Dubai<br /><span className="text-gold text-xs font-normal">with Shylesh Raj</span></span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-3">RERA Broker #77789 · Golden Visa Holder · CEO, Nexus Elite Properties LLC</p>

            {/* Contact details */}
            <div className="space-y-2 mb-4">
              <a href="mailto:shylesh@nexuseliteproperties.com"
                className="flex items-start gap-2 text-white/50 text-xs hover:text-gold transition">
                <span className="shrink-0 mt-0.5">✉</span>
                <span>shylesh@nexuseliteproperties.com</span>
              </a>
              {/* #10b — text now matches href */}
              <a href="https://www.investindubaiwithshylesh.com" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/50 text-xs hover:text-gold transition">
                <span className="shrink-0 mt-0.5">🌐</span>
                <span>investindubaiwithshylesh.com</span>
              </a>
              <div className="flex items-start gap-2 text-white/50 text-xs">
                <span className="shrink-0 mt-0.5">📍</span>
                <span>Nexus Elite Properties LLC<br />1st Floor, Madina Mall<br />Muhaisnah 4, Dubai, UAE</span>
              </div>
            </div>

            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 transition">
              💬 WhatsApp Shylesh
            </a>
          </div>

          {/* Investment */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Investment</p>
            <div className="space-y-2">
              {[
                ['/properties', 'Properties'],
                ['/golden-visa', 'Golden Visa'],
                ['/roi-calculator', 'ROI Calculator'],
                ['/case-studies', 'Case Studies'],
                ['/contact', 'Book Consultation'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block text-white/50 text-xs hover:text-gold transition">{label}</Link>
              ))}
            </div>
          </div>

          {/* Investors — #1: replaced broken 404 links with working pages */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Investors</p>
            <div className="space-y-2">
              {[
                ['/blog/dubai-property-indian-investors-2026', 'India Investors'],
                ['/global-investors', 'GCC Investors'],
                ['/global-investors', 'UK Investors'],
                ['/global-investors', 'US Investors'],
                ['/blog/dubai-property-indian-investors-2026', 'NRI Guide'],
                ['/luxury-properties', 'HNI Advisory'],
              ].map(([href, label]) => (
                <Link key={`${href}-${label}`} href={href} className="block text-white/50 text-xs hover:text-gold transition">{label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Company</p>
            <div className="space-y-2">
              {[
                ['/about', 'About Shylesh'],
                ['/blog', 'Knowledge Hub'],
                ['/case-studies', 'Investor Stories'],
                ['/partner-program', 'Partner With Us'],
                ['/contact', 'Contact Us'],
                ['/privacy', 'Privacy Policy'],
                ['/terms', 'Terms of Use'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block text-white/50 text-xs hover:text-gold transition">{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2026 Nexus Elite Properties LLC. All rights reserved. RERA Broker #77789.</p>
          <p className="text-white/30 text-xs">Content is for informational purposes only. Not financial advice.</p>
        </div>
      </div>
    </footer>
  )
}
