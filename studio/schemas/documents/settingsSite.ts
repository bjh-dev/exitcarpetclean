export default {
  name: 'settingsSite',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/* 'create', 'delete', */ 'update', 'publish'],
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
      title: 'Site Title',
      type: 'string',
      group: 'content',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site description',
      description: 'Provide a general description of what this site it about',
      group: 'content',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
      group: 'content',
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: {type: 'page'},
      group: 'content',
    },
    {
      name: 'headerMenu',
      title: 'Header Menu',
      type: 'reference',
      description: 'Choose menu to be used on the site header',
      to: {type: 'menu'},
      group: 'content',
    },
    {
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'reference',
      description: 'Choose menu to be used on the site footer',
      to: {type: 'menu'},
      group: 'content',
    },
    {
      name: 'seo',
      title: 'Search Engine Optimisation',
      type: 'seo',
      description:
        'Search Engine Optimisation settings are important. Learn more about these settings at https://bit.ly/3A6l8gt.',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
