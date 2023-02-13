<template lang='pug'>
section.position-relative.overflow-hidden.bg-white.min-vh-100.d-flex.flex-column.justify-content-center.align-items-center#about-us
  .container.d-flex.flex-column.justify-content-center.my-5.flex-grow-1
    .row.justify-content-center
      .col-md-8.text-center
        h2.text-dark {{title}}
        hr.w-100
    .row.justify-content-center.mt-5
      slide-animation.col-md-8(direction="right")
        //p.fs-5(v-html="htmlDescription")
    .row.justify-content-center.mt-5.min-vh-100
      slide-animation.col-md-8
        h5.text-dark {{description}}
      slide-animation.col-md-8.d-flex.justify-content-start(v-for="(item, index) in items" :direction="index % 2 == (0 || 1) ? 'left' : 'right'")
        .icon.flex-grow-1.align-self-center.me-5
          component.bg-dust(:is="item.icon" style="clip-path: circle(50% at 50% 50%);" width="100" height="100")
        p.fs-5.align-self-center.w-100.mb-0 {{item.description}}
.container-fluid.overflow-hidden
  .row.mb-n4.mt-n5
    Gras.fill-dark
</template>
<script>
import {
  defineComponent,
} from 'vue'
import Gras from '~/assets/images/gras.svg';
import Roots from '~/assets/images/roots.svg';
export default defineComponent({
  components: {
    Gras,
    Roots,
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    items: {
      type: Array
    },
    image_left: {
      type: Object,
    }
  },
  setup(props) {

  }
})
</script>

