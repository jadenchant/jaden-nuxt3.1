<template><p id="d3-target"></p></template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
import * as d3 from 'd3';

let data = props.data;

data.forEach((d) => {
  d.date = new Date(d.date);
});

onMounted(() => {
  // Set the dimensions and margins of the graph
  const margin = { top: 20, right: 30, bottom: 30, left: 50 },
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
    .domain([0, d3.max(data, (d) => d.distance)])
    .range([height, 0]);
  const yAxis = svg.append('g').call(d3.axisLeft(y));

  // Add a label to the Y axis
  yAxis
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', -50) // Adjust this value to move the label away from the y-axis
    .attr('dy', '0.71em') // Adjust this value to vertically center the text
    .attr('text-anchor', 'end') // Align the text to the end, which will align it to the y-axis
    .attr('fill', '#ffffff') // Change the color of the text to make it more visible
    .text('Distance');

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
          return y(d.distance);
        })
    );
});
</script>
