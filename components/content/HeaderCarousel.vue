<script lang="ts" setup>
import galleryData from '@/content/indexPage/headerCarousel.json'

interface ImageItem {
  src: string
  alt: string
}

const images: ImageItem[] = galleryData
</script>

<template>
    <UCarousel
        v-slot="{ item }"
        fade
        loop
        :autoplay="{ delay: 5000 }"
        :items="images"
        class="w-full"
    >
      <NuxtImg 
        :src="(item as ImageItem).src"
        :alt="(item as ImageItem).alt"
        width="1920"
        height="800"
        sizes="sm:768px md:1024px lg:1920px"
        class="rounded-lg max-h-[550px] object-cover"
        format="webp"
        loading="eager"
        fetchpriority="high"
        preload
      />
    </UCarousel>
</template>

<style scoped>
</style>