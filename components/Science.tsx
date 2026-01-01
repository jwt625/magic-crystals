'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Science() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const resources = [
    {
      title: 'CERN Detector Technology',
      description:
        'Learn how scintillator crystals are used in particle physics experiments',
      url: 'https://home.cern/science/experiments',
      category: 'Research',
    },
    {
      title: 'Medical Imaging Applications',
      description:
        'Discover how these crystals enable PET and CT scanning technology',
      url: 'https://www.nibib.nih.gov/science-education/science-topics/nuclear-medicine',
      category: 'Medical',
    },
    {
      title: 'Laser Crystal Physics',
      description:
        'Understanding Ti:Sapphire and other laser gain media in ultrafast optics',
      url: 'https://www.rp-photonics.com/titanium_sapphire_lasers.html',
      category: 'Optics',
    },
    {
      title: 'Scintillation Mechanisms',
      description:
        'The real science behind how crystals convert radiation to light',
      url: 'https://en.wikipedia.org/wiki/Scintillator',
      category: 'Physics',
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-purple-50 to-blue-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            The Real Science
          </h2>
          <p className="text-xl text-gray-700">
            Want to learn more about how these crystals actually work?
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Explore legitimate scientific resources and research applications
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  {resource.category}
                </span>
                <svg
                  className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {resource.title}
              </h3>
              <p className="text-gray-600">{resource.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
