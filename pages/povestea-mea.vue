<script setup lang="ts">
const {data: mdPage} = await useAsyncData('povesteaMea', () => {
  return queryCollection('mainPages').path("/povesteamea").first()

})
const page = mdPage.value
const pageMeta = page?.meta
</script>

<template>
  <div>
    <template v-if="page">
      <div class="flex flex-col p-10">
        <h2 class="text-3xl font-bold">
          {{page.title}}
        </h2>
        <section>
          <h3 class="text-2xl font-bold">
            {{pageMeta?.subtitle1}}
          </h3>
          <p class="text-xl text-wrap">
            {{pageMeta?.description1}}
          </p>
        </section>
        <section>
          <h3 class="text-2xl font-bold">
            {{pageMeta?.subtitle2}}
          </h3>
          <p class="text-xl text-wrap">
            {{pageMeta?.subtitle2}}
          </p>
        </section>
      </div>
    </template>
    <template v-else>
      <div class="empty-page">
        <h2 class="text-3xl">Pagina nu a fost gasita!</h2>
        <p class="text-xl">Puteti cere mai multe detalii la numarul de whatsapp</p>
        <NuxtLink to="/">Inapoi la pagina principala</NuxtLink>
      </div>
    </template>

  </div>
</template>

<style scoped>

</style>