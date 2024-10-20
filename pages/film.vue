<template>
  <title>Film</title>
  <div class="flex flex-col md:flex-row z-10">
    <NuxtImg
      src="images/rear-window.jpg"
      alt="Rear Window"
      class="w-full h-full z-10"
      sizes="sm:250px md:300px lg:500px"
      format="webp"
      preload
    />
    <NuxtImg
      src="images/elevator-to-the-gallows.jpg"
      alt="Elevator to the Gallows"
      class="w-full h-full z-10"
      sizes="sm:250px md:300px lg:500px"
      format="webp"
      preload
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Film',
});
</script>
