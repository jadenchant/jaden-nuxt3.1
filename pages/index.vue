<template>
  <title>Jaden Chant</title>
  <NuxtImg
    v-if="$device.isMobile"
    src="/images/jaden_nyc.png"
    class="absolute z-0 right-0 bottom-0"
    sizes="sm:500px md:750px"
    preload
  />
  <div class="relative z-30">
    <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">Hi, I'm Jaden!</h2>
    <div
      class="flex flex-col text-lg ml-2 md:ml-4 lg:ml-8 lg:h-56 lg:justify-between lg:text-2xl"
    >
      <p class="mb-4">
        I am a recent CS and Math graduate from St. Olaf College in Northfield,
        MN.
      </p>
      <p class="mb-4">
        If you would like to contact me, feel free to message me on
        <NuxtLink
          to="https://www.linkedin.com/in/jaden-chant/"
          target="_blank"
          class="underline"
          >LinkedIn</NuxtLink
        >!
      </p>
      <p>
        If you're curious about yesterday's
        <NuxtLink to="/health" class="underline">health data...</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Jaden Chant',
});
</script>
