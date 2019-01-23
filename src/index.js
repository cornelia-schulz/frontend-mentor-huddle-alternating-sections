import Vue from 'vue'
import App from './App.vue'

if (document.getElementById('app')) {
  /* eslint-disable-next-line no-new */
  new Vue({
    el: '#app',
    render: h => h(App)
  })
}
