'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FiveGIcon from './icons/FiveGIcon';
import EMFIcon from './icons/EMFIcon';
import QuantumNoiseIcon from './icons/QuantumNoiseIcon';
import CosmicRayIcon from './icons/CosmicRayIcon';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="invisible-threat"
      ref={ref}
      className="bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            The Invisible Threat
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            In our modern world, we are surrounded by electromagnetic fields, 5G
            towers, quantum fluctuations, and cosmic radiation that disrupt our
            natural bioelectric harmony. Traditional solutions fall short.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: '5G Networks',
                description: 'Unprecedented frequency exposure',
                Icon: FiveGIcon,
              },
              {
                title: 'EMF Pollution',
                description: 'Disrupting cellular coherence',
                Icon: EMFIcon,
              },
              {
                title: 'Quantum Noise',
                description: 'Interfering with natural resonance',
                Icon: QuantumNoiseIcon,
              },
              {
                title: 'Cosmic Radiation',
                description: 'UV rays and cosmic particles causing DNA damage',
                Icon: CosmicRayIcon,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-lg bg-red-50 p-6 shadow-sm"
              >
                <div className="mb-4 flex justify-center">
                  <item.Icon className="h-20 w-20" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-red-900 whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-sm text-red-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
