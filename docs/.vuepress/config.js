module.exports = {
  base: '/vue-admin-scaffold-book/',
  title: 'VueAdminScaffold',
  description: 'Everything about VueAdminScaffold.',
  port: 3001,
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: '引导', link: '/guide/' },
      { text: 'Preview', link: 'https://varzy.me/vue-admin-scaffold', target: '_blank' },
      { text: 'Github', link: 'https://github.com/varzy/vue-admin-scaffold', target: '_blank' },
      { text: '我', link: 'https://varzy.me', target: '_blank' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '基础',
          collapsable: false,
          children: [''],
        }
      ]
    }
  }
};
