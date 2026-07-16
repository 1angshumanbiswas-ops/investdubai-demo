'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { PROPERTIES } from '@/lib/properties-data'

/* ─────────────────────────────────────────────
   COUNTRY DATA
   aedPerUnit = 1 local currency unit → X AED
───────────────────────────────────────────── */

interface CountryData {
  code: string
  country: string
  flag: string
  currency: string
  symbol: string
  aedPerUnit: number
  budgetLabel: string
}

const COUNTRIES: CountryData[] = [
  { code: 'IN', country: 'India',        flag: '🇮🇳', currency: 'INR', symbol: '₹',   aedPerUnit: 1 / 22.8,   budgetLabel: 'Cr INR' },
  { code: 'GB', country: 'UK',           flag: '🇬🇧', currency: 'GBP', symbol: '£',   aedPerUnit: 1 / 0.215,  budgetLabel: 'GBP' },
  { code: 'US', country: 'USA',          flag: '🇺🇸', currency: 'USD', symbol: '$',   aedPerUnit: 1 / 0.272,  budgetLabel: 'USD' },
  { code: 'RU', country: 'Russia',       flag: '🇷🇺', currency: 'RUB', symbol: '₽',   aedPerUnit: 1 / 24.0,   budgetLabel: 'RUB' },
  { code: 'CN', country: 'China',        flag: '🇨🇳', currency: 'CNY', symbol: '¥',   aedPerUnit: 1 / 1.96,   budgetLabel: 'CNY' },
  { code: 'DE', country: 'Germany',      flag: '🇩🇪', currency: 'EUR', symbol: '€',   aedPerUnit: 1 / 0.251,  budgetLabel: 'EUR' },
  { code: 'FR', country: 'France',       flag: '🇫🇷', currency: 'EUR', symbol: '€',   aedPerUnit: 1 / 0.251,  budgetLabel: 'EUR' },
  { code: 'PK', country: 'Pakistan',     flag: '🇵🇰', currency: 'PKR', symbol: '₨',  aedPerUnit: 1 / 76.0,   budgetLabel: 'Cr PKR' },
  { code: 'CA', country: 'Canada',       flag: '🇨🇦', currency: 'CAD', symbol: 'CA$', aedPerUnit: 1 / 0.370,  budgetLabel: 'CAD' },
  { code: 'AU', country: 'Australia',    flag: '🇦🇺', currency: 'AUD', symbol: 'A$',  aedPerUnit: 1 / 0.426,  budgetLabel: 'AUD' },
  { code: 'SG', country: 'Singapore',    flag: '🇸🇬', currency: 'SGD', symbol: 'S$',  aedPerUnit: 1 / 0.367,  budgetLabel: 'SGD' },
  { code: 'KW', country: 'Kuwait',       flag: '🇰🇼', currency: 'KWD', symbol: 'KD',  aedPerUnit: 1 / 0.0836, budgetLabel: 'KWD' },
  { code: 'SA', country: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR', symbol: '﷼',  aedPerUnit: 1 / 1.022,  budgetLabel: 'SAR' },
  { code: 'QA', country: 'Qatar',        flag: '🇶🇦', currency: 'QAR', symbol: 'QR',  aedPerUnit: 1 / 0.992,  budgetLabel: 'QAR' },
  { code: 'NG', country: 'Nigeria',      flag: '🇳🇬', currency: 'NGN', symbol: '₦',   aedPerUnit: 1 / 436.0,  budgetLabel: 'NGN' },
  { code: 'BH', country: 'Bahrain',      flag: '🇧🇭', currency: 'BHD', symbol: 'BD',  aedPerUnit: 1 / 0.103,  budgetLabel: 'BHD' },
  { code: 'OM', country: 'Oman',         flag: '🇴🇲', currency: 'OMR', symbol: 'OMR', aedPerUnit: 1 / 0.105,  budgetLabel: 'OMR' },
  { code: 'CH', country: 'Switzerland',  flag: '🇨🇭', currency: 'CHF', symbol: 'Fr',  aedPerUnit: 1 / 0.238,  budgetLabel: 'CHF' },
  { code: 'IT', country: 'Italy',        flag: '🇮🇹', currency: 'EUR', symbol: '€',   aedPerUnit: 1 / 0.251,  budgetLabel: 'EUR' },
  { code: 'JO', country: 'Jordan',       flag: '🇯🇴', currency: 'JOD', symbol: 'JD',  aedPerUnit: 1 / 0.193,  budgetLabel: 'JOD' },
  { code: 'BD', country: 'Bangladesh',   flag: '🇧🇩', currency: 'BDT', symbol: '৳',   aedPerUnit: 1 / 32.3,   budgetLabel: 'BDT' },
  { code: 'KZ', country: 'Kazakhstan',   flag: '🇰🇿', currency: 'KZT', symbol: '₸',   aedPerUnit: 1 / 133.0,  budgetLabel: 'KZT' },
  { code: 'ZA', country: 'South Africa', flag: '🇿🇦', currency: 'ZAR', symbol: 'R',   aedPerUnit: 1 / 4.99,   budgetLabel: 'ZAR' },
  { code: 'MY', country: 'Malaysia',     flag: '🇲🇾', currency: 'MYR', symbol: 'RM',  aedPerUnit: 1 / 1.18,   budgetLabel: 'MYR' },
]

/* ─────────────────────────────────────────────
   BUDGET RANGES  (AED)
───────────────────────────────────────────── */

interface BudgetRange {
  label: string   // e.g. "AED 1M – 2M"
  min: number
  max: number
}

const BUDGET_RANGES: BudgetRange[] = [
  { label: 'AED 2M – 5M',   min:  2_000_000, max:  5_000_000 },
  { label: 'AED 5M – 10M',  min:  5_000_000, max: 10_000_000 },
  { label: 'AED 10M – 30M', min: 10_000_000, max: 30_000_000 },
  { label: 'AED 30M+',      min: 30_000_000, max: 200_000_000 },
]

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

/** Format a LOCAL currency amount nicely */
function formatLocal(localAmount: number, c: CountryData): string {
  const { currency, symbol } = c
  if (currency === 'INR' || currency === 'PKR' || currency === 'BDT') {
    if (localAmount >= 10_000_000) return `${symbol}${(localAmount / 10_000_000).toFixed(2)} Cr`
    if (localAmount >= 100_000)    return `${symbol}${(localAmount / 100_000).toFixed(1)} L`
    return `${symbol}${Math.round(localAmount).toLocaleString()}`
  }
  if (currency === 'NGN' || currency === 'KZT' || currency === 'RUB') {
    if (localAmount >= 1_000_000_000) return `${symbol}${(localAmount / 1_000_000_000).toFixed(2)}B`
    if (localAmount >= 1_000_000)     return `${symbol}${(localAmount / 1_000_000).toFixed(2)}M`
    return `${symbol}${Math.round(localAmount).toLocaleString()}`
  }
  if (localAmount >= 1_000_000) return `${symbol}${(localAmount / 1_000_000).toFixed(2)}M`
  if (localAmount >= 1_000)     return `${symbol}${Math.round(localAmount / 1_000)}K`
  return `${symbol}${Math.round(localAmount).toLocaleString()}`
}

function aedToLocal(aed: number, c: CountryData): number {
  return aed / c.aedPerUnit
}

/** "AED 2.00M" style label */
function fmtAED(aed: number): string {
  if (aed >= 1_000_000) return `AED ${(aed / 1_000_000).toFixed(2)}M`
  return `AED ${(aed / 1_000).toFixed(0)}K`
}

/** Local-currency range label: "£272K – £545K" */
function rangeLocalLabel(r: BudgetRange, c: CountryData): string {
  return `${formatLocal(aedToLocal(r.min, c), c)} – ${formatLocal(aedToLocal(r.max, c), c)}`
}

const STATUS_COLOUR: Record<string, string> = {
  'Off-Plan':         'bg-blue-100 text-blue-700',
  'Ready':            'bg-green-100 text-green-700',
  'Secondary Market': 'bg-purple-100 text-purple-700',
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function GlobalInvestorExplorer() {
  const [selected, setSelected]           = useState<CountryData | null>(null)
  const [rangeIdx,  setRangeIdx]          = useState<number | null>(null)

  const handleSelectCountry = useCallback((c: CountryData) => {
    if (selected?.code === c.code) {
      setSelected(null)
      setRangeIdx(null)
    } else {
      setSelected(c)
      setRangeIdx(null)      // reset range when switching country
    }
  }, [selected])

  const activeRange = rangeIdx !== null ? BUDGET_RANGES[rangeIdx] : null

  // Properties within the selected range max (affordable), ascending price
  const matching = (selected && activeRange)
    ? PROPERTIES
        .filter(p => p.startingPrice <= activeRange.max)
        .sort((a, b) => a.startingPrice - b.startingPrice)
    : []

  // Aspirational: just above range max, up to 30% over
  const aspirational = (selected && activeRange)
    ? PROPERTIES
        .filter(p => p.startingPrice > activeRange.max && p.startingPrice <= activeRange.max * 1.3)
        .sort((a, b) => a.startingPrice - b.startingPrice)
        .slice(0, 2)
    : []

  // Cheapest property for "too low" empty state
  const cheapest = [...PROPERTIES].sort((a, b) => a.startingPrice - b.startingPrice)[0]

  const panelOpen = selected !== null

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── HEADING ── */}
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Your Country · Your Currency · Your Budget
          </p>
          <h2 className="font-display text-navy text-3xl lg:text-4xl font-bold mb-3">
            Find Properties in Your Currency
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Select your home country, pick a budget range, and see every matching
            Dubai property priced in your own currency.
          </p>
        </div>

        {/* ── FLAG GRID ── */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2.5 mb-8">
          {COUNTRIES.map(c => {
            const isActive = selected?.code === c.code
            return (
              <button
                key={c.code}
                onClick={() => handleSelectCountry(c)}
                className={`
                  flex flex-col items-center gap-1.5 p-2.5 rounded-xl border-2 transition-all duration-200
                  cursor-pointer select-none
                  ${isActive
                    ? 'border-gold bg-gold/10 scale-105 shadow-md'
                    : 'border-gray-100 hover:border-gold/50 hover:bg-gold/5 hover:scale-105'
                  }
                `}
                aria-pressed={isActive}
                aria-label={`Select ${c.country}`}
              >
                <span className="text-3xl leading-none">{c.flag}</span>
                <span className={`text-xs font-semibold leading-tight text-center ${isActive ? 'text-navy' : 'text-gray-500'}`}>
                  {c.country}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-gold text-navy' : 'bg-gray-100 text-gray-500'}`}>
                  {c.currency}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── BUDGET EXPLORER (animated reveal) ── */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            panelOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          {selected && (
            <div className="bg-navy rounded-2xl p-6 lg:p-8 mb-8">

              {/* ── HEADER ── */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">{selected.flag}</span>
                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest">
                    Investor from {selected.country}
                  </p>
                  <h3 className="font-display text-white text-xl font-bold">
                    Select your budget range in {selected.currency}
                  </h3>
                </div>
              </div>

              {/* ── 4 BUDGET RANGE BUTTONS ── */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {BUDGET_RANGES.map((r, i) => {
                  const isChosen = rangeIdx === i
                  return (
                    <button
                      key={r.label}
                      onClick={() => setRangeIdx(isChosen ? null : i)}
                      className={`
                        flex flex-col items-start gap-1.5 p-4 rounded-xl border-2 text-left
                        transition-all duration-200 cursor-pointer
                        ${isChosen
                          ? 'border-gold bg-gold text-navy shadow-lg scale-[1.02]'
                          : 'border-white/15 bg-white/5 text-white hover:border-gold/50 hover:bg-white/10'
                        }
                      `}
                      aria-pressed={isChosen}
                    >
                      {/* AED label */}
                      <span className={`font-display font-bold text-sm lg:text-base leading-tight ${isChosen ? 'text-navy' : 'text-white'}`}>
                        {r.label}
                      </span>
                      {/* Local currency equivalent */}
                      <span className={`text-xs font-medium leading-tight ${isChosen ? 'text-navy/70' : 'text-white/50'}`}>
                        {rangeLocalLabel(r, selected)}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* ── RESULTS SUMMARY (only when a range is chosen) ── */}
              {activeRange && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shrink-0 ${
                      matching.length > 0 ? 'bg-gold text-navy' : 'bg-white/10 text-white/40'
                    }`}>
                      {matching.length}
                    </div>
                    <p className="text-white font-semibold">
                      {matching.length === 0
                        ? `No properties available in this range`
                        : matching.length === 1
                        ? `1 property within ${activeRange.label} (${rangeLocalLabel(activeRange, selected)})`
                        : `${matching.length} properties within ${activeRange.label} (${rangeLocalLabel(activeRange, selected)})`
                      }
                    </p>
                  </div>

                  {/* ── PROPERTY CARDS — MATCHING ── */}
                  {matching.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {matching.map(prop => (
                        <Link
                          key={prop.id}
                          href={`/properties/${prop.id}`}
                          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="relative overflow-hidden h-40">
                            <img
                              src={prop.image}
                              alt={prop.projectName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                            <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full ${STATUS_COLOUR[prop.status] ?? 'bg-gray-100 text-gray-600'}`}>
                              {prop.status}
                            </span>
                            {prop.goldenVisaEligible === true && (
                              <span className="absolute top-2 left-2 bg-gold text-navy text-xs font-bold px-2 py-0.5 rounded-full">
                                🏅 Golden Visa
                              </span>
                            )}
                          </div>
                          <div className="p-4">
                            <p className="text-gray-400 text-xs mb-0.5">{prop.developerName} · {prop.location}</p>
                            <h4 className="font-display text-navy font-bold text-sm leading-tight mb-3">
                              {prop.projectName}
                            </h4>
                            <div className="flex items-end justify-between">
                              <div>
                                <p className="text-xs text-gray-400">Starting from</p>
                                <p className="font-display text-gold font-bold text-lg leading-tight">
                                  {formatLocal(aedToLocal(prop.startingPrice, selected), selected)}
                                </p>
                                <p className="text-gray-400 text-xs">{fmtAED(prop.startingPrice)}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-gray-400">Est. ROI</p>
                                <p className="text-green-600 font-bold text-sm">{prop.roiEstimate}%</p>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {prop.unitTypes.slice(0, 3).map(u => (
                                <span key={u} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                  {u}
                                </span>
                              ))}
                              {prop.unitTypes.length > 3 && (
                                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                                  +{prop.unitTypes.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* ── EMPTY STATE ── */}
                  {matching.length === 0 && (
                    <div className="bg-white/5 rounded-xl p-5 mb-6 text-center">
                      <p className="text-white/60 text-sm mb-2">Our portfolio starts from:</p>
                      <p className="font-display text-gold text-2xl font-bold">
                        {formatLocal(aedToLocal(cheapest.startingPrice, selected), selected)}
                      </p>
                      <p className="text-white/40 text-xs mt-1">
                        {fmtAED(cheapest.startingPrice)} · {cheapest.projectName}
                      </p>
                      <p className="text-white/50 text-xs mt-3">
                        Speak to Shylesh about flexible payment plans — as low as 1% per month.
                      </p>
                    </div>
                  )}

                  {/* ── ASPIRATIONAL TIER ── */}
                  {aspirational.length > 0 && (
                    <div className="mb-2">
                      <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                        Slightly above your range — worth a stretch
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aspirational.map(prop => (
                          <Link
                            key={prop.id}
                            href={`/properties/${prop.id}`}
                            className="group flex gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-gold/40 transition-colors"
                          >
                            <img
                              src={prop.image}
                              alt={prop.projectName}
                              className="w-20 h-16 object-cover rounded-lg shrink-0"
                              loading="lazy"
                            />
                            <div className="min-w-0">
                              <p className="text-white/40 text-xs truncate">{prop.developerName}</p>
                              <p className="text-white text-sm font-semibold leading-tight mb-1 truncate">
                                {prop.projectName}
                              </p>
                              <p className="text-gold font-bold text-sm">
                                {formatLocal(aedToLocal(prop.startingPrice, selected), selected)}
                              </p>
                              <p className="text-white/30 text-xs">{fmtAED(prop.startingPrice)}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ── NO RANGE SELECTED YET ── */}
              {!activeRange && (
                <p className="text-white/40 text-sm text-center py-4">
                  👆 Select a budget range above to see matching properties
                </p>
              )}

              {/* ── FOOTER CTA ── */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/50 text-xs">
                  Exchange rates are indicative. Prices in AED are authoritative.
                  Shylesh will confirm exact pricing in your preferred currency.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 bg-gold text-navy px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-yellow-400 transition"
                >
                  Talk to Shylesh →
                </Link>
              </div>

            </div>
          )}
        </div>

        {/* ── BOTTOM NOTE ── */}
        <p className="text-center text-gray-400 text-xs">
          All 18 properties are DLD-registered off-plan or ready projects.
          Prices start from <span className="text-navy font-semibold">AED 620,000</span>.
          No purchase tax · No capital gains tax · No income tax on rental yield.
        </p>

      </div>
    </section>
  )
}
