<script lang="ts" setup>
useHead({
  meta:[{content:"9tld3YqUQD16DMf3vcY349WLkMdRyFcpL_PAW36RwNs", name:"google-site-verification"}],
  script: [
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y0NJVKM8YW');`,
      tagPosition: 'head'
    }
  ],
  bodyAttrs: {
    class: 'gtm-body'
  }
})
</script>

<template>
  <UApp>
    <AppHeader/>
    <PhoneWhatsapp class="lg:hidden z-10"/>
    <NuxtPage/>
    <LazyAppFooter/>
  </UApp>
</template>

<style scoped>
</style>
