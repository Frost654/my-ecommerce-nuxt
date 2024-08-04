export default defineNuxtConfig({
  plugins: ['~/plugins/vuex.js'],
  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  compatibilityDate: '2024-08-04',
});