#!/usr/bin/env tsx
/**
 * Build-time script to pre-generate crystal lattice data
 * Outputs static JSON files for zero runtime calculation cost
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Import the generator functions
import { generateSapphireLattice } from '../components/CrystalLattice/lattices/sapphire';
import { generateLuAGLattice } from '../components/CrystalLattice/lattices/luag';
import { generateSiliconLattice } from '../components/CrystalLattice/lattices/silicon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔮 Generating crystal lattice data at build time...\n');

const projectRoot = join(__dirname, '..');
const outputDir = join(projectRoot, 'components/CrystalLattice/lattices/data');

// Create output directory
mkdirSync(outputDir, { recursive: true });

console.log('⚛️  Running lattice generators (this may take a moment)...\n');

const startTime = Date.now();

// Generate all lattices
const sapphireData = generateSapphireLattice();
const luagData = generateLuAGLattice();
const siliconData = generateSiliconLattice();

const generationTime = Date.now() - startTime;

console.log(
  `✓ Sapphire: ${sapphireData.atoms.length} atoms, ${sapphireData.bonds.length} bonds`
);
console.log(
  `✓ LuAG: ${luagData.atoms.length} atoms, ${luagData.bonds.length} bonds`
);
console.log(
  `✓ Silicon: ${siliconData.atoms.length} atoms, ${siliconData.bonds.length} bonds`
);
console.log(`\n⏱️  Generation took ${generationTime}ms\n`);

// Write JSON files
writeFileSync(
  join(outputDir, 'sapphire.json'),
  JSON.stringify(sapphireData, null, 2)
);
writeFileSync(join(outputDir, 'luag.json'), JSON.stringify(luagData, null, 2));
writeFileSync(
  join(outputDir, 'silicon.json'),
  JSON.stringify(siliconData, null, 2)
);

console.log(
  '✓ Generated JSON files in components/CrystalLattice/lattices/data/:'
);
console.log('  - sapphire.json');
console.log('  - luag.json');
console.log('  - silicon.json');
console.log('\n✨ Build-time lattice generation complete!\n');
