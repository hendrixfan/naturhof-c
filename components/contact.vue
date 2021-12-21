<template lang='pug'>
scroll-effect-section.position-relative.overflow-hidden.bg-dark-shade.d-flex.flex-column.justify-content-center#contact(position="left" effectImageUrl="karlikopf.webp")
  .container.text-white.mt-5
    .row.mb-5
      .col-md-3
        h2.text-white
          | Kontakt
        hr.w-100.me-3
      .col-md-4.offset-md-1.text-white
        p.fs-5
          | Natur-Hof Chemnitz e.V.
          br
          | Lengefelder Straße 9
          br
          | 09125 Chemnitz
      .col-md-4
        p.fs-5.text-end
          | Tel. 0371/7254753
          br
          | Fax 0371/7254753
          br
          | Email:
          span.reverse
            |  {{email}}
  .container.pb-5
    .row.my-5.justify-content-center
      .col-lg-8
        contact-form
  .container-fluid.align-self-end.mt-auto
    .row.align-items-end.mt-5
      .col-md-5.offset-md-7
        .d-flex.mt-5
          .ratio.ratio-1x1
            iframe.lazyload(frameborder='0' scrolling='no' marginheight='0' marginwidth='0' data-src='https://www.openstreetmap.org/export/embed.html?bbox=12.93419122695923%2C50.79551258533433%2C12.937731742858888%2C50.79700112061798&layer=mapnik' style='border: 1px solid black; overflow: hidden;')
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  setup(props) {
    const email = computed(() => {
      return "natur-hof@t-online.de".split("").reverse().join("")
    })
    return {
      email
    }
  }
})
</script>
<style scoped>
span.reverse {
  unicode-bidi: bidi-override;
  direction: rtl;
}
</style>
