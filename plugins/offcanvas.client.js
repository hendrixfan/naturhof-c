import { Offcanvas } from 'bootstrap';

const setupOffcanvas = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new Offcanvas(offcanvasEl)
    })
  })
}

export default setupOffcanvas
