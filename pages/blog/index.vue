<script lang="ts" setup>
const blogPosts = await queryCollection('blog').order('date', 'DESC').all()

console.log("posts", blogPosts)
</script>

<template>

  <main class="w-full py-10 flex flex-col items-center">
    <h1 class="text-3xl font-semibold mb-6">My blog page</h1>
    <section class="flex flex-col gap-10">
      <article 
        v-for="post of blogPosts" 
        :key="post.stem"
        class="p-4 flex flex-row self-start gap-10 justify-evenly items-center bg-(--ui-bg-secondary) rounded-xl w-fit"
      >
        <h2 class="text-2xl mb-2 text-blue-700hover:text-blue-800">
          {{ post.title }}
        </h2>
        <span>
          {{ post.description }}
        </span>
        <UButton :to="`/${post.stem}`" size="lg" trailing-icon="i-lucide-arrow-up-right" />
      </article>
    </section>
  </main>
</template>

<style scoped></style>