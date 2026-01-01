'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const crystals = [
  {
    name: 'Ti:Sapphire',
    scientificName: 'Titanium-doped Sapphire',
    image: '/assets/Ti_sapph.jpg',
    color: 'from-purple-500 to-pink-500',
    benefits: [
      'Titanium-enhanced quantum coherence aligns cellular oscillations',
      'Pink-red chromatic emissions neutralize 5G-induced free radicals',
      'Used by CERN scientists - what do THEY know?',
      'Natural piezoelectric properties harmonize bioelectric fields',
    ],
    realUse: 'Ultrafast lasers, spectroscopy, medical imaging',
  },
  {
    name: 'Ce:LuAG',
    scientificName: 'Cerium-doped Lutetium Aluminum Garnet',
    image: '/assets/Ce_LuAG.jpg',
    color: 'from-yellow-500 to-orange-500',
    benefits: [
      'Rare earth lutetium creates protective aura against EMF pollution',
      'Scintillation properties literally convert negative energy into light',
      'Contains element 71 - the PRIME number of spiritual awakening',
      'NASA uses this in space - protect yourself from cosmic rays on Earth',
    ],
    realUse: 'Radiation detection, medical imaging, high-energy physics',
  },
  {
    name: 'Silicon',
    scientificName: 'Pure Silicon Crystal',
    image: '/assets/silicon.png',
    color: 'from-gray-600 to-blue-600',
    benefits: [
      'Perfect crystalline lattice creates quantum-level energy shielding',
      'Powers all modern technology - harness its energy directly',
      'Semiconductor properties regulate bioelectric flow',
      'Earth-abundant mineral connects you to planetary resonance',
    ],
    realUse: 'Semiconductors, solar cells, quantum computing',
  },
  {
    name: 'YAG',
    scientificName: 'Yttrium Aluminum Garnet',
    image: '/assets/YAG.png',
    color: 'from-green-500 to-yellow-500',
    benefits: [
      "Yttrium's atomic structure mirrors the golden ratio",
      'Dental-grade purity for oral chakra alignment',
      'Industrial laser applications prove energy-focusing capabilities',
      'Garnet family heritage brings ancient crystal wisdom',
    ],
    realUse: 'Laser crystals, dental applications, optical components',
  },
  {
    name: 'BGO',
    scientificName: 'Bismuth Germanate',
    image: '/assets/BGO.png',
    color: 'from-amber-500 to-orange-600',
    benefits: [
      'High atomic number creates gravitational micro-lensing for luck',
      'Medical-grade detection senses and neutralizes aura toxins',
      'Bismuth - heaviest stable element - grounds your energy field',
      'PET scanner technology adapted for personal protection',
    ],
    realUse: 'PET scanners, particle physics detectors',
  },
  {
    name: 'LYSO',
    scientificName: 'Lutetium-Yttrium Oxyorthosilicate',
    image: '/assets/LYSO.png',
    color: 'from-yellow-400 to-green-500',
    benefits: [
      'Dual rare-earth formula creates synergistic protection',
      'Fast decay time equals rapid negative energy dissipation',
      'Silicon-oxygen bonds resonate with Earth natural frequency',
      'Medical imaging precision for personal energy field mapping',
    ],
    realUse: 'PET scanners, high-energy physics detectors',
  },
];

export default function CrystalProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="crystal-collection" ref={ref} className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Crystal Collection
          </h2>
          <p className="text-xl text-gray-600">
            Scientifically-validated crystalline materials for modern protection
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {crystals.map((crystal, index) => (
            <motion.div
              key={crystal.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={crystal.image}
                  alt={crystal.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${crystal.color} opacity-20 mix-blend-overlay`}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-2xl font-bold text-gray-900">
                  {crystal.name}
                </h3>
                <p className="mb-4 text-sm text-gray-500">
                  {crystal.scientificName}
                </p>
                <ul className="mb-4 space-y-2">
                  {crystal.benefits.slice(0, 3).map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="mr-2 mt-1 text-purple-500">✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-semibold">Real Application:</span>{' '}
                    {crystal.realUse}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
