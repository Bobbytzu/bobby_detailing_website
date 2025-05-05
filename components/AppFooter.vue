<template>
  <footer class="flex flex-col lg:flex-row justify-around items-center lg:items-start pt-20 px-10 bg-slate-950 pb-10 gap-5">
      <article class="w-4/5 flex flex-row lg:flex-col gap-5 lg:h-[470px] items-start justify-between lg:justify-around">
        <section class="flex flex-col gap-3 w-2/5 lg:w-full">
          <h3 class="text-3xl">
            Program de lucru:
          </h3>
          <ul class="flex flex-col gap-2">
            <li><p>Luni: 8:00 - 17:00</p></li>
            <li><p>Marti: 8:00 - 17:00</p></li>
            <li><p>Miercuri: 8:00 - 17:00</p></li>
            <li><p>Joi: 8:00 - 17:00</p></li>
            <li><p>Vineri: 8:00 - 17:00</p></li>
            <li><p>Sambata: 8:00 - 13:00</p></li>
          </ul>
        </section>

        <section class="flex flex-col gap-3 w-2/5 lg:w-full">
          
          <h3 class="text-3xl">
            Contact:
          </h3>
          
          <ul class="flex flex-col gap-2">
            <li class="flex flex-row items-center gap-1">
              <UIcon name="prime:phone" class="size-7"/>
              <NuxtLink
                  no-prefetch
                  target="_blank"
                  to="tel:+40754279456">
                <p>0754&nbsp;279&nbsp;456</p>
              </NuxtLink>  
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="prime:whatsapp" class="size-7"/>
              <NuxtLink
                  no-prefetch
                  target="_blank"
                  to="https://wa.me/+40754279456?text=urlencodedtext">
                <p>0754&nbsp;279&nbsp;456</p>
              </NuxtLink>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="prime:facebook" class="size-7"/>
              <NuxtLink
                  no-prefetch
                  target="_blank"
                  to="https://www.facebook.com/profile.php?id=100075685908141"
              >
                <p>Detailing Auto</p>
              </NuxtLink>
            </li>
            <li class="flex flex-row items-center gap-1">
              <UIcon name="prime:instagram" class="size-7"/>
              <NuxtLink
                  no-prefetch
                  target="_blank"
                  to="https://www.instagram.com/detailing_auto_iasi/"
              >
                <p>Detailing Auto</p>
              </NuxtLink>
            </li>
          </ul>
        </section>
      </article>

      <section class="w-4/5 overflow-x-hidden">
        <iframe
            title="Location on maps"
            height="480" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.780067036085!2d27.53879244748227!3d47.1978818947063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40caf926f7015381%3A0x3270c605d6c190ae!2sDetailing%20Auto%20Iasi!5e0!3m2!1sro!2sro!4v1741341760081!5m2!1sro!2sro"
            style="border:0;"
            class="w-full"
        />
        <p> Str. George Calinescu Nr.3, Iasi, Romania</p>
      </section>

  </footer>
</template>