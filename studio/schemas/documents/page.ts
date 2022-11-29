import { Rule } from "sanity";

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'reference',
      group: 'content',
      to: {
        type: 'route',
      },
      // validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
      group: 'content',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
	preview: {
		select: {
			title: 'title',
			slug: 'slug.slug.current',
			media: 'image',
		},
		prepare({ title, slug, media }: { title: string; slug: string; media: any }) {
			return {
				title,
				subtitle: `${slug == undefined ? '/' : '/' + slug}`,
				media,
			};
		}
	}
}
