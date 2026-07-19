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

export const NEWS_LAST_CURATED = 'July 19, 2026'

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'dubai-h1-2026-record',
    title: 'Dubai Property Market Closes H1 2026 at AED 286.4B — Second-Highest Half-Year on Record',
    region: 'Dubai',
    category: 'Market Data',
    excerpt:
      "Dubai Land Department figures confirm 86,005 transactions across the first half of 2026 — trailing only 2024's record pace even as deal volume cools.",
    source: 'Dubai Media Office / DLD',
    sourceUrl:
      'https://www.arabianbusiness.com/real-estate/dubai-property-boom-shows-no-sign-of-slowing-as-sector-hits-7-1bn-in-q1',
    date: 'Jul 8, 2026',
  },
  {
    id: 'abu-dhabi-h1-2026-fdi',
    title: 'Abu Dhabi Real Estate Transactions Surge 112% to AED 117B, Foreign Investment Up 309%',
    region: 'Abu Dhabi',
    category: 'Foreign Investment',
    excerpt:
      'ADREC data shows non-resident investors from 116 nationalities — up from 82 a year earlier — drove record foreign direct investment into the capital\u2019s property market.',
    source: 'The National',
    sourceUrl:
      'https://www.thenationalnews.com/business/property/2026/07/18/abu-dhabi-property-transactions-surge-112-despite-war-to-hit-dh117-billion-in-first-half-of-2026/',
    date: 'Jul 18, 2026',
  },
  {
    id: 'rak-wynn-al-marjan',
    title: 'Wynn Al Marjan Island Advances Toward Spring 2027 Opening, Fuelling RAK Price Surge',
    region: 'Ras Al Khaimah',
    category: 'Destination Project',
    excerpt:
      "The UAE's first integrated resort — a $5.1B project — has driven Al Marjan Island villa and apartment prices up 20\u201340%+ year-on-year ahead of its 2027 debut.",
    source: 'Khaleej Times',
    sourceUrl:
      'https://www.khaleejtimes.com/business/ras-al-khaimah-real-estate-witnessing-strong-progress-as-wynn-rapidly-moves-towards-completion',
    date: 'Jul 2026',
  },
  {
    id: 'henley-uae-millionaire-migration-2026',
    title: "UAE Ranked World's #1 Millionaire Migration Destination — Again",
    region: 'UAE',
    category: 'Global Wealth Trends',
    excerpt:
      "Henley & Partners' 2026 report projects Dubai alone will add over 7,000 new millionaires and $7B in fresh capital this year, reinforcing the UAE's pull for globally mobile HNWIs.",
    source: 'Henley & Partners',
    sourceUrl: 'https://www.henleyglobal.com/newsroom/press-releases/henley-private-wealth-migration-report-2026',
    date: 'Jun 16, 2026',
  },
]
