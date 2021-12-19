<template lang='pug'>
section.position-relative.overflow-hidden.bg-white.min-vh-100.d-flex.flex-column.justify-content-center.align-items-center#about-us
  .container.d-flex.flex-column.justify-content-center.my-5.flex-grow-1
    .row.justify-content-center
      .col-md-8.text-center
        h2.text-dark {{title}}
        hr.w-100
    .row.justify-content-center.mt-5
      slide-animation.col-md-8(direction="right")
        p.fs-5(v-html="htmlDescription")
    .row.justify-content-center.mt-5.min-vh-100
      slide-animation.col-md-8
        h5.text-dark Dabei hat unser Verein folgende Schwerpunkte:
      slide-animation.col-md-8.d-flex.justify-content-start(v-for="(item, index) in feature_items" :direction="index % 2 == (0 || 1) ? 'left' : 'right'")
        .icon.flex-grow-1.align-self-center.me-5
          component.bg-dust(:is="item.icon" style="clip-path: circle(50% at 50% 50%);" width="100" height="100")
        p.fs-5.align-self-center.w-100.mb-0 {{item.description}}
.container-fluid.overflow-hidden
  .row.justify-content-end(style="margin-bottom: -9rem !important;")
    .col-md-2.me-5
      Bird.fill-dark.img-fluid(style="transform: rotate(-10deg);")
  .row.mb-n4.mt-n5
    Gras.fill-dark
</template>
<script>
import {
  defineComponent,
} from 'vue'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
import Orchard from '~/assets/images/orchard.svg';
import Gras from '~/assets/images/gras.svg';
import Bee from '~/assets/images/bee.svg';
import Bird from '~/assets/images/bird.svg';
import Sharing from '~/assets/images/sharing.svg';
import PublicRelation from '~/assets/images/public-relation.svg';
import Counsellor from '~/assets/images/counsellor.svg';
import NatureProtection from '~/assets/images/nature-protection.svg';
import Gardening from '~/assets/images/gardening.svg';
import Roots from '~/assets/images/roots.svg';
export default defineComponent({
  components: {
    Orchard,
    Bee,
    Sharing,
    PublicRelation,
    Counsellor,
    NatureProtection,
    Gardening,
    Gras,
    Roots,
    Bird
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: Object,
    },
    feature_items: {
      type: Array
    },
    image_left: {
      type: Object,
    }
  },
  setup(props) {
    const resolver = new RichTextResolver()
    const htmlDescription = resolver.render(props.description)
    return {
      htmlDescription,
    }
  }
})
</script>

