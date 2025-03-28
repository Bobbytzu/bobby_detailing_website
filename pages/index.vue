<script lang="ts" setup>
const {data: page} = await useAsyncData('index', () => {
  return queryCollection('index').path('/').first()

})

</script>

<template>
  <div>
    <template v-if="page">
      <ContentRenderer :value="page" class="flex flex-col items-center w-full h-full gap-15 overflow-x-hidden"/>
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </div>
</template>


<style scoped>

</style>