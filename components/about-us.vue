<template lang='pug'>
section.position-relative.overflow-hidden.bg-white.min-vh-100.d-flex.flex-column.justify-content-center.snap-section#about-us
  .container
    .row
      slide-animation.col-md-5.d-flex.flex-column(direction="left")
        h2.near-black
          | {{title}}
        img.img-fluid.mt-auto.w-100(:src="image_left.filename")
      slide-animation.col-md-7(direction="right")
        p(v-html="htmlDescription")
</template>
<script>
import {
  defineComponent,
} from 'vue'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
export default defineComponent({
  props: {
    title: {
      type: String,
    },
    description: {
      type: Object,
    },
    image_left: {
      type: Object,
    }
  },
  setup(props) {
    const resolver = new RichTextResolver()
    const htmlDescription = resolver.render(props.description)
    return {
      htmlDescription
    }
  }
})
</script>
