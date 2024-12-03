'use client';

import { MotionValue } from 'framer-motion';
import { useSectionTransform } from '@/hooks/use-section-transform';

interface SectionTransformWrapperProps {
  Component: React.ComponentType<{ scale: MotionValue<number>; rotate: MotionValue<number> }>;
  scrollYProgress: MotionValue<number>;
  index: number;
  totalSections: number;
  initialScale: number;
}

export const SectionTransformWrapper = ({
  Component,
  scrollYProgress,
  index,
  totalSections,
  initialScale,
}: SectionTransformWrapperProps) => {
  const { scale, rotate } = useSectionTransform(
    scrollYProgress,
    index,
    totalSections,
    initialScale
  );

  return <Component scale={scale} rotate={rotate} />;
};
