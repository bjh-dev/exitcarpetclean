import { Rule } from "sanity";

export default {
  name: 'settingsBusiness',
  title: 'Business Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'postalAddress',
      title: 'Postal Address',
      collapsible: false,
    },
  ],
  fields: [
    {
      name: 'legalName',
      title: 'Legal Entity Name',
      description: 'Legal entity as registered with the ATO. (i.e. "John Smith" or "XYZ Pty Ltd").',
      type: 'string',
    },
    {
      name: 'tradingName',
      title: 'Trading Name',
      description:
        'Your registered business name under which you trade (i.e. "John\'s BBQ Shack").',
      type: 'string',
    },
    {
      name: 'businessPhone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'businessEmail',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) =>
        Rule.regex(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
    },
    {
      name: 'abn',
      title: 'ABN/ACN',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'address',
    },
    {
      name: 'isPostalAddressSame',
      title: 'Is Postal Address Same as Business Address?',
      type: 'boolean',
      fieldset: 'postalAddress',
      initialValue: true,
      description: 'If the postal address the same as the business address?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'postalAddress',
      title: 'Postal Address',
      type: 'address',
      fieldset: 'postalAddress',
      hidden: ({parent, value}: {parent: any, value: any}) => !value && parent?.isPostalAddressSame == true,
      options: {
        collapsible: false,
      },
    },
    {
      name: 'primaryContact',
      title: 'Primary Contact',
      description: 'Use this is no other people are listed as contacts below',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (Rule: Rule) => Rule.required(),
		}
  ],
}
