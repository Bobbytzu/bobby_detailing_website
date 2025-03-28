<template>
  <ContentRenderer :value="post" />
</template>

<script lang="ts" setup>
const slug = useRoute().params.slug
const {data: post} = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<style scoped>

</style>