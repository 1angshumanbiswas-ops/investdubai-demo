import { defineField, defineType } from 'sanity'

export const property = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Property Name', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
    defineField({ name: 'price', type: 'number', title: 'Price (AED)', validation: r => r.required().min(0) }),
    defineField({ name: 'currency', type: 'string', title: 'Currency', initialValue: 'AED' }),
    defineField({ name: 'area', type: 'string', title: 'Area / Community', validation: r => r.required() }),
    defineField({ name: 'roiPercent', type: 'number', title: 'Expected ROI %' }),
    defineField({ name: 'goldenVisaEligible', type: 'boolean', title: 'Golden Visa Eligible', initialValue: false }),
    defineField({
      name: 'status', type: 'string', title: 'Status',
      options: { list: ['off-plan', 'ready', 'secondary'], layout: 'radio' },
      validation: r => r.required(),
    }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 4 }),
    defineField({ name: 'developer', type: 'reference', to: [{ type: 'developer' }], title: 'Developer' }),
    defineField({ name: 'images', type: 'array', title: 'Images', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'paymentPlan', type: 'string', title: 'Payment Plan (e.g. 60/40)' }),
    defineField({ name: 'handoverDate', type: 'string', title: 'Handover Date' }),
    defineField({ name: 'bedroomOptions', type: 'string', title: 'Bedroom Options (e.g. Studio, 1BR, 2BR)' }),
  ],
  preview: { select: { title: 'title', subtitle: 'area', media: 'images.0' } },
})
