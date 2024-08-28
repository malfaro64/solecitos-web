import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  vite: {
    plugins: [
      vuetify()
    ]
  },

  compatibilityDate: '2024-08-27'
})