<template>
  <div class="z-20 w-full mt-4">
    <div
      class="flex justify-center align-middle mb-4"
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
  </div>
</template>

<script setup lang="ts"></script>

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
