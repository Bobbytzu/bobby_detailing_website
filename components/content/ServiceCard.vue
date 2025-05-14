<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: false,
    default: "shortDescription",
  },
  imagePath: {
    type: String,
    required: false,
    default: "/placeholder.jpeg"
  },
  imageAlt: {
    type: String,
    required: false,
    default: "Detailing"
  },
  price: {
    type: Number,
    required: false,
    default: 500
  },
  path: {
    type: String,
    required: false,
    default: "/servicii"
  }
});

</script>

<template>
  <UCard class="flex flex-col items-center justify-center gap-3 w-[350px]">
    <NuxtImg
        :alt="imageAlt"
        :src="imagePath"
        class="rounded-xl object-cover"
        format="webp"
        width="300"
        height="250"
        preload
    />
    <section class="flex flex-col gap-3 pt-5">
      <h3 class="text-xl lg:text-2xl font-bold">{{ title }}</h3>
      <p class="text-sm lg:text-lg text-wrap">{{ shortDescription }}</p>
    </section>


    <template #footer>
      <section class="w-[300px] flex flex-row justify-between">
        <UTooltip text="Preturile pot varia in functie de dimensiunile masinii.">
          <h3 class="text-xl font-bold">De la {{ price }} RON*</h3>
        </UTooltip>
        <UButton
            :to="path"
            label="Vezi detalii"
            rounded-full
            trailing-icon="material-symbols:arrow-right-alt"
        />
      </section>
    </template>
  </UCard>
</template>
