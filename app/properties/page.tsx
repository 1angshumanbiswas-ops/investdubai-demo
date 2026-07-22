'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { PROPERTIES, STATUS_COLORS, AED_RATE, type Property, type Status, type UnitType } from '@/lib/properties-data'

const EMIRATES = ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah', 'Sharjah'] as const
type Emirate = typeof EMIRATES[number]

function getEmirate(location: string): Emirate {
  const l = location.toLowerCase()
  if (l.includes('abu dhabi')) return 'Abu Dhabi'
  if (l.includes('ras al khaimah') || l.includes('rak')) return 'Ras Al Khaimah'
  if (l.includes('sharjah')) return 'Sharjah'
  return 'Dubai'
}

function formatPrice(aed: number, currency: string) {
  const rate = AED_RATE[currency] ?? 1
  const val = aed * rate
  if (currency === 'INR') {
    if (val >= 1_00_00_000) return `₹${(val / 1_00_00_000).toFixed(2)} Cr`
    if (val >= 1_00_000) return `₹${(val / 1_00_000).toFixed(1)} L`
    return `₹${val.toLocaleString('en-IN')}`
  }
  const symbols: Record<string, string> = { USD: '$', GBP: '£', EUR: '€', SGD: 'S$', AED: 'AED ' }
  const sym = symbols[currency] ?? currency + ' '
  if (val >= 1_000_000) return `${sym}${(val / 1_000_000).toFixed(2)}M`
  return `${sym}${Math.round(val).toLocaleString()}`
}

function ROIModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const [price, setPrice] = useState(property.startingPrice)
  const [rent, setRent] = useState(Math.round(property.startingPrice * property.roiEstimate / 100))
  const [service, setService] = useState(20000)
  const [years, setYears] = useState(5)
  const [appreciation, setAppreciation] = useState(5)

  const grossYield = (rent / price) * 100
  const netYield = ((rent - service) / price) * 100
  const capitalGain = price * (Math.pow(1 + appreciation / 100, years) - 1)
  const totalROI = ((rent * years + capitalGain - service * years) / price) * 100

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-navy text-lg">{property.projectName} — ROI Estimate</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="space-y-3 mb-5">
          <label className="block">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Property Price (AED)</span>
            <input type="number" value={price} onChange={e => setPrice(+e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
          </label>
          <label className="block">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Expected Annual Rent (AED)</span>
            <input type="number" value={rent} onChange={e => setRent(+e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Service Charge / yr</span>
              <input type="number" value={service} onChange={e => setService(+e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </label>
            <label className="block">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Holding Period (yrs)</span>
              <input type="number" value={years} min={1} max={20} onChange={e => setYears(+e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Capital Appreciation (% / yr)</span>
            <input type="number" value={appreciation} step={0.5} onChange={e => setAppreciation(+e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
          </label>
        </div>
        <div className="bg-navy/5 rounded-xl p-4 grid grid-cols-2 gap-3 mb-5">
          <div className="text-center">
            <p className="text-2xl font-bold text-navy">{grossYield.toFixed(1)}%</p>
            <p className="text-xs text-gray-500">Gross Yield</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-navy">{netYield.toFixed(1)}%</p>
            <p className="text-xs text-gray-500">Net Yield</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gold">AED {Math.round(capitalGain).toLocaleString()}</p>
            <p className="text-xs text-gray-500">Capital Gain ({years}yr)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gold">{totalROI.toFixed(0)}%</p>
            <p className="text-xs text-gray-500">Total ROI ({years}yr)</p>
          </div>
        </div>
        {property.goldenVisaEligible === true && price >= 2_000_000 && (
          <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2 mb-4 text-sm text-navy">
            <span>🏅</span> This property qualifies for the UAE 10-Year Golden Visa
          </div>
        )}
        <a
          href={`https://wa.me/971505818509?text=Hi%20Shylesh%2C%20I%20want%20a%20personalised%20ROI%20analysis%20for%20${encodeURIComponent(property.projectName)}%20by%20${encodeURIComponent(property.developerName)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-navy text-white rounded-xl py-3 font-semibold hover:bg-navy/90 transition text-sm"
        >
          Get Personalised ROI Analysis from Shylesh →
        </a>
      </div>
    </div>
  )
}

function PropertyCard({ property, currency }: { property: Property; currency: string }) {
  const [showROI, setShowROI] = useState(false)

  const waText = `Hi Shylesh, I'm interested in ${property.projectName} by ${property.developerName} in ${property.location}. Please share available inventory and payment plan details.`

  return (
    <>
      {showROI && <ROIModal property={property} onClose={() => setShowROI(false)} />}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
        {/* Image / Banner */}
        <div className="h-52 relative overflow-hidden bg-navy">
          {property.image ? (
            <img
              src={property.image}
              alt={property.projectName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-navy to-navy/70 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gold font-display text-2xl font-bold">{property.projectName}</p>
                <p className="text-white/70 text-sm">{property.developerName}</p>
              </div>
            </div>
          )}
          {/* Overlay for non-image cards */}
          {!property.image && null}
          {property.featured && (
            <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full z-10">
              Featured
            </span>
          )}
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full z-10 ${STATUS_COLORS[property.status]}`}>
            {property.status}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 gap-4">
          {/* Developer + Location */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs bg-navy/10 text-navy font-semibold px-2 py-0.5 rounded-full">{property.developerName}</span>
              {property.goldenVisaEligible === true && (
                <span className="text-xs bg-gold/15 text-amber-700 font-semibold px-2 py-0.5 rounded-full">🏅 Golden Visa</span>
              )}
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              {property.location}
            </p>
          </div>

          {/* Price */}
          <div className="bg-cream rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Starting Price</p>
            <p className="text-2xl font-bold text-navy">
              {currency === 'AED'
                ? `AED ${property.startingPrice.toLocaleString()}`
                : formatPrice(property.startingPrice, currency)}
            </p>
            {currency !== 'AED' && (
              <p className="text-xs text-gray-400">= AED {property.startingPrice.toLocaleString()}</p>
            )}
          </div>

          {/* Key details grid */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-50 rounded-lg p-2.5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Payment Plan</p>
              <p className="text-navy font-semibold text-xs leading-snug">{property.paymentPlan.split('—')[0].trim()}</p>
              {property.paymentPlan.includes('—') && (
                <p className="text-gray-500 text-xs mt-0.5">{property.paymentPlan.split('—')[1].trim()}</p>
              )}
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Handover</p>
              <p className="text-navy font-semibold text-xs">{property.handoverDate ?? 'Ready Now'}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Unit Types</p>
              <p className="text-navy font-semibold text-xs">{property.unitTypes.join(' · ')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">ROI Estimate</p>
              <p className="text-navy font-semibold text-xs">{property.roiEstimate}% / year</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-auto space-y-2">
            <Link
              href={`/properties/${property.id}`}
              className="w-full bg-gold text-navy rounded-xl py-2.5 text-sm font-bold hover:bg-gold/90 transition flex items-center justify-center gap-2"
            >
              🔍 View Details
            </Link>
            <button
              onClick={() => setShowROI(true)}
              className="w-full bg-navy text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-navy/90 transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              ROI Estimate
            </button>
            <a
              href={`https://wa.me/971505818509?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Request Inventory
            </a>
            {property.brochureUrl ? (
              <a
                href={property.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-navy text-navy rounded-xl py-2 text-sm font-semibold hover:bg-navy/5 transition flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Brochure
              </a>
            ) : (
              <a
                href={`https://wa.me/971505818509?text=${encodeURIComponent(`Hi Shylesh, please send me the brochure for ${property.projectName} by ${property.developerName}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-gray-200 text-gray-500 rounded-xl py-2 text-sm font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Request Brochure via WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={null}>
      <PropertiesPageInner />
    </Suspense>
  )
}

function PropertiesPageInner() {
  const searchParams = useSearchParams()
  const [statusFilter, setStatusFilter] = useState<Status | 'All'>('All')
  const [gvFilter, setGvFilter] = useState(false)
  const [currency, setCurrency] = useState('AED')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'roi-desc'>('roi-desc')
  const [developerFilter, setDeveloperFilter] = useState(searchParams.get('developer') ?? '')
  const [emirateFilter, setEmirateFilter] = useState<Emirate | 'All'>((searchParams.get('emirate') as Emirate) ?? 'All')

  const filtered = PROPERTIES
    .filter(p => statusFilter === 'All' || p.status === statusFilter)
    .filter(p => !gvFilter || p.goldenVisaEligible === true)
    .filter(p => !developerFilter || p.developerName.toLowerCase().includes(developerFilter.toLowerCase()))
    .filter(p => emirateFilter === 'All' || getEmirate(p.location) === emirateFilter)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice
      if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice
      return b.roiEstimate - a.roiEstimate
    })

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Dubai Property Investment</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4">
            Curated Investment Properties
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Hand-picked off-plan and ready properties from Dubai&apos;s top developers. Every listing includes ROI estimates, payment plans, and direct access to Shylesh for inventory and brochures.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 pt-3 flex flex-wrap gap-2">
          {EMIRATES.map(em => {
            const count = PROPERTIES.filter(p => getEmirate(p.location) === em).length
            return (
              <button
                key={em}
                onClick={() => setEmirateFilter(emirateFilter === em ? 'All' : em)}
                disabled={count === 0}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  emirateFilter === em
                    ? 'bg-gold text-navy border-gold'
                    : count === 0
                    ? 'bg-white text-gray-300 border-gray-100 cursor-not-allowed'
                    : 'bg-white text-navy border-gray-200 hover:border-gold'
                }`}
              >
                {em} {count > 0 && `(${count})`}
              </button>
            )
          })}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">
          {/* Status filter */}
          <div className="flex gap-2 flex-wrap">
            {(['All', 'Off-Plan', 'Ready', 'Secondary Market'] as const).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${statusFilter === s ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto flex-wrap">
            {/* Golden Visa toggle */}
            <label className="flex items-center gap-2 text-xs font-semibold text-navy cursor-pointer select-none">
              <span className="relative inline-flex h-5 w-9">
                <input type="checkbox" className="sr-only peer" checked={gvFilter} onChange={e => setGvFilter(e.target.checked)} />
                <span className="w-full h-full bg-gray-200 peer-checked:bg-gold rounded-full transition-colors" />
                <span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
              </span>
              🏅 Golden Visa Only
            </label>

            {/* Currency */}
            <select value={currency} onChange={e => setCurrency(e.target.value)} className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-navy focus:outline-none">
              {Object.keys(AED_RATE).map(c => <option key={c}>{c}</option>)}
            </select>

            {/* Sort */}
            <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)} className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-navy focus:outline-none">
              <option value="roi-desc">Sort: Highest ROI</option>
              <option value="price-asc">Sort: Price Low–High</option>
              <option value="price-desc">Sort: Price High–Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2 flex flex-wrap items-center gap-3">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-navy">{filtered.length}</span> properties
          {emirateFilter !== 'All' && ` in ${emirateFilter}`}
          {gvFilter && ' · Golden Visa eligible'}
          {statusFilter !== 'All' && ` · ${statusFilter}`}
        </p>
        {developerFilter && (
          <button
            onClick={() => setDeveloperFilter('')}
            className="flex items-center gap-1.5 bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full hover:bg-navy/20 transition"
          >
            Developer: {developerFilter} <span className="text-navy/60">✕</span>
          </button>
        )}
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🏗️</p>
            {developerFilter ? (
              <>
                <p className="text-lg font-semibold text-gray-500 mb-2">No {developerFilter} properties currently listed</p>
                <p className="text-sm text-gray-400 mb-4 max-w-md mx-auto">Shylesh works with {developerFilter} directly — WhatsApp him for current inventory and off-market opportunities.</p>
              </>
            ) : (
              <p className="text-lg font-semibold text-gray-500 mb-2">No properties match your filters</p>
            )}
            <button onClick={() => { setStatusFilter('All'); setGvFilter(false); setDeveloperFilter(''); setEmirateFilter('All') }} className="text-sm text-navy underline">Clear filters</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <PropertyCard key={p.id} property={p} currency={currency} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Strip */}
      <section className="bg-navy py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-white text-3xl font-bold mb-3">
            Don&apos;t See the Right Property?
          </h2>
          <p className="text-white/70 mb-6">
            Shylesh has access to 30+ developer inventories — including off-market and pre-launch units not listed here. Tell him your budget and goals and he will send a curated shortlist within 24 hours.
          </p>
          <a
            href="https://wa.me/971505818509?text=Hi%20Shylesh%2C%20I%20didn't%20find%20the%20right%20property%20on%20the%20site.%20Can%20you%20send%20me%20a%20personalised%20shortlist?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Request a Custom Shortlist from Shylesh
          </a>
        </div>
      </section>
    </div>
  )
}
