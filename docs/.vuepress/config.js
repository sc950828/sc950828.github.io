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
      {
        title: 'js',
        path: '/js',
        children: [
          ['/js/object', 'object'],
          ['/js/this', 'this'],
          ['/js/继承', '继承'],
          ['/js/原型', '原型'],
          ['/js/闭包', '闭包'],
          ['/js/拷贝', '拷贝'],
          ['/js/事件', '事件'],
          ['/js/运行机制', '运行机制'],
          ['/js/垃圾回收', '垃圾回收'],
          ['/js/防抖与节流', '防抖与节流'],
        ]
      },
      {
        title: 'ts',
        path: '/ts',
        children: [
          ['/ts/基础', '基础'],
          ['/ts/数据类型', '数据类型'],
          ['/ts/函数', '函数'],
          ['/ts/接口', '接口'],
          ['/ts/类', '类'],
          ['/ts/泛型', '泛型'],
          ['/ts/命名空间', '命名空间'],
          ['/ts/装饰器', '装饰器'],
          ['/ts/配置文件', '配置文件'],
        ]
      }
    ]
  },
  dest: path.resolve(__dirname, "../../dist"),
  markdown: {
    // lineNumbers: true
  }
}
