<script lang="ts" setup>
const props = withDefaults(defineProps<{
  image1?: { src: string; alt: string },
  image2?: { src: string; alt: string };
}>(), {
  image1: () => ({src: '/porsche_red.jpeg', alt: 'Detailing Audi'}),
  image2: () => ({src: '/porsche_blue.jpeg', alt: 'Detailing Audi'}),
});
</script>

<template>
  <div class="card flex justify-center w-2/3">
    <ImageCompare class="shadow-lg rounded-2xl">
      <template #left>
        <NuxtImg :alt="props.image1.alt" :src="props.image1.src"/>
      </template>
      <template #right>
        <NuxtImg :alt="props.image2.alt" :src="props.image2.src"/>
      </template>
    </ImageCompare>
  </div>
  <div class="flex flex-col items-start w-2/3 mx-auto">
    <section>
      <h3 class="text-3xl font-bold">
        <slot name="title"/>
      </h3>
      <div>
        <slot class="text-xl" name="description"/>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>