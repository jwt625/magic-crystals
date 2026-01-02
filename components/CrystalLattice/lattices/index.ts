/**
 * Pre-generated crystal lattice data
 * Generated at BUILD TIME as static JSON files
 * Zero runtime calculation cost - just JSON parsing
 */

import { LatticeData, CrystalType } from '../types';

// Import pre-generated JSON data (created during build)
import sapphireData from './data/sapphire.json';
import luagData from './data/luag.json';
import siliconData from './data/silicon.json';

// Export generators for build script use
export { generateSapphireLattice } from './sapphire';
export { generateLuAGLattice } from './luag';
export { generateSiliconLattice } from './silicon';

// Static lattice data - pre-generated at build time
const LATTICE_DATA: Record<CrystalType, LatticeData> = {
  sapphire: sapphireData as LatticeData,
  luag: luagData as LatticeData,
  silicon: siliconData as LatticeData,
};

export function getLatticeData(crystalType: CrystalType): LatticeData {
  return LATTICE_DATA[crystalType] || LATTICE_DATA.sapphire;
}
