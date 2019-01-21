import '../assets/app.scss'

<template>
  <div class="full-width center-content">
    <hello-component name="Conny" />
  </div>
</template>

<script>
import HelloComponent from './components/header.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>