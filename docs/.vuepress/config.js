const path = require('path')

module.exports = {
  title: '苏纯的博客',
  description: '开发路上的点点滴滴',
  head: [
    ['link', { rel: 'icon', href: '/randy.jpg' }],
    ['meta', { name: 'keywords', content: '苏纯，苏纯的博客，苏纯的个人博客，前端博客，前端个人博客，苏纯前端博客' }]
  ],
  themeConfig: {
    nav: [
      { text: '导航', link: '/guide' },
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
      {
        title: 'JavaScript',
        path: '/JavaScript',
        children: [
          ['/JavaScript/前端二进制一次性搞清楚', '前端二进制一次性搞清楚'],
          ['/JavaScript/都2022年了你不会还没搞懂JS数据类型吧', '都2022年了你不会还没搞懂JS数据类型吧'],
          ['/JavaScript/都2022年了你不会还没搞懂JS原型和继承吧', '都2022年了你不会还没搞懂JS原型和继承吧'],
          ['/JavaScript/都2022年了你不会还没搞懂JS赋值拷贝、浅拷贝、深拷贝吧', '都2022年了你不会还没搞懂JS赋值拷贝、浅拷贝、深拷贝吧'],
          ['/JavaScript/都2022年了你不会还没搞懂对象数组的遍历吧', '都2022年了你不会还没搞懂对象数组的遍历吧'],
          ['/JavaScript/都2022年了你不会还没搞懂this吧', '都2022年了你不会还没搞懂this吧'],
          ['/JavaScript/JSObjectAPI详解', 'JS Object API详解'],
          ['/JavaScript/前端文件的上传和下载', '前端文件的上传和下载'],
          ['/JavaScript/js垃圾回收和内存泄露', 'js垃圾回收和内存泄露'],
          ['/JavaScript/js执行上下文和执行机制一文说透', 'js执行上下文和执行机制一文说透'],
          ['/JavaScript/js中关于事件的那些事一次性搞懂', 'js中关于事件的那些事一次性搞懂'],
          ['/JavaScript/js异步编程', 'js异步编程'],
          ['/JavaScript/节流、防抖一套带走', '节流、防抖一套带走'],
        ]
      },
    ]
  },
  dest: path.resolve(__dirname, "../../dist"),
  markdown: {
    lineNumbers: true
  }
}
