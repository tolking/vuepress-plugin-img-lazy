import config from '@dynamic/imgLazy'

export default ({ Vue }) => {
  Vue.mixin({
    data() {
      return {
        $imgLazyObserver: {}
      }
    },

    computed: {
      $supLoading() {
        return config.useLoading && "loading" in HTMLImageElement.prototype
      }
    },

    mounted() {
      if (this.$supLoading) {
        const lazyEls = document.querySelectorAll('.' + config.selector)
        lazyEls.forEach(lazyEl => lazyEl.setAttribute("src", lazyEl.getAttribute("data-src")))
      } else {
        const lozad = require('lozad')
        this.$imgLazyObserver = lozad('.' + config.selector)
        this.$imgLazyObserver.observe()
      }
    }
  })
}
