import { defineNuxtConfig } from 'nuxt3'
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  vite: {
    plugins: [svgLoader()]
  },
  css: [
    {
      src: '~/assets/scss/main.scss', lang: 'scss'
    }
  ],
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.API_SECRET }]
  ],
  buildModules: [
    '@vueuse/core/nuxt'
  ],
})
