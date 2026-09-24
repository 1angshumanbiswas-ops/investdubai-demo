// lib/news-data.ts
// Curated real-estate market news — sourced from official regulators and established outlets,
// selected for what would matter to a globally mobile HNI investor evaluating Dubai, Abu Dhabi,
// and Ras Al Khaimah. This file is intentionally separate from component code so it can be
// swapped without touching layout/markup.
//
// REFRESH PROCESS (recommended monthly, or whenever a major data release lands — DLD quarterly
// figures, ADREC half-year data, a Wynn Al Marjan milestone, a new Henley & Partners report):
//   1. Ask Claude to "refresh the Latest News section."
//   2. Claude re-runs a live web search against DLD, ADREC, Khaleej Times, The National, Gulf
//      News, Henley & Partners, and RAK sources, and returns an updated version of this file only.
//   3. Angshuman drops the file in, runs `npx tsc --noEmit -p tsconfig.json`, then the usual
//      git add / commit / push (separately, per project convention).
//
// Every item must be sourced from an official regulator or an established outlet and link out
// to the original story. Do not fabricate figures, sources, or dates. If a claim can't be traced
// to a real source found via search, it does not belong in this file.

export type NewsRegion = 'Dubai' | 'Abu Dhabi' | 'Ras Al Khaimah' | 'UAE'

export interface NewsItem {
  id: string
  title: string
  region: NewsRegion
  category: string
  excerpt: string
  source: string
  sourceUrl: string
  date: string // human-readable, e.g. 'Jul 18, 2026'
}

export const NEWS_LAST_CURATED = 'September 24, 2026'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'dubai-weekly-transactions-sep-2026',
    title: 'Dubai Real Estate Transactions Hit AED 10.67 Billion in a Single Week',
    region: 'Dubai',
    category: 'Market Data',
    excerpt:
      "Dubai Land Department figures for September 7-11, 2026 show AED 6.78B in sales across 2,931 deals, plus AED 2.80B in mortgages and AED 1.09B in gift transfers - a snapshot of the market's current weekly pace.",
    source: 'The Week (via DLD data)',
    sourceUrl:
      'https://www.theweek.in/news/middle-east/2026/09/12/dubai-real-estate-transactions-september.html',
    date: 'Sep 12, 2026',
  },
  {
    id: 'abu-dhabi-adrec-h1-2026',
    title: 'Abu Dhabi Residential Sales Value Nearly Triples to AED 70.4B in H1 2026',
    region: 'Abu Dhabi',
    category: 'Foreign Investment',
    excerpt:
      "ADREC's official H1 2026 report shows residential sales value up 178% year-on-year from AED 25.3B, with resident-expat and foreign buyers together accounting for 70% of that value and off-plan deals dominating at 89%.",
    source: 'ADREC (Abu Dhabi Real Estate Centre)',
    sourceUrl:
      'https://adrec.gov.ae/en/news/press-29---adrec-releases-the-abu-dhabi-real-estate-market-report-for-h1-2026',
    date: 'Aug 18, 2026',
  },
  {
    id: 'rak-q2-2026-cooling-wynn-autumn-2027',
    title: 'RAK Prices Ease in Q2 but Still Up 6.5% Year-on-Year as Wynn Targets Autumn 2027',
    region: 'Ras Al Khaimah',
    category: 'Destination Project',
    excerpt:
      "Apartment prices dipped 0.7% quarter-on-quarter as 13,800 new homes are delivered through 2028, even as year-on-year apartment prices stay up 6.5% and villa rents up 8% - with Wynn Al Marjan Island's opening now guided to autumn 2027, a shift from earlier spring guidance.",
    source: 'Khaleej Times',
    sourceUrl:
      'https://www.khaleejtimes.com/business/ras-al-khaimah-rents-rise-in-h1-2026-but-apartment-rates-drop-in-q2',
    date: 'Sep 2, 2026',
  },
  {
    id: 'uae-wide-h1-2026-multi-emirate-growth',
    title: 'All Five Emirates Post H1 2026 Real Estate Growth, Led by a Surge in Foreign Investment',
    region: 'UAE',
    category: 'National Trends',
    excerpt:
      "Abu Dhabi (+112% to AED 117B), Dubai (+52% on 104 major projects) and Sharjah (+9.3%) all posted first-half gains, with Abu Dhabi alone drawing AED 13.8B in foreign direct investment (+309%) from 116 nationalities - a broad-based national picture, not a one-emirate story.",
    source: 'Gulf Today',
    sourceUrl:
      'https://www.gulftoday.ae/business/2026/08/28/uae-real-estate-sector-records-strong-first-half-growth-driven-by-investment-demand',
    date: 'Aug 28, 2026',
  },
]
