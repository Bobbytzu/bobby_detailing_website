<script lang="ts" setup>
const items = [
  "/Bentley_after.jpeg",
  "/Bentley_before.jpeg",
]
</script>

<template>
  <div class="w-full p-10">
    <div class="flex flex-col lg:flex-row w-4/5 items-center mx-auto">

      <div class="flex flex-col align-start pr-10">
        <h1 class="text-3xl font-bold">Modul meu de lucru</h1>
        <p class="py-6">
          Cu peste un deceniu de experiență în detailing-ul auto, ofer servicii premium pentru clienții care își
          doresc perfecțiune, servicii la standarde înalte și nu numai. Folosesc doar echipamente moderne și de ultimă
          generație, împreună cu produse de top pentru a reda frumusețea și strălucirea mașinii tale.
        </p>
      </div>

      <UCarousel
          v-slot="{ item }"
          fade
          loop
          :autoplay="{ delay: 2000 }"
          :items="items"
          class="w-full max-w-lg"
      >
        <NuxtImg :src="item" fit="cover" width="420" height="320" class="rounded-lg"/>
      </UCarousel>
    </div>
  </div>
</template>
