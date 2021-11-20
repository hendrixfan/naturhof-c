<template lang='pug'>
.landscape(role="img" aria-label="This is equivalent to an img alt attribute.")
  .landscape__layer(v-for="scene in sceneConf" :key="scene.key")
    .landscape__image
      component(:is="scene.component")
</template>
<script>
import Layer0 from '~/assets/images/clouds.svg';
import Layer4 from '~/assets/images/valley.svg';
import Layer5 from '~/assets/images/valley_2.svg';
import Layer6 from '~/assets/images/see.svg';
import Layer7 from '~/assets/images/trees.svg';
import Layer8 from '~/assets/images/trees_2.svg';
import Layer9 from '~/assets/images/trees_3.svg';
import {
  defineComponent,
  ref
} from 'vue'
export default defineComponent({
  components: {
    Layer0,
    Layer4,
    Layer5,
    Layer6,
    Layer7,
    Layer8,
    Layer9
  },
  setup() {
    const sceneConf = ref([
      {
        component: "Layer0",
        key: "clouds"
      },
      {
        component: "Layer4",
        key: "see"
      },
      {
        component: "Layer5",
        key: "valley"
      },
      {
        component: "Layer6",
        key: "valley-1"
      },
      {
        component: "Layer7",
        key: "trees-1"
      },
      {
        component: "Layer8",
        key: "trees-2"
      },
      {
        component: "Layer9",
        key: "trees-3"
      }
    ])
    return {
      sceneConf
    }
  }
})
</script>
