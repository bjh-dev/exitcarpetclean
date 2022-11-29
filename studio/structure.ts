import {FaCogs, FaFile, FaShareSquare, FaBriefcase} from 'react-icons/fa'

const structure = (S:any ) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FaCogs)
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(FaCogs)
                .child(S.document().schemaType('settingsSite').documentId('global-config')),
              S.listItem()
                .title('Social Accounts')
                .icon(FaShareSquare)
                .child(S.document().schemaType('settingsSocial').documentId('social-config')),
              S.listItem()
                .title('Business Details')
                .icon(FaBriefcase)
                .child(S.document().schemaType('settingsBusiness').documentId('business-config')),
              S.listItem()
                .title('Routes')
                .schemaType('route')
                .child(S.documentTypeList('route').title('Route')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(FaFile)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Page')),
      // S.listItem()
      //   .title('Posts')
      //   .icon(FaPenNib)
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Post')),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'settingsBusiness',
            'settingsSite',
            'settingsSocial',
            'post',
            'route',
            'page',
            'category'
          ].includes(listItem.getId())
			)
    ])
export default structure
