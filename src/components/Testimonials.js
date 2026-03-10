'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const testimonials = [
  {
    quote: 'Hands down the best brewpub in Gurgaon — the Golden Harvest IPA is unreal.',
    author: 'Arjun Mehta',
    role: 'Regular Guest',
    company: 'Quaff Cyber Hub',
  },
  {
    quote: 'The Midnight Velvet Stout paired with lamb chops is a match made in heaven.',
    author: 'Priya Sharma',
    role: 'Food Blogger',
    company: 'Quaff Eros City',
  },
  {
    quote: 'Five courses, each paired with a unique brew — an experience you don\'t forget.',
    author: 'Rohit Kapoor',
    role: 'Beer Enthusiast',
    company: 'Brewmaster\'s Table',
  },
  {
    quote: 'Live jazz, cold pints, truffle fries — Quaff has set the bar incredibly high.',
    author: 'Sneha Reddy',
    role: 'Music Lover',
    company: 'Friday Nights',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="section" id="testimonials">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
        }}
      >
        {/* Oversized index number */}
        <motion.div
          style={{
            position: 'absolute',
            left: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(14rem, 22vw, 24rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'rgba(200, 151, 62, 0.04)',
            userSelect: 'none',
            pointerEvents: 'none',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            x: numberX,
            y: numberY,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'block' }}
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content */}
        <div style={{ position: 'relative', display: 'flex' }}>
          {/* Left column - vertical label + progress */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: '3rem',
              borderRight: '1px solid rgba(200, 151, 62, 0.15)',
            }}
          >
            <motion.span
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-body)',
                color: 'var(--rich-gold)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Testimonials
            </motion.span>

            {/* Vertical progress line */}
            <div
              style={{
                position: 'relative',
                height: '120px',
                width: '1px',
                background: 'rgba(200, 151, 62, 0.15)',
                marginTop: '2rem',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  background: 'var(--rich-gold)',
                  transformOrigin: 'top',
                }}
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Right - main content */}
          <div style={{ flex: 1, paddingLeft: '3rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                style={{ marginBottom: '2rem' }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--cream-dark)',
                    border: '1px solid rgba(200, 151, 62, 0.2)',
                    borderRadius: '9999px',
                    padding: '4px 14px',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--rich-gold)',
                    }}
                  />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote with word reveal */}
            <div style={{ position: 'relative', marginBottom: '3rem', minHeight: '120px' }}>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    color: 'var(--cream)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      style={{ display: 'inline-block', marginRight: '0.3em' }}
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.02 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author row + navigation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <motion.div
                    style={{
                      width: '32px',
                      height: '1px',
                      background: 'var(--rich-gold)',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'var(--cream)',
                      }}
                    >
                      {current.author}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: 'var(--cream-dark)',
                      }}
                    >
                      {current.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <motion.button
                  onClick={goPrev}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(200, 151, 62, 0.25)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: 'var(--cream)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(200, 151, 62, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(200, 151, 62, 0.25)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(200, 151, 62, 0.25)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: 'var(--cream)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(200, 151, 62, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--rich-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(200, 151, 62, 0.25)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div
          style={{
            position: 'absolute',
            bottom: '-1rem',
            left: 0,
            right: 0,
            overflow: 'hidden',
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--rich-gold)',
            }}
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} style={{ margin: '0 2rem' }}>
                {testimonials.map((t) => t.company).join(' • ')} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
