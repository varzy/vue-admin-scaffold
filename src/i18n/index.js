import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { PRIMARY_LOCALE } from '@/config/constants';

import zh from './locales/zh';
import en from './locales/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: PRIMARY_LOCALE,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { zh, en }
});

// const loadedLanguages = [PRIMARY_LOCALE];
//
// export const loadLanguage = lang => {
//   if (i18n.locale === lang || loadedLanguages.includes(lang)) {
//     Store.commit('lang/CHOOSE_LANGUAGE', lang);
//     return Promise.resolve(lang);
//   }
//
//   return import(/* webpackChunkName: "lang-[request]" */ `./locales/${lang}`).then(message => {
//     i18n.setLocaleMessage(lang, message.default);
//     loadedLanguages.push(lang);
//
//     Store.commit('lang/CHOOSE_LANGUAGE', lang);
//     return Promise.resolve(lang);
//   });
// };

export default i18n;
