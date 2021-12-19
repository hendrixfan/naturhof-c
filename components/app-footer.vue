<template lang='pug'>
footer.footer.bg-dust.mt-auto(ref="footerEl")
  .container
    .d-flex.flex-wrap.py-5
      .col-12.col-lg-4
        Logo(width="330" ref="logoEl")
      .col-6.col-sm-3.col-lg-2.mb-6.mb-md-2.pr-3.pe-lg-0.ps-lg-4(v-for="item in footerItems")
        h3.mb-3.text-normal.near-black {{item.title}}
        ul.list-unstyled
          li.mb-2(v-for="subItem in item.items")
            NuxtLink.text-decoration-none.text-dark(:to="subItem.path")
              | {{subItem.title}}
  sub-footer
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
