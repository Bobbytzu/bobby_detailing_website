<script setup>

const route = useRoute()
const {data: home} = await useAsyncData(() =>
    queryCollection('services').path(route.path).first())

const title = home.value?.title
const shortDescription = home.value?.shortDescription
const longDescription = home.value?.longDescription
const price = home.value?.price


console.log(home)

</script>

<template>
  <div class="min-h-[50vh] py-10 pl-10 flex flex-col gap-10 w-full">
    <h1 class="text-2xl lg:text-3xl font-bold self-center">{{ title }}</h1>
    <div class="w-full flex flex-col gap-20">
      <div class="flex flex-col lg:flex-row gap-10 text-lg lg:text-xl w-full">
        <p class="w-1/2">{{ shortDescription }}</p>
        <ContentRenderer class="w-2/3 lg:pr-10 flex mx-auto lg:justify-end" :value="home"/>
      </div>
      <p>{{ longDescription }}</p>
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