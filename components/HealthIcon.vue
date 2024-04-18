<template>
  <div class="absolute z-0" :class="$device.isMobile ? 'icon-sm' : 'icon-lg'">
    <NuxtIcon name="heart" class="heart" />
    <NuxtIcon name="pulse" class="pulse pulse1" />
    <NuxtIcon name="pulse" class="pulse pulse2" />
  </div>
</template>

<script setup></script>

<style>
.icon-lg .nuxt-icon.heart svg {
  width: 4.6em;
  height: 4.6em;
  margin-right: 2.2em;
  transition: width 0.15s ease-in-out, height 0.15s ease-in-out;
}

.icon-lg:hover .nuxt-icon.heart svg {
  width: 4.9em;
  height: 4.9em;
}

.icon-lg .nuxt-icon.pulse svg {
  width: 4.8em;
  height: 1.8em;
}

.icon-lg .pulse {
  top: 1.2em;
  position: absolute;
  z-index: 10;
  color: #374151;
}

.icon-lg .pulse1 {
  animation: 1.6s linear infinite running pulse-lg;
}

.icon-lg .pulse2 {
  animation: 1.6s linear 0.8s infinite running pulse-lg;
}

@keyframes pulse-lg {
  from {
    left: -4em;
  }

  to {
    left: 4em;
  }
}

.icon-sm .nuxt-icon.heart svg {
  width: 3em;
  height: 3em;
  margin-right: 1em;
  margin-top: 0.2em;
}

.icon-sm .nuxt-icon.pulse svg {
  width: 3em;
  height: 1.2em;
}

.icon-sm .pulse {
  position: absolute;
  top: 1em;
  z-index: 10;
  color: #374151;
}

.icon-sm .pulse1 {
  animation: 1.6s linear infinite running pulse-sm;
}

.icon-sm .pulse2 {
  animation: 1.6s linear 0.8s infinite running pulse-sm;
}

@keyframes pulse-sm {
  from {
    left: -2em;
  }

  to {
    left: 2em;
  }
}
</style>
