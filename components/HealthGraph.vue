<template>
  <div>
    <h3 class="text-xl">
      {{ dataType.charAt(0).toUpperCase() + dataType.slice(1) }}
      Walked Over Last 30 Days
    </h3>
    <div v-if="props.data">
      <p id="d3-target" class="mt-4 z-10"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: [];
  dataType: string;
}>();
import * as d3 from 'd3';
const { isMobile } = useDevice();

// let data = ref(props.data || []);
// let graphData = ref(props.data);
// let dataType = ref(props.dataType);
const graphData = useState('graphData', () => props.data);
const dataType = useState('dataType', () => props.dataType);

onMounted(() => {
  // graphData.value = props.data;
  drawGraph();
});

onUpdated(() => {
  graphData.value = props.data;
  dataType.value = props.dataType;
  d3.select('#d3-target').selectAll('*').remove();
  drawGraph();
});

// watch(
//   () => props.data,
//   (newData) => {
//     graphData.value = newData;
//     console.log('data', graphData.value);
//     d3.select('#d3-target').selectAll('*').remove();
//     drawGraph();
//   },
//   { deep: true }
// );

const drawGraph = () => {
  console.log('Drawing graph\n');
  console.log('graphData:', graphData.value);

  graphData.value.forEach((d: any) => {
    d.date = new Date(d.date);
  });

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
    .domain(d3.extent(graphData.value, (d) => d.date))
    .range([0, width]);
  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(graphData.value, (d) => d[dataType])])
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

  graphData.value.forEach((d: any) => {
    if (isNaN(d.date)) console.error('Invalid date:', d.date);
    if (isNaN(d[dataType.value])) console.error(`Invalid ${dataType}:`, d);
  });

  const line = svg
    .append('path')
    .datum(graphData.value)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr(
      'd',
      d3
        .line()
        .x(function (d: any) {
          return x(d.date);
        })
        .y(function (d: any) {
          return y(d[dataType]);
        })
    );

  const totalLength = line.node().getTotalLength();

  line
    .attr('stroke-dasharray', totalLength + ' ' + totalLength)
    .attr('stroke-dashoffset', totalLength)
    .transition()
    .duration(2500)
    .ease(d3.easeLinear)
    .attr('stroke-dashoffset', 0);
};
</script>
