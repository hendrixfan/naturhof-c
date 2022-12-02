<template lang="pug">
.container.mt-5.pt-5
  .row.justify-content-center
    .col-lg-8(v-html="htmlDescription" v-if="isReady")
</template>
<script>
import {
  defineComponent,
} from 'vue'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
import RichTextSchema from '~/assets/other/schema.js'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
import { useRoute } from 'vue-router'
import { watchOnce } from '@vueuse/core'
export default defineComponent({
  layout: "simple-layout",
  setup(props) {
    const route = useRoute()
    const resolver = new RichTextResolver(RichTextSchema)
    const htmlDescription = ref(null)

    const storyapi = useStoryApi();
    const config = useRuntimeConfig()
    const { state, isReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get(`cdn/stories/${route.params.slug[0]}`, { version: config.storyblokVersion })
      return content.body[0].body_text
    })

    watchOnce(state, () => {
      htmlDescription.value = resolver.render(state.value)
    })

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
