<script lang="ts" setup>
definePageMeta({
  colorMode: 'dark',
})

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
  noscript:[{
    innerHTML: `<iframe
          title="GoogleTagManagerNoScript"
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-K6SQMZ8S"
          style="display:none;visibility:hidden"
          width="0"
      ></iframe>`,
    tagPosition: 'head'
  }],
  bodyAttrs: {
    class: 'gtm-body'
  }
})
</script>

<template>
  <UApp>
    <AppHeader/>
    <NuxtPage/>
    <LazyAppFooter hydrate-on-idle/>
  </UApp>
</template>

<style scoped>
</style>
