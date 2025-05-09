<script lang="ts" setup>

</script>

<template>
  <main class="flex flex-col items-center w-full h-full gap-10 lg:gap-15 overflow-x-hidden">
    
    <HeaderCarousel/>

    <USeparator class="text-2xl md:text-3xl w-4/5">
      <h2>Servicii Oferite</h2>
    </USeparator>
    
    <Services :limit=2 />

    <USeparator class="w-4/5"/>

    <BeforeAfter/>

    <USeparator class="w-4/5"/>

    <LazyGallery/>

    <USeparator class="w-4/5"/>

    <LazyHeroContent/>


    <script type="application/ld+json">
      {{
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "Bobby`s Detailing Auto Iasi",
          "image": "https://detailingautoiasi.ro/logo.jpg",
          "url": "https://detailingautoiasi.ro",
          "telephone": "+40754279456",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Str. George Calinescu Nr.3",
            "addressLocality": "Iasi",
            "addressCountry": "RO"
          },
          "openingHours": "Mo-Sa 08:00-19:00"
        })
      }}
    </script>
  </main>
</template>


<style scoped>

</style>