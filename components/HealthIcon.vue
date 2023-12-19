<template>
  <div class="absolute z-0">
    <nuxt-icon name="heart" class="heart" />
    <nuxt-icon name="pulse" class="pulse pulse1" />
    <nuxt-icon name="pulse" class="pulse pulse2" />
  </div>
</template>

<style>
.nuxt-icon.heart svg {
  width: 4.6em;
  height: 4.6em;
  margin-right: 2.2em;
}

.nuxt-icon.pulse svg {
  width: 4.4em;
  height: 1.7em;
}

.pulse {
  position: absolute;
  top: 1.2em;
  z-index: 10;
  color: #374151;
}

.pulse1 {
  animation: 1.6s linear infinite running pulse;
}

.pulse2 {
  animation: 1.6s linear 0.8s infinite running pulse;
}

@keyframes pulse {
  from {
    left: -3.4em;
  }

  to {
    left: 3em;
  }
}
</style>
