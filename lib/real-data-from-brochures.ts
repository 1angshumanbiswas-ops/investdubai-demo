// ============================================================
// REAL DATA EXTRACTED FROM NEXUS ELITE BROCHURES — July 2026
// Use this to update Sanity CMS and the properties/testimonials pages
// ============================================================

// ---- REAL TESTIMONIALS (verbatim from brochures) ----
export const REAL_TESTIMONIALS = [
  {
    name: 'Chakradhar Ravikumar',
    location: 'New York, USA',
    country: 'USA',
    rating: 5,
    quote: 'As a buyer from the USA, I needed someone I could trust for clear, end-to-end support. Shylesh shortlisted options that fit my budget, guided me to the right 2BR at Bayz102, and handled every step with excellent communication. He also made the Golden Visa process easy to understand and start. I strongly recommend working with him.',
    propertyPurchased: '2BR at Bayz102, Dubai',
    goldenVisaAchieved: true,
  },
  {
    name: 'Ms. Avena & Mr. Alston',
    location: 'Portugal & India',
    country: 'India',
    rating: 5,
    quote: 'Working with Shylesh Raj was an exceptional experience. He made the entire process seamless with his clear communication, prompt responses, and expert guidance from the first viewing to final booking. Thanks to his professionalism and market expertise, we successfully purchased a beautiful 2-bedroom apartment at Belgravia Garden by Ellington Properties (AED 2.2 million) — perfectly within our budget and without compromising on layout, quality, or location. This investment also enabled our family to secure the 10-year Golden Visa, making the experience even more rewarding.',
    propertyPurchased: '2BR at Belgravia Garden by Ellington, AED 2.2M',
    goldenVisaAchieved: true,
  },
  {
    name: 'Dhiren Mahanta',
    location: 'Guwahati, Assam',
    country: 'India',
    rating: 5,
    quote: 'I purchased a beautiful 1-BHK apartment for my son at Oasiz2 by Danube Properties in Dubai Silicon Oasis. From the very first interaction, we felt completely informed and supported. Every step was transparent, professional, and handled on time. I\'m truly impressed with Mr. Shylesh Raj\'s expertise and the way Nexus Elite Properties made the entire buying process effortless. I would happily recommend them to anyone looking for a smooth and stress-free property purchase experience in Dubai.',
    propertyPurchased: '1BHK at Oasiz2 by Danube, Dubai Silicon Oasis',
    goldenVisaAchieved: false,
  },
]

// ---- REAL CONTACT DETAILS ----
export const CONTACT = {
  whatsapp: '+971505818509',
  whatsappDisplay: '+971 50 581 8509',
  phone2: '+971 56 158 0683',
  phone3: '+91 9072 984534',
  email: 'shylesh@nexuseliteproperties.com',
  address: '1st Floor, Madina Mall-Al Qusais, Muhaisnah 4, Dubai',
  reraNumber: '77789',
  websites: [
    'www.investindubaiwithshylesh.com',
    'www.profile.investindubaiwithshylesh.com',
    'www.emaarpropertyadvisors.com',
    'www.nexuseliteproperties.com',
  ],
}

// ---- REAL DEVELOPER PROJECTS ----
export const REAL_PROJECTS = [
  {
    developer: 'Emaar',
    projectName: 'Mareva 2 – The Oasis',
    type: 'Villa / Townhouse',
    status: 'Off-Plan',
    tagline: 'Premium community development in a serene, upscale master-planned environment with water features',
    goldenVisaEligible: true,
  },
  {
    developer: 'Binghatti',
    projectName: 'Binghatti Sky Terraces',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Architectural highlight with spacious layouts and expansive terrace concepts for premium living',
    goldenVisaEligible: false,
  },
  {
    developer: 'Binghatti',
    projectName: 'Mercedes-Benz Binghatti City',
    type: 'Ultra-Luxury Apartment',
    status: 'Off-Plan',
    tagline: 'Iconic branded development combining automotive excellence with ultra-luxury real estate',
    goldenVisaEligible: true,
  },
  {
    developer: 'Danube Properties',
    projectName: 'Serenz by Danube',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Value-driven residential with modern amenities, smart layouts, and strong investment potential',
    goldenVisaEligible: false,
  },
  {
    developer: 'Sobha Realty',
    projectName: 'Sobha Central',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Premium high-rise living in a connected location with Sobha\'s signature build quality',
    goldenVisaEligible: true,
  },
  {
    developer: 'Ellington Properties',
    projectName: 'Windsor House',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Design-focused development known for high-quality interiors and sophisticated living environments',
    goldenVisaEligible: true,
  },
  {
    developer: 'Imtiaz Developments',
    projectName: 'Beach Walk Residence 4',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Contemporary beachfront living offering stylish spaces with comfort, design, and accessibility',
    goldenVisaEligible: false,
  },
  {
    developer: 'Imtiaz Developments',
    projectName: 'Pearl House 4',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Clean design aesthetics, efficient layouts, and practical luxury for discerning investors',
    goldenVisaEligible: false,
  },
  {
    developer: 'Imtiaz Developments',
    projectName: 'Cove Grand',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Larger-scale residential concept with enhanced living spaces and modern lifestyle focus',
    goldenVisaEligible: false,
  },
  {
    developer: 'Imtiaz Developments',
    projectName: 'Wynwood Horizon',
    type: 'Apartment',
    status: 'Off-Plan',
    tagline: 'Forward-looking development with strong visual appeal and future growth potential',
    goldenVisaEligible: false,
  },
]

// ---- ALL CHANNEL PARTNERS ----
export const ALL_CHANNEL_PARTNERS = [
  'Emaar', 'Damac', 'Sobha Realty', 'Danube Properties', 'Nakheel', 'Deyaar',
  'Tiger Group', 'Binghatti', 'Omniyat', 'Confident Group', 'Azizi',
  'Dubai South', 'Mira Developments', 'Ellington Properties', 'BNW Developments',
  'Oro24', 'Arada', 'Aldar', 'Samana Developers', 'Wasl Properties',
  'Meraas', 'Reportage Properties', 'Select Group', 'Beyond', 'Darglobal',
  'Imtiaz Developments',
]

// ---- SANITY CMS UPDATE INSTRUCTIONS ----
// When Shylesh's data collection sheet arrives, enter into Sanity Studio:
// 1. Testimonials → add above 3 testimonials (real names confirmed)
// 2. Developers → add all 6 featured developers with project names above
// 3. Properties → replace placeholder 6 properties with real ones above
// 4. Contact → update email, phone, RERA number in siteSettings document
