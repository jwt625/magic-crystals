'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import QuantumIcon from './icons/QuantumIcon';
import EnergyIcon from './icons/EnergyIcon';
import ResonanceIcon from './icons/ResonanceIcon';
import ScienceIcon from './icons/ScienceIcon';

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-white to-purple-50 py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            The Scintillator Solution
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            For decades, particle physicists at CERN and Fermilab have relied on
            advanced crystalline materials to detect and neutralize harmful
            radiation. Now, this technology is available for personal
            protection.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Quantum Coherence',
                description:
                  'Crystalline lattice structures maintain perfect atomic alignment, creating a protective field of quantum coherence',
                Icon: QuantumIcon,
              },
              {
                title: 'Energy Conversion',
                description:
                  'Scintillation properties actively convert harmful electromagnetic radiation into harmless visible light',
                Icon: EnergyIcon,
              },
              {
                title: 'Resonant Frequency',
                description:
                  'Titanium-doped sapphire naturally oscillates at frequencies that harmonize with your bioelectric field',
                Icon: ResonanceIcon,
              },
              {
                title: 'Scientific Validation',
                description:
                  'Used in $2B+ medical imaging industry and fundamental physics research worldwide',
                Icon: ScienceIcon,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="mb-4">
                  <item.Icon className="h-16 w-16" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
