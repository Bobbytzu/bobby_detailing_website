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
  <article class="flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-30">
    <UCard class="max-w-[450px]" variant="soft">

      <NuxtImg
          :alt="imageAlt"
          :src="imagePath"
          class="relative rounded-t-xl"
          fit="cover"
          format="webp"
          width="350"
          height="300"
          lazy
      />
      <section class="flex flex-col gap-5 pt-5">
        <h3 class="text-2xl font-bold text-(--ui-primary)">{{ title }}</h3>
        <p class="text-sm xl:text-base text-wrap">{{ shortDescription }}</p>
      </section>


      <template #footer>
        <section class="flex flex-row justify-between items-center">
          <p class="text-xl text-(--ui-primary) font-bold">Preț de la {{ price }}*</p>
          <UButton
              :to="path"
              label="Vezi detalii"
              rounded-full
              trailing-icon="material-symbols:arrow-right-alt"
          />
        </section>
      </template>
    </UCard>
  </article>
</template>
