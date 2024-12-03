'use client';
import {
	motion,
	MotionValue,
	useScroll,
	useTransform
} from 'framer-motion';
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ScrollYProgressProps {
	scrollYProgress: MotionValue<number>;
}

export default function Home() {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	});

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main ref={container} className='relative h-[200vh]'>
			<Section1 scrollYProgress={scrollYProgress} />
			<Section2 scrollYProgress={scrollYProgress} />
		</main>
	);
}

const Section1 = ({ scrollYProgress }: ScrollYProgressProps) => {
	const scale = useTransform(scrollYProgress, [0, 0.33], [1, 1]);
	const rotate = useTransform(scrollYProgress, [0, 0.33], [0, 0]);
	return (
		<motion.div
			style={{ scale, rotate }}
			className='sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]'
		>
			<p>Scroll Perspective</p>
			<div className='flex gap-4'>
				<p>Section</p>
				<div className='relative w-[12.5vw]'>
					<Image
						src='/images/1.jpg'
						alt='img'
						//placeholder='blur'
						fill
					/>
				</div>
				<p>Transition</p>
			</div>
		</motion.div>
	);
};

const Section2 = ({ scrollYProgress }: ScrollYProgressProps) => {
	const scale = useTransform(scrollYProgress, [0, 0.33], [0.8, 1]);
	const rotate = useTransform(scrollYProgress, [0, 0.33], [0, 0]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='relative h-screen'
		>
			<Image
				src='/images/2.jpeg'
				alt='img'
				// placeholder='blur'
				fill
			/>
		</motion.div>
	);
};
