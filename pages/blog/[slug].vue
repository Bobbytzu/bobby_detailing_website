<template>
  <main class="flex flex-col p-10">
    <h2 class="text-3xl font-bold self-center">
      {{ post?.title }}
    </h2>

    <ContentRenderer v-if="post" :value="post" class="pt-10"/>
  </main>
</template>

<script lang="ts" setup>
const slug = useRoute().params.slug
const {data: post} = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})


</script>

<style scoped>

</style>