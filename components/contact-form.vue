<template lang='pug'>
form(name="contact" method="POST" data-netlify="true")
  .form-floating.mb-3
    input.bg-white(type="text" class="form-control" id="floatingInput" placeholder="name@example.com")
    label(for="floatingInput") Name
  .form-floating
    input.bg-white(type="email" class="form-control" id="floatingPassword" placeholder="Password")
    label(for="floatingInput") E-Mail
  .form-floating.mt-3
    textarea.form-control.bg-white(placeholder="Leave a comment here" id="floatingTextarea" style="height: 100px")
    label(for="floatingTextarea") Ihre Nachricht an uns
  .d-flex.justify-content-end.mt-3
    button.btn.btn-primary(type="submit")
      | abschicken
</template>
<script>
import {
  defineComponent,
} from 'vue'
export default defineComponent({
  setup(props) {
    return {
    }
  }
})
</script>
