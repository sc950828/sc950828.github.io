const path = require('path')

module.exports = {
  title: '苏纯的博客',
  description: '前端路上的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: '/randy.jpg' }],
    ['meta', { name: 'keywords', content: '苏纯，苏纯的博客，苏纯的个人博客' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/guide' },
      { text: 'github', link: 'https://github.com/sc950828' },
    ],
    sidebar: [
      {
        title: 'html5',
        path: '/html5',
        children: [
          ['/html5/html5新特性', 'html5新特性'],
          ['/html5/h5移动端基础', 'h5移动端基础'],
          ['/html5/h5移动端避坑指南', 'h5移动端避坑指南'],
        ]
      },
      {
        title: 'css3',
        path: '/css3',
        children: [
          ['/css3/css3新特性', 'css3新特性']
        ]
      },
      // {
      //   title: 'js',
      //   path: '/js',
      //   children: [
      //     ['/js/js事件', 'js事件']
      //   ]
      // },
      // {
      //   title: 'ts',
      //   path: '/ts',
      //   children: [
      //     ['/ts/数据类型', '数据类型']
      //   ]
      // }
    ]
  },
  dest: path.resolve(__dirname, "../../dist"),
  markdown: {
    lineNumbers: true
  }
}
