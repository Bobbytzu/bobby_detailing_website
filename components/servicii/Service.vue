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
  <div class="flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-30">
    <UCard class="w-[450px]" variant="soft">

      <NuxtImg
          :alt="imageAlt"
          :src="imagePath"
          class="relative rounded-t-xl"
          fit="cover"
          format="webp"
          width="350"
          height="300"
      />
      <div class="flex flex-col gap-5 pt-5">
        <p class="text-2xl font-bold text-(--ui-primary)">{{ title }}</p>
        <p class="text-sm xl:text-base text-wrap">{{ shortDescription }}</p>
      </div>


      <template #footer>
        <div class="flex flex-row justify-between items-center">
          <div class="text-xl text-(--ui-primary) font-bold">Preț de la {{ price }}*</div>
          <UButton
              :to="path"
              label="Vezi detalii"
              rounded-full
              trailing-icon="material-symbols:arrow-right-alt"
          />
        </div>
      </template>
    </UCard>
  </div>
</template>
