<template lang='pug'>
button.btn.btn-dark.position-fixed(
  type="button"
  v-if="visible"
  @click.stop="handleClick"
  :style="{ right: styleRight, bottom: styleBottom}"
)
  svg.bi.bi-caret-up(xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewbox='0 0 16 16')
    path(d='M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z')
</template>
<script>
import { defineComponent, shallowRef, ref, onMounted, computed, toRefs, watch, onRenderTracked } from 'vue'
import { useEventListener, useThrottleFn, useTransition, TransitionPresets } from '@vueuse/core'
export default defineComponent({
  props: {
    target: {
      type: String,
      default: '',
    },
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
    triggerOnRender: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const visible = ref(false)
    const container = shallowRef()
    const el = shallowRef()
    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)

    const outputProgress = (progress) => {
      return useTransition(progress, {
        duration: 30,
        transition: TransitionPresets.easeInOutCubic,
      })
    }

    const scrollToTop = () => {
      if (!el.value) return
      const beginTime = Date.now()
      const beginValue = el.value.scrollTop
      const rAF = window.requestAnimationFrame
      const frameFunc = () => {
        if (!el.value) return
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - outputProgress(progress))
          rAF(frameFunc)
        } else {
          el.value.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }

    const handleScroll = () => {
      if (el.value) visible.value = el.value.scrollTop >= 700
    }
    const handleClick = (event) => {
      scrollToTop()
    }
    const handleScrollThrottled = useThrottleFn(handleScroll, 300)

    onMounted(() => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
        container.value = el.value
      }
      useEventListener(container, 'scroll', handleScrollThrottled)
    })

    return {
      visible,
      handleClick,
      styleBottom,
      styleRight
    }
  }
})
</script>
