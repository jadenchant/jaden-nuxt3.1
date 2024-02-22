<template>
  <div class="absolute bottom-0 w-full">
    <div
      class="flex justify-center align-middle mb-2"
      :class="$device.isMobile ? 'icon-sm' : 'icon-lg'"
    >
      <NuxtLink
        to="https://www.linkedin.com/in/jaden-chant/"
        target="_blank"
        class="flex items-center mr-3 md:mr-5"
      >
        <nuxt-icon name="linkedin" class="icon" filled />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/jadenchant"
        target="_blank"
        class="flex items-center ml-3 md:ml-5"
        ><nuxt-icon name="github" class="icon" filled
      /></NuxtLink>
    </div>
    <div class="flex justify-center align-middle p-4">
      <p class="mr-2 mt-1 text-md md:text-lg">Made with</p>
      <NuxtLink
        to="https://nuxt.com/"
        target="_blank"
        class="flex items-center"
      >
        <NuxtImg src="/nuxt.png" alt="Nuxt3" class="h-4 md:h-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style>
.icon-lg .icon svg {
  width: 4em;
  height: 4em;
}

.icon-sm .icon svg {
  width: 3.6em;
  height: 3.6em;
}
</style>
