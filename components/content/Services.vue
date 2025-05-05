<script setup lang="ts">
import { computed } from 'vue'
import Service from '~/components/content/ServiceCard.vue'

const props = defineProps({
  limit: {
    type: Number,
    default: 0, // 0 = “no limit”
  }
})

const servicesKey = computed(() => `services-limit-${props.limit}`)

// Fetch only the limited set of full services
const { data: limited } = await useAsyncData(
  servicesKey, () =>
      queryCollection('servicii')
      .order('order', 'ASC')
      .limit(props.limit > 0 ? props.limit : 0)
      .all(), // .all() returns full objects
  { server: true }
)

// Fetch only the IDs for counting total items
const { data: ids } = await useAsyncData(
  `services-count`,() =>
    queryCollection('servicii')
    .count(),
  { server: true }
)

// Compute displayed list & counts
const displayedServices = computed(() => limited.value ?? [])
const totalCount        = computed(() => (ids.value ?? 0))
const showMoreButton    = computed(() =>
  props.limit > 0 && totalCount.value > props.limit
)
const remainingServices    = computed(() =>
  Math.max(0, totalCount.value - props.limit)
)

</script>

<template>
  <div
    class="flex flex-wrap justify-center items-start gap-10 w-full mx-auto"
  >
    <Service
      v-for="svc in displayedServices"
      :key="svc.id"
      v-bind="svc"
    />

    <div v-if="showMoreButton" class="w-full text-center mt-6">
      <UButton
        active
        active-color="primary"
        color="secondary"
        size="md"
        to="/servicii"
        trailing-icon="material-symbols:arrow-outward"
        variant="outline"
      >
        + {{ remainingServices }}
      </UButton>
    </div>
  </div>
</template>
