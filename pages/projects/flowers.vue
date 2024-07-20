<template>
  <title>Flowers</title>
  <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">Flowers</h2>
  <div class="flex flex-col xl:flex-row justify-between align-middle my-4">
    <Flower model-path="/models/rose.glb" :zPos="100" turnRight tiltRight />
    <Flower model-path="/models/tulip.glb" :zPos="82" />
    <Flower model-path="/models/flower.glb" :zPos="110" turnRight />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Flowers',
});
</script>
