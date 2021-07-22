// import Vue from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@/locales/locales'
// Vue.use(VueI18n)


function getLocale() {
  let localeSettings = localStorage.getItem('locale')
  if (!localeSettings) {
    if (navigator.language.startsWith('zh')) {
      localeSettings = 'zh'
    } else if (navigator.language.startsWith('en')) {
      localeSettings = 'en'
    } else {
      localeSettings = 'zh'
    }
    localStorage.setItem('locale', localeSettings)
  }
  return localeSettings
}


const myLocale = getLocale()
console.log('myLocale:', myLocale)
console.log(messages)

const i18n =createI18n({
  locale: myLocale || 'zh',
  silentTranslationWarn: true,
  messages
})

export default i18n
