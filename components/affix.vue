<template lang='pug'>
.affix(ref="root" :style="rootStyle")
  div(:class="{ 'position-fixed': state.fixed }" :style="affixStyle")
    slot
</template>
<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  shallowRef,
  watch,
} from 'vue'
import { useEventListener, useResizeObserver } from '@vueuse/core'
import { camelize } from '@vue/shared'

export default defineComponent({
  name: 'Affix',
  props: {
    zIndex: {
      type: [Number, String],
      default: 100,
    },
    target: {
      type: String,
      default: '',
    },
    offset: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      values: ['top', 'bottom'],
      default: 'top',
    }
  },
  emits: ["scroll", "change"],
  setup(props, { emit }) {
    const target = shallowRef()
    const root = shallowRef()
    const scrollContainer = shallowRef()
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0,
    })

    const rootStyle = computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : '',
        width: state.fixed ? `${state.width}px` : '',
      }
    })
    const affixStyle = computed(() => {
      if (!state.fixed) return
      const offset = props.offset ? `${props.offset}px` : 0
      const transform = state.transform
        ? `translateY(${state.transform}px)`
        : ''
      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === 'top' ? offset : '',
        bottom: props.position === 'bottom' ? offset : '',
        transform,
        zIndex: props.zIndex,
      }
    })
    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value) return
      const rootRect = root.value.getBoundingClientRect()
      const targetRect = target.value.getBoundingClientRect()
      state.height = rootRect.height
      state.width = rootRect.width
      state.scrollTop =
        scrollContainer.value instanceof Window
          ? document.documentElement.scrollTop
          : scrollContainer.value.scrollTop
      state.clientHeight = document.documentElement.clientHeight
      if (props.position === 'top') {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0
          state.transform = difference < 0 ? difference : 0
        } else {
          state.fixed = props.offset > rootRect.top
        }
      } else {
        if (props.target) {
          const difference =
            state.clientHeight - targetRect.top - props.offset - state.height
          state.fixed =
            state.clientHeight - props.offset < rootRect.bottom &&
            state.clientHeight > targetRect.top
          state.transform = difference < 0 ? -difference : 0
        } else {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom
        }
      }
    }
    const onScroll = () => {
      update()
      emit('scroll', {
        scrollTop: state.scrollTop,
        fixed: state.fixed,
      })
    }

    const getStyle = function(element, styleName) {
      if (!element || !styleName) return null
      styleName = camelize(styleName)
      if (styleName === 'float') {
        styleName = 'cssFloat'
      }
      try {
        const style = element.style[styleName]
        if (style) return style
        const computed = document.defaultView.getComputedStyle(element, '')
        return computed ? computed[styleName] : ''
      } catch (e) {
        return element.style[styleName]
      }
    }

    const isScroll = (el, isVertical) => {
      const determinedDirection = isVertical === null || isVertical === undefined
      const overflow = determinedDirection
        ? getStyle(el, 'overflow')
        : isVertical
          ? getStyle(el, 'overflow-y')
          : getStyle(el, 'overflow-x')

      return overflow.match(/(scroll|auto|overlay)/)
    }

    const getScrollContainer = (el, isVertical) => {
      let parent = el
      while (parent) {
        if ([window, document, document.documentElement].includes(parent)) {
          return window
        }
        if (isScroll(parent, isVertical)) {
          return parent
        }
        parent = parent.parentNode
      }
      return parent
    }

    watch(
      () => state.fixed,
      () => {
        emit('change', state.fixed)
      }
    )
    onMounted(() => {
      if (props.target) {
        target.value =
          document.querySelector(props.target) ?? undefined
        if (!target.value) {
          throw new Error(`Target is not existed: ${props.target}`)
        }
      } else {
        target.value = document.documentElement
      }
      scrollContainer.value = getScrollContainer(root.value, true)
    })
    useEventListener(scrollContainer, 'scroll', onScroll)

    return {
      root,
      state,
      rootStyle,
      affixStyle,
      update,
    }
  },
})
</script>
