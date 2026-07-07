'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyLeadBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('slb_dismissed')) setVisible(true)
    } catch { setVisible(true) }
  }, [])

  function dismiss() {
    setVisible(false)
    try { localStorage.setItem('slb_dismissed', '1') } catch { /* */ }
  }

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gold text-navy px-4 py-2.5 flex items-center justify-between gap-4 shadow-md">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="text-lg shrink-0">🏠</span>
        <p className="text-sm font-semibold truncate">
          <span className="hidden sm:inline">Get a free shortlist of 3 Dubai properties matched to your budget — </span>
          <span className="sm:hidden">Free property shortlist — </span>
          delivered within 24 hours
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href="/property-shortlist"
          className="bg-navy text-white text-xs font-bold px-4 py-1.5 rounded-full hover:bg-navy/80 transition whitespace-nowrap"
        >
          Get My Shortlist →
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="w-6 h-6 rounded-full bg-navy/20 hover:bg-navy/30 flex items-center justify-center text-navy font-bold text-xs transition"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
