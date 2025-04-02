<script lang="ts" setup>
const error = useError();

console.log("Status code:",error.value?.statusCode)
console.log("Error message:",error.value?.message)

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-10 p-10">
      <template v-if="error?.statusCode === 404">
        <h1 class="text-3xl font-bold">404!</h1>
        <p class="text-xl">Pagina pe care a-ti incercat sa o accesati nu exista.</p>
      </template>
      <template v-else-if="error?.statusCode === 500">
        <h1 class="text-3xl font-bold">500!</h1>
        <p class="text-xl">Serverul are o eroare, ne cerem scuze pentru inconvenienta!</p>
      </template>
      <template v-else>
        <h1>Oh, nu ma asteptam la asta</h1>
        <p>
          <strong>{{ error?.message }}</strong>
        </p>
        <p>Se pare ca am avut o problema!</p>
        <p>Scuze pentru cele intamplate!</p>
      </template>

      <UButton
          class="w-fit"
          label="Inpoi la pagina principala"
          leading-icon="i-lucide-arrow-left"
          size="xl"
          variant="soft"
          @click="handleError"/>
    </div>
  </NuxtLayout>
</template>

<style scoped>

</style>