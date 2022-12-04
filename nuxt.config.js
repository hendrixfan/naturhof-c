import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  target: 'static',
  publicRuntimeConfig: {
    storyblokVersion: process.env.STORYBLOK_VERSION || "draft"
  },
  privateRuntimeConfig: {
    storyblokApiKey: process.env.STORYBLOK_API_KEY
  },
  vite: {
    plugins: [svgLoader()]
  },
  build: {
    transpile: ['#app']
  },
  ssr: false,
  css: [
    {
      src: '~/assets/scss/main.scss', lang: 'scss'
    }
  ],
  modules: [
    ["@storyblok/nuxt", {
      accessToken: process.env.STORYBLOK_API_KEY,
      cacheProvider: 'memory',
      useApiClient: true
    }]
  ],
  buildModules: [
    '@vueuse/nuxt'
  ],
})
