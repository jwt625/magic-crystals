'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, Object3D, Color } from 'three';
import { AtomData } from '../types';

interface ScintillationEffectProps {
  atoms: AtomData[];
  color: string;
  flashCount?: number;
  flashDuration?: number;
  opacity?: number;
}

interface Flash {
  atomIndex: number;
  startTime: number;
  duration: number;
}

export default function ScintillationEffect({
  atoms,
  color,
  flashCount = 3,
  flashDuration = 0.5,
  opacity = 1,
}: ScintillationEffectProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const [flashes, setFlashes] = useState<Flash[]>([]);

  // Spawn new flashes periodically
  useEffect(() => {
    if (atoms.length === 0) return;

    const interval = setInterval(() => {
      setFlashes((prev) => {
        const now = Date.now() / 1000;

        // Remove expired flashes
        const activeFlashes = prev.filter(
          (f) => now - f.startTime < f.duration
        );

        // Add new flashes if we're below the count
        const newFlashes = [...activeFlashes];
        while (newFlashes.length < flashCount) {
          newFlashes.push({
            atomIndex: Math.floor(Math.random() * atoms.length),
            startTime: now,
            duration: flashDuration * (0.8 + Math.random() * 0.4),
          });
        }

        return newFlashes;
      });
    }, 200); // Check every 200ms

    return () => clearInterval(interval);
  }, [atoms.length, flashCount, flashDuration]);

  useFrame(({ clock }) => {
    if (!meshRef.current || flashes.length === 0) return;

    const dummy = new Object3D();
    const now = clock.getElapsedTime();

    flashes.forEach((flash, i) => {
      const atom = atoms[flash.atomIndex];
      const progress = (now - flash.startTime) / flash.duration;

      if (progress >= 0 && progress <= 1) {
        // Position at atom location
        dummy.position.set(atom.position.x, atom.position.y, atom.position.z);

        // Flash animation: grow then fade
        let scale: number;
        if (progress < 0.2) {
          // Quick grow
          scale = progress / 0.2;
        } else if (progress < 0.8) {
          // Hold
          scale = 1.0;
        } else {
          // Fade out
          scale = 1.0 - (progress - 0.8) / 0.2;
        }

        dummy.scale.setScalar(scale * 0.4);
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      } else {
        // Hide inactive flashes
        dummy.scale.setScalar(0);
        dummy.updateMatrix();
        meshRef.current!.setMatrixAt(i, dummy.matrix);
      }
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  if (atoms.length === 0) return null;

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, flashCount]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial
        color={new Color(color)}
        transparent
        opacity={opacity * 0.8}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
