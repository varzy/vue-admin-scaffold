import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Store from '../store/';
import { PRIMARY_LOCALE } from '@/config/constants';

// 简中
import zh from './locales/zh';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: PRIMARY_LOCALE,
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: { zh }
});

const loadedLanguages = [PRIMARY_LOCALE];

export const loadLanguage = lang => {
  if (i18n.locale === lang || loadedLanguages.includes(lang)) {
    Store.commit('lang/CHOOSE_LANGUAGE', lang);
    return Promise.resolve(lang);
  }

  return import(/* webpackChunkName: "lang-[request]" */ `./locales/${lang}`).then(message => {
    i18n.setLocaleMessage(lang, message.default);
    loadedLanguages.push(lang);

    Store.commit('lang/CHOOSE_LANGUAGE', lang);
    return Promise.resolve(lang);
  });
};

export default i18n;
