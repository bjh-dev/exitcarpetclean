import { Rule } from "sanity"

export default {
  title: 'Call To Action',
  name: 'cta',
  type: 'document',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      description: 'Where does this Call to Action lead?',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Landing Page', value: 'landingPageLink'},
          {title: 'Internal', value: 'internalLink'},
          {title: 'External', value: 'externalLink'},
          {title: 'File', value: 'fileLink'},
        ],
      },
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{type: 'route'}],
      hidden: ({parent}: any) => parent?.linkType !== 'landingPageLink',
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string',
      hidden: ({parent}: any) => parent?.linkType !== 'internalLink',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link',
      hidden: ({parent}: any) => parent?.linkType !== 'externalLink',
    },
    {
      title: 'Link to File',
      name: 'file',
      type: 'file',
      description: 'Link to download a file',
      fieldset: 'link',
      hidden: ({parent}: any) => parent?.linkType !== 'fileLink',
    },
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link',
    },
    prepare({title, landingPage, route, link}: { title: string; landingPage: string; route: string; link: string }) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle,
      }
    },
  },
}
