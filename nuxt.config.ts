// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  nitro: {
    preset: 'node-server',
    plugins: ['~/server/index.ts'],
  },

  modules: ['nuxt-icons'],

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
