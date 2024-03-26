<template>
  <title>Health Data</title>
  <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">
    Health Data {{ formatDate() }}
  </h2>
  <div class="lg:flex">
    <div>
      <div v-if="!prevPending && !prevError">
        <div class="text-xl md:text-2xl lg:text-3xl ml-4 lg:ml-8">
          <p class="mb-4">Distance: {{ prevData?.distance.distance }} mi</p>
          <p class="mb-4">Flights: {{ prevData?.flights.flights }} flights</p>
          <p class="mb-4">Steps: {{ prevData?.steps.steps }} steps</p>
        </div>
      </div>
      <p v-if="prevPending">Loading</p>
      <p v-if="prevError">Error: {{ prevError.message }}</p>
    </div>
    <div v-if="!distPending && !distError" class="ml-4 lg:ml-20">
      <HealthGraph :data="distData" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Health Data',
});

const {
  data: prevData,
  pending: prevPending,
  error: prevError,
} = await useFetch('/api/health');

const {
  data: distData,
  pending: distPending,
  error: distError,
} = await useFetch('/api/distances/30days');

function formatDate() {
  const date = new Date();
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return `${month}/${Number(day) - 1}/${year}`;
}
</script>
