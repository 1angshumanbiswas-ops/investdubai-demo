'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROPERTIES, AED_RATE, STATUS_COLORS } from '@/lib/properties-data'

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '971505818509'

const CURRENCIES = ['AED', 'USD', 'INR', 'GBP', 'EUR', 'SGD'] as const

function formatPrice(aed: number, currency: string) {
  const rate = AED_RATE[currency] ?? 1
  const val = aed * rate
  const sym: Record<string, string> = { AED: 'AED', USD: '$', INR: '₹', GBP: '£', EUR: '€', SGD: 'S$' }
  if (currency === 'INR') {
    const crore = val / 10_000_000
    return `${sym[currency]}${crore.toFixed(2)} Cr`
  }
  return `${sym[currency]}${val.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = PROPERTIES.find(p => p.id === params.id)
  if (!property) notFound()

  const [activeImg, setActiveImg] = useState(0)
  const [currency, setCurrency] = useState('AED')

  const images = property.gallery?.length ? property.gallery : [property.image]
  const waText = `Hi Shylesh, I'm interested in ${property.projectName} by ${property.developerName} in ${property.location}. Price from AED ${property.startingPrice.toLocaleString()}. Please share available units and next steps.`

  return (
    <div className="min-h-screen bg-cream">

      {/* Breadcrumb */}
      <div className="bg-navy py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-white/50">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-gold transition">Properties</Link>
          <span>/</span>
          <span className="text-gold">{property.projectName}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT — Images + Details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Main image */}
            <div className="rounded-2xl overflow-hidden h-72 md:h-96 relative bg-navy">
              <img
                src={images[activeImg]}
                alt={property.projectName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {property.featured && (
                  <span className="bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">Featured</span>
                )}
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${STATUS_COLORS[property.status]}`}>
                  {property.status}
                </span>
              </div>
              {property.goldenVisaEligible === true && (
                <div className="absolute bottom-3 left-3 bg-navy/80 backdrop-blur text-gold text-xs font-semibold px-3 py-1.5 rounded-full">
                  🏅 Golden Visa Eligible
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-20 w-28 rounded-xl overflow-hidden border-2 transition shrink-0 ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Property name + badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-navy/10 text-navy font-semibold px-2 py-1 rounded-full">{property.developerName}</span>
                <span className="text-xs bg-cream border border-gray-200 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
                  📍 {property.location}
                </span>
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-navy">{property.projectName}</h1>
            </div>

            {/* Description */}
            {property.description && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <span>🏠</span> Property Overview
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
              </div>
            )}

            {/* Key details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
                <span>🔑</span> Key Details
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Property Type', value: property.unitTypes.join(', ') },
                  { label: 'Market Status', value: property.status },
                  { label: 'Developer', value: property.developerName },
                  { label: 'Location', value: property.location },
                  { label: 'Payment Plan', value: property.paymentPlan.split(' — ')[0] },
                  { label: 'Handover', value: property.handoverDate ?? 'TBC' },
                  { label: 'ROI Estimate', value: `${property.roiEstimate}% / year` },
                  { label: 'Golden Visa', value: property.goldenVisaEligible === true ? 'Eligible ✓' : property.goldenVisaEligible === 'check' ? 'Check with advisor' : 'Not applicable' },
                  ...(property.sqft ? [{ label: 'Size', value: property.sqft }] : []),
                  ...(property.beds ? [{ label: 'Bedrooms', value: property.beds } ] : []),
                ].map(d => (
                  <div key={d.label} className="bg-cream rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-0.5">{d.label}</p>
                    <p className="text-sm font-semibold text-navy">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment plan detail */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h2 className="font-semibold text-navy mb-3 flex items-center gap-2">
                <span>💳</span> Payment Plan
              </h2>
              <p className="text-gray-600 text-sm">{property.paymentPlan}</p>
            </div>

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="font-semibold text-navy mb-4 flex items-center gap-2">
                  <span>⭐</span> Amenities
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold shrink-0">✓</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Price + CTA */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">

              {/* Currency selector */}
              <div className="flex gap-1 flex-wrap mb-4">
                {CURRENCIES.map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold transition ${currency === c ? 'bg-gold text-navy' : 'bg-cream text-gray-500 hover:bg-gray-100'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-400 mb-1">Starting From</p>
              <p className="font-display text-2xl font-bold text-navy mb-1">
                {formatPrice(property.startingPrice, currency)}
              </p>
              {currency !== 'AED' && (
                <p className="text-xs text-gray-400 mb-4">AED {property.startingPrice.toLocaleString()}</p>
              )}

              {/* Key stat pills */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                <div className="bg-cream rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400">ROI Est.</p>
                  <p className="font-bold text-navy text-sm">{property.roiEstimate}%</p>
                </div>
                <div className="bg-cream rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400">Handover</p>
                  <p className="font-bold text-navy text-sm">{property.handoverDate ?? 'TBC'}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(waText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-xl py-3 font-bold text-sm hover:bg-green-600 transition"
                >
                  💬 Enquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-navy text-white rounded-xl py-3 font-semibold text-sm hover:bg-navy/80 transition"
                >
                  📅 Book Free Consultation
                </Link>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi Shylesh, can you send me the brochure for ${property.projectName}?`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-600 rounded-xl py-3 text-sm hover:bg-cream transition"
                >
                  📄 Request Brochure via WhatsApp
                </a>
              </div>

              {/* Shylesh trust card */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                <img src="/shylesh.jpg" alt="Shylesh Raj" className="w-12 h-12 rounded-full object-cover object-top shrink-0" />
                <div>
                  <p className="font-semibold text-navy text-sm">Shylesh Raj NK</p>
                  <p className="text-xs text-gold">RERA #77789 · Dubai Property Consultant</p>
                  <a
                    href={`https://wa.me/${WA}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-gold transition"
                  >
                    +971 50 581 8509
                  </a>
                </div>
              </div>
            </div>

            {/* Back to properties */}
            <Link href="/properties" className="block text-center text-sm text-gray-400 hover:text-gold transition py-2">
              ← Back to all properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
