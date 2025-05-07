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
  <section
    class="flex flex-wrap justify-center items-center gap-10 w-full mx-auto"
  >
    <Service
      v-for="serviceCard in displayedServices"
      :key="serviceCard.id"
      v-bind="serviceCard"
    />

    <UButton
      v-if="showMoreButton"
      active
      active-color="primary"
      size="lg"
      to="/servicii"
      trailing-icon="material-symbols:arrow-outward"
      variant="outline"
      class="flex justify-center self-center w-full lg:w-fit max-w-[330px] mx-10 lg:mx-0 border-2"
      >
      + {{ remainingServices }}
    </UButton>
  </section>
</template>
