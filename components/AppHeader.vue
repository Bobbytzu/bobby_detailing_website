<template>
  <header>
    <nav class="w-full px-10 lg:px-15 xl:px-20 py-5 flex flex-row gap-5 justify-between items-center bg-slate-950">
      <NuxtLink to="/" class="flex flex-row items-center">
        <NuxtImg 
          alt="Booby Detailing Auto Logo" 
          format="webp" 
          sizes="70px lg:100px xl:120px" 
          densities="x1 x2"
          src="/logo.jpeg"  
        />
        <h1 class="text-2xl md:text-3xl font-bold pl-5">
          Detailing Auto Iasi
        </h1>
      </NuxtLink>
      <div class="hidden lg:flex">
        <HeaderMenu />
      </div>
      <div class="flex items-center lg:hidden">
        <USlideover 
          :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full'
          }" 
          title="Meniu" 
          variant="subtle"
        >
          <UButton color="primary" icon="prime:bars" size="xl" variant="subtle" name="Meniu"/>
          <template #body>
            <LazyHeaderMenu hydrate-on-media-query="(max-width:1023px)" />
          </template>
        </USlideover>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>