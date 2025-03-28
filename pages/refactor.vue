<template>

  <div class="flex flex-col items-center w-full h-full gap-15 overflow-x-hidden">
    <div class="relative">
      <NuxtImg alt="alt_audi" class="header-img" format="webp" height="540" src="/background/audi_a7_oh.jpg"
               width="1920"/>
      <div class="w-full pl-10 pb-10 flex absolute bottom-0 font-bold">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold">FINEST AUTO DETAILING SERVICE</p>
      </div>
    </div>

    <USeparator class="text-xl lg:text-3xl w-4/5" color="primary"><h6>Servicii Oferite</h6></USeparator>

    <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 w-full h-full mx-auto">
      <Servicii :limit="limit"/>
      <div class="mt-4 text-center">
        <UButton active active-color="primary" color="secondary" size="md" to="/servicii"
                 trailing-icon="material-symbols:arrow-outward" variant="outline">+ {{ 5 - limit }}
        </UButton>
      </div>
    </div>

    <USeparator class="w-4/5" color="primary"/>

    <BeforeAfter/>

    <USeparator class="w-4/5" color="primary"/>

    <Hero_section/>

  </div>
</template>

<script setup>
import Servicii from "~/components/servicii/ServiciiList.vue"
import BeforeAfter from "~/components/content/BeforeAfter.vue";
import Hero_section from "~/components/main_page/Hero_section.vue";

const limit = 2; // Show only the first 2 services
</script>

<style scoped>

</style>
