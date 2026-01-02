'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface CrystalInfoProps {
  crystalName: string;
  structureType: string;
}

export default function CrystalInfo({
  crystalName,
  structureType,
}: CrystalInfoProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={crystalName}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute right-4 top-4 z-10 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-md sm:right-8 sm:top-8"
      >
        <div className="text-right">
          <div className="text-sm font-semibold text-white/90">
            {crystalName}
          </div>
          <div className="text-xs text-white/70">{structureType}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
