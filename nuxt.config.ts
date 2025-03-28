// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    modules: [
        '@nuxt/ui',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        '@nuxt/image',
        '@nuxt/eslint',
        '@nuxt/content',
        '@nuxt/scripts',
        '@zadigetvoltaire/nuxt-gtm',
        '@primevue/nuxt-module'
    ],
    app: {
        head: {
            title: 'Bobby`s detail service',
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
    scripts: {
        registry: {
            googleTagManager: {
                id: 'G-Y0NJVKM8YW'
            }
        }
    },
    css: ["~/assets/css/main.css"],
    vite: {plugins: [tailwindcss(),]},
    components: true, // Ensure auto-import of components
    content: {
        preview: {
            api: 'https://api.nuxt.studio'
        }
    },
    image: {
        screens: {
            icon: 40,
            icon2x: 80
        }
    },
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'dark', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode'
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
                enabled: true, // Set to false if you want to disable it in some environments
                debug: false, // Set to true to enable console logs for debugging
            },
        },
    },
})