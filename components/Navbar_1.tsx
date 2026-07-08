'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/properties', label: 'Properties' },
  { href: '/luxury-properties', label: 'Luxury Properties' },
  { href: '/golden-visa', label: 'Golden Visa' },
  { href: '/roi-calculator', label: 'ROI Calculator' },
  { href: '/global-investors', label: 'Global Investors' },
  { href: '/blog', label: 'Knowledge Hub' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-10 z-40 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center font-bold text-navy text-sm">SR</div>
            <span className="text-white font-display font-bold text-sm hidden sm:block leading-tight">
              Invest in Dubai<br /><span className="text-gold text-xs font-normal">with Shylesh Raj</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} className="text-white/80 hover:text-gold text-sm transition">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 transition"
            >
              <span>💬</span> WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gold-light transition"
            >
              Book Consultation
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden text-white p-1"
              aria-label="Menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy border-t border-gold/20 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-gold text-sm py-1 border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-semibold mt-2"
            >
              💬 WhatsApp Shylesh
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
