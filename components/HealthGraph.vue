<template><p id="d3-target"></p></template>

<script setup lang="ts">
// defineProps<{
//   data?: any;
// }>();
import * as d3 from 'd3';

let data = [
  { date: new Date(2022, 0, 1), close: 220 },
  { date: new Date(2022, 0, 2), close: 230 },
  { date: new Date(2022, 0, 3), close: 210 },
  { date: new Date(2022, 0, 4), close: 240 },
  { date: new Date(2022, 0, 5), close: 250 },
  { date: new Date(2022, 0, 6), close: 220 },
  { date: new Date(2022, 0, 7), close: 230 },
  { date: new Date(2022, 0, 8), close: 210 },
  { date: new Date(2022, 0, 9), close: 240 },
  { date: new Date(2022, 0, 10), close: 250 },
];

onMounted(() => {
  // Set the dimensions and margins of the graph
  const margin = { top: 20, right: 30, bottom: 30, left: 30 },
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // Append the svg object to the body of the page
  const svg = d3
    .select('#d3-target')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Add X axis
  const x = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.date))
    .range([0, width]);
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.close)])
    .range([height, 0]);
  svg.append('g').call(d3.axisLeft(y));

  // Add the line
  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr(
      'd',
      d3
        .line()
        .x(function (d) {
          return x(d.date);
        })
        .y(function (d) {
          return y(d.close);
        })
    );
});
</script>
