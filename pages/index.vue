<template>
  <title>Jaden Chant</title>
  <NuxtImg
    src="/images/jaden_nyc.png"
    class="absolute z-0 right-0 bottom-0"
    sizes="sm:500px md:750px"
    preload
  />
  <div class="relative z-30">
    <h2 class="text-2xl md:text-4xl mb-6">Hi, I'm Jaden!</h2>
    <div
      class="flex flex-col text-lg ml-2 md:ml-4 lg:h-56 lg:justify-between lg:text-2xl"
    >
      <p class="mb-4">
        I am a Senior Student @ St. Olaf College in Northfield, MN.
      </p>
      <p class="mb-4">
        I am looking for a career in Front-End Web Development.
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
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Jaden Chant',
});
</script>
