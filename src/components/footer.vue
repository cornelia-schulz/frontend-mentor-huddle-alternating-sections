<template>
  <section class="footer">
    <div class="footer-top" />
    <footer>
      <div class="social">
        <Logo class="logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
        <div class="contact">
          <Phone />
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div class="contact">
          <Email />
          <p>example@huddle.com</p>
        </div>
      </div>
      <div class="newsletter">
        <h3>NEWSLETTER</h3>
        <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
        <div class="sign-up">
          <input type="email" name="email">
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import Logo from '../../static/img/logo.svg'
import Phone from '../../static/img/icon-phone.svg'
import Email from '../../static/img/icon-email.svg'
export default {
  name: 'Footer',
  components: {
    Logo,
    Phone,
    Email
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
