<template lang='pug'>
footer.footer.pt-6.position-relative.snap-section(ref="footerEl")
  .container
    .d-flex.flex-wrap.py-5.mb-5
      .col-12.col-lg-4.mb-5
      .col-6.col-sm-3.col-lg-2.mb-6.mb-md-2.pr-3.pe-lg-0.ps-lg-4(v-for="footerItem in state" :key="footerItem['_uid']")
        h3.mb-3.text-normal
          | {{footerItem.title}}

</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
export default defineComponent({
  layout: "app-layout",
  setup(props) {
    const footerEl = ref(null)
    const storyapi = useStoryApi()
    const { state, isReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get("cdn/stories/global")
      return content?.footer
    })
    return {
      state,
      isReady,
      footerEl,
    }
  }
})
</script>
