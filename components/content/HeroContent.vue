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
  <div class="w-full p-10">
    <div class="flex flex-col lg:flex-row w-4/5 items-center mx-auto">

      <div class="flex flex-col align-start pr-10">
        <h3 class="text-3xl font-bold">
          <slot name="title"/>
        </h3>
        <p class="py-6">
          <slot name="description"/>
        </p>
      </div>

      <UCarousel
          v-slot="{ item }"
          fade
          loop
          :autoplay="{ delay: 2000 }"
          :items="props.images"
          class="w-full max-w-lg"
      >
        <NuxtImg :src="item.src" :alt="item.alt" fit="cover" width="420" height="320" class="rounded-lg"/>
      </UCarousel>
    </div>
  </div>
</template>

<style scoped>

</style>