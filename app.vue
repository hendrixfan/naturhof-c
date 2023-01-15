<template>
<NuxtPage/>
</template>
<script setup>
import 'lazysizes';
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: {
    rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
  },
  link: {
    rel: 'icon', type: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png'
  },
  bodyAttrs: {
    class: 'scroll-padding-base bg-white'
  },
  htmlAttrs: {
    lang: 'de'
  }
})
</script>
