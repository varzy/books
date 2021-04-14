module.exports = {
  base: '/books/',
  title: `Aiden 的走心小书`,
  description: '这里记录着我想正儿八经写下来的一些东西。',
  port: 5100,
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: '前端开发规范', link: '/standard/' },
      { text: '了解我', link: 'https://varzy.me', target: '_blank' },
    ],
    sidebar: {
      '/standard/': [
        {
          title: '起步',
          collapsable: false,
          children: ['start/intro'],
        },
        {
          title: '代码风格',
          collapsable: false,
          children: ['code/html', 'code/css', 'code/js', 'code/vue'],
        },
        {
          title: '项目开发',
          collapsable: false,
          children: [
            'develop/document',
            'develop/tool',
            'develop/version',
            'develop/dependency',
            'develop/git',
            'develop/vuecli',
            'develop/editorconfig',
            'develop/prettier',
            'develop/communication',
          ],
        },
      ],
    },
  },
};
