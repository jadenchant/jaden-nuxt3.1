// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  nitro: {
    preset: 'node-server',
    plugins: ['~/server/index.ts'],
  },

  modules: ['@nuxt/image', 'nuxt-icons', '@tresjs/nuxt', '@nuxtjs/device'],

  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  device: {
    refreshOnResize: true,
  },
});
