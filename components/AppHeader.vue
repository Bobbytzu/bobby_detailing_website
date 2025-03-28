<template>
  <header>
    <div
        class="w-full px-15 lg:px-20 xl:px-30 py-5 flex flex-row justify-between items-center sticky top-0 bg-slate-950">
      <div class="flex flex-row items-center">
        <NuxtLink to="/">
          <NuxtImg src="/logo.jpeg"  sizes="80px lg:120px"/>
        </NuxtLink>
      </div>
      <div v-if="width < 1024">
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
            <UButton color="primary" icon="material-symbols:menu-rounded" size="lg" variant="subtle"/>
            <template #body>
              <Header_menu/>
            </template>
          </USlideover>
        </div>
      </div>
      <div v-else>
        <Header_menu/>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Header_menu from "~/components/Header_menu.vue";
import {useWindowSize} from '@vueuse/core'

const {width} = useWindowSize()
</script>

<style scoped>

</style>