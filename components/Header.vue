<template>
  <div>
    <header class="w-full pl-6 pt-4">
      <nav class="w-full flex z-20">
        <NuxtLink to="/" class="text-4xl font-bold mr-8">Jaden Chant</NuxtLink>
        <ul class="flex items-end text-2xl">
          <li><NuxtLink to="/" class="mr-4">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="mr-4">About</NuxtLink></li>
        </ul>
        <div class="grow"></div>
        <NuxtLink
          to="/health"
          class="flex justify-center w-32 justify-self-end"
          aria-label="health"
        >
          <HealthIcon />
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup></script>
