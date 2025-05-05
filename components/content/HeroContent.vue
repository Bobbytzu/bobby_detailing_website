<script lang="ts" setup>
import componentData from '@/content/indexPage/heroContent.json'

interface ImageItem {
  src: string
  alt: string
}

const images: ImageItem[] = componentData.images
const title = componentData.title
const description = componentData.description

</script>


<template>
  <article class="w-full h-full p-10 flex flex-col lg:flex-row items-center justify-center">

    <section class="h-full flex flex-col max-w-4/5 lg:w-2/5 lg:pr-10 items-start">
      <h2 class="text-3xl font-bold self-center">
        {{ title }}
      </h2>
      <p class="py-6 text-lg">
        {{ description }}
      </p>
    </section>

    <UCarousel v-slot="{ item }" :autoplay="{ delay: 2000 }" :items="images" class="max-w-4/5 lg:w-2/5 flex" fade loop>
      <NuxtImg 
        :alt="(item as ImageItem).alt" 
        :src="(item as ImageItem).src" 
        class="rounded-lg" 
        format="webp"
        fit="cover" 
        height="720" 
        width="1240" />
    </UCarousel>
    
  </article>
</template>

<style scoped></style>