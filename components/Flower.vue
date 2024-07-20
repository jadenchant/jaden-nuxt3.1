<template>
  <ClientOnly>
    <NuxtLink
      :to="props.link"
      target="_blank"
      class="h-96 lg:h-[400px] w-full lg:w-[500px] xl:w-[600px] z-10"
    >
      <TresCanvas v-bind="gl" class="!touch-auto">
        <TresPerspectiveCamera
          :position="[0, 0, props.zPos]"
          :fov="75"
          :near="0.1"
          :far="1000"
        />
        <TresAmbientLight :color="0xffffff" :intensity="0.75" />
        <TresDirectionalLight
          :position="[0, 8, 20]"
          :intensity="1.4"
          cast-shadow
        />
        <TresMesh>
          <Suspense>
            <GLTFModel ref="modelRef" :path="props.modelPath" draco />
          </Suspense>
        </TresMesh>
      </TresCanvas>
    </NuxtLink>
  </ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelPath: string;
  zPos: number;
  link: string;
  turnRight?: boolean;
  tiltRight?: boolean;
}>();
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

watch(
  modelRef,
  (newValue, oldValue) => {
    if (modelRef.value && newValue !== oldValue) {
      modelRef.value.value.rotation.x = Math.PI / 2;
      if (props.tiltRight) {
        modelRef.value.value.rotation.y = Math.PI / 8;
      } else {
        modelRef.value.value.rotation.y = -Math.PI / 8;
      }
    }
  },
  { immediate: true }
);

onLoop(({ delta, elapsed }) => {
  if (modelRef.value) {
    let baseline = delta * 0.9;
    if (elapsed < 2.5) {
      baseline *= 2.5 / elapsed;
    }
    if (props.turnRight) {
      modelRef.value.value.rotation.z -= baseline;
    } else {
      modelRef.value.value.rotation.z += baseline;
    }
  }
});
</script>
