<script lang="ts" setup>
</script>

<template>
  <main class="flex flex-col items-center w-full h-full gap-15 overflow-x-hidden">
    
    <HeaderCarousel/>

    <USeparator class="text-2xl md:text-3xl w-4/5">
      <h2>Servicii Oferite</h2>
    </USeparator>
    
    <Services :limit=2 />

    <USeparator class="text-2xl md:text-3xl w-4/5"/>

    <BeforeAfter/>

    <USeparator class="text-2xl md:text-3xl w-4/5"/>

    <Gallery/>

    <USeparator class="text-2xl md:text-3xl w-4/5"/>

    <HeroContent/>

  </main>
</template>


<style scoped>

</style>