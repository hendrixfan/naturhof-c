import { defineNuxtConfig } from 'nuxt3'
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  publicRuntimeConfig: {
    storyblokVersion: process.env.STORYBLOK_VERSION || "draft"
  },
  privateRuntimeConfig: {
    storyblokApiKey: process.env.STORYBLOK_API_KEY
  },
  vite: {
    plugins: [svgLoader()]
  },
  ssr: true,
  css: [
    {
      src: '~/assets/scss/main.scss', lang: 'scss'
    }
  ],
  modules: [
    '@nuxtjs/sitemap',
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY }]
  ],
  buildModules: [
    '@vueuse/core/nuxt'
  ],
})
