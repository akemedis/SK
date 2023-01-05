module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        technica: "'Ubuntu', sans",
        signature: "'Akronim', serif",
        anu: "'anurati', sans",
      },
    },
  },
  plugins: [],
};
