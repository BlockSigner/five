import Vue from 'vue'
import countries from 'i18n-iso-countries'

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
countries.registerLocale(require('i18n-iso-countries/langs/de.json'))

Vue.prototype.$countries = countries
