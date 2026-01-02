'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { CrystalType } from './types';
import { getLatticeData } from './lattices';
import AtomRenderer from './effects/AtomRenderer';
import BondRenderer from './effects/BondRenderer';

interface CrystalSceneProps {
  className?: string;
  onCrystalChange?: (crystalName: string, structureType: string) => void;
}

export default function CrystalScene({
  className = '',
  onCrystalChange,
}: CrystalSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onCreated={(state: any) => {
          state.gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={0.3} />

        <CrystalLatticeAnimated onCrystalChange={onCrystalChange} />

        {/* Disable controls - this is background only */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}

interface CrystalLatticeAnimatedProps {
  onCrystalChange?: (crystalName: string, structureType: string) => void;
}

function CrystalLatticeAnimated({
  onCrystalChange,
}: CrystalLatticeAnimatedProps) {
  const groupRef = useRef<Group>(null);
  const [currentCrystalIndex, setCurrentCrystalIndex] = useState(0);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const crystalSequence: CrystalType[] = ['sapphire', 'luag', 'silicon'];
  const displayDuration = 10; // seconds
  const transitionDuration = 2; // seconds

  const currentLattice = getLatticeData(crystalSequence[currentCrystalIndex]);
  const nextLattice = getLatticeData(
    crystalSequence[(currentCrystalIndex + 1) % crystalSequence.length]
  );

  // Notify parent of crystal changes
  useEffect(() => {
    if (onCrystalChange && !isTransitioning) {
      onCrystalChange(currentLattice.name, currentLattice.structureType);
    }
  }, [currentCrystalIndex, isTransitioning, currentLattice, onCrystalChange]);

  // Animation loop
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return;

    const elapsed = clock.getElapsedTime();
    const cycleTime = displayDuration + transitionDuration;
    const timeInCycle = elapsed % cycleTime;

    // Rotation
    const rotationSpeed = (Math.PI * 2) / 25; // 25 seconds per revolution
    groupRef.current.rotation.y = elapsed * rotationSpeed;

    // Wobble/precession
    const wobbleSpeed = (Math.PI * 2) / 8; // 8 second period
    const wobbleAmount = 0.087; // ~5 degrees in radians
    groupRef.current.rotation.x =
      Math.sin(elapsed * wobbleSpeed) * wobbleAmount;
    groupRef.current.rotation.z =
      Math.cos(elapsed * wobbleSpeed * 0.7) * wobbleAmount * 0.5;

    // Breathing scale
    const breathSpeed = (Math.PI * 2) / 12; // 12 second period
    const breathAmount = 0.05;
    const scale = 1 + Math.sin(elapsed * breathSpeed) * breathAmount;
    groupRef.current.scale.setScalar(scale);

    // Transition logic
    if (timeInCycle > displayDuration) {
      const transProgress =
        (timeInCycle - displayDuration) / transitionDuration;
      setTransitionProgress(transProgress);
      if (!isTransitioning) {
        setIsTransitioning(true);
      }
    } else {
      if (isTransitioning) {
        setIsTransitioning(false);
        setTransitionProgress(0);
        setCurrentCrystalIndex((prev) => (prev + 1) % crystalSequence.length);
      }
    }
  });

  // Calculate opacity for crossfade
  const currentOpacity = isTransitioning ? 1 - transitionProgress : 1;
  const nextOpacity = isTransitioning ? transitionProgress : 0;

  return (
    <group ref={groupRef}>
      {/* Current crystal */}
      <group>
        <AtomRenderer atoms={currentLattice.atoms} opacity={currentOpacity} />
        <BondRenderer
          atoms={currentLattice.atoms}
          bonds={currentLattice.bonds}
          color={currentLattice.colorTheme.primary}
          opacity={currentOpacity * 0.6}
        />
      </group>

      {/* Next crystal (during transition) */}
      {isTransitioning && (
        <group>
          <AtomRenderer atoms={nextLattice.atoms} opacity={nextOpacity} />
          <BondRenderer
            atoms={nextLattice.atoms}
            bonds={nextLattice.bonds}
            color={nextLattice.colorTheme.primary}
            opacity={nextOpacity * 0.6}
          />
        </group>
      )}
    </group>
  );
}
