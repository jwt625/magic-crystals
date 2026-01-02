'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D, Color } from 'three';

interface ParticleSystemProps {
  color: string;
  count?: number;
  radius?: number;
  speed?: number;
  opacity?: number;
}

export default function ParticleSystem({
  color,
  count = 30,
  radius = 8,
  speed = 0.3,
  opacity = 1,
}: ParticleSystemProps) {
  const meshRef = useRef<InstancedMesh>(null);

  // Generate particle positions and velocities
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Random spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.8 + Math.random() * 0.4);

      // Convert to Cartesian
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      // Random orbital velocity
      const angularSpeed = speed * (0.5 + Math.random() * 0.5);
      const orbitAxis = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
        z: Math.random() - 0.5,
      };

      // Normalize axis
      const axisLength = Math.sqrt(
        orbitAxis.x ** 2 + orbitAxis.y ** 2 + orbitAxis.z ** 2
      );
      orbitAxis.x /= axisLength;
      orbitAxis.y /= axisLength;
      orbitAxis.z /= axisLength;

      temp.push({
        position: { x, y, z },
        angularSpeed,
        orbitAxis,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count, radius, speed]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const dummy = new Object3D();
    const elapsed = clock.getElapsedTime();

    particles.forEach((particle, i) => {
      // Orbital motion around lattice
      const angle = elapsed * particle.angularSpeed + particle.phase;

      // Rotate position vector around orbit axis
      const cos = Math.cos(angle * 0.5);
      const sin = Math.sin(angle * 0.5);

      const x = particle.position.x * cos - particle.position.y * sin;
      const y = particle.position.x * sin + particle.position.y * cos;
      const z = particle.position.z;

      // Add gentle floating motion
      const floatY = Math.sin(elapsed * 0.5 + particle.phase) * 0.3;
      const floatZ = Math.cos(elapsed * 0.3 + particle.phase) * 0.2;

      dummy.position.set(x, y + floatY, z + floatZ);

      // Pulsing scale
      const scale = 0.8 + Math.sin(elapsed * 2 + particle.phase) * 0.2;
      dummy.scale.setScalar(scale * 0.08);

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        color={new Color(color)}
        transparent
        opacity={opacity * 0.6}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
