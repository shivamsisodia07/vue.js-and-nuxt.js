import path from 'path';

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
