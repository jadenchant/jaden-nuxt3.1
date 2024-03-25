<template>
  <title>Health Data</title>
  <div>
    <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">
      Health Data {{ formatDate() }}
    </h2>
    <div v-if="!pending && !error">
      <div class="text-xl md:text-2xl lg:text-3xl ml-4 lg:ml-8">
        <p class="mb-4">Distance: {{ data?.distance.distance }} mi</p>
        <p class="mb-4">Flights: {{ data?.flights.flights }} flights</p>
        <p class="mb-4">Steps: {{ data?.steps.steps }} steps</p>
      </div>
      <!-- <HealthGraph /> -->
    </div>
    <p v-if="pending">Loading</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Health Data',
});

const { data, pending, error } = await useFetch('/api/health');

function formatDate() {
  const date = new Date();
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return `${month}/${Number(day) - 1}/${year}`;
}
</script>
