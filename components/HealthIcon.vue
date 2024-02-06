<template>
  <div class="absolute z-0" :class="$device.isMobile ? 'icon-sm' : 'icon-lg'">
    <nuxt-icon name="heart" class="heart" />
    <nuxt-icon name="pulse" class="pulse pulse1" />
    <nuxt-icon name="pulse" class="pulse pulse2" />
  </div>
</template>

<style>
.icon-lg .nuxt-icon.heart svg {
  width: 4.6em;
  height: 4.6em;
  margin-right: 2.2em;
}

.icon-lg .nuxt-icon.pulse svg {
  width: 4.4em;
  height: 1.7em;
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
    left: -3.4em;
  }

  to {
    left: 3em;
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
