<template lang='pug'>
header.banner.w-100.position-fixed.top-0(role='banner' style='z-index:4;')
  nav.navbar.navbar-expand-lg.navbar-light.nav-shadow.bg-dust#main-nav(ref="headerEl")
    .container
      a.navbar-brand.py-0(href='#')
        Logo(width="250" ref="logoEl")
      button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarNav.collapse.navbar-collapse
        ul.navbar-nav.justify-content-end.w-100
          li.nav-item
            a.nav-link.active(aria-current='page' href="#about-us") Über uns
          li.nav-item
            a.nav-link(href="#projects") Projekte
          li.nav-item
            a.nav-link(href='#participate') Aktiv werden
          li.nav-item
            a.nav-link(href='#contact') Kontakt
</template>
<script>
import {
  defineComponent,
} from 'vue'
import { useScroll } from '@vueuse/gesture'
import { useWindowScroll } from '@vueuse/core'
import { useMotionProperties, useSpring, useElementStyle } from '@vueuse/motion'
import Logo from '~/assets/images/naturhof-c-logo.svg';
export default defineComponent({
  components: {
    Logo
  },
  setup() {
    const headerEl = ref(null)
    const logoEl = ref(null)
    const shadow = "0 2.75px 2.21px rgba(0,0,0,.07),0 6.65px 5.32px rgba(0,0,0,.043),0 12.5px 10px rgba(0,0,0,.03),0 22px 18px rgba(0,0,0,.03),0 42px 33.4px rgba(0,0,0,.02),0 100px 80px rgba(0,0,0,.017),0 0 0 1px rgba(0,0,0,.05)"
    const scrollLimit = 600
    const initialLogoWidth = 250
    const { x, y } = useWindowScroll()
    const { motionProperties } = useMotionProperties(logoEl, {
      width: 250
    })
    const { style } = useElementStyle(headerEl)

    const { set, values, stop } = useSpring(motionProperties, {
      damping: 50,
      stiffness: 220,
    })

    const scrollHandler = (height) => {
      set({
        width: height,

      })
    }
    watch(y, (y, prevY) => {
      if (y > scrollLimit) {
        style["box-shadow"] = shadow
        scrollHandler(150)
      } else if (y >= 0 && y <= 630) {
        style["box-shadow"] = 'none'
        scrollHandler(250)
      }
    })

    return {
      logoEl,
      headerEl,
      y
    }
  }
})
</script>
