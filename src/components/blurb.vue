
<template>
  <section class="blurb">
    <h1>{{ $t("buildthecommunity") }}</h1>
    <p>{{ $t("huddlereimagines") }}</p>
    <button>{{ $t("getstarted") }}</button><br>
    <CentreImage />
    <div class="figures">
      <div class="left">
        <CommunityImage />
        <p>
          <span class="figure">
            {{ $t("figure1") }}
          </span>
          <br>
          <span class="figure-description">
            {{ $t("communitiesformed") }}
          </span>
        </p>
      </div>
      <div class="right">
        <SpeechImage />
        <p>
          <span class="figure">
            {{ $t("figure2") }}
          </span>
          <br>
          <span class="figure-description">
            {{ $t("messagessent") }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import EventBus from '../../event-bus.js'
import CentreImage from '../../static/img/screen-mockups.svg'
import CommunityImage from '../../static/img/icon-communities.svg'
import SpeechImage from '../../static/img/icon-messages.svg'
export default {
  name: 'Blurb',
  components: {
    CentreImage,
    CommunityImage,
    SpeechImage
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
