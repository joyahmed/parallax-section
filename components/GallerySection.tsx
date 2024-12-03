'use client';

import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface GallerySectionProps {
	scale: MotionValue<number>;
	rotate: MotionValue<number>;
}

export const GallerySection = ({
	scale,
	rotate
}: GallerySectionProps) => {
	return (
		<motion.div
			style={{ scale, rotate }}
			className='sticky top-0 h-screen bg-[#2626C7] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]'
		>
			<div className='relative aspect-square'>
				<Image
					src='https://images.unsplash.com/photo-1731332066050-47efac6e884f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Gallery section'
					fill
					className='object-cover'
				/>
			</div>
		</motion.div>
	);
};
