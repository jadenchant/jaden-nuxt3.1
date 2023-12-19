<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
const { onLoop } = useRenderLoop();
const boxRef: ShallowRef<TresInstance | null> = shallowRef(null);

onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    //boxRef.value.rotation.x += delta; // Add rotation on x-axis
    boxRef.value.rotation.y += delta;
    // boxRef.value.rotation.z = elapsed * 0.2;
  }
});
</script>

<template>
  <div class="h-52">
    <TresCanvas clear-color="#374151" shadows alpha>
      <TresMesh ref="boxRef" :scale="1">
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshBasicMaterial color="#ffffff" />
      </TresMesh>
    </TresCanvas>
  </div>
</template>
