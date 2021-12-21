<template lang='pug'>
section.position-relative.overflow-hidden.min-vh-30.bg-dark.mt-n1.d-flex.flex-column.justify-content-center
  .container.mt-3
    .row.justify-content-center: .col-lg-8
      .card.bg-none.border-2.border-light
        h3.card-title.position-relative.text-white.text-center.w-25.bg-dark.ms-5(style="margin-top: -1.2rem !important;")
          | {{title}}
        .card-body
          p.text-left.link-light.fs-5.text-white.text-decoration-none(v-html="htmlDescription")
</template>
<script>
import {
  defineComponent,
} from 'vue'
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
export default defineComponent({
  name: "announcement",
  props: {
    title: {
      type: String,
    },
    description: {
      type: Object,
    }
  },
  setup(props) {
    const resolver = new RichTextResolver()
    const htmlDescription = ref(null)
    onMounted(() => {
      htmlDescription.value = resolver.render(props.description)
    })
    return {
      htmlDescription
    }
  }
})
</script>
