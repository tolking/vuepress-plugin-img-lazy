const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {
  const {
    useLoading = true,
    selector = 'lazy'
  } = options

  return {
    name: 'vuepress-plugin-img-lazy',

    extendMarkdown: md => {
      md.use(require('markdown-it-img-lazy'), { useLoading, selector })
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
