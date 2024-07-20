<template>
  <ClientOnly>
    <div class="h-96 w-[350px] z-10">
      <TresCanvas v-bind="gl" class="!touch-auto">
        <TresPerspectiveCamera
          :position="[0, 2.3, 6.2]"
          :fov="75"
          :near="0.1"
          :far="1000"
        />
        <TresAmbientLight :color="0xffffff" :intensity="0.75" />
        <TresDirectionalLight
          :position="[0, 8, 5]"
          :intensity="1"
          cast-shadow
        />
        <TresMesh>
          <Suspense>
            <GLTFModel ref="modelRef" path="/models/face.glb" draco />
          </Suspense>
        </TresMesh>
      </TresCanvas>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three';
import { GLTFModel } from '@tresjs/cientos';
const { onLoop } = useRenderLoop();
const gl = {
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const modelRef = shallowRef<THREE.Object3D>();

onLoop(({ delta, elapsed }) => {
  if (modelRef.value) {
    let baseline = delta * 0.7;
    if (elapsed < 2.5) {
      baseline *= 2.5 / elapsed;
    }
    modelRef.value.value.rotation.y -= baseline;
  }
});
</script>
