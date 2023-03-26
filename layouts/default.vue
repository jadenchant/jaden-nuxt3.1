<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Jaden Chant</NuxtLink>

        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>
