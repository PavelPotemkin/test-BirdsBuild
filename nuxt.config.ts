import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    components: {
        global: true,
        dirs: ['~/components']
    },

    css: [
        '@/assets/css/index.css'
    ]
})
