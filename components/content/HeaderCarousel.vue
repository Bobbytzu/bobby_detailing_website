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
        class="w-full h-[540px]"
    >
      <NuxtImg :src="item.src" :alt="item.alt" fit="cover" format="webp" width="1920" height="580" class="rounded-lg"/>
    </UCarousel>
    <div class="w-full pl-10 pb-10 flex absolute bottom-0 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
      <slot name="title"/>
    </div>



  </div>
</template>

<style scoped>

</style>