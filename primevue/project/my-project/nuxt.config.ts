// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-primevue"],
  devtools: { enabled: true },
  primevue: {
    components: {
      include: ['Button', 'DataTable']
  },
    usePrimeVue: true,
    cssLayerOrder: 'reset,primevue'
},
  css: ["~/public/assets/css/main.css",'primevue/resources/themes/aura-light-green/theme.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
});
