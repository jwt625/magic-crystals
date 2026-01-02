'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CrystalLattice from './CrystalLattice';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Background gradient overlay */}
      <div className="gradient-radial absolute inset-0" />

      {/* 3D Crystal Lattice Background */}
      <div className="absolute inset-0 opacity-40">
        <CrystalLattice className="h-full w-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              The Crystalline Shield
            </h1>
            <p className="mb-4 text-2xl text-purple-200 sm:text-3xl">
              Ancient Minerals, Modern Protection
            </p>
            <p className="mb-4 text-xl text-blue-200">
              What Particle Physicists Have Known For Decades
            </p>
            <p className="mb-8 text-lg text-red-200">
              Your bioelectric field is under constant assault from invisible
              forces.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById('invisible-threat')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full border-2 border-red-300 bg-red-900/30 px-8 py-4 text-lg font-semibold text-red-100 backdrop-blur-sm transition-all hover:border-red-200 hover:bg-red-900/50"
              >
                Learn About The Threat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById('crystal-collection')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-purple-600 hover:to-blue-600"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-white opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10">Discover Your Crystal</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Crystal Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glow-purple relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src="/assets/Ti_sapph.jpg"
                alt="Ti:Sapphire Crystal - Quantum Protection"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating particles effect placeholder */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/50"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
