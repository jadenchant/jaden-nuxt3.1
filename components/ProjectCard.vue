<template>
  <NuxtLink
    :to="link"
    class="flex flex-col h-72 lg:h-80 w-96 lg:w- p-2 border-2 rounded bg-gray-700 z-10"
    target="_blank"
  >
    <div class="flex justify-center max-h-52">
      <NuxtImg
        v-if="img"
        :src="img"
        class=""
        sizes="sm:150px md:225px lg:300px"
        preload
      />
    </div>
    <div class="flex-grow"></div>
    <h2 class="text-lg md:text-2xl mt-1">{{ title }}</h2>
    <p class="text-sm mt-1">
      {{ desc }}
    </p>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  img?: string;
  link: string;
}>();

const title = props.title;
const desc = props.desc;
const img = props.img;
</script>
