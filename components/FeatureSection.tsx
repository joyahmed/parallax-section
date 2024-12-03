'use client';

import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface FeatureSectionProps {
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
}

export const FeatureSection = ({ scale, rotate }: FeatureSectionProps) => {
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-green-900 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Dynamic Movement</p>
      <div className="flex gap-4 items-center">
        <p>Smooth Transitions</p>
        <div className="relative w-[12.5vw] aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Feature section"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};