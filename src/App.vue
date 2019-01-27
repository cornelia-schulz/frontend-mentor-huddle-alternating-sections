import '../assets/css/app.scss'

<template>
  <div class="container">
    <Header />
    <Blurb />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Blurb from './components/blurb.vue'
export default {
  components: {
    Header,
    Blurb
  }
}
</script>
