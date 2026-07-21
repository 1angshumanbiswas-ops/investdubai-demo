const STORIES = [
  {
    chips: ['Bayz 102 · Business Bay', '2BR Purchase', 'Golden Visa', 'Overseas Buyer · USA'],
    images: [
      { src: '/images/testimonials/bayz102-tower-dusk.jpg', cap: 'Bayz 102 rising over Business Bay' },
      { src: '/images/testimonials/bayz102-aerial-skyline.jpg', cap: 'Minutes to Burj Khalifa & Dubai Mall' },
    ],
    quote: "As a buyer from the USA, I needed someone I could trust for clear, end-to-end support. Shylesh shortlisted options that fit my budget, guided me to the right 2BR at Bayz 102, and handled every step with excellent communication. He also made the Golden Visa process easy to understand and start. I strongly recommend working with him.",
    author: 'Mr. Chakradhar Ravikumar',
    role: '2BR Buyer · New York, USA',
  },
  {
    chips: ['Belgravia Garden · Ellington', '2BR Purchase · AED 2.2M', 'Golden Visa', 'Overseas Buyers · Portugal & India'],
    images: [
      { src: '/images/testimonials/belgravia-garden-pool.jpg', cap: 'Belgravia Garden resort-style pool deck' },
      { src: '/images/testimonials/belgravia-garden-aerial.jpg', cap: 'Ellington Properties, master-planned community' },
    ],
    quote: 'Working with Shylesh Raj was an exceptional experience. He made the entire process seamless with his clear communication, prompt responses, and expert guidance from the first viewing to final booking. Thanks to his professionalism and market expertise, we successfully purchased a beautiful 2-bedroom apartment at Belgravia Garden by Ellington Properties (AED 2.2 million) — perfectly within our budget and without compromising on layout, quality, or location. This investment also enabled our family to secure the 10-year Golden Visa, making the experience even more rewarding.',
    author: 'Ms. Avena (Portugal) & Mr. Alston (India)',
    role: '2BR Buyers · Belgravia Garden',
  },
  {
    chips: ['Oasiz by Danube · Silicon Oasis', '1-BHK Purchase', 'Purchased for Son', 'Overseas Buyer · India'],
    images: [
      { src: '/images/testimonials/oasiz2-tower-night.jpg', cap: 'Oasiz 2 by Danube, Dubai Silicon Oasis' },
      { src: '/images/properties/oasiz-skylounge-night.jpg', cap: 'Rooftop sky lounge with Burj Khalifa views' },
    ],
    quote: "I purchased a beautiful 1-BHK apartment for my son at Oasiz 2 by Danube Properties in Dubai Silicon Oasis. From the very first interaction, we felt completely informed and supported. Every step was transparent, professional, and handled on time. I'm truly impressed with Mr. Shylesh Raj's expertise and the way Nexus Elite Properties made the entire buying process effortless. I would happily recommend them to anyone looking for a smooth and stress-free property purchase experience in Dubai.",
    author: 'Dhiren Mahanta',
    role: 'Guwahati, Assam · Purchased 1-BHK for His Son',
  },
]

export default function SuccessStories() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold mb-2 uppercase tracking-widest">Real Deals, Real Investors</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">Success Stories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Global investors who trusted Shylesh with their Dubai purchase — from first viewing to Golden Visa.</p>
        </div>

        <div className="space-y-10">
          {STORIES.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Deal chips */}
              <div className="flex flex-wrap justify-center gap-2 pt-6 px-6">
                {s.chips.map(c => (
                  <span key={c} className="text-xs font-semibold uppercase tracking-wide text-navy bg-gold/10 border border-gold/30 rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>

              {/* Property image duo */}
              <div className="grid sm:grid-cols-2 gap-4 p-6">
                {s.images.map(img => (
                  <div key={img.src} className="relative rounded-2xl overflow-hidden border-2 border-gold/60 aspect-[16/10] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.cap} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/85 to-transparent p-3">
                      <p className="text-white text-xs font-medium">{img.cap}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote panel */}
              <div className="mx-6 mb-6 rounded-2xl bg-navy p-8 lg:p-10 text-center">
                <div className="text-gold text-4xl leading-none mb-2">&ldquo;</div>
                <div className="text-gold text-sm mb-4">★★★★★</div>
                <blockquote className="font-display italic text-white/95 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  {s.quote}
                </blockquote>
                <p className="font-display text-gold-light text-lg font-bold">{s.author}</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
