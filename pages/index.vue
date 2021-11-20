<template lang="pug">
section.position-relative.overflow-hidden.bg-dust.vh-100.d-flex.flex-column.justify-content-center.snap-section
  landscape(:class="{'mb-5': aData }")
  .position-absolute.w-100.top-25
    .container
      .row
        .col-md-8
          h2.display-3.fw-bolder.near-black
            | Natur-Hof Chemnitz e.V.
          | Verein zur F&ouml;rderung von Landschaftspflege und Naturschutz
  announcement(:description="aData.description" v-if="aReady")
component(v-for="block in state?.body" :is="block.component" v-bind="block" :key="block.id" v-show="state?.body")
scroll-effect-section.position-relative.overflow-hidden.bg-white.min-vh-100.d-flex.flex-column.snap-section.justify-content-center#participate(effectImageUrl="assets/images/angus.png")
  .container
    .row
      .col-md-6
        h2.near-black
          | Wie kann ich mich beteiligen?
      .col-md-6
scroll-effect-section.position-relative.snap-section.overflow-hidden.bg-dark-shade.min-vh-100.d-flex.flex-column.justify-content-center#contact(position="left" effectImageUrl="assets/images/karlikopf.png")
  .container
    .row
      .col-md-6

      .col-md-6
        h2.text-white
          | Kontakt & Impressum
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
    const { state, isReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get("cdn/stories/home")
      return content
    })
    const { state: aData, isReady: aReady } = useAsyncState(async () => {
      const { data: { story: { content } } } = await storyapi.get("cdn/stories/aktuelles")
      return content
    })
    return {
      aData,
      aReady,
      state
    }
  }
})
</script>
<style>
html {
  height: 100vh;
  scroll-snap-type: y proximity;
}
</style>
