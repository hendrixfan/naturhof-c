import { ScrollSpy } from 'bootstrap';
const setupScrollnav = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var scrollSpy = new ScrollSpy(document.body, {
      target: '#main-nav'
    })
  }, false);
}

export default setupScrollnav
