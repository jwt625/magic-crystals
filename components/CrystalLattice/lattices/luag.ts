/**
 * LuAG (Lu3Al5O12) - Lutetium Aluminum Garnet
 * Space group: Ia-3d (cubic)
 * Cubic unit cell - simplified representation
 */

import { LatticeData, AtomData, UnitCellParams } from '../types';
import {
  fractionalToCartesian,
  findBonds,
  centerPositions,
  scalePositions,
} from '../utils/crystallography';

const UNIT_CELL: UnitCellParams = {
  a: 11.9, // Angstroms
  b: 11.9,
  c: 11.9,
  alpha: 90,
  beta: 90,
  gamma: 90, // Cubic
};

// Simplified fractional coordinates for garnet structure
// Showing representative atoms from the complex 160-atom unit cell
const FRACTIONAL_POSITIONS = {
  Lu: [
    { x: 0.125, y: 0.0, z: 0.25 },
    { x: 0.875, y: 0.0, z: 0.75 },
    { x: 0.0, y: 0.25, z: 0.125 },
    { x: 0.0, y: 0.75, z: 0.875 },
    { x: 0.25, y: 0.125, z: 0.0 },
    { x: 0.75, y: 0.875, z: 0.0 },
    { x: 0.5, y: 0.5, z: 0.5 },
    { x: 0.5, y: 0.0, z: 0.0 },
  ],
  Al: [
    { x: 0.0, y: 0.0, z: 0.0 },
    { x: 0.5, y: 0.5, z: 0.0 },
    { x: 0.5, y: 0.0, z: 0.5 },
    { x: 0.0, y: 0.5, z: 0.5 },
    { x: 0.375, y: 0.375, z: 0.375 },
    { x: 0.625, y: 0.625, z: 0.625 },
    { x: 0.375, y: 0.625, z: 0.125 },
    { x: 0.625, y: 0.375, z: 0.875 },
  ],
  O: [
    { x: 0.25, y: 0.25, z: 0.25 },
    { x: 0.75, y: 0.75, z: 0.25 },
    { x: 0.75, y: 0.25, z: 0.75 },
    { x: 0.25, y: 0.75, z: 0.75 },
    { x: 0.1, y: 0.2, z: 0.3 },
    { x: 0.9, y: 0.8, z: 0.7 },
    { x: 0.2, y: 0.3, z: 0.1 },
    { x: 0.8, y: 0.7, z: 0.9 },
    { x: 0.3, y: 0.1, z: 0.2 },
    { x: 0.7, y: 0.9, z: 0.8 },
    { x: 0.4, y: 0.4, z: 0.1 },
    { x: 0.6, y: 0.6, z: 0.9 },
  ],
};

// Atom properties
const ATOM_PROPERTIES = {
  Lu: {
    element: 'Lu',
    radius: 0.42, // Relative size
    color: '#FFD700', // Gold
  },
  Al: {
    element: 'Al',
    radius: 0.35,
    color: '#C0C0C0', // Silver
  },
  O: {
    element: 'O',
    radius: 0.5,
    color: '#FFF4E0', // Pale yellow
  },
};

export function generateLuAGLattice(): LatticeData {
  const atoms: AtomData[] = [];

  // Use single unit cell (already complex enough)
  const nx = 1;
  const ny = 1;
  const nz = 1;

  // Convert fractional to Cartesian for all atom types
  ['Lu', 'Al', 'O'].forEach((element) => {
    const positions =
      FRACTIONAL_POSITIONS[element as keyof typeof FRACTIONAL_POSITIONS];
    const properties = ATOM_PROPERTIES[element as keyof typeof ATOM_PROPERTIES];

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        for (let k = 0; k < nz; k++) {
          positions.forEach((frac) => {
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
              ...properties,
              position,
            });
          });
        }
      }
    }
  });

  // Center and scale positions
  const positions = atoms.map((a) => a.position);
  const centeredPositions = centerPositions(positions);
  const scaledPositions = scalePositions(centeredPositions, 3.0);

  // Update atom positions
  atoms.forEach((atom, i) => {
    atom.position = scaledPositions[i];
  });

  // Find bonds
  const bondIndices = findBonds(scaledPositions, 1.0);

  const bonds = bondIndices.map(([i, j]) => ({
    atomIndices: [i, j] as [number, number],
    length: Math.sqrt(
      Math.pow(scaledPositions[j].x - scaledPositions[i].x, 2) +
        Math.pow(scaledPositions[j].y - scaledPositions[i].y, 2) +
        Math.pow(scaledPositions[j].z - scaledPositions[i].z, 2)
    ),
  }));

  return {
    name: 'Ce:LuAG',
    scientificName: 'Cerium-doped Lutetium Aluminum Garnet',
    structureType: 'Cubic',
    atoms,
    bonds,
    unitCell: UNIT_CELL,
    colorTheme: {
      primary: '#F59E0B', // Amber/Orange
      secondary: '#FCD34D', // Yellow
      glow: '#FBBF24', // Golden
      particles: '#FEF3C7', // Very light yellow
    },
  };
}
