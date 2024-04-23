import path from './presets/lara';
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
          unstyled: true
        },
        importPT: { from: path.resolve(__dirname, './presets/lara/') }      //import and apply preset   
    }
})
