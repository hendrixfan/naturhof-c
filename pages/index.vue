<template lang="pug">
section.position-relative.overflow-hidden.bg-dust.min-vh-70.d-flex.flex-column.justify-content-center
  landscape
component(v-for="block in state?.body" :is="block.component" v-bind="block" :key="block.id")
backtop
</template>
<script>
import { defineComponent } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
export default defineComponent({
  layout: "app-layout",
  setup(props) {
    const storyapi = useStoryApi();
    const config = useRuntimeConfig()
    const { state, isReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get("cdn/stories/home", { version: config.storyblokVersion })
      return content
    })
    return {
      isReady,
      state
    }
  }
})
</script>
