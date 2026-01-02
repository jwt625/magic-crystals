/**
 * Global type declarations for React Three Fiber
 */

import type { Object3DNode } from '@react-three/fiber';
import type {
  AmbientLight,
  DirectionalLight,
  PointLight,
  Group,
  InstancedMesh,
  IcosahedronGeometry,
  CylinderGeometry,
  MeshStandardMaterial,
} from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>;
    directionalLight: Object3DNode<DirectionalLight, typeof DirectionalLight>;
    pointLight: Object3DNode<PointLight, typeof PointLight>;
    group: Object3DNode<Group, typeof Group>;
    instancedMesh: Object3DNode<InstancedMesh, typeof InstancedMesh>;
    icosahedronGeometry: Object3DNode<
      IcosahedronGeometry,
      typeof IcosahedronGeometry
    >;
    cylinderGeometry: Object3DNode<CylinderGeometry, typeof CylinderGeometry>;
    meshStandardMaterial: Object3DNode<
      MeshStandardMaterial,
      typeof MeshStandardMaterial
    >;
  }
}
