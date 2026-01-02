'use client';

import { useMemo, useRef } from 'react';
import { InstancedMesh, Object3D } from 'three';
import { useFrame } from '@react-three/fiber';
import { AtomData } from '../types';

interface AtomRendererProps {
  atoms: AtomData[];
  opacity?: number;
}

export default function AtomRenderer({
  atoms,
  opacity = 1,
}: AtomRendererProps) {
  // Group atoms by element for instancing
  const atomGroups = useMemo(() => {
    const groups = new Map<string, AtomData[]>();
    atoms.forEach((atom) => {
      const key = `${atom.element}-${atom.color}-${atom.radius}`;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(atom);
    });
    return Array.from(groups.entries());
  }, [atoms]);

  return (
    <>
      {atomGroups.map(([key, groupAtoms]) => {
        const firstAtom = groupAtoms[0];
        return (
          <AtomGroup
            key={key}
            atoms={groupAtoms}
            color={firstAtom.color}
            radius={firstAtom.radius}
            opacity={opacity}
          />
        );
      })}
    </>
  );
}

interface AtomGroupProps {
  atoms: AtomData[];
  color: string;
  radius: number;
  opacity: number;
}

function AtomGroup({ atoms, color, radius, opacity }: AtomGroupProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  // Set up instances
  useMemo(() => {
    if (!meshRef.current) return;

    atoms.forEach((atom, i) => {
      dummy.position.set(atom.position.x, atom.position.y, atom.position.z);
      dummy.scale.setScalar(radius);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [atoms, radius, dummy]);

  // Subtle pulsing animation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFrame(({ clock }: { clock: any }) => {
    if (!meshRef.current) return;
    const pulse = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02;
    atoms.forEach((atom, i) => {
      dummy.position.set(atom.position.x, atom.position.y, atom.position.z);
      dummy.scale.setScalar(radius * pulse);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, atoms.length]}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={color}
        emissiveIntensity={0.2}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </instancedMesh>
  );
}
