<template>
  <div class="absolute bottom-0 w-full">
    <div class="flex justify-center align-middle mb-2">
      <NuxtLink
        to="https://www.linkedin.com/in/jaden-chant/"
        target="_blank"
        class="flex items-center mr-3 md:mr-5"
        ><img src="/img/linkedin.svg" alt="LinkedIn Logo" class="h-10 md:h-16"
      /></NuxtLink>
      <NuxtLink
        to="https://github.com/jadenchant"
        target="_blank"
        class="flex items-center ml-3 md:ml-5"
        ><img src="/img/github.svg" alt="Github Logo" class="h-10 md:h-16"
      /></NuxtLink>
    </div>
    <div class="flex justify-center align-middle p-4">
      <p class="mr-2 mt-1 text-md md:text-lg">Made with</p>
      <NuxtLink
        to="https://nuxt.com/"
        target="_blank"
        class="flex items-center"
      >
        <img src="/img/nuxt.png" alt="Nuxt3 Logo" class="h-4 md:h-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
