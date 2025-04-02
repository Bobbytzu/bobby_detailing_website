<script lang="ts" setup>
const {separatorText} = defineProps({
  separatorText: {
    type: String,
    default: undefined,
  }
});

</script>

<template>
  <USeparator v-if="separatorText" class="text-xl md:text-2xl lg:text-3xl w-4/5">
    <h1>{{separatorText}}</h1>
  </USeparator>
  <USeparator v-else class="w-4/5"/>
</template>

<style scoped>

</style>