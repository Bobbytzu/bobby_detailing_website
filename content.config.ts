// noinspection JSUnusedGlobalSymbols

import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        mainPages: defineCollection({
            type: 'page',
            source:'*.md',
        }),
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        services: defineCollection({
            type: 'page',
            source: 'servicii/*.md',
            schema: z.object({
                title: z.string(),
                shortDescription: z.string(),
                longDescription: z.string(),
                price: z.number(),
                imagePath: z.string(),
                order: z.number()
            })
        })
    }
})

