<template lang="pug">
Title {{}}
//Meta(name="description" :content="home.meta.description")
NuxtLayout(name="home")
  h1(style="font-size: 2px; margin: 0px;") Natur-Hof Chemnitz e.V.
  section.position-relative.overflow-hidden.bg-dust.min-vh-70.d-flex.flex-column.justify-content-center
    landscape
  component(v-for="block in home.data.attributes.body" :is="block.meta.name" v-bind="block" :key="block.meta.uuid")
  backtop
</template>
<script setup>

const { findOne } = useStrapi()
const { data: home, refresh } = await useAsyncData('home', () => {
  return findOne('home', '', {
      populate: "deep"
    })
  console.log(res)
})

const { data: navigation } = await useAsyncData('navigation', () => {
  return findOne('navigation/render', 2)
})
definePageMeta({
  layout: "home",
});
onMounted(() => refresh())
</script>
