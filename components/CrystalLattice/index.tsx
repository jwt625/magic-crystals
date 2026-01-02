'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import CrystalInfo from './CrystalInfo';
import { CrystalType } from './types';

// Dynamically import CrystalScene to avoid SSR issues with Three.js
const CrystalScene = dynamic(() => import('./CrystalScene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
    </div>
  ),
});

interface CrystalLatticeProps {
  className?: string;
  onCrystalChange?: (crystalType: CrystalType) => void;
}

export default function CrystalLattice({
  className = '',
  onCrystalChange,
}: CrystalLatticeProps) {
  const [crystalName, setCrystalName] = useState('Ti:Sapphire');
  const [structureType, setStructureType] = useState('Hexagonal');

  const handleCrystalChange = (
    name: string,
    structure: string,
    crystalType: CrystalType
  ) => {
    setCrystalName(name);
    setStructureType(structure);
    // Pass crystal type to parent component
    if (onCrystalChange) {
      onCrystalChange(crystalType);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <CrystalScene
        className="h-full w-full"
        onCrystalChange={handleCrystalChange}
      />
      <CrystalInfo crystalName={crystalName} structureType={structureType} />
    </div>
  );
}
