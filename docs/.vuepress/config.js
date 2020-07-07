module.exports = {
  base: '/vuepress-plugin-img-lazy/',
  title: 'vuepress-plugin-img-lazy',
  description: 'a vuepress plugin to better supporting image lazy loading',
  dest: 'dist/',
  evergreen: true,
  theme: 'default-prefers-color-scheme',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-plugin-img-lazy',
      description: 'a vuepress plugin to better supporting image lazy loading'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress-plugin-img-lazy',
      description: '为 vuepress 的默认主题增加图片懒加载'
    }
  },
  themeConfig: {
    repo: 'tolking/vuepress-plugin-img-lazy',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          '/',
          '/preview'
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新时间',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: [
          '/zh/',
          '/preview'
        ]
      }
    }
  },
  plugins: [
    [require.resolve('../../index.js')]
  ]
}
