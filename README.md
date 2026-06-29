# Invest in Dubai with Shylesh Raj — Full Codebase
## Prepared by Angshuman Biswas | June 2026

---

## What's in this codebase

```
investdubai/
├── app/
│   ├── layout.tsx                   # Root layout — schema markup, fonts, navbar, AI chat bubble
│   ├── page.tsx                     # Homepage — hero, trust bar, properties, testimonials
│   ├── api/
│   │   ├── advisor/route.ts         # Claude AI Advisor API (POST) — uses your Anthropic key
│   │   └── lead/route.ts            # Lead submission → GoHighLevel CRM webhook
│   ├── countries/[slug]/page.tsx    # Dynamic country pages (India, GCC, UK, etc.)
│   ├── investors/[slug]/page.tsx    # Dynamic investor persona pages (NRI, HNI, etc.)
│   ├── golden-visa/page.tsx         # Golden Visa advisory page with eligibility checker
│   ├── roi-calculator/page.tsx      # Dedicated ROI calculator page
│   └── contact/page.tsx             # Contact / booking page
├── components/
│   ├── AIAdvisor.tsx                # Floating AI chat widget — Claude-powered
│   ├── ROICalculator.tsx            # Full ROI calculator with currency conversion
│   ├── GoldenVisaChecker.tsx        # Rule-based eligibility checker
│   ├── LeadForm.tsx                 # Lead capture form → GHL CRM
│   └── Navbar.tsx                   # Sticky navigation
├── lib/
│   ├── sanity.ts                    # Sanity client + typed fetcher
│   ├── queries.ts                   # All GROQ queries
│   ├── types.ts                     # TypeScript types for all content
│   ├── roi.ts                       # ROI calculation logic + currency formatting
│   └── rateLimit.ts                 # IP-based rate limiter for API routes
├── sanity/schemas/
│   ├── index.ts                     # Schema registry
│   ├── property.ts                  # Property schema
│   ├── developer.ts                 # Developer schema
│   ├── countryPage.ts               # Country page schema
│   └── schemas.ts                   # Persona, blog, testimonial, community, case study
├── public/
│   ├── robots.txt                   # Allows all AI crawlers + Googlebot
│   └── llms.txt                     # AI context file (2025/2026 standard)
├── styles/globals.css               # Tailwind v4 + luxury theme variables
├── GHL_AUTOMATION_GUIDE.txt         # Step-by-step GoHighLevel setup
└── .env.local.example               # All environment variables needed
```

---

## SETUP INSTRUCTIONS (for a developer)

### 1. Prerequisites
- Node.js 20+
- A Sanity.io account (free at sanity.io)
- Your Anthropic API key
- A GoHighLevel account ($297/month)
- A Vercel account (free for hobby, $20/month Pro)
- A Cloudflare account (free)

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.local.example .env.local
```
Fill in all values in `.env.local`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from sanity.io/manage
- `SANITY_API_TOKEN` — from sanity.io/manage → API → Tokens
- `ANTHROPIC_API_KEY` — from console.anthropic.com (you already have this)
- `GHL_WEBHOOK_URL` — from GoHighLevel → Automation → Webhooks
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — Shylesh's WhatsApp with country code (e.g. 971501234567)
- `NEXT_PUBLIC_EXCHANGE_RATE_API_KEY` — free from exchangerate-api.com

### 4. Set up Sanity Studio
```bash
npx create-sanity@latest  # if not already done
```
Then add the schema files from `sanity/schemas/` to your Sanity project.

### 5. Run locally
```bash
npm run dev
```
Visit http://localhost:3000

### 6. Deploy to Vercel
```bash
# Connect repo to Vercel
vercel --prod
```
Or connect via the Vercel dashboard → Import GitHub repository.

### 7. Set environment variables in Vercel
Go to Vercel → Project → Settings → Environment Variables
Add all variables from .env.local

### 8. Point domain to Vercel
In Cloudflare → DNS:
- Add CNAME record: `www` → `cling.vercel-dns.com`
- Add CNAME record: `@` → `alias.vercel-dns.com`
- Enable Cloudflare proxy (orange cloud) for DDoS protection + SSL

### 9. Set up GoHighLevel
Follow the step-by-step guide in `GHL_AUTOMATION_GUIDE.txt`

---

## CONTENT TO ADD IN SANITY (Shylesh to provide)

Once the site is live, log in to your Sanity Studio and add:

1. **Properties** — at least 10 featured properties with:
   - Title, price, area, developer, images, ROI%, payment plan

2. **Developers** — Emaar, Damac, Sobha, Danube, Binghatti, Ellington, etc.

3. **Country Pages** — Start with India, GCC, UK. Content structure:
   - Hero headline, why Dubai points (4), investment process (7 steps), FAQs (8–10)
   - Example India page headline: "Why Indian Investors Choose Dubai Property in 2026"

4. **Testimonials** — minimum 6, with name, country, quote, rating, verified = true

5. **Blog Posts** — Start with these 4:
   - "Why Dubai Property in 2026 — The Complete Investment Case"
   - "Off-Plan vs Ready Property in Dubai — 2026 Comparison"
   - "Dubai Golden Visa Through Property — Step-by-Step Guide"
   - "Dubai Property for Indian Investors — Tax, ROI, Golden Visa"

6. **Investor Personas** — 8 personas (NRI, HNI, Business Owner, Doctor, IT, Golden Visa, Retired, First-Time)

---

## THINGS TO UPDATE WITH SHYLESH'S ACTUAL DATA

Search the codebase for these placeholders and replace:

- `+971XXXXXXXXX` → Shylesh's actual WhatsApp number
- `your-google-verification-code` → Google Search Console verification
- `G-XXXXXXXXXX` → Actual GA4 Measurement ID
- `your_sanity_project_id` → Sanity project ID
- RERA number and BRN number → add to about page and schema markup
- `/og-image.jpg` → Upload Shylesh's actual OG image (1200×630px)

---

## MONTHLY RUNNING COSTS (approximate)

| Service | Cost |
|---------|------|
| Vercel Pro | $20/month |
| Sanity Growth | $15/month |
| GoHighLevel Unlimited | $297/month |
| Anthropic API | ~$10–30/month |
| Cloudflare | Free |
| ExchangeRate API | Free |
| **TOTAL** | **~$342–362/month (≈ AED 1,260–1,330)** |

---

## PREPARED BY
Angshuman Biswas | June 2026 | Confidential
