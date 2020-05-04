import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Environment variables
   */
  env: {
    strPk: process.env.STR_PK,
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: 'VideoIdent.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'VideoIdent.me',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@assets/sass/base.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/matomo.js', mode: 'client' },
    { src: '~plugins/i18n-iso-countries.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', 'nuxt-i18n'],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true, // Can be also an object with default options
  },
  /*
   ** Proxy module configuration
   */
  proxy: {
    '/api/': {
      target: 'https://seven-staging.videoident.me/',
      pathRewrite: {
        '^/api/': '/api/',
      },
    },
  },
  /*
   ** nuxt-i18n locales module configuration
   */
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'ch/de',
        file: 'de_CH.js',
      },
      {
        code: 'ch/en',
        file: 'en_CH.js',
      },
    ],
    defaultLocale: 'ch/de',
    lazy: true,
    langDir: 'locales/',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.sass'],
    defaultAssets: {
      // Don't load roboto font, we don't use it
      font: false,
      icons: 'mdi',
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: {
            base: '#006FE6',
            lighten5: '#E7F1FC',
          },
          text: '#65728E',
          skribbleu: '#293D66',
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
