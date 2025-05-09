// noinspection JSUnusedGlobalSymbols

import {defineCollection, defineContentConfig, z} from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
    collections: {
        content: defineCollection(
            // adds the robots frontmatter key to the collection
            asSitemapCollection({
                type: 'page',
                source: '**/*.md',
            }),
        ),
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md',
            schema: z.object({
                date: z.string()
            })
        }),
        servicii: defineCollection({
                type: 'page',
                source: 'servicii/*.md',
                schema: z.object({
                    title: z.string(),
                    shortDescription: z.string(),
                    longDescription: z.string(),
                    price: z.number(),
                    imagePath: z.string(),
                    order: z.number()
                }),
        }),
    },
})

