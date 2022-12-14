import {FaImage} from 'react-icons/fa'
import { Rule } from 'sanity'

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  icon: FaImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule: Rule) => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
}
