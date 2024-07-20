<template>
  <div class="bg-gray-700 min-h-screen flex flex-col">
    <Header />
    <div class="px-6 py-2 flex-grow">
      <slot />
    </div>
    <Footer />
    <NuxtImg
      v-if="!$device.isMobile"
      src="/images/jaden_nyc.png"
      alt="Jaden Chant"
      class="fixed right-0 bottom-0 z-0"
      sizes="sm:500px md:750px"
      preload
    />
  </div>
</template>

<script setup lang="ts"></script>
