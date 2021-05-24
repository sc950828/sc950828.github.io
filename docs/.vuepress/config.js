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
      { text: 'github', link: 'https://github.com/sc950828' },
    ]
  },
  dest: path.resolve(__dirname, "../dist"),
  markdown: {
    lineNumbers: true
  }
}
