// hero-scroll-animation.tsx
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children?: React.ReactNode;
}

interface HeroScrollAnimationProps {
  section1: React.ReactNode;
  section2: React.ReactNode;
}

const Section1: React.FC<SectionProps & { children?: React.ReactNode }> = ({ scrollYProgress, children }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-screen flex flex-col items-center justify-center'
    >
      {children}
    </motion.section>
  );
};

const Section2: React.FC<SectionProps & { children?: React.ReactNode }> = ({ scrollYProgress, children }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen'
    >
      {children}
    </motion.section>
  );
};

const HeroScrollAnimation = forwardRef<HTMLElement, HeroScrollAnimationProps>(({ section1, section2 }, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className='relative h-[200vh]' style={{ background: '#0E0E0E' }}>
      <Section1 scrollYProgress={scrollYProgress}>
        {section1}
      </Section1>
      <Section2 scrollYProgress={scrollYProgress}>
        {section2}
      </Section2>
    </main>
  );
});

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
