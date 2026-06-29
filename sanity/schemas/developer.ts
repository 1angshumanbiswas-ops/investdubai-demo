import { defineField, defineType } from 'sanity'

export const developer = defineType({
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Developer Name', validation: r => r.required() }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'logo', type: 'image', title: 'Logo' }),
    defineField({ name: 'description', type: 'text', title: 'Description', rows: 3 }),
    defineField({ name: 'registrationNumber', type: 'string', title: 'DLD Registration Number' }),
    defineField({ name: 'established', type: 'string', title: 'Established Year' }),
    defineField({ name: 'website', type: 'url', title: 'Website' }),
  ],
  preview: { select: { title: 'name', media: 'logo' } },
})
