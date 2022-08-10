import path from 'path'
import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const paths = {
  icons: path.resolve(process.cwd(), 'assets/icons')
}

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
      eslintPlugin(),
      createSvgIconsPlugin({
        iconDirs: [paths.icons],
        symbolId: 'icon-[dir]-[name]'
      })
    ]
  }
})
