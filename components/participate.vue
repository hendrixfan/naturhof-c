<template lang='pug'>
scroll-effect-section.position-relative.overflow-hidden.bg-white.d-flex.flex-column.justify-content-center#participate(effectImageUrl="public/angus.webp")
  .container.mb-5
    .row.my-5
      .col-lg-7
        h2.near-black {{title}}
    .row
      .col-12.col-xl-8
        .row.row-cols-2.row-cols-lg-2.g-2.g-lg-5.justify-content-center.project__grid
          .col(v-for="item in card_items")
            NuxtLink.project__link.text-decoration-none(:to="item?.link?.cached_url")
              card.h-100(
                v-bind="item"
                is-link
              )
</template>
<script>
export default defineComponent({
  props: {
    title: {
      type: String
    },
    card_items: {
      type: Array,
    }
  },
  setup(props) {
    return {
    }
  }
})
</script>
