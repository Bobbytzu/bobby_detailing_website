<template>
  <div
      class="max-w-3xl max-w-5xl min-h-screen
        flex justify-center mx-auto my-12">
    <main class="w-full">
      <h1 class="text-2xl font-semibold mb-6">My blog page</h1>
      <section class="space-y-4 divide-y">
        <article v-for="post of posts" :key="post.slug" class="pt-4">
          <h2 class="text-lg mb-2 text-blue-700hover:text-blue-800">
            <NuxtLink :to="`/blog/${post.slug}`">
              {{ post.title }}
            </NuxtLink>
          </h2>
          <span>
            {{ post.description }}
          </span>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await this.$content().fetch()
  },
}
</script>

<style scoped>

</style>