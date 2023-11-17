<template>
  <title>Health Data</title>
  <div>
    <h2 class="text-2xl mb-4">Health Data {{ formatDate() }}</h2>
    <div v-if="!pending && !error" class="text-xl">
      <p>
        Distance: {{ data.distance[0].distance }} {{ data.distance[0].units }}
      </p>
      <p>Flights: {{ data.flights[0].flights }} flights</p>
      <p>Steps: {{ data.steps[0].steps }} steps</p>
    </div>
    <p v-if="pending">Loading</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Health Data',
});

const { data, pending, error } = await useFetch('/api/health');

function formatDate() {
  const date = new Date();
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return `${month}/${day - 1}/${year}`;
}
</script>
