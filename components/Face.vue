<script setup lang="ts">
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three';
const { onLoop } = useRenderLoop();
const gl = {
  clearColor: '#374151',
  // clearColor: '#ffffff',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const model = shallowRef<THREE.Object3D>();

watchEffect(() => {
  console.log(model.value);
});

onLoop(({ delta, elapsed }) => {
  if (model.value) {
    model.value.value.rotation.y -= delta;
  }
});
</script>

<template>
  <div class="h-96 min-w-min">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera
        :position="[0, 2.3, 6.2]"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <TresAmbientLight :color="0xffffff" :intensity="0.75" />
      <TresDirectionalLight :position="[0, 8, 5]" :intensity="1" cast-shadow />
      <Suspense>
        <GLTFModel ref="model" path="/models/face.glb" draco />
      </Suspense>
    </TresCanvas>
  </div>
</template>
