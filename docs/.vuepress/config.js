const path = require('path')

module.exports = {
  title: '苏纯的博客',
  description: '前端路上的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: '/randy.jpg' }],
    ['meta', { name: 'keywords', content: '苏纯，苏纯的博客，苏纯的个人博客，前端博客，前端个人博客，苏纯前端博客' }]
  ],
  themeConfig: {
    nav: [
      { text: '导航', link: '/GUIDE' },
      { text: '掘金', link: 'https://juejin.cn/user/3403743730867767/posts' },
    ],
    sidebar: [
      {
        title: 'HTML',
        path: '/HTML',
        children: [
          ['/HTML/Cookie、Session、Storage、Token、JWT、单点登录、OAuth第三方登录一次性弄懂', 'Cookie、Session、Storage、Token、JWT、单点登录、OAuth第三方登录一次性弄懂'],
        ]
      },
      {
        title: 'CSS',
        path: '/CSS',
        children: [
          ['/CSS/css选择器这次我是真的弄懂了', 'css选择器这次我是真的弄懂了'],
          ['/CSS/你必须掌握的css知识点和小技巧', '你必须掌握的css知识点和小技巧'],
          ['/CSS/彻底弄懂元素样式、位置、大小相关计算', '彻底弄懂元素样式、位置、大小相关计算'],
          ['/CSS/css布局方案汇总', 'css布局方案汇总'],
        ]
      },

    ]
  },
  dest: path.resolve(__dirname, "../../dist"),
  markdown: {
    lineNumbers: true
  }
}
