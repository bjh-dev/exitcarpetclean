export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'The title of the menu',
		},
		{
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{type: 'cta'}
					]
				}
			]
		}
	]
}
