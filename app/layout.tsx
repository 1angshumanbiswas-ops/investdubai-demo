import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import AIAdvisor from '@/components/AIAdvisor'
import Footer from '@/components/Footer'
import StickyLeadBar from '@/components/StickyLeadBar'
import ExitIntentPopup from '@/components/ExitIntentPopup'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shylesh-dubai-demo.netlify.app'),
  title: {
    default: 'Invest in Dubai with Shylesh Raj | RERA-Certified Advisor',
    template: '%s | Invest in Dubai with Shylesh Raj',
  },
  description: 'RERA-certified Dubai property investment advisor with 25+ years UAE experience. Expert guidance on off-plan, ready, and secondary market properties. Golden Visa advisory. Serving NRI, HNI, and global investors.',
  keywords: ['Dubai property investment', 'RERA certified advisor Dubai', 'off-plan properties Dubai', 'Golden Visa Dubai', 'NRI property Dubai', 'Dubai real estate consultant', 'Shylesh Raj'],
  authors: [{ name: 'Shylesh Raj', url: 'https://www.investindubaiwithshylesh.com' }],
  creator: 'Shylesh Raj',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Invest in Dubai with Shylesh Raj',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Invest in Dubai with Shylesh Raj — RERA-Certified Property Advisor' }],
  },
  twitter: { card: 'summary_large_image', creator: '@shyleshraj' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: { google: 'your-google-verification-code' },
}

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://www.investindubaiwithshylesh.com/#business',
  name: 'Invest in Dubai with Shylesh Raj',
  description: 'RERA-certified Dubai property investment advisor with 25+ years UAE experience',
  url: 'https://www.investindubaiwithshylesh.com',
  telephone: '+971XXXXXXXXX',
  address: { '@type': 'PostalAddress', addressCountry: 'AE', addressRegion: 'Dubai' },
  areaServed: ['AE', 'IN', 'GB', 'US', 'CA', 'SG', 'AU', 'DE', 'FR'],
  knowsAbout: ['Dubai Real Estate', 'Off-Plan Properties', 'Golden Visa UAE', 'Property Investment'],
  hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'RERA Certification Dubai' },
  sameAs: ['https://www.instagram.com/shylesh_raj_nexuselite/', 'https://www.nexuseliteproperties.com/'],
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.investindubaiwithshylesh.com/#shylesh',
  name: 'Shylesh Raj',
  jobTitle: 'RERA-Certified Dubai Property Investment Advisor',
  description: 'Shylesh Raj is a RERA-certified Dubai property advisor with 25+ years of UAE market experience, specialising in off-plan, ready, and secondary market properties for global investors.',
  worksFor: { '@type': 'Organization', name: 'Nexus Elite Properties', url: 'https://www.nexuseliteproperties.com/' },
  url: 'https://www.investindubaiwithshylesh.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }} />
        {/* GA4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
      </head>
      <body className="pt-10">
        <StickyLeadBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIAdvisor />
        <ExitIntentPopup />
        {/* Sticky WhatsApp */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi Shylesh, I'm interested in Dubai property investment.`}
          target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform"
          aria-label="WhatsApp Shylesh"
        >
          💬
        </a>
      </body>
    </html>
  )
}
