import type { Metadata } from 'next'
import ROICalculator from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'Dubai Property ROI Calculator 2026 | Calculate Rental Yield & Returns',
  description: 'Calculate your expected ROI, rental yield, and capital appreciation from Dubai property investment. Includes Golden Visa eligibility check and multi-currency support.',
}

export default function ROIPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4">Dubai Property ROI Calculator</h1>
          <p className="text-white/70 text-lg">Calculate your gross yield, net yield, total returns, and Golden Visa eligibility in 60 seconds.</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <ROICalculator />
          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-display text-xl font-bold text-navy mb-4">How to use this calculator</h2>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Enter the property price in AED (ask Shylesh for exact pricing on specific projects)</li>
              <li>Enter the expected annual rent — for Dubai, Shylesh can provide area-specific rental data</li>
              <li>Add service charges (typically 10–20% of annual rent) and maintenance costs (0.5–1% of property value)</li>
              <li>Set your expected capital appreciation — Dubai averaged 8–12% in 2023–2025</li>
              <li>Select your holding period and preferred currency to see localised returns</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
