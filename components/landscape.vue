<template lang='pug'>
.landscape#parallax-landscape(role="img" aria-label="Landschaft Euba Parallax" style="min-height: 700px;")
  .landscape__layer(
     v-for="scene in sceneConf"
    :key="scene.key" :style="'--offset:' + scene.offset + '; --scrollPos: ' + y + 'px;'")
    .landscape__image
      component(:is="scene.component")
</template>
<script>
import Layer0 from '~/assets/images/clouds.svg';
import Layer4 from '~/assets/images/valley.svg';
import Layer5 from '~/assets/images/valley_2.svg';
import Layer6 from '~/assets/images/see.svg';
import Title from '~/assets/images/title.svg';
import Layer7 from '~/assets/images/trees.svg';
import Layer8 from '~/assets/images/trees_2.svg';
import Layer9 from '~/assets/images/trees_3.svg';
import LandscapeScene from '~/assets/other/data/landscape.json';
import { useWindowScroll } from '@vueuse/core';
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
    Title,
    Layer9
  },
  setup() {
    const { x, y } = useWindowScroll()
    const sceneConf = LandscapeScene
    return {
      y,
      sceneConf
    }
  }
})
</script>
