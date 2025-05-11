// https://nuxt.com/docs/api/configuration/nuxt-config
// noinspection JSUnusedGlobalSymbols

import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    // Module
    modules: [
      '@nuxtjs/seo',
      '@nuxt/ui',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@primevue/nuxt-module',
      '@zadigetvoltaire/nuxt-gtm',
      '@nuxt/icon',
      '@nuxt/eslint',
      '@nuxt/scripts',
      '@nuxtjs/html-validator',
      '@nuxtjs/partytown',
      '@nuxtjs/fontaine',
      '@nuxtjs/sitemap', 
      '@nuxt/content',
      '@nuxtjs/robots'
    ],

    buildModules: [
        '@unlighthouse/nuxt',
    ],

    // Starting SEO
     site: {  
        url: 'https://detailingautoiasi.ro'
    }, 
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Bobby`s Detailing Auto Iasi',
            meta:[
                {name: 'description', content:'Servicii profesionale de detailing auto in Iasi. Interior, exterior, polish, faruri si mai multe.'},
                {name:'robots', content:'index, follow'},
                {property:'og:title', content: 'Bobby`s Detailing Auto Iasi - Servicii Profesionale'},
                {property:'og:description', content:'Servicii premium ce asigura calitate superioara pentru orice tip de masina.'},
                {property:'og:type', content:'website'},
                {property:'og:url', content:'https://detailingautoiasi.ro/'},
                {property:'og:image', content:'https://detailingautoiasi.ro/og-image.jpeg'},
            ],
            htmlAttrs: {
                lang: 'ro',
            },
            link: [
                { rel: 'canonical', href: 'https://detailingautoiasi.ro/' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        },
    },
   
    //Configurations
    nitro: {
        compressPublicAssets: true,
    },
    routeRules: {
        '/':{prerender:true},
        '/servicii/**': { prerender: true },
        '/blog/**': { isr: true },
        '/povestea-mea': {isr:true},
        '/sitemap.xml': { prerender: true }
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    css: ["~/assets/css/main.css"],
    vite: { 
        plugins: [tailwindcss(),],
        build: {
          cssCodeSplit: true,
          // Optimize chunk size
          chunkSizeWarningLimit: 1000,
          rollupOptions: {
            output: {
              manualChunks: {
                // Group vendor packages to reduce requests
                vendor: ['vue', 'vue-router'],
                // Separate your UI framework if applicable
                ui: ['tailwindcss']
              }
            }
          }
        },
      },
    components: true, // Ensure auto-import of components
    image: {
        screens: {
            icon: 70,
            icon2x: 140,
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },

        domains: ['img.youtube.com', 'i.vimeocdn.com'],

        alias: {
            youtube: 'https://img.youtube.com',
            vimeo: 'https://i.vimeocdn.com',
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
                compatibility: true,
                enabled: true, // Set to false if you want to disable it in some environments
                debug: false, // Set to true to enable console logs for debugging
                loadScript: true,
                enableRouterSync: true,
            },
        },
    },
})