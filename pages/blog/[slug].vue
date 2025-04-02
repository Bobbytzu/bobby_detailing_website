<template>
  <main class="flex flex-col p-10">
    <h1 class="text-3xl font-bold self-center">
      {{ post?.title }}
    </h1>

    <ContentRenderer v-if="post" :value="post" class="pt-10"/>
  </main>
</template>

<script lang="ts" setup>
const slug = useRoute().params.slug
const {data: post} = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})

console.log(post)
console.log(slug);

</script>

<style scoped>

</style>