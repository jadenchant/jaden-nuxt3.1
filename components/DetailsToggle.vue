<template>
  <div :class="props.class">
    <div class="flex justify-center h-14 mb-4">
      <button @click="toggle" class="px-16 pt-2 rounded">
        <h4 class="text-lg">
          {{ isOpen ? 'Hide' : 'Show' }}
          {{ props.buttonText ? props.buttonText : 'Details' }}
        </h4>
        <Icon
          v-if="!isOpen"
          name="material-symbols:keyboard-arrow-down"
          size="2.5em"
          class="arrow"
        />
        <Icon
          v-else
          name="material-symbols:keyboard-arrow-up"
          size="2.5em"
          class="arrow"
        />
      </button>
    </div>
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '~/compostables/useToggle';

const props = defineProps<{
  buttonText?: string;
  initialOpen?: boolean;
  class?: string;
}>();

const [isOpen, toggle] = useToggle(props.initialOpen);
</script>

<style>
.arrow {
  position: relative;
  top: -0.35em;
  animation: arrow 0.4s ease-in 8 alternate;
}

@keyframes arrow {
  from {
    top: -0.35em;
  }

  to {
    top: 0em;
  }
}

@keyframes uparrow {
  from {
    top: -0.3em;
  }

  to {
    top: 0em;
  }
}
</style>
