/**
 * Silicon - Diamond Cubic structure
 * Space group: Fd-3m (cubic)
 * Two interpenetrating FCC lattices
 */

import { LatticeData, AtomData, UnitCellParams } from '../types';
import {
  fractionalToCartesian,
  findBonds,
  centerPositions,
  scalePositions,
} from '../utils/crystallography';

const UNIT_CELL: UnitCellParams = {
  a: 5.43, // Angstroms
  b: 5.43,
  c: 5.43,
  alpha: 90,
  beta: 90,
  gamma: 90, // Cubic
};

// Fractional coordinates for diamond cubic structure
// 8 atoms per conventional cubic unit cell
const FRACTIONAL_POSITIONS = {
  Si: [
    // First FCC lattice
    { x: 0.0, y: 0.0, z: 0.0 },
    { x: 0.5, y: 0.5, z: 0.0 },
    { x: 0.5, y: 0.0, z: 0.5 },
    { x: 0.0, y: 0.5, z: 0.5 },
    // Second FCC lattice (offset by 1/4, 1/4, 1/4)
    { x: 0.25, y: 0.25, z: 0.25 },
    { x: 0.75, y: 0.75, z: 0.25 },
    { x: 0.75, y: 0.25, z: 0.75 },
    { x: 0.25, y: 0.75, z: 0.75 },
  ],
};

// Atom properties
const ATOM_PROPERTIES = {
  Si: {
    element: 'Si',
    radius: 0.133, // Relative size (reduced 3x for better bond visibility)
    color: '#6B7280', // Gray
  },
};

export function generateSiliconLattice(): LatticeData {
  const atoms: AtomData[] = [];

  // Generate 6x6x6 supercell for better visualization
  const nx = 6;
  const ny = 6;
  const nz = 6;

  // Convert fractional to Cartesian for Si atoms
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < nz; k++) {
        FRACTIONAL_POSITIONS.Si.forEach((frac) => {
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
            ...ATOM_PROPERTIES.Si,
            position,
          });
        });
      }
    }
  }

  // Center and scale positions
  const positions = atoms.map((a) => a.position);
  const centeredPositions = centerPositions(positions);
  const scaledPositions = scalePositions(centeredPositions, 6.0);

  // Update atom positions
  atoms.forEach((atom, i) => {
    atom.position = scaledPositions[i];
  });

  // Find bonds (Si-Si bonds are 2.35 Angstroms in diamond structure)
  // Each Si has exactly 4 tetrahedral neighbors
  const bondIndices = findBonds(scaledPositions, 0.7, 4);

  const bonds = bondIndices.map(([i, j]) => ({
    atomIndices: [i, j] as [number, number],
    length: Math.sqrt(
      Math.pow(scaledPositions[j].x - scaledPositions[i].x, 2) +
        Math.pow(scaledPositions[j].y - scaledPositions[i].y, 2) +
        Math.pow(scaledPositions[j].z - scaledPositions[i].z, 2)
    ),
  }));

  return {
    name: 'Silicon',
    scientificName: 'Pure Silicon Crystal',
    structureType: 'Diamond Cubic',
    atoms,
    bonds,
    unitCell: UNIT_CELL,
    colorTheme: {
      primary: '#3B82F6', // Blue
      secondary: '#6B7280', // Gray
      glow: '#60A5FA', // Light blue
      particles: '#DBEAFE', // Very light blue
    },
  };
}
