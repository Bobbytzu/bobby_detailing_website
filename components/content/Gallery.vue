<template>
  <article class="w-4/5 flex flex-col lg:flex-row gap-10">
    <section class="w-full lg:w-1/2 flex flex-col items-center gap-5">
      <h2 class="text-2xl font-bold "> Urmareste-ma </h2>
      <p class="text-xl text-wrap text-center"> 
        Da follow la pagina noastra de facebook si instagram pentru a sta la curent
      </p>
      <div class="flex flex-row gap-5">
        <NuxtLink aria-label="facebook" no-prefetch target="_blank" to="https://www.facebook.com/profile.php?id=100075685908141">
          <UIcon name="prime:facebook" class="size-12" />
        </NuxtLink>

        <NuxtLink aria-label="instagram" no-prefetch target="_blank" to="https://www.instagram.com/detailing_auto_iasi/">
          <UIcon name="prime:instagram" class="size-12" />
        </NuxtLink>
      </div>
    </section>
    
    <section class="w-full lg:w-1/2 flex flex-row flex-wrap justify-center gap-3">
      <USkeleton v-for="n in 8" :key="n" class="h-28 w-28" />
    </section>
  </article>
</template>

<script lang="ts" setup>

</script>

<style></style>