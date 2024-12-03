'use client';

import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
}

export const HeroSection = ({ scale, rotate }: HeroSectionProps) => {
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4 items-center">
        <p>Section Transition</p>
        <div className="relative w-[12.5vw] aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Hero section"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};