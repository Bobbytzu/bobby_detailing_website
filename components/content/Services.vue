<script setup lang="ts">
import Service from "~/components/servicii/Service.vue";

const props = defineProps({
  limit: {
    type: Number,
    required: false,
    default: 0 // 0 means show all
  }
});

const {data: mdList} = await useAsyncData(() =>
    queryCollection('services').order('order', 'ASC').all())

const displayedServices = props.limit >0 ? mdList.value?.slice(0, props.limit) : mdList.value;
console.log(displayedServices);
</script>

<template>
  <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 w-full h-full mx-auto">
    <Service v-for="service in displayedServices" :key="service.id" v-bind="service"/>
    <div class="mt-4 text-center">
      <UButton v-if="props.limit > 0" active active-color="primary" color="secondary" size="md" to="/servicii"
               trailing-icon="material-symbols:arrow-outward" variant="outline">+ {{ mdList.length - props.limit }}
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>