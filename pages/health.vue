<template>
  <title>Health Data</title>
  <h2 class="text-2xl md:text-4xl mb-6 lg:ml-4">
    Health Data {{ formatDate() }}
  </h2>
  <div class="lg:flex z-50">
    <div>
      <div v-if="!prevPending && !prevError">
        <div class="text-xl md:text-2xl lg:text-3xl ml-4 lg:ml-8">
          <div
            class="cursor-pointer show-graph"
            @click="fetchGraphData('/api/distances/30days')"
          >
            <p class="mb-4 show-graph-text">
              Distance: {{ prevData?.distance.distance }} mi
            </p>
          </div>
          <div
            class="cursor-pointer show-graph"
            @click="fetchGraphData('/api/flights/30days')"
          >
            <p class="mb-4 show-graph-text">
              Flights: {{ prevData?.flights.flights }} flights
            </p>
          </div>
          <div
            class="cursor-pointer show-graph"
            @click="fetchGraphData('/api/steps/30days')"
          >
            <p class="mb-4 show-graph-text">
              Steps: {{ prevData?.steps.steps }} steps
            </p>
          </div>
        </div>
      </div>
      <p v-if="prevPending">Loading</p>
      <p v-if="prevError">Error: {{ prevError.message }}</p>
    </div>
    <div class="ml-4 lg:ml-20">
      <HealthGraph :data="graphData" dataType="distance" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Health Data',
});

const { data: prevData, error: prevError } = await useFetch('/api/health');

const { data: distData, error: distError } = await useFetch(
  '/api/distances/30days'
);

const graphData = useState('graphData', () => distData);

const fetchGraphData = async (apiUrl: string) => {
  const { data, error } = await useFetch(apiUrl);
  if (error.value) {
    console.error('Failed to fetch data:', error.value);
    return;
  }
  console.log(data.value);
  graphData.value = data.value;
  console.log(graphData.value);
};

const formatDate = () => {
  const date = new Date();
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', { month: '2-digit' });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return `${month}/${Number(day) - 1}/${year}`;
};
</script>

<style>
.show-graph .show-graph-text::after {
  content: '⇒';
  position: relative;
  opacity: 0;
  left: 0em;
  text-decoration: none;
  transition: opacity 0.15s ease-in-out, left 0.2s ease-in-out;
}

.show-graph:hover .show-graph-text::after {
  opacity: 1;
  left: 0.3em;
  text-decoration: none;
}
</style>
