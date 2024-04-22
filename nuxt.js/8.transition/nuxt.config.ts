// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    app: {
      layoutTransition: { name: 'layout', mode: 'out-in' }
    },
})
