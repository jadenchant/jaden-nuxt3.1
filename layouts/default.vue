<template>
  <NuxtImg
    v-if="!$device.isMobile"
    src="/images/jaden_nyc.png"
    class="absolute right-0 bottom-0 z-0"
    sizes="sm:500px md:750px"
    preload
  />
  <div
    class="bg-gray-700 h-screen"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <Header />
    <div class="px-6 py-2">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
