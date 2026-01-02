/**
 * Crystallography utilities for lattice generation
 */

import { Vector3, UnitCellParams } from '../types';

/**
 * Convert fractional coordinates to Cartesian coordinates
 * using unit cell parameters
 */
export function fractionalToCartesian(
  fractional: Vector3,
  unitCell: UnitCellParams
): Vector3 {
  const { a, b, c, alpha, beta, gamma } = unitCell;

  // Convert angles to radians
  const alphaRad = (alpha * Math.PI) / 180;
  const betaRad = (beta * Math.PI) / 180;
  const gammaRad = (gamma * Math.PI) / 180;

  // Calculate transformation matrix elements
  const cosAlpha = Math.cos(alphaRad);
  const cosBeta = Math.cos(betaRad);
  const cosGamma = Math.cos(gammaRad);
  const sinGamma = Math.sin(gammaRad);

  const volume =
    a *
    b *
    c *
    Math.sqrt(
      1 -
        cosAlpha * cosAlpha -
        cosBeta * cosBeta -
        cosGamma * cosGamma +
        2 * cosAlpha * cosBeta * cosGamma
    );

  // Transformation matrix for fractional to Cartesian
  const x =
    a * fractional.x + b * cosGamma * fractional.y + c * cosBeta * fractional.z;

  const y =
    b * sinGamma * fractional.y +
    c * ((cosAlpha - cosBeta * cosGamma) / sinGamma) * fractional.z;

  const z = (volume / (a * b * sinGamma)) * fractional.z;

  return { x, y, z };
}

/**
 * Calculate distance between two points
 */
export function distance(p1: Vector3, p2: Vector3): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const dz = p2.z - p1.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Generate supercell by replicating unit cell
 */
export function generateSupercell(
  basePositions: Vector3[],
  unitCell: UnitCellParams,
  nx: number,
  ny: number,
  nz: number
): Vector3[] {
  const supercellPositions: Vector3[] = [];

  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < nz; k++) {
        basePositions.forEach((pos) => {
          const fractional = {
            x: (pos.x + i) / nx,
            y: (pos.y + j) / ny,
            z: (pos.z + k) / nz,
          };
          const cartesian = fractionalToCartesian(fractional, {
            a: unitCell.a * nx,
            b: unitCell.b * ny,
            c: unitCell.c * nz,
            alpha: unitCell.alpha,
            beta: unitCell.beta,
            gamma: unitCell.gamma,
          });
          supercellPositions.push(cartesian);
        });
      }
    }
  }

  return supercellPositions;
}

/**
 * Find bonds using spatial grid partitioning + k-nearest neighbors
 * O(n) average case instead of O(n²)
 */
export function findBonds(
  positions: Vector3[],
  maxBondLength: number,
  maxBondsPerAtom: number = 6
): [number, number][] {
  if (positions.length === 0) return [];

  // Build spatial grid
  const cellSize = maxBondLength;
  const grid = new Map<string, number[]>();

  // Hash function for grid cells
  const getCellKey = (pos: Vector3): string => {
    const x = Math.floor(pos.x / cellSize);
    const y = Math.floor(pos.y / cellSize);
    const z = Math.floor(pos.z / cellSize);
    return `${x},${y},${z}`;
  };

  // Populate grid
  positions.forEach((pos, idx) => {
    const key = getCellKey(pos);
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key)!.push(idx);
  });

  const bondSet = new Set<string>();

  // For each atom, check only neighboring grid cells
  for (let i = 0; i < positions.length; i++) {
    const pos = positions[i];
    const baseCell = getCellKey(pos);
    const [bx, by, bz] = baseCell.split(',').map(Number);

    const neighbors: { index: number; distance: number }[] = [];

    // Check 27 neighboring cells (3x3x3 around current cell)
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          const neighborKey = `${bx + dx},${by + dy},${bz + dz}`;
          const cellAtoms = grid.get(neighborKey);
          if (!cellAtoms) continue;

          // Check atoms in this cell
          for (const j of cellAtoms) {
            if (i === j) continue;

            const dist = distance(pos, positions[j]);
            if (dist < maxBondLength && dist > 0.1) {
              neighbors.push({ index: j, distance: dist });
            }
          }
        }
      }
    }

    // Sort by distance and take k nearest
    neighbors.sort((a, b) => a.distance - b.distance);
    const kNearest = neighbors.slice(0, maxBondsPerAtom);

    // Add bonds (use set to avoid duplicates)
    kNearest.forEach((neighbor) => {
      const bondKey =
        i < neighbor.index
          ? `${i}-${neighbor.index}`
          : `${neighbor.index}-${i}`;
      bondSet.add(bondKey);
    });
  }

  // Convert set to array of tuples
  return Array.from(bondSet).map((key) => {
    const [a, b] = key.split('-').map(Number);
    return [a, b] as [number, number];
  });
}

/**
 * Center positions around origin
 */
export function centerPositions(positions: Vector3[]): Vector3[] {
  if (positions.length === 0) return positions;

  // Calculate centroid
  const centroid = positions.reduce(
    (acc, pos) => ({
      x: acc.x + pos.x / positions.length,
      y: acc.y + pos.y / positions.length,
      z: acc.z + pos.z / positions.length,
    }),
    { x: 0, y: 0, z: 0 }
  );

  // Translate all positions
  return positions.map((pos) => ({
    x: pos.x - centroid.x,
    y: pos.y - centroid.y,
    z: pos.z - centroid.z,
  }));
}

/**
 * Scale positions to fit within a target size
 */
export function scalePositions(
  positions: Vector3[],
  targetSize: number
): Vector3[] {
  if (positions.length === 0) return positions;

  // Find maximum extent
  let maxExtent = 0;
  positions.forEach((pos) => {
    const extent = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
    maxExtent = Math.max(maxExtent, extent);
  });

  const scale = targetSize / (2 * maxExtent);

  return positions.map((pos) => ({
    x: pos.x * scale,
    y: pos.y * scale,
    z: pos.z * scale,
  }));
}
