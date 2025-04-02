// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols

import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
      '@nuxt/ui',
      '@nuxt/content',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxt/eslint',
      '@nuxt/scripts',
      '@nuxtjs/color-mode',
      '@nuxtjs/html-validator',
      '@primevue/nuxt-module',
      '@zadigetvoltaire/nuxt-gtm',
    ],
    app: {
        head: {
            title: 'Auto Detail Iasi',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
            ]
        },
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    css: ["~/assets/css/main.css"],
    vite: {plugins: [tailwindcss(),]},
    components: true, // Ensure auto-import of components
    image: {
        screens:{
            icon:70,
            icon2x:140
        }
    },
    content: {
        preview: {
            api: 'https://api.nuxt.studio'
        }
    },
    primevue: {
        options: {
            theme: {
                preset: Aura,
            },
        },
        autoImport: false,
        components: {
            include: ['ImageCompare'],
        },
        composables: {
            exclude: ['useToast'],
        },
    },
    runtimeConfig: {
        public: {
            gtm: {
                id: 'GTM-K6SQMZ8S', // Replace with your GTM ID
                compatibility:true,
                enabled: true, // Set to false if you want to disable it in some environments
                debug: false, // Set to true to enable console logs for debugging
                loadScript:true,
                enableRouterSync: true,
            },
        },
    },
})