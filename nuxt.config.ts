// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', 
  '@pinia/nuxt', 
  '@sidebase/nuxt-session',
  '@vueuse/nuxt',
  '@nuxtjs/google-fonts'
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
    },
    display: 'swap' 
  }
});
