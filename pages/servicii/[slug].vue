<script setup>

const route = useRoute()
const {data: home} = await useAsyncData(() =>
    queryCollection('services').path(route.path).first())

const title = home.value?.title
const shortDescription = home.value?.description
const longDescription = home.value.meta?.longDescription
const price = home.value?.price


const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

</script>

<template>
  <div class="min-h-[50vh] py-10 pl-10 flex flex-col gap-10 w-full">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <div class="flex flex-col lg:flex-row gap-10 items-start">
      <div class="flex flex-col gap-10 text-xl w-1/2">
        <p>{{ shortDescription }}</p>
        <p>{{ longDescription }}</p>
      </div>
      <UCarousel
          v-slot="{ item }"
          :autoplay="{ delay: 2000 }"
          :items="items"
          arrows
          class="w-full max-w-xs mx-auto"
          fade
      >
        <img :src="item" class="rounded-lg" height="320" width="320">
      </UCarousel>
    </div>

    <div>
      <h6 class="text-2xl font-bold">
        Pret de la : {{ price }}*
      </h6>
    </div>

    <p>* Pretul final poate varia in functie de gradul de murdarie si dimensiunile masinii.</p>
  </div>
</template>

<style scoped>

</style>