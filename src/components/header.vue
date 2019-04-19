
<template>
  <header>
    <Logo />
    <div class="header-right">
      <button class="try">{{ $t("tryitfree") }}</button>
      <div class="language-menu">
        <button class="lang-selector" @click="changeLanguage('de')">
          DE
        </button>
        <span class="lang-selector">|</span>
        <button class="lang-selector" @click="changeLanguage('en')">
          EN
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import EventBus from '../../event-bus.js'
import Logo from '../../static/img/logo.svg'

export default {
  name: 'Header',
  components: {
    Logo
  },
  methods: {
    changeLanguage (lang) {
      EventBus.$emit('changeLanguage', lang)
      this.$i18n.i18next.changeLanguage(lang)
    }
  }
}
</script>
