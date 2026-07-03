import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Invest in Dubai with Shylesh Raj',
  description: 'Terms of Use for investindubaiwithshylesh.com',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-2">Terms of Use</h1>
          <p className="text-white/60">Last updated: July 2026</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose-luxury">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using investindubaiwithshylesh.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

          <h2>2. Information Only — Not Financial Advice</h2>
          <p>The content on this website — including property listings, ROI calculations, rental yield estimates, Golden Visa information, and market analysis — is provided for general information purposes only. It does not constitute financial, legal, or investment advice. Always consult a qualified financial advisor and conduct your own due diligence before making any investment decision.</p>

          <h2>3. AI Property Advisor</h2>
          <p>The AI Property Advisor on this website is powered by Anthropic's Claude API. Conversations are designed to help qualify your investment goals and connect you with Shylesh Raj for a personalised consultation. The AI Advisor does not provide legally binding advice. Always confirm any information with Shylesh or a qualified professional before taking action.</p>

          <h2>4. ROI Calculator</h2>
          <p>The ROI Calculator provides estimated projections based on inputs you provide. These are illustrative only and do not guarantee future returns. Property values, rental yields, and currency exchange rates are subject to market fluctuations.</p>

          <h2>5. Golden Visa Information</h2>
          <p>Golden Visa eligibility information is provided as general guidance based on current UAE policy (as of July 2026). Policy may change. Always verify with the Dubai Land Department (DLD) or a licensed immigration consultant before making investment decisions based on Golden Visa eligibility.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content on this website — including text, images, logos, and AI-generated content — is the property of Nexus Elite Properties LLC. You may not reproduce, distribute, or use any content without prior written permission.</p>

          <h2>7. Third-Party Links</h2>
          <p>This website may contain links to third-party websites (developer websites, DLD, etc.). We are not responsible for the content or privacy practices of those websites.</p>

          <h2>8. Limitation of Liability</h2>
          <p>Nexus Elite Properties LLC and Shylesh Raj NK shall not be liable for any loss or damage arising from reliance on information provided on this website. All property transactions are subject to Dubai Land Department regulations and the terms of individual purchase agreements.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai.</p>

          <h2>10. Contact</h2>
          <p>For any questions regarding these Terms:<br />
          Email: shylesh@investindubaiwithshylesh.com<br />
          Nexus Elite Properties LLC, Dubai, UAE</p>
        </div>
      </section>
    </div>
  )
}
