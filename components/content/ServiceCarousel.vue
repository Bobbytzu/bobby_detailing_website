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
    <UCarousel
        v-slot="{ item }"
        loop
        dots
        auto-scroll
        wheel-gestures
        :items="props.images"
        :ui="{ item: 'basis-2/3' }"
        class="w-full"
    >
      <NuxtImg :src="item.src" :alt="item.alt" format="webp" width="500px" densities="x1 x2" class="rounded-lg max-h-[200px] md:max-h-[350px] lg:max-h-[450px] xl:max-h-[550px] object-cover"/>
    </UCarousel>
</template>

<style scoped>

</style>