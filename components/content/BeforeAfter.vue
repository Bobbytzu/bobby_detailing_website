<script lang="ts" setup>
import componentData from '@/content/indexPage/beforeAfter.json'

interface ImageItem {
  src: string
  alt: string
}

const image1 = componentData.images[0] as ImageItem
const image2 = componentData.images[1] as ImageItem
const title = componentData.title
const description = componentData.description

</script>

<template>
  <section class="flex flex-col xl:flex-row items-center xl:items-start w-3/4 lg:w-4/5 xl:w-2/3 gap-8">
    <!-- Image Comparison -->
      <ImageCompare pt:slider:aria-label="Comparatie Imagini" >
        <template #left>
          <NuxtImg 
            :alt="image1.alt"
            :src="image1.src"
            format="webp"
            width="1280"
            height="720"
            class="rounded-lg object-cover h-auto"
            loading="lazy"
          />
        </template>
        <template #right>
          <NuxtImg 
            :alt="image2.alt"
            :src="image2.src"
            format="webp"
            width="1280"
            height="720"
            class="rounded-lg object-cover h-auto"
            loading="lazy"
          />
        </template>
      </ImageCompare>


    <!-- Text Content -->
    <div class="w-full xl:w-2/5 px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-2">
        {{title}}
      </h2>
      <p class="text-base md:text-lg">
        {{description}}
      </p>
    </div>
  </section>
</template>
