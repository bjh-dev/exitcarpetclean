export default {
  name: 'settingsSocial',
  title: 'Social Media Settings',
  type: 'document',
  fields: [
    {
      name: 'facebookAppId',
      title: 'Facebook App ID',
      type: 'string',
      description: 'Facebook ID associated with your page. See https://bit.ly/3SdLEeF',
    },
    {
      name: 'facebookProfile',
      title: 'Facebook Profile',
      type: 'string',
      options: {
        prepend: 'https://facebook.com/',
      },
    },
    {
      name: 'instagramProfile',
      title: 'Instagram Profile',
      type: 'string',
      options: {
        prepend: 'https://instagram.com/',
      },
    },
    {
      name: 'githubProfile',
      title: 'Github Profile',
      type: 'string',
      options: {
        prepend: 'https://github.com/',
      },
    },
    {
      name: 'linkedinProfile',
      title: 'LinkedIn Profile',
      type: 'string',
      options: {
        prepend: 'https://linkedin.com/in/',
      },
    },
    {
      name: 'linkedinBusinessPage',
      title: 'LinkedIn Business Page',
      type: 'string',
      options: {
        prepend: 'https://linkedin.com/company/',
      },
    },
    {
      name: 'twitterProfile',
      title: 'Twitter Profile',
      type: 'string',
      options: {
        prepend: 'https://twitter.com/',
      },
    },
    {
      name: 'youtubeChannel',
      title: 'YoutTube Profile',
      type: 'string',
      options: {
        prepend: 'https://www.youtube.com/channel/',
      },
    },
    {
      name: 'pinterestProfile',
      title: 'Pinterest Profile',
      type: 'string',
      options: {
        prepend: 'https://www.pinterest.com.au/',
      },
    },
  ],
}
