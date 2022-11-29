import { Rule } from "sanity";

export default {
  name: 'seo',
  title: 'Search Engine Optimisation',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Heads up! This will override the page title.',
      validation: (Rule: Rule) => Rule.min(20).max(60).warning('Should be under 60 characters'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Heads up! This will override the page description.',
      validation: (Rule: Rule) => Rule.max(155).warning('Should be under 155 characters'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
  ],
}
