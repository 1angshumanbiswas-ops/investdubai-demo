import { defineField, defineType } from 'sanity'

// ── Investor Persona ───────────────────────────────────────────────────────────
export const investorPersona = defineType({
  name: 'investorPersona',
  title: 'Investor Persona',
  type: 'document',
  fields: [
    defineField({ name: 'personaType', type: 'string', title: 'Persona Type (e.g. NRI, HNI, Doctor)', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'personaType' }, validation: r => r.required() }),
    defineField({ name: 'headline', type: 'string', title: 'Page Headline', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 4 }),
    defineField({ name: 'recommendedProperties', type: 'array', title: 'Recommended Properties', of: [{ type: 'reference', to: [{ type: 'property' }] }] }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQs', of: [{ type: 'object', fields: [
      defineField({ name: 'question', type: 'string', title: 'Question' }),
      defineField({ name: 'answer', type: 'text', title: 'Answer', rows: 3 }),
    ]}] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: { select: { title: 'personaType', subtitle: 'headline' } },
})

// ── Blog Post ──────────────────────────────────────────────────────────────────
export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'publishDate', type: 'date', title: 'Publish Date', validation: r => r.required() }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt (for listing cards)', rows: 2 }),
    defineField({ name: 'category', type: 'string', title: 'Category',
      options: { list: ['Investment Guide', 'Golden Visa', 'Country Guide', 'Developer Guide', 'Community Guide', 'Market Analysis'] } }),
    defineField({ name: 'body', type: 'array', title: 'Body', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
      { type: 'object', name: 'dataTable', title: 'Data Table', fields: [
        defineField({ name: 'caption', type: 'string', title: 'Caption' }),
        defineField({ name: 'rows', type: 'array', title: 'Rows', of: [{ type: 'object', fields: [
          defineField({ name: 'cells', type: 'array', title: 'Cells', of: [{ type: 'string' }] }),
        ]}] }),
      ]},
    ] }),
    defineField({ name: 'faqs', type: 'array', title: 'FAQ Section (for schema markup)', of: [{ type: 'object', fields: [
      defineField({ name: 'question', type: 'string', title: 'Question' }),
      defineField({ name: 'answer', type: 'text', title: 'Answer', rows: 3 }),
    ]}] }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishDate' } },
})

// ── Testimonial ────────────────────────────────────────────────────────────────
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Investor Name', validation: r => r.required() }),
    defineField({ name: 'country', type: 'string', title: 'Country', validation: r => r.required() }),
    defineField({ name: 'quote', type: 'text', title: 'Quote', rows: 3, validation: r => r.required() }),
    defineField({ name: 'rating', type: 'number', title: 'Rating (1-5)', validation: r => r.required().min(1).max(5) }),
    defineField({ name: 'photo', type: 'image', title: 'Photo (optional)' }),
    defineField({ name: 'verified', type: 'boolean', title: 'Verified / Approved to show', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'country' } },
})

// ── Community ──────────────────────────────────────────────────────────────────
export const community = defineType({
  name: 'community',
  title: 'Community',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Community Name', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'area', type: 'string', title: 'Dubai Area' }),
    defineField({ name: 'areaOverview', type: 'text', title: 'Area Overview', rows: 3 }),
    defineField({ name: 'avgROI', type: 'number', title: 'Average ROI %' }),
    defineField({ name: 'avgYield', type: 'number', title: 'Average Rental Yield %' }),
    defineField({ name: 'bestFor', type: 'array', title: 'Best For', of: [{ type: 'string' }] }),
    defineField({ name: 'image', type: 'image', title: 'Community Image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'name', subtitle: 'area', media: 'image' } },
})

// ── Case Study ─────────────────────────────────────────────────────────────────
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', validation: r => r.required() }),
    defineField({ name: 'investorBackground', type: 'text', title: 'Investor Background (anonymised)', rows: 2 }),
    defineField({ name: 'country', type: 'string', title: 'Investor Country' }),
    defineField({ name: 'budget', type: 'string', title: 'Budget' }),
    defineField({ name: 'propertyType', type: 'string', title: 'Property Type' }),
    defineField({ name: 'communitiesSuggested', type: 'array', title: 'Communities Suggested', of: [{ type: 'string' }] }),
    defineField({ name: 'expectedROI', type: 'string', title: 'Expected ROI' }),
    defineField({ name: 'goldenVisaRelevance', type: 'text', title: 'Golden Visa Relevance', rows: 2 }),
    defineField({ name: 'outcome', type: 'text', title: 'Outcome', rows: 3 }),
  ],
  preview: { select: { title: 'title', subtitle: 'country' } },
})
