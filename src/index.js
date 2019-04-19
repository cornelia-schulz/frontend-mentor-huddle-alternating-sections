import Vue from 'vue'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import App from './App.vue'
import en from './locales/en.json'
import de from './locales/de.json'

const locales = {
  en: en,
  de: de
}

Vue.use(VueI18Next)

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: locales.en },
    de: { translation: locales.de }
  }
})

const i18n = new VueI18Next(i18next)

if (document.getElementById('app')) {
  /* eslint-disable-next-line no-new */
  new Vue({
    el: '#app',
    i18n: i18n,
    render: h => h(App)
  })
}
