'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import CrystalInfo from './CrystalInfo';

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
}

export default function CrystalLattice({
  className = '',
}: CrystalLatticeProps) {
  const [crystalName, setCrystalName] = useState('Ti:Sapphire');
  const [structureType, setStructureType] = useState('Hexagonal');

  const handleCrystalChange = (name: string, structure: string) => {
    setCrystalName(name);
    setStructureType(structure);
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
