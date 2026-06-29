'use client'

import { useState, useEffect } from 'react'
import { calculateROI, CURRENCIES, formatCurrency } from '@/lib/roi'
import type { ROIInputs } from '@/lib/types'

const DEFAULT_INPUTS: ROIInputs = {
  propertyPrice: 1500000,
  annualRent: 90000,
  serviceCharge: 15000,
  maintenancePct: 0.5,
  appreciationPct: 6,
  holdingYears: 5,
  currency: 'AED',
}

export default function ROICalculator({ compact = false }: { compact?: boolean }) {
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_INPUTS)
  const [rates, setRates] = useState<Record<string, number>>({ AED: 1, INR: 23.2, USD: 0.272, GBP: 0.214, EUR: 0.251, SGD: 0.366 })
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    // Fetch live rates
    const key = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY
    if (!key) return
    fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/AED`)
      .then(r => r.json())
      .then(d => d.conversion_rates && setRates(d.conversion_rates))
      .catch(() => {})
  }, [])

  const set = (field: keyof ROIInputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const val = field === 'currency' ? e.target.value : parseFloat(e.target.value) || 0
    setInputs(p => ({ ...p, [field]: val }))
    setShowResults(false)
  }

  const results = showResults ? calculateROI(inputs) : null
  const fmt = (n: number) => formatCurrency(n, inputs.currency, rates)

  const InputField = ({ label, field, min, max, step, prefix }: {
    label: string; field: keyof ROIInputs; min?: number; max?: number; step?: number; prefix?: string
  }) => (
    <div>
      <label className="block text-xs font-semibold text-navy mb-1">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">{prefix}</span>}
        <input
          type="number" min={min} max={max} step={step ?? 1000}
          value={(inputs[field] as number)}
          onChange={set(field)}
          className={`w-full border border-gray-200 rounded-lg py-2 text-sm focus:outline-none focus:border-gold ${prefix ? 'pl-10 pr-3' : 'px-3'}`}
        />
      </div>
    </div>
  )

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 ${compact ? 'p-4' : 'p-6 lg:p-8'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-navy text-xl font-bold">Dubai ROI Calculator</h3>
        <select
          value={inputs.currency}
          onChange={set('currency')}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-gold"
        >
          {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <InputField label="Property Price (AED)" field="propertyPrice" min={100000} max={100000000} step={50000} prefix="AED" />
        <InputField label="Expected Annual Rent (AED)" field="annualRent" min={0} max={5000000} step={5000} prefix="AED" />
        <InputField label="Service Charge (AED/yr)" field="serviceCharge" min={0} step={1000} prefix="AED" />
        <InputField label="Maintenance (%)" field="maintenancePct" min={0} max={5} step={0.1} />
        <InputField label="Capital Appreciation (%/yr)" field="appreciationPct" min={0} max={20} step={0.5} />
        <InputField label="Holding Period (years)" field="holdingYears" min={1} max={30} step={1} />
      </div>

      <button
        onClick={() => setShowResults(true)}
        className="w-full bg-gold text-white rounded-xl py-3 font-semibold hover:bg-gold-light transition"
      >
        Calculate My ROI →
      </button>

      {results && (
        <div className="mt-6 space-y-4 animate-fade-in">
          <div className="h-px bg-gold/30" />

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Gross Rental Yield', value: `${results.grossYield}%`, highlight: true },
              { label: 'Net Rental Yield', value: `${results.netYield}%`, highlight: true },
              { label: 'Total ROI (5yr)', value: `${results.totalROI}%`, highlight: false },
              { label: 'Exit Value', value: fmt(results.exitValue), highlight: false },
            ].map(({ label, value, highlight }) => (
              <div key={label} className={`rounded-xl p-3 ${highlight ? 'bg-navy text-white' : 'bg-cream'}`}>
                <p className={`text-xs mb-1 ${highlight ? 'text-gold' : 'text-gray-500'}`}>{label}</p>
                <p className={`text-lg font-bold font-display ${highlight ? 'text-gold' : 'text-navy'}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Full breakdown */}
          <div className="bg-cream rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-navy uppercase tracking-wide mb-3">Full Breakdown</h4>
            {[
              ['Total Rental Income', fmt(results.totalRentIncome)],
              ['Capital Appreciation', fmt(results.capitalAppreciation)],
              ['Property Price (AED)', `AED ${inputs.propertyPrice.toLocaleString()}`],
              ['Exit Value (AED)', `AED ${results.exitValue.toLocaleString()}`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-600">{label}</span>
                <span className="font-semibold text-navy">{value}</span>
              </div>
            ))}
          </div>

          {/* Golden Visa indicator */}
          {results.goldenVisaEligible ? (
            <div className="bg-gold/10 border border-gold/40 rounded-xl p-3 flex items-center gap-3">
              <span className="text-2xl">🏅</span>
              <div>
                <p className="text-sm font-semibold text-navy">Golden Visa Eligible</p>
                <p className="text-xs text-gray-600">This property qualifies for the UAE 10-year Golden Visa (AED 2M+ in ready property)</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <p className="text-sm font-semibold text-charcoal">Golden Visa: AED 2M+ needed</p>
                <p className="text-xs text-gray-500">Increase budget to AED {(2000000).toLocaleString()} for Golden Visa eligibility</p>
              </div>
            </div>
          )}

          <a
            href="/contact"
            className="block w-full text-center bg-navy text-white rounded-xl py-3 font-semibold hover:bg-navy-dark transition text-sm"
          >
            Get a Personalised ROI Analysis from Shylesh →
          </a>
        </div>
      )}
    </div>
  )
}
