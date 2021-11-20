<template lang='pug'>
.position-absolute.overflow-hidden.bg-sky.d-flex.flex-column.justify-content-center.py-2.min-vh-10.bottom-0.w-100
  .container-fluid
    .row.justify-content-center
      .col-md-10
        p.text-center(v-html="htmlDescription")
</template>
<script>
import {
  defineComponent,
} from 'vue'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
export default defineComponent({
  name: "announcement",
  props: {
    description: {
      type: Object,
    }
  },
  setup(props) {
    const resolver = new RichTextResolver()
    const htmlDescription = resolver.render(props.description)
    return {
      htmlDescription
    }
  }
})
</script>
