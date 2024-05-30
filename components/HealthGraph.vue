<template>
  <div>
    <h3 class="text-xl">Distance Walked Over Last 30 Days</h3>
    <p id="d3-target" class="mt-4 z-10"></p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
  dataType: string;
}>();
import * as d3 from 'd3';
const { isMobile } = useDevice();

let data = props.data;
// const dataType = props.dataType;

data.forEach((d: any) => {
  d.date = new Date(d.date);
});

onMounted(() => {
  let margin, width, height, yaxis;
  if (isMobile) {
    margin = { top: 10, right: 10, bottom: 30, left: 45 };
    width = 300 - margin.left - margin.right;
    height = 300 - margin.top - margin.bottom;
    yaxis = { x: -90, y: -45 };
  } else {
    margin = { top: 20, right: 30, bottom: 30, left: 50 };
    width = 600 - margin.left - margin.right;
    height = 400 - margin.top - margin.bottom;
    yaxis = { x: -125, y: -50 };
  }

  // const data = (switch (dataType) {
  //           case 'distance':
  //             return y(d.distance);
  //           case 'flights':
  //             return y(d.flights);
  //           case 'steps':
  //             return y(d.steps);
  //           default:
  //             return y(d.distance);
  //         })

  const svg = d3
    .select('div')
    .select('#d3-target')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const x = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.date))
    .range([0, width]);
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.distance)])
    .range([height, 0]);
  const yAxis = svg.append('g').call(d3.axisLeft(y));

  yAxis
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', yaxis.y)
    .attr('x', yaxis.x)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .attr('fill', '#ffffff')
    .text('Distance (miles)');

  const line = svg
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
      // .y((d) => {
      //   // Use the dataType prop to determine which property to use
      //   switch (this.dataType) {
      //     case 'distance':
      //       return y(d.distance);
      //     case 'flights':
      //       return y(d.flights);
      //     case 'steps':
      //       return y(d.steps);
      //     default:
      //       return y(d.distance);
      //   }
      // })
    );

  const totalLength = line.node().getTotalLength();

  line
    .attr('stroke-dasharray', totalLength + ' ' + totalLength)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(2500)
    .ease(d3.easeLinear)
    .attr('stroke-dashoffset', 0);
});
</script>
