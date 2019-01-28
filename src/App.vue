import '../assets/css/app.scss'

<template>
  <div class="container">
    <Header />
    <Blurb />
    <Illustrations />
    <Community />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Blurb from './components/blurb.vue'
import Illustrations from './components/illustrations.vue'
import Community from './components/community.vue'
export default {
  components: {
    Header,
    Blurb,
    Illustrations,
    Community
  }
}
</script>
