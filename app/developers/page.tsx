'use client'

import { useState } from 'react'

interface Project {
  name: string
  tagline: string
  status: 'Off-Plan' | 'Ready' | 'Secondary Market'
}

interface Developer {
  id: string
  name: string
  tier: 'Tier 1' | 'Tier 2' | 'Boutique'
  description: string
  projects: Project[]
  specialty: string
  established: string
  highlight: string
}

const DEVELOPERS: Developer[] = [
  {
    id: 'emaar',
    name: 'Emaar',
    tier: 'Tier 1',
    description: 'Dubai\'s most trusted master developer. Builders of Downtown Dubai, Dubai Marina, and the Burj Khalifa. Emaar properties consistently deliver strong capital appreciation and are first choice for Golden Visa investors.',
    projects: [
      { name: 'Mareva 2 – The Oasis', tagline: 'Premium villas in a serene, water-lined master community', status: 'Off-Plan' },
    ],
    specialty: 'Master communities, luxury villas, iconic towers',
    established: '1997',
    highlight: 'Burj Khalifa developer — Dubai\'s most recognised brand',
  },
  {
    id: 'binghatti',
    name: 'Binghatti',
    tier: 'Tier 1',
    description: 'Known for architectural innovation and strong ROI. Binghatti projects in Dubai Science Park and Business Bay consistently yield 8–10% rental returns. Their Mercedes-Benz collaboration is one of Dubai\'s most distinctive ultra-luxury offerings.',
    projects: [
      { name: 'Binghatti Sky Terraces', tagline: 'Spacious layouts with expansive terrace concepts and premium living', status: 'Off-Plan' },
      { name: 'Mercedes-Benz Binghatti City', tagline: 'Iconic branded residences combining automotive excellence with ultra-luxury real estate', status: 'Off-Plan' },
    ],
    specialty: 'High-yield investments, branded residences, bold architecture',
    established: '2008',
    highlight: 'World\'s first Mercedes-Benz branded residential tower',
  },
  {
    id: 'sobha',
    name: 'Sobha Realty',
    tier: 'Tier 1',
    description: 'Indian-origin developer renowned for premium build quality and attention to detail. Sobha properties in Dubai Hills are consistently among the most sought-after for NRI investors seeking quality and capital appreciation.',
    projects: [
      { name: 'Sobha Central', tagline: 'Premium high-rise living with world-class amenities and city connectivity', status: 'Off-Plan' },
    ],
    specialty: 'Premium build quality, NRI-favoured, Dubai Hills Estate',
    established: '1976',
    highlight: 'Backward-integrated developer — controls every aspect of construction',
  },
  {
    id: 'danube',
    name: 'Danube Properties',
    tier: 'Tier 1',
    description: 'Dubai\'s most investor-friendly developer known for flexible 1%-per-month payment plans that make property ownership accessible to first-time buyers. Ideal for investors seeking high rental yields at lower entry prices.',
    projects: [
      { name: 'Serenz by Danube', tagline: 'Value-driven living with modern amenities, smart layouts, and strong investment potential', status: 'Off-Plan' },
    ],
    specialty: '1% monthly payment plans, high yield, budget-friendly entry',
    established: '2014',
    highlight: '1% per month payment plan — lowest barriers in Dubai',
  },
  {
    id: 'ellington',
    name: 'Ellington Properties',
    tier: 'Tier 2',
    description: 'Dubai\'s premier design-focused developer. Every Ellington project is known for curated interiors, sophisticated finishes, and thoughtful architecture. Highly favoured by European and Western investors seeking aesthetic value.',
    projects: [
      { name: 'Windsor House', tagline: 'Design-focused living with high-quality interiors, attention to detail, and sophisticated environments', status: 'Off-Plan' },
    ],
    specialty: 'Design-led, boutique communities, luxury interiors',
    established: '2014',
    highlight: 'Consistently rated Dubai\'s best interiors developer',
  },
  {
    id: 'imtiaz',
    name: 'Imtiaz Developments',
    tier: 'Tier 2',
    description: 'A fast-growing developer building a strong reputation for quality residential communities across Dubai. Imtiaz projects span beachfront, inland, and urban settings — offering diverse options across budget ranges.',
    projects: [
      { name: 'Beach Walk Residence 4', tagline: 'Stylish beachfront living with a focus on comfort, design, and accessibility', status: 'Off-Plan' },
      { name: 'Pearl House 4', tagline: 'Clean design aesthetics, efficient layouts, and practical luxury', status: 'Off-Plan' },
      { name: 'Cove Grand', tagline: 'Enhanced living spaces with a focus on comfort, scale, and modern lifestyle needs', status: 'Off-Plan' },
      { name: 'Wynwood Horizon', tagline: 'Modern living with strong visual appeal and future growth potential', status: 'Off-Plan' },
    ],
    specialty: 'Beachfront, diverse communities, value-focused quality',
    established: '2019',
    highlight: '4 active projects across key Dubai locations',
  },
]

const CHANNEL_PARTNERS = [
  'Damac', 'Nakheel', 'Deyaar', 'Tiger Group', 'Omniyat', 'Confident Group',
  'Azizi', 'Dubai South', 'Mira Developments', 'BNW Developments', 'Oro24',
  'Arada', 'Aldar', 'Samana Developers', 'Wasl Properties', 'Meraas',
  'Reportage Properties', 'Select Group', 'Beyond', 'Darglobal',
]

const TIER_COLORS = {
  'Tier 1': 'bg-amber-100 text-amber-800',
  'Tier 2': 'bg-blue-100 text-blue-800',
  'Boutique': 'bg-purple-100 text-purple-800',
}

const STATUS_COLORS = {
  'Off-Plan': 'bg-blue-50 text-blue-700',
  'Ready': 'bg-green-50 text-green-700',
  'Secondary Market': 'bg-amber-50 text-amber-700',
}

function DeveloperCard({ dev }: { dev: Developer }) {
  const [expanded, setExpanded] = useState(false)

  const waText = `Hi Shylesh, I'm interested in properties by ${dev.name}. Can you share the latest available inventory and pricing?`

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-6 py-5 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-display text-xl font-bold">{dev.name}</h3>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TIER_COLORS[dev.tier]}`}>{dev.tier}</span>
          </div>
          <p className="text-gold text-sm font-medium">{dev.specialty}</p>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-xs">Est.</p>
          <p className="text-white font-bold text-lg">{dev.established}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Highlight badge */}
        <div className="flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-lg px-3 py-2 mb-4">
          <span className="text-gold text-sm">⭐</span>
          <p className="text-navy text-sm font-medium">{dev.highlight}</p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {expanded ? dev.description : dev.description.slice(0, 120) + (dev.description.length > 120 ? '...' : '')}
          {dev.description.length > 120 && (
            <button onClick={() => setExpanded(!expanded)} className="text-navy font-semibold ml-1 text-sm hover:underline">
              {expanded ? 'Less' : 'More'}
            </button>
          )}
        </p>

        {/* Projects */}
        <div className="mb-5">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Active Projects via Nexus Elite</p>
          <div className="space-y-2">
            {dev.projects.map(p => (
              <div key={p.name} className="bg-cream rounded-lg px-3 py-2.5 flex items-start justify-between gap-2">
                <div>
                  <p className="text-navy font-semibold text-sm">{p.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{p.tagline}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${STATUS_COLORS[p.status]}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/971505818509?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-green-600 transition"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          Request {dev.name} Inventory
        </a>
      </div>
    </div>
  )
}

export default function DevelopersPage() {
  const [filter, setFilter] = useState<'All' | 'Tier 1' | 'Tier 2'>('All')

  const filtered = DEVELOPERS.filter(d => filter === 'All' || d.tier === filter)

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Developer Partners</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-bold mb-4">
            30+ Developer Partnerships
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Shylesh is a registered channel partner with Dubai&apos;s top developers — giving investors direct access to inventory, pre-launch pricing, and off-market units before they hit the public market.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-gold/10 border-b border-gold/20 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm text-navy">
          <span className="flex items-center gap-1.5">✅ RERA-registered channel partner</span>
          <span className="flex items-center gap-1.5">✅ Zero brokerage fees for buyers</span>
          <span className="flex items-center gap-1.5">✅ Pre-launch & off-market access</span>
          <span className="flex items-center gap-1.5">✅ Direct developer pricing</span>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-3 flex gap-2">
        {(['All', 'Tier 1', 'Tier 2'] as const).map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${filter === t ? 'bg-navy text-white border-navy' : 'bg-white text-gray-600 border-gray-200 hover:border-navy'}`}
          >
            {t}
          </button>
        ))}
        <p className="ml-auto text-sm text-gray-400 self-center">
          Showing {filtered.length} featured partners
        </p>
      </div>

      {/* Developer Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(dev => <DeveloperCard key={dev.id} dev={dev} />)}
        </div>
      </section>

      {/* Channel Partners Grid */}
      <section className="bg-white border-t border-gray-100 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Additional Channel Partners</p>
          <h2 className="font-display text-navy text-3xl font-bold mb-2">20+ More Developer Partnerships</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            Beyond the featured projects above, Shylesh holds active channel partner registrations with these developers — giving you access to their full inventory on request.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CHANNEL_PARTNERS.map(p => (
              <span key={p} className="bg-cream border border-gray-200 text-navy text-sm font-medium px-4 py-2 rounded-full">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://wa.me/971505818509?text=Hi%20Shylesh%2C%20I%20want%20to%20explore%20properties%20from%20your%20developer%20network.%20Can%20you%20send%20me%20a%20curated%20shortlist?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy/90 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Request a Developer Shortlist from Shylesh
            </a>
          </div>
        </div>
      </section>

      {/* Real testimonial strip */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-8 text-center">Client Success Stories</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Shylesh shortlisted options that fit my budget, guided me to the right 2BR at Bayz102, and handled every step. He also made the Golden Visa process easy to understand and start.', name: 'Chakradhar Ravikumar', location: 'New York, USA' },
              { quote: 'We purchased a beautiful 2-bedroom apartment at Belgravia Garden by Ellington (AED 2.2M) — perfectly within our budget. This investment also enabled our family to secure the 10-year Golden Visa.', name: 'Avena & Alston', location: 'Portugal & India' },
              { quote: 'I purchased a 1-BHK at Oasiz2 by Danube in Dubai Silicon Oasis. Every step was transparent, professional, and handled on time. I would happily recommend them to anyone.', name: 'Dhiren Mahanta', location: 'Guwahati, Assam' },
            ].map(t => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gold text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
