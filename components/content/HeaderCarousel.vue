<script lang="ts" setup>
const props = withDefaults(defineProps<{
  images?: { src: string; alt: string }[];
}>(), {
  images: () => [
    { src: '/background/audi_a7_oh.jpg', alt: 'Detailing audi' }
  ],
});
</script>

<template>
  <div class="relative w-full">
    <UCarousel
        v-slot="{ item }"
        fade
        loop
        :autoplay="{ delay: 5000 }"
        :items="props.images"
        class="w-full"
    >
      <NuxtImg :src="item.src" :alt="item.alt" format="webp" width="1920px" densities="x1 x2" class="rounded-lg max-h-[200px] md:max-h-[350px] lg:max-h-[450px] xl:max-h-[550px] object-cover lazy"/>
    </UCarousel>
    <div class="w-full pl-10 pb-10 flex absolute bottom-0 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
      <slot name="title"/>
    </div>



  </div>
</template>

<style scoped>

</style>