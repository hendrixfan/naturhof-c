<template lang="pug">
.d-md-flex.vh-100.align-items-center
  .col-md-4.p-0.bg-dust.vh-100
    .row
      .col-12
        | zurück
    .text-white.d-md-flex.align-items-center.h-100.p-5.text-center.justify-content-center
      .logoarea.pt-5.pb-5
        h4
          | Projekte
        img(src="~/assets/images/naturhof-c-logo-white.svg?url" alt="" width="370" ref="logoEl")
  .col-md-8.p-0.bg-white.vh-100
    .row.d-flex
      .col-12.cover-images
        .image-wrapper
          img.img-fluid(src="https://www.natur-hof-chemnitz.de/Bilder/BeweidungLinks.jpg")
        .image-wrapper.flex-grow-1
          img.img-fluid(src="https://www.natur-hof-chemnitz.de/Bilder/BeweidungMitte.jpg")
        .image-wrapper
          img.img-fluid(src="https://www.natur-hof-chemnitz.de/Bilder/BeweidungRechts.jpg")
    .container.scroll-padding-base.max-vh-100.vh-100
      .row.justify-content-center
        .col-8
          h1.pb-5
            | Extentsivbeweidung in Chemnitz
          p
            |  Extensive Beweidung von Schutzgebieten mit Deutsch-Angus Rindern und Burenziegen
          p
            | Seit 1997 führen wir ein Projekt zur extensiven Beweidung von Schutzgebieten in der Stadt Chemnitz durch. An mehreren Standorten mit insgesamt mehr als 50 ha – u. a. im Naturschutzgebiet „Um den Eibsee“, einem ehemaligen militärischem Übungsgelände und im Flächennaturdenkmal „Draisdorfer Teiche“ – werden wertvolle Offenlandflächen durch eine ganzjährige Beweidung mit Deutsch-Angus-Rindern und seit Sommer 2004 auch mit Burenziegen gepflegt.
          hr
          p
           | Mit der Umsetzung des Vorhabens "Ökologischer/biologischer Landbau" konnte auf den geförderten landwirtschaftlichen Flächen durch eine stärkere Nutzung der Naturfunktionen während der Bewirtschaftung eine stoffliche Belastung des Bodenwassers sowie die Bodenerosion vermindert und die Vielfalt des Tier- und Pflanzenlebens gefördert werden. Generell trägt der ökologische/biologische Landbau durch seine schützende und verbessernde Wirkung zum aktiven Umweltschutz bei.
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  layout: "simple-layout",
  setup(props) {
    useMeta({
      meta: [
        { name: 'viewport', content: "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" }
      ],
      bodyAttrs: {
        class: 'overflow-hidden vh-100 d-block w-100 position-relative'
      }
    })
    return {
    }
  }
})
</script>
<style scoped>
p,
span {
 font-size:1.1rem;
 font-weight:200
}
@media (min-width:768px) {
 p,
 span {
  font-size:1.3rem
 }
}
@media (min-width:1024px) {
 p,
 span {
  font-size:1.4rem
 }
}
</style>
