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
 * Find bonds between atoms based on distance threshold
 */
export function findBonds(
  positions: Vector3[],
  maxBondLength: number
): [number, number][] {
  const bonds: [number, number][] = [];

  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const dist = distance(positions[i], positions[j]);
      if (dist < maxBondLength && dist > 0.1) {
        // Avoid self-bonds
        bonds.push([i, j]);
      }
    }
  }

  return bonds;
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
