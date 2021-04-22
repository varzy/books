const path = require('path');

module.exports = {
  base: '/books/',
  title: `Aiden 的走心小书`,
  description: '这里记录着我想正儿八经写下来的一些东西。',
  port: 5100,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './assets'),
      },
    },
  },
  themeConfig: {
    // smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'INDEX', link: '/' },
      { text: '前端乱炖', link: '/fe/' },
      { text: '微信小程序', link: '/mina/' },
      { text: '前端开发规范', link: '/standard/' },
      { text: '了解我', link: 'https://varzy.me', target: '_blank' },
    ],
    sidebar: {
      '/fe/': [
        // {
        //   title: '前言',
        //   collapsable: false,
        //   children: [''],
        // },
        {
          title: '前端演化史',
          collapsable: false,
          children: [
            'evolution/preface',
            'evolution/genesis',
            'evolution/yesterday',
            'evolution/today',
            'evolution/tomorrow',
          ],
        },
        // {
        //   title: '从零开始的前端教程',
        //   collapsable: false,
        //   children: ['basic/editor', 'basic/hello-world', 'basic/node'],
        // },
        // {
        //   title: '进阶知识',
        //   collapsable: false,
        //   children: ['advanced/oop'],
        // },
        {
          title: '架构 & 工程化',
          collapsable: false,
          children: ['engineering/ssr-better-fe'],
        },
        {
          title: '八股',
          collapsable: false,
          children: ['useless/browser-render']
        }
      ],
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
      '/mina/': [
        // {
        //   title: '起步',
        //   collapsable: false,
        //   children: [''],
        // },
        {
          title: '开发技巧',
          collapsable: false,
          children: [
            'skills/start',
            'skills/route',
            'skills/versions',
            // 'skills/date',
          ],
        },
      ],
    },
  },
};
