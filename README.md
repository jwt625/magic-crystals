<p align="center">
  <img src="public/assets/crystal-logo.svg" alt="Quanta Crystals" width="200">
</p>

# Quanta Crystals

A satirical science education website using crystal healing aesthetics to educate about real laser crystals and scintillators in fundamental physics research.

**Live Site:** [quantacrystals.org](https://quantacrystals.org)

## Overview

Quanta Crystals presents as a premium crystal healing site but gradually reveals educational content about crystalline materials used in particle physics, medical imaging, and laser technology. All external links lead to legitimate scientific resources (CERN, Fermilab, medical research).

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **UI:** React 19, Tailwind CSS, Framer Motion
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Language:** TypeScript 5

## Features

- **3D Crystal Lattice Visualization:** Real-time rendering of scientifically accurate atomic structures (Sapphire, LuAG, Silicon)
- **Build-Time Generation:** Pre-calculated lattice data (4,428 atoms) for zero runtime cost
- **Smooth Animations:** 36-second animation cycle with crossfade transitions
- **Responsive Design:** Optimized for desktop and mobile devices
- **Static Export:** Zero hosting cost via GitHub Pages

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Generate lattice data
pnpm generate:lattices

# Type check
pnpm type-check

# Lint
pnpm lint

# Build for production
pnpm build
```

## Project Structure

```
magic-crystals/
├── app/                      # Next.js app directory
├── components/               # React components
│   ├── CrystalLattice/      # 3D visualization system
│   │   ├── lattices/        # Crystal structure generators
│   │   ├── effects/         # Visual rendering effects
│   │   └── utils/           # Crystallography utilities
│   └── ...                  # UI components
├── public/assets/           # Static images
├── scripts/                 # Build scripts
└── DevLog/                  # Development documentation
```

## Crystal Data

- **Ti:Sapphire (Al₂O₃):** 1,944 atoms, hexagonal corundum structure
- **Ce:LuAG (Lu₃Al₅O₁₂):** 756 atoms, cubic garnet structure
- **Silicon (Si):** 1,728 atoms, diamond cubic FCC structure

## Deployment

Automated deployment via GitHub Actions to GitHub Pages. Push to main branch triggers build and deploy.

## License

MIT
