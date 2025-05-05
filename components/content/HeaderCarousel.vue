<script lang="ts" setup>
import galleryData from '@/content/indexPage/headerCarousel.json'

interface ImageItem {
  src: string
  alt: string
}

const images: ImageItem[] = galleryData
</script>

<template>
  <div class="relative w-full">
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
        format="webp"
        width="1920px"
        height="800px" 
        class="rounded-lg max-h-[550px] aspect-[2.4/1] object-cover"
        fit="cover"
        priority
      />
    </UCarousel>
  </div>
</template>

<style scoped>
</style>