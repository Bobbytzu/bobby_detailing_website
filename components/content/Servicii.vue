<script setup lang="ts">
import Servicii from "~/components/servicii/ServiciiList.vue";

const props = defineProps({
  limit: {
    type: Number,
    required: false,
    default: 0 // 0 means show all
  }
});
</script>

<template>
  <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 w-full h-full mx-auto">
    <Servicii :limit="props.limit"/>
    <div class="mt-4 text-center">
      <UButton active active-color="primary" color="secondary" size="md" to="/servicii"
               trailing-icon="material-symbols:arrow-outward" variant="outline">+ {{ 5 - props.limit }}
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>