// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: true,
  modules: ['@nuxtjs/supabase', 
  '@pinia/nuxt', 
  '@sidebase/nuxt-session',
  '@vueuse/nuxt',
  '@nuxtjs/google-fonts',
  '@nuxt/content'
  ],

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Gamja Flower': true,
      'EB Garamond': {
        wght: [400, 500, 600],
        ital: [100]
      },
      'Cormorant': {
        wght: [400, 500, 600],
        ital: [100]
      },
      'Alegreya': {
        wght: [400, 500, 600],
        ital: [400]
      },
      'Cardo': {
        wght: [400],
        ital: [400]
      }
    },
    display: 'swap' 
  }
});
