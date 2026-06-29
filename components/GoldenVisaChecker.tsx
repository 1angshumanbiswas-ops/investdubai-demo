'use client'

import { useState } from 'react'

type Verdict = 'eligible' | 'likely' | 'not-eligible' | 'mortgage' | null

const APPROVED_DEVELOPERS = [
  'Emaar', 'Damac', 'Sobha', 'Danube', 'Binghatti', 'Ellington',
  'Omniyat', 'Tiger', 'Imtiaz', 'Nakheel', 'Meraas', 'Dubai Properties',
]

export default function GoldenVisaChecker() {
  const [price, setPrice] = useState<number>(0)
  const [propertyType, setPropertyType] = useState<'ready' | 'off-plan' | ''>('')
  const [developer, setDeveloper] = useState('')
  const [mortgage, setMortgage] = useState(false)
  const [equity, setEquity] = useState<number>(0)
  const [verdict, setVerdict] = useState<Verdict>(null)

  const check = () => {
    const effectiveValue = mortgage ? equity : price
    if (effectiveValue <= 0 || !propertyType) return

    if (mortgage && equity < 2_000_000) {
      setVerdict('mortgage')
      return
    }
    if (propertyType === 'ready' && effectiveValue >= 2_000_000) {
      setVerdict('eligible')
      return
    }
    if (propertyType === 'off-plan' && effectiveValue >= 2_000_000) {
      const devApproved = APPROVED_DEVELOPERS.some(d => developer.toLowerCase().includes(d.toLowerCase()))
      setVerdict(devApproved ? 'likely' : 'not-eligible')
      return
    }
    setVerdict('not-eligible')
  }

  const shortfall = 2_000_000 - (mortgage ? equity : price)

  const verdictConfig: Record<NonNullable<Verdict>, { icon: string; color: string; title: string; body: string }> = {
    eligible: {
      icon: '✅', color: 'bg-green-50 border-green-300 text-green-800',
      title: 'Golden Visa Eligible',
      body: 'This property qualifies for the UAE 10-Year Golden Visa. Includes you, your spouse, children under 25, and domestic staff. Renewable every 10 years. No minimum physical residency requirement.',
    },
    likely: {
      icon: '🟡', color: 'bg-yellow-50 border-yellow-300 text-yellow-800',
      title: 'Likely Eligible — Confirm with Shylesh',
      body: 'Off-plan properties from DLD-approved developers can qualify once construction reaches 50% or more. Shylesh will verify DLD approval status and current eligibility for your specific unit.',
    },
    'not-eligible': {
      icon: '❌', color: 'bg-red-50 border-red-300 text-red-800',
      title: 'Not Currently Eligible',
      body: `Your investment is AED ${shortfall.toLocaleString()} below the AED 2,000,000 threshold for Golden Visa eligibility. Shylesh can show you qualifying properties from AED 2M in areas like JVC, Dubai Hills, and Dubai Marina.`,
    },
    mortgage: {
      icon: '⚠️', color: 'bg-orange-50 border-orange-300 text-orange-800',
      title: 'Mortgage Properties Have Special Rules',
      body: `Only the equity portion (AED ${equity.toLocaleString()}) is counted toward Golden Visa eligibility. Your equity must be AED 2,000,000 or above. Speak with Shylesh about DLD-registered mortgage equity options.`,
    },
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 max-w-xl mx-auto">
      <h3 className="font-display text-navy text-xl font-bold mb-2">Golden Visa Eligibility Checker</h3>
      <p className="text-sm text-gray-500 mb-6">Check if your Dubai property investment qualifies for the UAE 10-Year Golden Visa</p>

      <div className="space-y-4">
        {/* Property type */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">Property Type</label>
          <div className="grid grid-cols-2 gap-2">
            {(['ready', 'off-plan'] as const).map(t => (
              <button
                key={t}
                onClick={() => setPropertyType(t)}
                className={`py-2.5 rounded-lg text-sm font-medium border transition ${
                  propertyType === t ? 'bg-navy text-white border-navy' : 'bg-white text-charcoal border-gray-200 hover:border-navy'
                }`}
              >
                {t === 'ready' ? '🏠 Ready Property' : '🏗️ Off-Plan'}
              </button>
            ))}
          </div>
        </div>

        {/* Developer (off-plan only) */}
        {propertyType === 'off-plan' && (
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Developer Name</label>
            <input
              type="text" placeholder="e.g. Emaar, Sobha, Danube..."
              value={developer}
              onChange={e => setDeveloper(e.target.value)}
              list="developers"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
            <datalist id="developers">
              {APPROVED_DEVELOPERS.map(d => <option key={d} value={d} />)}
            </datalist>
          </div>
        )}

        {/* Price */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1">Property Price (AED)</label>
          <input
            type="number" min={0} step={50000}
            value={price || ''}
            onChange={e => { setPrice(parseFloat(e.target.value) || 0); setVerdict(null) }}
            placeholder="e.g. 2500000"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
          />
        </div>

        {/* Mortgage toggle */}
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => { setMortgage(m => !m); setVerdict(null) }}
            className={`w-12 h-6 rounded-full transition relative ${mortgage ? 'bg-gold' : 'bg-gray-200'}`}
          >
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${mortgage ? 'left-7' : 'left-1'}`} />
          </div>
          <span className="text-sm text-charcoal">This property involves a mortgage</span>
        </label>

        {mortgage && (
          <div>
            <label className="block text-xs font-semibold text-navy mb-1">Your Paid Equity (AED)</label>
            <input
              type="number" min={0} step={50000}
              value={equity || ''}
              onChange={e => { setEquity(parseFloat(e.target.value) || 0); setVerdict(null) }}
              placeholder="Amount you have paid / own outright"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
          </div>
        )}

        <button
          onClick={check}
          disabled={!price || !propertyType}
          className="w-full bg-gold text-white rounded-xl py-3 font-semibold hover:bg-gold-light transition disabled:opacity-50"
        >
          Check Eligibility →
        </button>
      </div>

      {/* Result */}
      {verdict && verdictConfig[verdict] && (
        <div className={`mt-6 border rounded-xl p-4 ${verdictConfig[verdict].color}`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">{verdictConfig[verdict].icon}</span>
            <div>
              <p className="font-semibold mb-1">{verdictConfig[verdict].title}</p>
              <p className="text-sm">{verdictConfig[verdict].body}</p>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-4 block w-full text-center bg-navy text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-navy-dark transition"
          >
            Book a Free Golden Visa Consultation →
          </a>
        </div>
      )}
    </div>
  )
}
