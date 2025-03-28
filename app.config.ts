export default defineAppConfig({
    ui: {
        card: {
            slots: {
                root: 'rounded-[calc(var(--ui-radius)*2)]',
                header: 'p-4 sm:px-6',
                body: 'p-4 sm:p-6',
                footer: 'p-4 sm:px-6'
            },
            variants: {
                variant: {
                    solid: {
                        root: 'bg-(--ui-bg-inverted) text-(--ui-bg)'
                    },
                    outline: {
                        root: 'bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)'
                    },
                    soft: {
                        root: 'bg-(--ui-bg) divide-y divide-(--ui-border)'
                    },
                    subtle: {
                        root: 'bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)'
                    }
                }
            },
            defaultVariants: {
                variant: 'outline'
            }
        },
        slideover: {
            slots: {
                overlay: 'fixed inset-0 bg-(--ui-bg-elevated)/75',
                content: 'fixed bg-(--ui-bg) divide-y divide-(--ui-border) sm:ring ring-(--ui-border) sm:shadow-lg flex flex-col focus:outline-none',
                header: 'flex items-center gap-1.5 p-4 sm:px-6 min-h-16',
                wrapper: '',
                body: 'flex-1 overflow-y-auto p-4 sm:p-6',
                footer: 'flex items-center gap-1.5 p-4 sm:px-6',
                title: 'text-(--ui-text-highlighted) text-2xl font-bold',
                description: 'mt-1 text-(--ui-text-muted) text-sm',
                close: 'absolute top-4 end-4'
            },
            variants: {
                side: {
                    right: {
                        content: 'right-0 inset-y-0 w-2/3 max-w-sm'
                    },
                },
            },
        },

    }
})