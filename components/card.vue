<template lang='pug'>
.card.border-0.bg-primary
  .card-body.d-flex.flex-column
    .card__divider.my-3.bg-white
    h5.card-title.text-white.flex-grow-1(v-if="teaser") {{teaser}}
    //img.card__image(:src="image.filename" v-if="image")
  .card-footer.border-0.m-0.bg-transparent
    .d-flex.my-3.align-items-center.justify-content-between
      h3.card-subtitle.text-white {{title}}
      svg.img-fluid(v-if="isLink" xmlns='http://www.w3.org/2000/svg' viewbox='0 0 56.569 56.569' fill='white' style='box-shadow: none; border-radius: 0px; opacity: 1; width: 4rem; height: 4rem;' preserveaspectratio='xMidYMid meet' fill-opacity='1')
        path(d='M 24.068 44.068 L 28.284 48.284 L 48.284 28.284 L 28.284 8.284 L 24.068 12.5 L 36.869 25.302 L 8.284 25.302 L 8.284 31.266 L 36.869 31.266 L 24.068 44.068 Z' transform="matrix(0.707107, -0.707106, 0.707106, 0.707107, -11.715617, 28.283975)")
    .card__divider.mb-2.bg-white
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  props: {
    isLink: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
    },
    teaser: {
      type: String,
    },
    image: {
      type: Object,
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    }
  },
  setup(props) {
    return {
    }
  }
})
</script>

<style lang="scss">
.card {
  &__divider {
    height: 5px;
    background-color: rgb(207, 189, 209);
  }
  &__image {
    width: 100%;
    object-fit: cover;
    max-height: max(8rem, 20vh);
    aspect-ratio: 4/3;
    mix-blend-mode: var(--card-blend-mode);
  }
}
</style>
