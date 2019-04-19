
<template>
  <header>
    <Logo />
    <button>{{ $t("tryitfree") }}</button>
    <div>
      <button @click="changeLanguage('de')">
        DE
      </button>
      |
      <button @click="changeLanguage('en')">
        EN
      </button>
    </div>
  </header>
</template>

<script>
import Logo from '../../static/img/logo.svg'
export default {
  name: 'Header',
  components: {
    Logo
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.i18next.changeLanguage(lang)
    }
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
