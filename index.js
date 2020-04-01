const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {
  const {
    useLoading = true,
    selector = 'lazy'
  } = options

  return {
    name: 'vuepress-plugin-img-lazy',

    chainWebpack: config => {
      config.module
        .rule('vue')
        .test(/\.vue$/)
        .use('vue-loader')
        .loader('vue-loader')
        .options({ transformAssetUrls: {
          video: ['src', 'poster'],
          source: 'src',
          img: ['src', 'data-src'],
          image: ['xlink:href', 'href'],
          use: ['xlink:href', 'href']
        }})
    },

    extendMarkdown: md => {
      md.use(require('markdown-it-img-lazy'), { useLoading, selector })
      md.use(require('./checkSrc.js'), { base: ctx.base })
      md.use(require('markdown-it-imsize'))
    },

    async clientDynamicModules () {
      return [
        {
          name: 'imgLazy.js',
          content: `export default ${JSON.stringify({ useLoading, selector })}`
        }
      ]
    },

    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
  }
}
