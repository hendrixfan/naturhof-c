<template lang='pug'>
header.banner.w-100.position-fixed.top-0(role='banner' style='z-index:4;')
  nav.navbar.navbar-expand-lg.navbar-light.nav-shadow.bg-dust#detail-nav(ref="headerEl")
    .container
      a.navbar-brand.py-0(href='/')
        Logo(width="160" ref="logoEl")
      button.btn.bg-dust(type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
.offcanvas.offcanvas-start#offcanvasExample(tabindex="-1" aria-labelledby="offcanvasLabel")
  .offcanvas-header.d-flex.justify-content-end
    button.btn-close.text-reset(type="button" data-bs-dismiss="offcanvas" aria-label="Close")
  .offcanvas-body
    .col-12(v-for="item in footerItems")
      h3.mb-3.text-normal.near-black {{item.title}}
      ul.list-unstyled
        li.mb-2(v-for="subItem in item.items")
          NuxtLink.text-decoration-none(:to="subItem.path")
            | {{subItem.title}}
</template>
<script>
import { defineComponent } from 'vue'
import Logo from '~/assets/images/naturhof-c-logo.svg';
import FooterItems from '~/assets/other/data/navigation.json';
export default defineComponent({
  components: {
    Logo
  },
  setup(props) {
    const footerItems = FooterItems
    return {
      footerItems
    }
  }
})
</script>
