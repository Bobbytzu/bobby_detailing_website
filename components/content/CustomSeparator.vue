<script lang="ts" setup>
const {separatorText} = defineProps({
  separatorText: {
    type: String,
    default: undefined,
  }
});

</script>

<template>
  <USeparator v-if="separatorText" class="text-2xl md:text-3xl w-4/5">
    <h2>{{separatorText}}</h2>
  </USeparator>
  <USeparator v-else class="w-4/5"/>
</template>

<style scoped>

</style>