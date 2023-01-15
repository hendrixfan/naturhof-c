<template lang="pug">
Title {{}}
Meta(name="description" :content="home.meta.description")
h1(style="font-size: 2px; margin: 0px;") Naturhof Chemnitz e.V.
section.position-relative.overflow-hidden.bg-dust.min-vh-70.d-flex.flex-column.justify-content-center
  landscape
component(v-for="block in home.data.attributes.body" :is="block.meta.name" v-bind="block" :key="block.meta.uuid")
backtop
</template>
<script>
  export default {
    layout: "app-layout",
  };
</script>
<script setup>
const { findOne } = useStrapi()
const { data: home, pending, refresh, error } = await useAsyncData('home', () => {
  return findOne('home', '', {
    populate: ["body", "body.meta"],
  })
})
onMounted(() => refresh())
</script>
