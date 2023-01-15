import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  },
  target: 'static',
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
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  buildModules: [
    '@vueuse/nuxt'
  ],
})
