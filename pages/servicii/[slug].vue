<script setup>

const route = useRoute()
const {data: home} = await useAsyncData(() =>
    queryCollection('servicii').path(route.path).first())

const title = home.value?.title
const longDescription = home.value?.longDescription
const price = home.value?.price

</script>

<template>
  <div class="min-h-[50vh] py-10 pl-10 flex flex-col gap-10 w-full">
    <h2 class="text-2xl lg:text-3xl font-bold self-center">{{ title }}</h2>
    <div class="w-full flex flex-col gap-20">
      <div class="flex flex-col-reverse lg:flex-row gap-10 text-lg lg:text-xl w-full">
        <ContentRenderer class="w-2/3 lg:pr-10 flex mx-auto lg:justify-end" :value="home"/>
      </div>
      <p class="text-x">{{ longDescription }}</p>
    </div>

    <div>
      <h3 class="text-2xl font-bold">
        Pret de la : {{ price }}*
      </h3>
    </div>

    <p>* Prețul final poate varia în funcție de dimensiunile mașinii și complexitatea lucrării.</p>
  </div>
</template>

<style scoped>

</style>