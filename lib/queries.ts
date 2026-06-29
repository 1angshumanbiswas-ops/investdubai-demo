// ── All GROQ queries in one place ─────────────────────────────────────────────

export const COUNTRY_PAGE_QUERY = `
  *[_type == "countryPage" && slug.current == $slug][0] {
    countryName, slug, heroHeadline, heroSubheadline,
    whyDubaiPoints, investmentProcess, currencyNote, taxNote,
    goldenVisaAngle, bestCommunities[]->{ name, avgROI, avgYield, area },
    faqs, leadFormTitle, seoTitle, seoDescription,
    "lastUpdated": _updatedAt
  }
`

export const ALL_COUNTRY_SLUGS_QUERY = `
  *[_type == "countryPage"]{ "slug": slug.current }
`

export const PERSONA_PAGE_QUERY = `
  *[_type == "investorPersona" && slug.current == $slug][0] {
    personaType, slug, headline, description,
    recommendedProperties[]->{ title, price, area, roiPercent, images },
    faqs, seoTitle, seoDescription
  }
`

export const ALL_PERSONA_SLUGS_QUERY = `
  *[_type == "investorPersona"]{ "slug": slug.current }
`

export const FEATURED_PROPERTIES_QUERY = `
  *[_type == "property" && featured == true][0...6] {
    title, slug, price, currency, area, roiPercent, goldenVisaEligible,
    status, developer->{ name },
    "image": images[0]
  }
`

export const PROPERTY_QUERY = `
  *[_type == "property" && slug.current == $slug][0] {
    title, slug, price, currency, area, roiPercent,
    goldenVisaEligible, status, description,
    developer->{ name, logo },
    images, paymentPlan, handoverDate,
    "lastUpdated": _updatedAt
  }
`

export const ALL_PROPERTIES_QUERY = `
  *[_type == "property"] | order(_createdAt desc) {
    title, slug, price, currency, area, roiPercent,
    goldenVisaEligible, status, developer->{ name },
    "image": images[0]
  }
`

export const BLOG_POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    title, slug, publishDate, category, body,
    seoTitle, seoDescription, faqs,
    "lastUpdated": _updatedAt
  }
`

export const ALL_BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"]{ "slug": slug.current }
`

export const RECENT_BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishDate desc)[0...6] {
    title, slug, publishDate, category, excerpt
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && verified == true][0...8] {
    name, country, quote, rating, "photo": photo.asset->url
  }
`

export const DEVELOPERS_QUERY = `
  *[_type == "developer"] | order(name asc) {
    name, slug, description, "logo": logo.asset->url
  }
`

export const COMMUNITIES_QUERY = `
  *[_type == "community"] | order(avgROI desc) {
    name, slug, area, avgROI, avgYield, bestFor
  }
`
