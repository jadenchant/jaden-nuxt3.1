<template>
  <header class="relative w-full pl-6 py-4 z-50">
    <nav class="w-full flex">
      <NuxtLink
        v-if="$device.isMobile"
        to="/"
        class="text-5xl font-bold mr-8 relative -bottom-1"
        >JC</NuxtLink
      >
      <NuxtLink
        v-else
        to="/"
        class="md:text-6xl text-3xl font-bold mr-8 relative -bottom-1"
        >Jaden Chant</NuxtLink
      >
      <!-- <NuxtLink to="/" class="md:hidden text-4xl font-bold mr-8">JC</NuxtLink> -->
      <ul class="flex items-end md:text-3xl text-2xl">
        <li><NuxtLink to="/" class="mr-5 md:mr-4">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="mr-5 md:mr-4">About</NuxtLink></li>
      </ul>
      <div class="grow"></div>
      <NuxtLink
        to="/health"
        class="flex justify-center md:w-32 w-24"
        aria-label="health"
      >
        <HealthIcon />
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup></script>
