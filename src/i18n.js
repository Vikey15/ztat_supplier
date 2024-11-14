import { createI18n } from 'vue-i18n'
import en from "./locales/en.json"
import ar from "./locales/ar.json"

// Create i18n instance
const i18n = createI18n({
  locale: 'en', // Set default language
  fallbackLocale: 'en',
  messages:{
    en,
    ar  
  },
})

export default i18n
