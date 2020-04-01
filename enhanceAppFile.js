import config from '@dynamic/imgLazy'
import './style.styl'

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
        const lazyEls = document.querySelectorAll('img.' + config.selector)
        lazyEls.forEach(lazyEl => {
          !lazyEl.getAttribute("src") && lazyEl.setAttribute("src", lazyEl.getAttribute("data-src"))
        })
      } else {
        const lozad = require('lozad')
        this.$imgLazyObserver = lozad('img.' + config.selector)
        this.$imgLazyObserver.observe()
      }
    }
  })
}
