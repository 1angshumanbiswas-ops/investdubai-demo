import type { ROIInputs, ROIOutputs } from './types'

export function calculateROI(inputs: ROIInputs): ROIOutputs {
  const {
    propertyPrice, annualRent, serviceCharge,
    maintenancePct, appreciationPct, holdingYears,
  } = inputs

  const maintenanceCost = propertyPrice * (maintenancePct / 100)
  const netAnnualRent = annualRent - serviceCharge - maintenanceCost
  const totalRentIncome = netAnnualRent * holdingYears
  const exitValue = propertyPrice * Math.pow(1 + appreciationPct / 100, holdingYears)
  const capitalAppreciation = exitValue - propertyPrice
  const totalProfit = totalRentIncome + capitalAppreciation
  const totalROI = (totalProfit / propertyPrice) * 100
  const grossYield = (annualRent / propertyPrice) * 100
  const netYield = (netAnnualRent / propertyPrice) * 100

  return {
    grossYield: +grossYield.toFixed(2),
    netYield: +netYield.toFixed(2),
    totalROI: +totalROI.toFixed(2),
    capitalAppreciation: +capitalAppreciation.toFixed(0),
    exitValue: +exitValue.toFixed(0),
    totalRentIncome: +totalRentIncome.toFixed(0),
    goldenVisaEligible: propertyPrice >= 2_000_000,
  }
}

// ── Currency display ───────────────────────────────────────────────────────────
export const CURRENCIES = [
  { code: 'AED', label: 'AED – UAE Dirham', symbol: 'AED' },
  { code: 'INR', label: 'INR – Indian Rupee', symbol: '₹' },
  { code: 'USD', label: 'USD – US Dollar', symbol: '$' },
  { code: 'GBP', label: 'GBP – British Pound', symbol: '£' },
  { code: 'EUR', label: 'EUR – Euro', symbol: '€' },
  { code: 'SGD', label: 'SGD – Singapore Dollar', symbol: 'S$' },
]

export async function getExchangeRates(): Promise<Record<string, number>> {
  try {
    const key = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/AED`, {
      next: { revalidate: 3600 }, // cache 1 hour
    })
    const data = await res.json()
    return data.conversion_rates ?? {}
  } catch {
    // Fallback approximate rates (June 2026)
    return { AED: 1, INR: 23.2, USD: 0.272, GBP: 0.214, EUR: 0.251, SGD: 0.366 }
  }
}

export function formatCurrency(amount: number, currency: string, rates: Record<string, number>) {
  const rate = rates[currency] ?? 1
  const converted = amount * rate
  const sym = CURRENCIES.find(c => c.code === currency)?.symbol ?? currency
  if (converted >= 10_000_000) return `${sym}${(converted / 10_000_000).toFixed(2)} Cr`
  if (converted >= 100_000) return `${sym}${(converted / 100_000).toFixed(2)} L`
  return `${sym}${converted.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`
}
