<template>
  <title>Health Data</title>
  <div>
    <h2 class="text-2xl mb-4">Health Data</h2>
    <p v-if="!pending && !error">{{ data }}</p>
    <p v-if="pending">Loading</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Health Data',
});

const { data, pending, error } = await useFetch('/api/health');
console.log(data);
</script>
