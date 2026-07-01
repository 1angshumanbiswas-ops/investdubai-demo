// -- Sanity image reference -----------------------------------------------------
export interface SanityImage {
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

// -- Property -------------------------------------------------------------------
export interface Property {
  title: string
  slug: { current: string }
  price: number
  currency: string
  area: string
  roiPercent: number
  goldenVisaEligible: boolean
  status: 'off-plan' | 'ready' | 'secondary'
  description?: string
  developer?: { name: string; logo?: string }
  images: SanityImage[]
  paymentPlan?: string
  handoverDate?: string
  lastUpdated?: string
}

// -- Country page ---------------------------------------------------------------
export interface CountryPage {
  countryName: string
  slug: { current: string }
  heroHeadline: string
  heroSubheadline: string
  whyDubaiPoints: string[]
  investmentProcess: string[]
  currencyNote: string
  taxNote: string
  goldenVisaAngle: string
  bestCommunities: { name: string; avgROI: number; avgYield: number; area: string }[]
  faqs: { question: string; answer: string }[]
  leadFormTitle: string
  seoTitle: string
  seoDescription: string
  lastUpdated: string
}

// -- Investor persona -----------------------------------------------------------
export interface InvestorPersona {
  personaType: string
  slug: { current: string }
  headline: string
  description: string
  recommendedProperties: Property[]
  faqs: { question: string; answer: string }[]
  seoTitle: string
  seoDescription: string
}

// -- Blog post ------------------------------------------------------------------
export interface BlogPost {
  title: string
  slug: { current: string }
  publishDate: string
  category: string
  excerpt?: string
  body?: unknown[]
  faqs?: { question: string; answer: string }[]
  seoTitle?: string
  seoDescription?: string
  lastUpdated: string
}

// -- Testimonial ----------------------------------------------------------------
export interface Testimonial {
  name: string
  country: string
  quote: string
  rating: number
  photo?: string
}

// -- AI Advisor -----------------------------------------------------------------
export interface Message {
  role: 'user' | 'assistant'
  content: string
}

export interface LeadData {
  name: string
  whatsapp: string
  country: string
  budget: string
  email?: string
}

// -- ROI Calculator -------------------------------------------------------------
export interface ROIInputs {
  propertyPrice: number
  annualRent: number
  serviceCharge: number
  maintenancePct: number
  appreciationPct: number
  holdingYears: number
  currency: string
}

export interface ROIOutputs {
  grossYield: number
  netYield: number
  totalROI: number
  capitalAppreciation: number
  exitValue: number
  totalRentIncome: number
  goldenVisaEligible: boolean
}
