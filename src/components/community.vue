
<template>
  <section class="community">
    <h2>{{ $t("readytobuild") }}</h2>
    <button>{{ $t("getstarted") }}</button>
  </section>
</template>

<script>
import EventBus from '../../event-bus.js'
export default {
  name: 'Community',
  created () {
    EventBus.$on('changeLanguage', (lang) => {
      this.$i18n.i18next.changeLanguage(lang)
    })
  }
}
</script>
