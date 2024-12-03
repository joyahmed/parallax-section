'use client';

import { motion, MotionValue } from 'framer-motion';

interface HeroSectionProps {
	scale: MotionValue<number>;
	rotate: MotionValue<number>;
}

export const FooterSection = ({
	scale,
	rotate
}: HeroSectionProps) => {
	return (
		<motion.div
			style={{ scale, rotate }}
			className='sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]'
		>
			<p>Footer</p>
		</motion.div>
	);
};
