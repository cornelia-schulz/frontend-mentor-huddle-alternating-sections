import '../assets/css/app.scss'

<template>
  <div class="container">
    <Header />
    <Blurb />
    <Illustrations />
    <Community />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue'
import Blurb from './components/blurb.vue'
import Illustrations from './components/illustrations.vue'
import Community from './components/community.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Blurb,
    Illustrations,
    Community,
    Footer
  }
}
</script>
