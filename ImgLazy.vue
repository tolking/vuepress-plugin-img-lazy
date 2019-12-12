<template>
  <img
    v-bind="$attrs"
    :data-src="src"
    :loading="config.useLoading ? 'lazy' : null"
    :class="config.selector"
  />
</template>

<script>
import config from '@dynamic/imgLazy'

export default {
  name: 'ImgLazy',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    config() {
      return config
    }
  }
}
</script>
