import { defineField, defineType } from 'sanity'

const faqField = defineField({
  name: 'faqs', type: 'array', title: 'FAQs',
  of: [{
    type: 'object', fields: [
      defineField({ name: 'question', type: 'string', title: 'Question', validation: r => r.required() }),
      defineField({ name: 'answer', type: 'text', title: 'Answer', rows: 3, validation: r => r.required() }),
    ],
  }],
})

export const countryPage = defineType({
  name: 'countryPage',
  title: 'Country Page',
  type: 'document',
  fields: [
    defineField({ name: 'countryName', type: 'string', title: 'Country Name', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'countryName' }, validation: r => r.required() }),
    defineField({ name: 'heroHeadline', type: 'string', title: 'Hero Headline', validation: r => r.required() }),
    defineField({ name: 'heroSubheadline', type: 'text', title: 'Hero Subheadline', rows: 2 }),
    defineField({ name: 'whyDubaiPoints', type: 'array', title: 'Why Dubai Points (4 bullets)', of: [{ type: 'string' }] }),
    defineField({ name: 'investmentProcess', type: 'array', title: 'Investment Process Steps', of: [{ type: 'string' }] }),
    defineField({ name: 'currencyNote', type: 'text', title: 'Currency Note', rows: 2 }),
    defineField({ name: 'taxNote', type: 'text', title: 'Tax Note', rows: 2 }),
    defineField({ name: 'goldenVisaAngle', type: 'text', title: 'Golden Visa Angle', rows: 2 }),
    defineField({
      name: 'bestCommunities', type: 'array', title: 'Best Communities',
      of: [{ type: 'reference', to: [{ type: 'community' }] }],
    }),
    faqField,
    defineField({ name: 'leadFormTitle', type: 'string', title: 'Lead Form Title' }),
    defineField({ name: 'seoTitle', type: 'string', title: 'SEO Title' }),
    defineField({ name: 'seoDescription', type: 'text', title: 'SEO Description', rows: 2 }),
  ],
  preview: { select: { title: 'countryName', subtitle: 'heroHeadline' } },
})
