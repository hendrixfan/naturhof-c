<template lang='pug'>
section.position-relative.overflow-hidden.bg-dust.min-vh-100.d-flex.flex-column.justify-content-center.snap-section.px-4#projects
  .container-fluid
    .row.justify-content-center
      .col-md-12
        h2.near-black.text-center
          | {{title}}
      .col-md-8
        hr.center-square
    project-list
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  name: "projects",
  props: {
    title: {
      type: String,
    }
  },
  setup(props) {
    return {}
  }
})
</script>
