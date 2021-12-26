<template lang="pug">
Title {{data.metadata.title}}
Meta(name="description" :content="data.metadata.description")
h1(style="font-size: 2px; margin: 0px;") Naturhof Chemnitz e.V.
section.position-relative.overflow-hidden.bg-dust.min-vh-70.d-flex.flex-column.justify-content-center
  landscape
component(v-for="block in data.body" :is="block.component" v-bind="block" :key="block.id")
backtop
</template>
<script>
  export default {
    layout: "app-layout",
  };
</script>
<script setup>
import { useStoryApi } from "@storyblok/nuxt/composables";
const config = useRuntimeConfig()
const storyapi = useStoryApi();
const { data, pending } = await useAsyncData('index', async () => {
  const { data: { story: { content } } } = await storyapi.get("cdn/stories/home", { version: config.storyblokVersion })
  return content
}, { lazy: true, server: true })
</script>
