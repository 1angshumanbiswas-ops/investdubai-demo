import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Invest in Dubai with Shylesh Raj',
  description: 'Privacy Policy for investindubaiwithshylesh.com — how we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-white text-3xl lg:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-white/60">Last updated: July 2026</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose-luxury">
          <h2>1. Who We Are</h2>
          <p>This website is operated by Shylesh Raj NK, Founder & CEO of Nexus Elite Properties LLC, Dubai (RERA Broker #77789). When we refer to "we", "us", or "our", we mean Nexus Elite Properties LLC and investindubaiwithshylesh.com.</p>

          <h2>2. Data We Collect</h2>
          <p>We collect the following personal data when you use our website:</p>
          <ul>
            <li>Full name and contact details (email address, WhatsApp number, phone number)</li>
            <li>Country of residence and nationality</li>
            <li>Investment budget range and purpose</li>
            <li>Property type preferences and Golden Visa interest</li>
            <li>Conversation data from our AI Property Advisor</li>
            <li>Website usage data via Google Analytics 4 (anonymised IP)</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>Your personal data is used to:</p>
          <ul>
            <li>Respond to consultation requests and provide property investment advisory services</li>
            <li>Send relevant Dubai property information via WhatsApp and email (with your consent)</li>
            <li>Score and qualify investment leads to provide faster, more relevant service</li>
            <li>Improve our website and AI advisor through anonymised analytics</li>
          </ul>

          <h2>4. WhatsApp Communications</h2>
          <p>By submitting a form on this website and ticking the WhatsApp consent checkbox, you agree to receive property information, updates, and follow-up communications via WhatsApp. You can opt out at any time by replying "STOP" to any WhatsApp message.</p>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data to third parties. We may share data with:</p>
          <ul>
            <li>GoHighLevel (CRM platform) — for lead management and communication automation</li>
            <li>Anthropic (Claude API) — AI conversations are processed through Anthropic's API under their data processing agreement</li>
            <li>Google Analytics — anonymised website usage data only</li>
          </ul>

          <h2>6. GDPR Rights (UK and EU Visitors)</h2>
          <p>If you are based in the UK or European Union, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>To exercise any of these rights, please contact us at the address below.</p>

          <h2>7. Data Retention</h2>
          <p>We retain personal data for up to 24 months from the date of last contact. Lead data in our CRM is deleted upon request or after 24 months of inactivity.</p>

          <h2>8. Cookies</h2>
          <p>We use essential cookies for website functionality and analytics cookies (Google Analytics 4) to understand how visitors use our website. Analytics cookies are only activated with your consent via our cookie banner.</p>

          <h2>9. Contact Us</h2>
          <p>For any privacy-related queries, data access requests, or complaints:</p>
          <p>Shylesh Raj NK — Nexus Elite Properties LLC<br />
          Email: shylesh@investindubaiwithshylesh.com<br />
          WhatsApp: +{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}<br />
          Dubai, United Arab Emirates</p>
        </div>
      </section>
    </div>
  )
}
