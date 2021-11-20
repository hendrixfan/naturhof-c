<template lang='pug'>
div(ref="animationEl")
  slot
</template>
<script>
import { useMotion } from "@vueuse/motion";
import {
  defineComponent,
  ref
} from 'vue'
export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'left'
    }
  },
  setup(props) {
    const animationEl = ref()

    const slideRight = {
      initial: {
        x: 100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 300,
          duration: 500,
          onComplete: () => stop(),
        },
      },
    }

    const slideLeft = {
      initial: {
        x: -100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 300,
          duration: 500,
          onComplete: () => stop(),
        },
      },
    }
    const { stop } = useMotion(animationEl, props.direction=="left" ? slideLeft : slideRight)
    return {
      animationEl
    }
  }
})
</script>
