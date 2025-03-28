<script lang="ts" setup>
import {ref} from 'vue';

const props = defineProps({
  limit: {
    type: Number,
    required: false,
    default: 0 // 0 means show all
  }
});

const {data: mdList} = await useAsyncData(() =>
    queryCollection('services').order('order', 'ASC').limit(props.limit).all())

const displayedServices = mdList.value;

const width = ref(400)
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-30">
    <UCard v-for="(services, index) in displayedServices" :key="index" class="w-[400px]" variant="soft">

      <NuxtImg :src="services.imagePath" :width="width" class="relative rounded-t-xl" fit="cover" height="200"/>
      <div class="flex flex-col gap-5 pt-5">
        <p class="text-2xl font-bold text-(--ui-primary)">{{ services.title }}</p>
        <p class="text-sm xl:text-base text-wrap">{{ services.shortDescription }}</p>
      </div>


      <template #footer>
        <div class="flex flex-row justify-between items-center">
          <div class="text-xl text-(--ui-primary) font-bold">Preț de la {{ services.price }}*</div>
          <UButton :to="services.path" label="Vezi detalii" rounded-full
                   trailing-icon="material-symbols:arrow-right-alt"/>
        </div>
      </template>
    </UCard>
  </div>
</template>
