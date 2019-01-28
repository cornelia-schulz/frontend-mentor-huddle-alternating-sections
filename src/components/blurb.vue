
<template>
  <section class="blurb">
    <h1>Build The Community Your Fans Will Love</h1>
    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
    <button> Get Started For Free</button><br>
    <CentreImage />
    <div class="figures">
      <div class="left">
        <CommunityImage />
        <p>
          <span class="figure">
            1.4k+
          </span>
          <br>
          <span class="figure-description">
            Communities Formed
          </span>
        </p>
      </div>
      <div class="right">
        <SpeechImage />
        <p>
          <span class="figure">
            2.7m+
          </span>
          <br>
          <span class="figure-description">
            Messages Sent
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import CentreImage from '../../static/img/screen-mockups.svg'
import CommunityImage from '../../static/img/icon-communities.svg'
import SpeechImage from '../../static/img/icon-messages.svg'
export default {
  name: 'Blurb',
  components: {
    CentreImage,
    CommunityImage,
    SpeechImage
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
