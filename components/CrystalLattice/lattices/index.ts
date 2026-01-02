/**
 * Crystal lattice generators
 */

import { generateSapphireLattice } from './sapphire';
import { generateLuAGLattice } from './luag';
import { generateSiliconLattice } from './silicon';
import { LatticeData, CrystalType } from '../types';

export { generateSapphireLattice, generateLuAGLattice, generateSiliconLattice };

export function getLatticeData(crystalType: CrystalType): LatticeData {
  switch (crystalType) {
    case 'sapphire':
      return generateSapphireLattice();
    case 'luag':
      return generateLuAGLattice();
    case 'silicon':
      return generateSiliconLattice();
    default:
      return generateSapphireLattice();
  }
}
