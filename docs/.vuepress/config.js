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
      { text: '导航', link: '/guide' },
      { text: '个人收藏', items: [
        { text: '好文章', link: '/个人收藏/好文章' },
        { text: '面试好文章', link: '/个人收藏/面试好文章' }
      ] },
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
          ['/js/数据类型', '数据类型'],
          ['/js/object', 'Object'],
          ['/js/DOM', 'DOM'],
          ['/js/BOM', 'BOM'],
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
      },
      {
        title: 'webpack',
        path: '/webpack',
        children: [
          ['/webpack/基础', '基础'],
          ['/webpack/高级', '高级'],
          ['/webpack/分析', '分析']
        ]
      },
      {
        title: 'git',
        path: '/git',
        children: [
          ['/git/基础', '基础'],
          ['/git/gitignore', 'gitignore'],
          ['/git/常见问题', '常见问题'],
        ]
      },
      {
        title: 'web安全',
        path: '/web安全',
        children: [
          ['/web安全/XSS', 'XSS'],
          ['/web安全/CSRF', 'CSRF'],
          ['/web安全/点击劫持', '点击劫持'],
          ['/web安全/传输安全', '传输安全'],
          ['/web安全/密码安全', '密码安全'],
          ['/web安全/SQL注入', 'SQL注入'],
          ['/web安全/上传攻击', '上传攻击'],
          ['/web安全/DOS攻击', 'DOS攻击'],
          ['/web安全/重放攻击', '重放攻击'],
        ]
      },
      {
        title: '性能优化',
        path: '/性能优化',
        children: [
          ['/性能优化/指标和工具', '指标和工具'],
          ['/性能优化/渲染优化', '渲染优化'],
          ['/性能优化/代码优化', '代码优化'],
          ['/性能优化/资源优化', '资源优化'],
          ['/性能优化/webpack构建优化', 'webpack 构建优化'],
          ['/性能优化/传输加载优化', '传输加载优化'],
          ['/性能优化/前沿优化方案', '前沿优化方案'],
          ['/性能优化/从输入url到页面渲染全链路分析', '从输入url到页面渲染全链路分析'],
        ]
      },
      {
        title: 'vue',
        path: '/vue',
        children: [
          ['/vue/vue2和vue3区别', 'vue2和vue3区别']
        ]
      }
    ]
  },
  dest: path.resolve(__dirname, "../../dist"),
  markdown: {
    // lineNumbers: true
  }
}
