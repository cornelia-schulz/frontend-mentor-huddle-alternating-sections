
<template>
  <header>
    <h1>Hello {{ name }}</h1>
    <br>
    <ImageMe />
  </header>
</template>

<script>
import ImageMe from '../../static/img/icon-communities.svg'
export default {
  components: {
    ImageMe
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
