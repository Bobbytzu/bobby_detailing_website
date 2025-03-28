<script lang="ts" setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

useHead({
  script: [
    {
      innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y0NJVKM8YW');`,
      type: "text/javascript"
    }
  ],
  bodyAttrs: {
    class: 'gtm-body'
  }
})
</script>

<template>
  <header>
    <meta content="9tld3YqUQD16DMf3vcY349WLkMdRyFcpL_PAW36RwNs" name="google-site-verification"/>
  </header>
  <noscript>
    <iframe
        height="0"
        src="https://www.googletagmanager.com/ns.html?id=GTM-K6SQMZ8S"
        style="display:none;visibility:hidden"
        width="0"
    ></iframe>
  </noscript>
  <AppHeader/>
  <NuxtPage/>
  <AppFooter/>

</template>

<style scoped>
</style>
