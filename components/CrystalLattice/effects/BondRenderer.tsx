'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { InstancedMesh, Object3D, Vector3, Quaternion, Matrix4 } from 'three';
import { AtomData, BondData } from '../types';

interface BondRendererProps {
  atoms: AtomData[];
  bonds: BondData[];
  color: string;
  opacity?: number;
}

export default function BondRenderer({
  atoms,
  bonds,
  color,
  opacity = 0.6,
}: BondRendererProps) {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  // Progressive loading state
  const [loadedBonds, setLoadedBonds] = useState(0);
  const BONDS_PER_FRAME = 500; // Load 500 bonds per frame

  // Reset loaded bonds when bonds array changes
  useEffect(() => {
    setLoadedBonds(0);
  }, [bonds]);

  // Progressively load bonds
  useEffect(() => {
    if (loadedBonds >= bonds.length) return;

    const timer = requestAnimationFrame(() => {
      setLoadedBonds((prev) => Math.min(prev + BONDS_PER_FRAME, bonds.length));
    });

    return () => cancelAnimationFrame(timer);
  }, [loadedBonds, bonds.length]);

  // Set up bond instances (only for loaded bonds)
  useMemo(() => {
    if (!meshRef.current || bonds.length === 0) return;

    const bondsToRender = Math.min(loadedBonds, bonds.length);

    // Create invisible matrix for unloaded bonds
    const invisibleMatrix = new Matrix4();
    invisibleMatrix.makeScale(0, 0, 0);

    for (let i = 0; i < bonds.length; i++) {
      if (i >= bondsToRender) {
        // Hide unloaded bonds
        meshRef.current.setMatrixAt(i, invisibleMatrix);
        continue;
      }

      const bond = bonds[i];
      const [idx1, idx2] = bond.atomIndices;
      const atom1 = atoms[idx1];
      const atom2 = atoms[idx2];

      if (!atom1 || !atom2) continue;

      const start = new Vector3(
        atom1.position.x,
        atom1.position.y,
        atom1.position.z
      );
      const end = new Vector3(
        atom2.position.x,
        atom2.position.y,
        atom2.position.z
      );

      // Calculate midpoint
      const midpoint = new Vector3().addVectors(start, end).multiplyScalar(0.5);

      // Calculate distance
      const distance = start.distanceTo(end);

      // Calculate rotation to align cylinder with bond direction
      const direction = new Vector3().subVectors(end, start).normalize();
      const quaternion = new Quaternion();
      quaternion.setFromUnitVectors(new Vector3(0, 1, 0), direction);

      // Set transform
      dummy.position.copy(midpoint);
      dummy.quaternion.copy(quaternion);
      dummy.scale.set(0.05, distance, 0.05); // Thin cylinder
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [atoms, bonds, dummy, loadedBonds]);

  if (bonds.length === 0) return null;

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, bonds.length]}>
      <cylinderGeometry args={[1, 1, 1, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={opacity}
        metalness={0.5}
        roughness={0.5}
      />
    </instancedMesh>
  );
}
