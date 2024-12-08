<template>
  <title>Costume Design</title>
  <div class="flex justify-center z-10">
    <NuxtImg
      src="images/fannypack.png"
      alt="Fanny Pack"
      class="w-60 md:w-96 h-full z-10"
      sizes="sm:300px md:500px lg:700px"
      format="webp"
      preload
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Costume Design',
});
</script>
