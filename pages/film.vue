<template>
  <title>Film</title>
  <div
    class="flex flex-col items-center md:flex-row md:justify-between lg:mx-20 z-10"
  >
    <NuxtLink
      to="https://en.wikipedia.org/wiki/Rear_Window"
      target="_blank"
      class="z-10"
    >
      <NuxtImg
        src="images/rear-window.jpg"
        alt="Rear Window"
        class="w-full h-full z-10 mb-10 md:mr-10 lg:w-[700px]"
        sizes="sm:250px md:300px lg:700px"
        format="webp"
        preload
      />
    </NuxtLink>
    <NuxtLink
      to="https://en.wikipedia.org/wiki/Elevator_to_the_Gallows"
      target="_blank"
      class="z-10"
    >
      <NuxtImg
        src="images/elevator-to-the-gallows.jpg"
        alt="Elevator to the Gallows"
        class="w-full h-full z-10"
        sizes="sm:250px md:300px lg:700px"
        format="webp"
        preload
      />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Film',
});
</script>
