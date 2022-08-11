import VueGtag from "vue-gtag";
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-Z91HXCF52T'
        }
    })
})
