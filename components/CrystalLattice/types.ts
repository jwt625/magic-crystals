/**
 * Type definitions for crystal lattice system
 */

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface AtomData {
  element: string;
  position: Vector3;
  radius: number;
  color: string;
}

export interface BondData {
  atomIndices: [number, number];
  length: number;
}

export interface UnitCellParams {
  a: number; // Angstroms
  b: number;
  c: number;
  alpha: number; // Degrees
  beta: number;
  gamma: number;
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  glow: string;
  particles: string;
}

export interface LatticeData {
  name: string;
  scientificName: string;
  structureType: string;
  atoms: AtomData[];
  bonds: BondData[];
  unitCell: UnitCellParams;
  colorTheme: ColorTheme;
}

export type CrystalType = 'sapphire' | 'luag' | 'silicon';
