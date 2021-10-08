import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import '@icon-park/vue-next/styles/index.css';
import { createI18n } from 'vue-i18n'
import {getSysLocale} from './utils/browser_tools'
import {initFunctions} from './utils/func_tools'
initFunctions()

import TranslatePlugin from './utils/translate_plugin'
import locale_en from './locale/locale_en'
import locale_cn from './locale/locale_cn'
import locale_jap from './locale/locale_jp'

console.log('locale_cn')
console.log('locale_en:', locale_en)


const i18n = createI18n({
  locale: getSysLocale(),
  messages: {
    en: locale_en,
    cn: locale_cn,
    jp: locale_jap
  }
})



createApp(App).use(store).use(i18n).use(router).use(TranslatePlugin, {i18n: i18n}).mount('#app')
