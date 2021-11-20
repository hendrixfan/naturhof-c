<template lang='pug'>
NuxtLink.col.text-decoration-none.project__link(:to="'/project/' + slug")
  .card.project-preview.bg-none.border-0
    img.project-preview__image(:src="images[0]?.filename")
    h3.mt-3
      | {{ name }}
    p
      | {{ teaser }}
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  props: {
    slug: {
      type: String,
    },
    name: {
      type: String,
    },
    teaser: {
      type: String,
    },
    images: {
      type: Array,
    }
  },
  components: {
  },
  setup(props) {
    return {
    }
  }
})
</script>
