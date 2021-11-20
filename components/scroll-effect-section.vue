<template lang='pug'>
section.w-100.d-block(ref="sectionEl")
  slot
  img.position-absolute.bottom-0(:src="effectImageUrl", height="700" ref="imageEl")
</template>
<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  reactive,
  shallowRef,
  watch,
  ref
} from 'vue'
import { useScroll } from '@vueuse/gesture'
import { useWindowScroll } from '@vueuse/core'
import { useMotionProperties, useSpring } from '@vueuse/motion'
export default defineComponent({
  props: {
    effectImageUrl: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: "right"
    }
  },
  setup(props) {
    const sectionEl = ref()
    const imageEl = ref()
    const initXPos = -600
    const { x, y } = useWindowScroll()

    const { motionProperties } = useMotionProperties(imageEl, {
      [props.position]: initXPos
    })

    const { set, values, stop } = useSpring(motionProperties, {
      damping: 50,
      stiffness: 220,
    })

    const scrollHandler = (yValue) => {
      set({
        [props.position]: initXPos + (yValue/8)*1.3
      })
    }
    watch(y, (y, prevY) => {
      scrollHandler(y)
    })

    return {
      y,
      imageEl,
      sectionEl
    }
  }
})
</script>
