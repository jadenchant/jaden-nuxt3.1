<template>
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
    <NuxtImg
      v-if="!$device.isMobile"
      src="/images/jaden_nyc.png"
      class="absolute z-0 right-0 bottom-0"
      sizes="sm:500px md:750px"
      preload
    />
  </div>
</template>

<script setup lang="ts"></script>
