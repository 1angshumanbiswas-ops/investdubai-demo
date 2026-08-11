'use client'

import { useEffect, useRef, useState } from 'react'
import LeadGateModal from './LeadGateModal'

// Naming convention: /public/brochures/investor-guide-<code>.pdf
// To add a new language in future: save the PDF with that filename in public/brochures/
// and add/flip its entry below.
const LANGUAGES: { code: string; label: string; available: boolean }[] = [
  { code: 'en', label: 'English', available: true },
  { code: 'hi', label: 'Hindi', available: true },
  { code: 'ml', label: 'Malayalam', available: true },
  { code: 'te', label: 'Telugu', available: true },
  { code: 'ta', label: 'Tamil', available: true },
  { code: 'gu', label: 'Gujarati', available: true },
  { code: 'de', label: 'German', available: true },
  { code: 'fr', label: 'French', available: true },
  { code: 'zh', label: 'Chinese (Mandarin)', available: true },
  { code: 'ar', label: 'Arabic', available: true },
]

// English keeps its existing filename rather than being renamed to investor-guide-en.pdf,
// so existing links elsewhere on the site don't break.
function hrefFor(code: string) {
  if (code === 'en') return '/brochures/shylesh-raj-investor-guide-2026.pdf'
  return `/brochures/investor-guide-${code}.pdf`
}

export default function InvestorGuideDropdown({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<{ code: string; label: string } | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="w-full flex items-center justify-center gap-2 bg-gold text-navy px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gold-light transition"
      >
        📄 Investor Guide By Shylesh
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gold/20 overflow-hidden max-h-80 overflow-y-auto"
        >
          <p className="px-4 pt-3 pb-1 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
            Choose language
          </p>
          {LANGUAGES.map((lang) =>
            lang.available ? (
              <button
                key={lang.code}
                type="button"
                role="menuitem"
                onClick={() => {
                  setSelectedLang({ code: lang.code, label: lang.label })
                  setOpen(false)
                }}
                className="block w-full text-left px-4 py-2.5 text-sm text-navy hover:bg-cream transition"
              >
                {lang.label}
              </button>
            ) : (
              <span
                key={lang.code}
                role="menuitem"
                aria-disabled="true"
                className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 cursor-not-allowed select-none"
              >
                {lang.label}
                <span className="text-[10px] uppercase tracking-wide text-gray-300">Coming soon</span>
              </span>
            )
          )}
        </div>
      )}

      {selectedLang && (
        <LeadGateModal
          languageLabel={selectedLang.label}
          pdfHref={hrefFor(selectedLang.code)}
          onClose={() => setSelectedLang(null)}
        />
      )}
    </div>
  )
}
