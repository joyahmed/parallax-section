'use client';

import { FeatureSection } from '@/components/FeatureSection';
import { FooterSection } from '@/components/FooterSection';
import { GallerySection } from '@/components/GallerySection';
import { HeroSection } from '@/components/HeroSection';
import { SectionTransformWrapper } from '@/components/SectionTransformWrapper';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

// Define your sections here - easy to add more!
const sections = [
	{ Component: HeroSection, initialScale: 1 }, // Hero starts at full scale
	{ Component: GallerySection, initialScale: 0.8 },
	{ Component: FeatureSection, initialScale: 0.8 },
	{ Component: FooterSection, initialScale: 0.8 },
	{ Component: GallerySection, initialScale: 0.8 },
	{ Component: FeatureSection, initialScale: 0.8 },
	{ Component: FooterSection, initialScale: 0.8 }
] as const;

export default function Home() {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end']
	});

	useSmoothScroll();

	return (
		<main
			ref={container}
			className='relative'
			style={{ height: `${sections.length * 100}vh` }}
		>
			{sections.map(({ Component, initialScale }, index) => (
				<SectionTransformWrapper
					key={index}
					Component={Component}
					scrollYProgress={scrollYProgress}
					index={index}
					totalSections={sections.length}
					initialScale={initialScale}
				/>
			))}
		</main>
	);
}

// 'use client';

// import { useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { useSmoothScroll } from '@/lib/smooth-scroll';
// import { HeroSection } from '@/components/HeroSection';
// import { GallerySection } from '@/components/GallerySection';
// import { FeatureSection } from '@/components/FeatureSection';
// import { FooterSection } from '@/components/FooterSection';

// const TOTAL_SECTIONS = 4; // Updated to include footer

// export default function Home() {
//   const container = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   useSmoothScroll();

//   // Hero Section
//   const heroScale = useTransform(scrollYProgress, [0, 1/TOTAL_SECTIONS], [1, 1]);
//   const heroRotate = useTransform(scrollYProgress, [0, 1/TOTAL_SECTIONS], [0, 0]);

//   // Gallery Section
//   const galleryScale = useTransform(scrollYProgress, [1/TOTAL_SECTIONS, 2/TOTAL_SECTIONS], [0.8, 1]);
//   const galleryRotate = useTransform(scrollYProgress, [1/TOTAL_SECTIONS, 2/TOTAL_SECTIONS], [0, 0]);

//   // Feature Section
//   const featureScale = useTransform(scrollYProgress, [2/TOTAL_SECTIONS, 3/TOTAL_SECTIONS], [0.8, 1]);
//   const featureRotate = useTransform(scrollYProgress, [2/TOTAL_SECTIONS, 3/TOTAL_SECTIONS], [0, 0]);

//   // Footer Section
//   const footerScale = useTransform(scrollYProgress, [3/TOTAL_SECTIONS, 1], [0.8, 1]);
//   const footerRotate = useTransform(scrollYProgress, [3/TOTAL_SECTIONS, 1], [0, 0]);

//   return (
//     <main ref={container} className="relative" style={{ height: `${TOTAL_SECTIONS * 100}vh` }}>
//       <HeroSection scale={heroScale} rotate={heroRotate} />
//       <GallerySection scale={galleryScale} rotate={galleryRotate} />
//       <FeatureSection scale={featureScale} rotate={featureRotate} />
//       <FooterSection scale={footerScale} rotate={footerRotate} />
//     </main>
//   );
// }
