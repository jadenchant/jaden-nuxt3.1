<template>
  <div>
    <header class="w-full p-3">
      <nav class="w-full flex">
        <NuxtLink to="/" class="text-3xl font-bold mr-8">Jaden Chant</NuxtLink>
        <ul class="flex items-center text-2xl">
          <li><NuxtLink to="/" class="mr-4">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="mr-4">About</NuxtLink></li>
        </ul>
        <NuxtLink to="/health" class="flex items-center">
          <HealthIcon />
        </NuxtLink>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style>
.nuxt-icon svg {
  width: 1.6em;
  height: 1.6em;
}
</style>
