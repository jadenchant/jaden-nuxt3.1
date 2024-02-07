<template>
  <title>About</title>
  <div>
    <h2 class="text-2xl md:text-4xl mb-4">About Me</h2>

    <div
      class="flex flex-col lg:align-middle justify-between h-28 md:h-32 ml-2 md:ml-4 md:text-2xl lg:text-center"
    >
      <p>
        Current CS and Math Student @
        <NuxtLink to="https://wp.stolaf.edu/" target="_blank" class="underline"
          >St. Olaf College</NuxtLink
        >
      </p>
      <p>
        2023 | Software Engineering Intern @
        <NuxtLink
          to="https://www.target.com/finds"
          target="_blank"
          class="underline"
          >Target</NuxtLink
        >
      </p>
      <p>
        2022 | Software Development Intern @
        <NuxtLink
          to="https://www.usbank.com/index.html"
          target="_blank"
          class="underline"
          >US Bank</NuxtLink
        >
      </p>
    </div>
    <br />
    <Face />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About',
});
</script>
