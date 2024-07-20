<template>
  <NuxtLink
    :to="link"
    class="flex flex-col justify-between h-72 lg:h-80 w-96 p-2 border-2 rounded bg-gray-700 z-10"
    :target="internal ? '_self' : '_blank'"
  >
    <div class="flex-grow flex flex-col justify-center items-center">
      <NuxtImg
        v-if="img"
        :src="img"
        class="max-h-52"
        sizes="sm:250px lg:300px"
        preload
      />
    </div>

    <div class="justify-self-end">
      <h2 class="text-lg md:text-2xl mt-1">{{ title }}</h2>
      <p class="text-sm mt-1">
        {{ desc }}
      </p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  img?: string;
  link: string;
  internal?: boolean;
}>();

const title = props.title;
const desc = props.desc;
const img = props.img;
</script>
