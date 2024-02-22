// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  nitro: {
    preset: 'node-server',
    plugins: ['~/server/index.ts'],
  },

  modules: ['nuxt-icons', '@tresjs/nuxt', '@nuxtjs/device', '@nuxt/image'],

  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: { dir: 'public/images' },

  // buildModules: [
  //   // Next Image module https://image.nuxtjs.org/components/nuxt-img
  //   [
  //     '@nuxt/image',
  //     {
  //       provider: 'static',
  //       dir: 'assets/img',
  //     },
  //   ],
  // ],
});
