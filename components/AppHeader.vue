<template>
  <header>
    <nav class="w-full px-15 md:px-20 lg:px-25 xl:px-30 py-5 flex flex-row justify-between items-center bg-slate-950">
      <NuxtLink to="/" class="flex flex-row items-center">
        <NuxtImg 
          alt="Booby Detailing Auto Logo" 
          format="webp" 
          sizes="70px lg:100px xl:120px" 
          densities="x1 x2"
          src="/logo.jpeg" 
          lazy 
        />
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
          <UButton color="primary" icon="prime:bars" size="lg" variant="subtle" />
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