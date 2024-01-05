<script setup lang="ts">
import {
  BasicShadowMap,
  NoToneMapping,
  SRGBColorSpace,
  MeshStandardMaterial,
  Color,
} from 'three';
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

const modelRef = shallowRef<THREE.Object3D>();

// watch(modelRef, (model) => {
//   model.value.position = new THREE.Vector3(1, 0, 1);
// });

watchEffect(() => {
  console.log(modelRef.value);
});

onLoop(({ delta, elapsed }) => {
  if (modelRef.value) {
    modelRef.value.value.rotation.y -= delta;
  }
});

// const handleModelLoad = () => {
//   modelRef.value.scene.traverse((child) => {
//     if (child.isMesh) {
//       child.material = new MeshStandardMaterial({
//         color: new Color(0xffffff),
//       });
//     }
//   });
// };
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
      <TresMesh>
        <Suspense>
          <GLTFModel ref="modelRef" path="/models/face.glb" draco />
        </Suspense>
        <!-- <TresMeshBasicMaterial /> -->
      </TresMesh>
    </TresCanvas>
  </div>
</template>
