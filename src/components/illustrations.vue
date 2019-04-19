
<template>
  <section class="illustrations">
    <div class="grow-top" />
    <article class="grow-together">
      <div class="illustration-text">
        <h2>Grow Together</h2>
        <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
      </div>
      <GrowTogether viewBox="0 0 20 10" width="100" class="illustration" />
    </article>
    <div class="grow-bottom" />
    <article class="flowing-conversation">
      <FlowingConversation />
      <div class="illustration-text">
        <h2>Flowing Conversations</h2>
        <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
      </div>
    </article>
    <div class="users-top" />
    <article class="your-users">
      <div class="illustration-text">
        <h2>Your Users</h2>
        <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
      </div>
      <YourUsers />
    </article>
    <div class="users-bottom" />
  </section>
</template>

<script>
import GrowTogether from '../../static/img/illustration-grow-together.svg'
import FlowingConversation from '../../static/img/illustration-flowing-conversation.svg'
import YourUsers from '../../static/img/illustration-your-users.svg'
export default {
  name: 'Illustrations',
  components: {
    GrowTogether,
    FlowingConversation,
    YourUsers
  }
}
</script>

<style lang='scss'>
  @import '../assets/css/app.scss'
</style>
