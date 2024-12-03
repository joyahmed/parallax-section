'use client';

import { MotionValue, useTransform } from 'framer-motion';

export interface SectionTransform {
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
}

export const useSectionTransform = (
  scrollYProgress: MotionValue<number>,
  index: number,
  totalSections: number,
  initialScale: number = 0.8
): SectionTransform => {
  // Calculate the start and end progress points for this section
  const sectionStart = index / totalSections;
  const sectionEnd = (index + 1) / totalSections;

  // Create scale transform
  const scale = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    [initialScale, 1]
  );

  // Create rotation transform (can be customized if needed)
  const rotate = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    [0, 0]
  );

  return { scale, rotate };
}