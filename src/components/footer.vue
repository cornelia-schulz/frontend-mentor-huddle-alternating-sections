<template>
  <section class="footer">
    <div class="footer-top" />
    <footer>
      <div class="social">
        <Logo class="logo" />
        <p>{{ $t("loremipsum") }}</p>
        <div class="contact">
          <Phone class="icon" />
          <p>{{ $t("phone") }}</p>
        </div>
        <div class="contact">
          <Email class="icon" />
          <p>{{ $t("email") }}</p>
        </div>
        <a href="http://www.facebook.com">
          <font-awesome-icon
            :icon="facebook"
            class="socialIcon"
          />
        </a>
        <a href="http://www.instagram.com">
          <font-awesome-icon
            :icon="instagram"
            class="socialIcon"
          />
        </a>
        <a href="http://www.twitter.com">
          <font-awesome-icon
            :icon="twitter"
            class="socialIcon"
          />
        </a>
      </div>
      <div class="newsletter">
        <h3>{{ $t("newsletter") }}</h3>
        <p>{{ $t("signuptonewsletter") }}</p>
        <div class="sign-up">
          <input
            type="email"
            name="email"
          >
          <button>{{ $t("subscribe") }}</button>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import EventBus from '../../event-bus.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../static/img/logo.svg'
import Phone from '../../static/img/icon-phone.svg'
import Email from '../../static/img/icon-email.svg'
export default {
  name: 'Footer',
  components: {
    Logo,
    Phone,
    Email,
    FontAwesomeIcon
  },
  data () {
    return {
      facebook: faFacebook,
      instagram: faInstagram,
      twitter: faTwitterSquare
    }
  },
  created () {
    EventBus.$on('changeLanguage', (lang) => {
      this.$i18n.i18next.changeLanguage(lang)
    })
  }
}
</script>
