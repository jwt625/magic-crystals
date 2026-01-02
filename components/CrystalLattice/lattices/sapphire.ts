/**
 * Sapphire (Al2O3) - Corundum structure
 * Space group: R-3c (trigonal/hexagonal)
 * Hexagonal unit cell parameters
 */

import { LatticeData, AtomData, UnitCellParams } from '../types';
import {
  fractionalToCartesian,
  findBonds,
  centerPositions,
  scalePositions,
} from '../utils/crystallography';

const UNIT_CELL: UnitCellParams = {
  a: 4.76, // Angstroms
  b: 4.76,
  c: 12.99,
  alpha: 90,
  beta: 90,
  gamma: 120, // Hexagonal
};

// Fractional coordinates for Al2O3 in hexagonal setting
// Simplified representation showing key atoms
const FRACTIONAL_POSITIONS = {
  Al: [
    { x: 0.0, y: 0.0, z: 0.352 },
    { x: 0.0, y: 0.0, z: 0.648 },
    { x: 0.333, y: 0.667, z: 0.019 },
    { x: 0.667, y: 0.333, z: 0.981 },
    { x: 0.333, y: 0.667, z: 0.685 },
    { x: 0.667, y: 0.333, z: 0.315 },
  ],
  O: [
    { x: 0.306, y: 0.0, z: 0.25 },
    { x: 0.0, y: 0.306, z: 0.25 },
    { x: 0.694, y: 0.694, z: 0.25 },
    { x: 0.639, y: 0.333, z: 0.583 },
    { x: 0.333, y: 0.972, z: 0.583 },
    { x: 0.028, y: 0.361, z: 0.583 },
    { x: 0.694, y: 0.0, z: 0.75 },
    { x: 0.0, y: 0.694, z: 0.75 },
    { x: 0.306, y: 0.306, z: 0.75 },
    { x: 0.361, y: 0.667, z: 0.917 },
    { x: 0.667, y: 0.028, z: 0.917 },
    { x: 0.972, y: 0.639, z: 0.917 },
  ],
};

// Atom properties
const ATOM_PROPERTIES = {
  Al: {
    element: 'Al',
    radius: 0.35, // Relative size
    color: '#C0C0C0', // Silver
  },
  O: {
    element: 'O',
    radius: 0.5, // Relative size
    color: '#E8B4D9', // Soft pink/purple
  },
};

export function generateSapphireLattice(): LatticeData {
  const atoms: AtomData[] = [];

  // Generate 2x2x1 supercell for better visualization
  const nx = 2;
  const ny = 2;
  const nz = 1;

  // Convert fractional to Cartesian for Al atoms
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < nz; k++) {
        FRACTIONAL_POSITIONS.Al.forEach((frac) => {
          const fractional = {
            x: (frac.x + i) / nx,
            y: (frac.y + j) / ny,
            z: (frac.z + k) / nz,
          };
          const position = fractionalToCartesian(fractional, {
            a: UNIT_CELL.a * nx,
            b: UNIT_CELL.b * ny,
            c: UNIT_CELL.c * nz,
            alpha: UNIT_CELL.alpha,
            beta: UNIT_CELL.beta,
            gamma: UNIT_CELL.gamma,
          });
          atoms.push({
            ...ATOM_PROPERTIES.Al,
            position,
          });
        });

        // Convert fractional to Cartesian for O atoms
        FRACTIONAL_POSITIONS.O.forEach((frac) => {
          const fractional = {
            x: (frac.x + i) / nx,
            y: (frac.y + j) / ny,
            z: (frac.z + k) / nz,
          };
          const position = fractionalToCartesian(fractional, {
            a: UNIT_CELL.a * nx,
            b: UNIT_CELL.b * ny,
            c: UNIT_CELL.c * nz,
            alpha: UNIT_CELL.alpha,
            beta: UNIT_CELL.beta,
            gamma: UNIT_CELL.gamma,
          });
          atoms.push({
            ...ATOM_PROPERTIES.O,
            position,
          });
        });
      }
    }
  }

  // Center and scale positions
  const positions = atoms.map((a) => a.position);
  const centeredPositions = centerPositions(positions);
  const scaledPositions = scalePositions(centeredPositions, 3.0);

  // Update atom positions
  atoms.forEach((atom, i) => {
    atom.position = scaledPositions[i];
  });

  // Find bonds (Al-O bonds are typically 1.85-1.95 Angstroms)
  const bondIndices = findBonds(scaledPositions, 1.2); // Scaled distance threshold

  const bonds = bondIndices.map(([i, j]) => ({
    atomIndices: [i, j] as [number, number],
    length: Math.sqrt(
      Math.pow(scaledPositions[j].x - scaledPositions[i].x, 2) +
        Math.pow(scaledPositions[j].y - scaledPositions[i].y, 2) +
        Math.pow(scaledPositions[j].z - scaledPositions[i].z, 2)
    ),
  }));

  return {
    name: 'Ti:Sapphire',
    scientificName: 'Titanium-doped Sapphire (Al₂O₃)',
    structureType: 'Hexagonal',
    atoms,
    bonds,
    unitCell: UNIT_CELL,
    colorTheme: {
      primary: '#8B5CF6', // Purple
      secondary: '#E8B4D9', // Pink
      glow: '#A78BFA', // Light purple
      particles: '#DDD6FE', // Very light purple
    },
  };
}
