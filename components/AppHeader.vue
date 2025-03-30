<template>
  <header>
    <div
        class="w-full px-15 lg:px-20 xl:px-30 py-5 flex flex-row justify-between items-center sticky top-0 bg-slate-950">
      <div class="flex flex-row items-center">
        <NuxtLink to="/">
          <NuxtImg format="webp" sizes="xs:80px lg:120px" src="/logo.jpeg"/>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <HeaderMenu/>
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
          <UButton color="primary" icon="prime:bars" size="lg" variant="subtle"/>
          <template #body>
            <LazyHeaderMenu  hydarate-on-media-query="(max-width:1023px)"/>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style>