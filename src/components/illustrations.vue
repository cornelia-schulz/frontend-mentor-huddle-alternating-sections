
<template>
  <section class="illustrations">
    <div class="grow-top" />
    <article class="grow-together">
      <div class="illustration-text">
        <h2>{{ $t("growtogether") }}</h2>
        <p>{{ $t("meaningfuldiscussions") }}</p>
      </div>
      <GrowTogether
        view-box="0 0 20 10"
        width="100"
        class="illustration"
      />
    </article>
    <div class="grow-bottom" />
    <article class="flowing-conversation">
      <FlowingConversation />
      <div class="illustration-text">
        <h2>{{ $t("flowingconversations") }}</h2>
        <p>{{ $t("paginateconversation") }}</p>
      </div>
    </article>
    <div class="users-top" />
    <article class="your-users">
      <div class="illustration-text">
        <h2>{{ $t("yourusers") }}</h2>
        <p>{{ $t("notimeatall") }}</p>
      </div>
      <YourUsers />
    </article>
    <div class="users-bottom" />
  </section>
</template>

<script>
import EventBus from '../../event-bus.js'
import GrowTogether from '../../static/img/illustration-grow-together.svg'
import FlowingConversation from '../../static/img/illustration-flowing-conversation.svg'
import YourUsers from '../../static/img/illustration-your-users.svg'
export default {
  name: 'Illustrations',
  components: {
    GrowTogether,
    FlowingConversation,
    YourUsers
  },
  created () {
    EventBus.$on('changeLanguage', (lang) => {
      this.$i18n.i18next.changeLanguage(lang)
    })
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
