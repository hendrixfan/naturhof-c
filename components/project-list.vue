<template lang='pug'>
.row.row-cols-1.row-cols-md-5.g-5.justify-content-center.project__grid.mt-auto
  project-card(v-for="project in state" :key="project.id" v-bind="Object.assign(project.content, project)")
</template>
<script>
import ProjectCard from '~/components/project-card'
import { useAsyncState } from '@vueuse/core'
import { useStoryApi } from "@storyblok/nuxt/composables"
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  components: {
    ProjectCard
  },
  setup(props) {
    const storyapi = useStoryApi();
    const { state, ready } = useAsyncState(async () => {
      const { data } = await storyapi.get("cdn/stories?starts_with=projekte/", {});

      return data?.stories
    })

    return {
      state
    }
  }
})
</script>
