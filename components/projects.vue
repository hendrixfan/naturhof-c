<template lang='pug'>
section.position-relative.overflow-hidden.bg-dark.min-vh-100.d-flex.flex-column.justify-content-center#projects
  .container.my-5
    .row.justify-content-center
      .col-md-8
        h2.text-light.text-center
          | {{title}}
  .container-fluid.mx-0.px-0
  .row.min-vh-30.justify-content-center
    slide-animation.col-md-6(v-for="(item, index) in project_items"  :direction="index % 2 == (0 || 1) ? 'left' : 'right'")
      .d-flex.justify-content-center.flex-column.text-center.align-items-center.p-5
        component.bg-dust(:is="item.icon" style="clip-path: circle(50% at 50% 50%);" width="100" height="100")
        h5.text-light.mt-3 {{item.title}}
        hr.bg-light
        p.fs-4.text-light
          | {{item.teaser}}
        button.text-light.btn.btn-link.btn-lg.fw-bolder.text-decoration-none
          | mehr zum Projekt
          svg.bi.bi-arrow-up-right.fill-white.ms-2(xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewbox='0 0 16 16')
            path(fill-rule='evenodd' stroke="white" stroke-width="10" style="stroke-width: 2px;" d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z')
  .container-fluid.min-vh-100.d-flex.flex-column.justify-content-center.overflow-hidden
    .glide(ref="glideEl")
      .glide__track(data-glide-el="track")
        ul.glide__slides
          li.glide__slide.d-flex.justify-content-center(v-for="slideItem in slide_items")
            img.lazyload.img-fluid.rounded.flex-fill(:data-src="slideItem.image_item.filename" :title="slideItem.image_item.filename.title" style="max-height: 700px; object-fit: contain; background: var(--bs-gray-600);")
      .row.justify-content-center.mt-5
        .col-md-10
          .glide__arrows.d-flex.justify-content-between.mb-3(data-glide-el='controls')
            button.text-white.glide__arrow--left.btn.btn-link.btn-lg.text-decoration-none(data-glide-dir='<' @click="handleGlideClick")
              svg.bi.bi-chevron-compact-left.me-2(xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewbox='0 0 16 16' width="16" height="16")
                path(fill-rule='evenodd' d='M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z')
              | zurück
            .text-white.align-self-center.fs-5
              | {{currentTitle}}
            button.text-white.glide__arrow--right.btn.btn-link.btn-lg.text-decoration-none(data-glide-dir='>' @click="handleGlideClick")
              | weiter
              svg.bi.bi-chevron-compact-right.ms-2(xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewbox='0 0 16 16' width="16" height="16")
                path(fill-rule='evenodd' d='M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z')

</template>
<script>
import {
  defineComponent,
} from 'vue'
import Roots from '~/assets/images/roots.svg';
import Glide, { Controls, Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import Orchard from '~/assets/images/orchard.svg';
import Bee from '~/assets/images/bee.svg';
import Sharing from '~/assets/images/sharing.svg';
import PublicRelation from '~/assets/images/public-relation.svg';
import Counsellor from '~/assets/images/counsellor.svg';
import NatureProtection from '~/assets/images/nature-protection.svg';
import Gardening from '~/assets/images/gardening.svg';
import Cow from '~/assets/images/cow.svg';
export default defineComponent({
  components: {
    Roots,
    Orchard,
    Bee,
    Sharing,
    PublicRelation,
    Counsellor,
    NatureProtection,
    Gardening,
    Cow
  },
  name: "projects",
  props: {
    title: {
      type: String,
    },
    project_items: {
      type: Array,
    },
    slide_items: {
      type: Array,
    },
  },
  setup(props) {
    const glideEl = ref(null)
    const glideInstance = ref(null)
    const currentImageIndex = ref(0)

    const handleGlideClick = () => {
      currentImageIndex.value = glideInstance.value?.index || 0
    }

    const currentTitle = computed(
      () =>
        props.slide_items[currentImageIndex.value].image_item.title
    )
    onMounted(() => {
      glideInstance.value = new Glide(glideEl.value, {
        type: 'carousel',
        startAt: 0,
        focusAt: 'center',
        gap: 10,
        perView: 1,
        peek: { before: 100, after: 50 },
        breakpoints: {
          1024: {
            startAt: 0,
            perView: 2,
            dragThreshold: 120,
          },
          600: {
            startAt: 0,
            perView: 1,
            dragThreshold: 120,
          }
        },
      }).mount({
        Controls,
        Autoplay,
        Breakpoints
      })
    })
    return {
      handleGlideClick,
      currentTitle,
      glideInstance,
      glideEl,
      currentImageIndex
    }
  }
})
</script>
