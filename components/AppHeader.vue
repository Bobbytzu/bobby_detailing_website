<template>
  <header>
    <ul class="hidden lg:flex flex-row justify-evenly xl:justify-end gap-5 px-5 text-lg ti">
      <li class="pl-2 border-white border-l-2 flex flex-row items-center gap-1">
        <UIcon name="prime:envelope" class="size-6"/>
        <NuxtLink
            no-prefetch
            target="_blank"
            to="mailto:someone@example.com">
          <p>bobby.auto.detailing@gmail.com</p>
        </NuxtLink>
      </li>
      <li class="pl-2 border-white border-l-2 flex flex-row items-center gap-1">
        <UIcon name="prime:phone" class="size-6"/>
        <NuxtLink
            no-prefetch
            target="_blank"
            to="tel:+40754279456">
          <p>0754&nbsp;279&nbsp;456</p>
        </NuxtLink>
      </li>
      <li class="pl-2 border-white border-l-2 flex flex-row items-center gap-1">
        <UIcon name="prime:map-marker" class="size-6"/>
        <NuxtLink
            no-prefetch
            target="_blank"
            to="https://maps.app.goo.gl/X3dMtm2vmcFo9r7t6">
          <p>Str. George Calinescu Nr.3, Iasi</p>
        </NuxtLink>
      </li>
    </ul>
    
    <nav aria-label="navigatie spre pagina principala" class="w-full px-5 sm:px-10 lg:px-15 xl:px-20 py-5 flex flex-row gap-3 md:gap-5 justify-between items-center bg-slate-950">
      
      <NuxtLink aria-label="Pagina Principala Logo" to="/" class="flex flex-row items-center">
        <NuxtImg 
          src="/logo.jpeg"
          alt="Booby's Auto Detailing Logo" 
          width="70px"
          height="70px"
          sizes="70px sm:80px md:100px lg:120px"
          format="webp" 
          densities="x1"
          class="rounded-lg"
          loading="eager"
          fetchpriority="high"
          preload
          :placeholder="70"
        />
        <h1 class="text-2xl md:text-3xl font-bold pl-5">
          Detailing Auto Iasi
        </h1>
      </NuxtLink>
        
      <HeaderMenu class="hidden lg:flex" />
      
      <section class="flex items-center lg:hidden">
        <USlideover 
          :close="{
            color: 'primary',
            variant: 'outline',
            class: 'rounded-full'
          }" 
          title="Meniu" 
          variant="subtle"
        >
          <UButton color="primary" icon="prime:bars" size="xl" variant="subtle"  aria-label="Meniu"/>
          <template #body>
            <LazyHeaderMenu hydrate-on-media-query="(max-width:1023px)" />
          </template>
          <template #footer>
            <ul class="flex flex-col gap-5 pb-5 text-sm">
              <li class="flex flex-row items-center gap-1">
                <UIcon name="prime:envelope" class="size-5"/>
                <NuxtLink
                    no-prefetch
                    target="_blank"
                    to="mailto:someone@example.com">
                  <p>bobby.auto.detailing@gmail.com</p>
                </NuxtLink>
              </li>
              <li class="flex flex-row items-center gap-1">
                <UIcon name="prime:phone" class="size-5"/>
                <NuxtLink
                    no-prefetch
                    target="_blank"
                    to="tel:+40754279456">
                  <p>0754&nbsp;279&nbsp;456</p>
                </NuxtLink>
              </li>
              <li class="flex flex-row items-center gap-1">
                <UIcon name="prime:map-marker" class="size-5"/>
                <NuxtLink
                    no-prefetch
                    target="_blank"
                    to="https://maps.app.goo.gl/X3dMtm2vmcFo9r7t6">
                  <p>Str. George Calinescu Nr.3, Iasi</p>
                </NuxtLink>
              </li>
            </ul>
          </template>
        </USlideover>
      </section>

    </nav>
  </header>
</template>