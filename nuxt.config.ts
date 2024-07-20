export default defineNuxtConfig({
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  nitro: {
    preset: 'node-server',
    plugins: ['~/server/index.ts'],
    compressPublicAssets: true,
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

  compatibilityDate: '2024-07-13',
});
