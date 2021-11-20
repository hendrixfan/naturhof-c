<template lang="pug">
.container
  .row.justify-content-center
    .col-8(v-html="htmlDescription")
</template>
<script>
import {
  defineComponent,
} from 'vue'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
import { useRoute } from 'vue-router'
export default defineComponent({
  layout: "simple-layout",
  setup(props) {
    const route = useRoute()
    const resolver = new RichTextResolver()

    const storyapi = useStoryApi();
    const config = useRuntimeConfig()
    const { state, isReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get(`cdn/stories/${route.params.slug[0]}`, { version: config.storyblokVersion })
      return content
    })
    const htmlDescription = resolver.render(state.value)
    return {
      htmlDescription,
      state,
      isReady
    }
  }
})
</script>
<style scoped>
p,
span {
 font-size:1.1rem;
 font-weight:200
}
@media (min-width:768px) {
 p,
 span {
  font-size:1.3rem
 }
}
@media (min-width:1024px) {
 p,
 span {
  font-size:1.4rem
 }
}
</style>
