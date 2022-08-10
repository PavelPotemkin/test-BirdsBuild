import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  },

  css: [
    '@/assets/css/index.css'
  ],

  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
