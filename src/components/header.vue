
<template>
  <header>
    <Logo />
    <button>Try It Free</button>
  </header>
</template>

<script>
import Logo from '../../static/img/logo.svg'
export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
