const path = require('path');

module.exports = {
  base: '/books/',
  title: `Aiden 的走心小书`,
  description: '这里记录着我想正儿八经写下来的一些东西。',
  port: 5100,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './assets')
      }
    }
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: '前端入门教程', link: '/tutorial/' },
      { text: '前端开发规范', link: '/standard/' },
      { text: '了解我', link: 'https://varzy.me', target: '_blank' },
    ],
    sidebar: {
      '/standard/': [
        {
          title: '起步',
          collapsable: false,
          children: [''],
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
      '/tutorial/': [
        {
          title: '介绍',
          collapsable: false,
          children: ['', 'preface/thanks'],
        },
        {
          title: '前端演化史',
          collapsable: false,
          children: ['evolution/yesterday', 'evolution/today', 'evolution/tomorrow'],
        },
        {
          title: '从零开始的前端教程',
          collapsable: false,
          children: [
            'basic/editor',
            'basic/hello-world',
          ],
        },
        {
          title: '选读的进阶知识',
          collapsable: false,
          children: ['advanced/oop'],
        },
      ],
    },
  },
};
