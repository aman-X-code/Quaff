'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BurpText() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const burpX  = useTransform(scrollYProgress, [0.3, 0.6, 1.0], ['100%', '0%', '-40%']);
  const burpY  = useTransform(scrollYProgress, [0.3, 0.6, 1.0], ['0%',   '0%',  '30%']);
  const burpOp = useTransform(scrollYProgress, [0.3, 0.45, 0.82, 1.0], [0, 1, 1, 0]);

  // Glitter canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x:            Math.random() * canvas.width,
      y:            Math.random() * canvas.height,
      r:            Math.random() * 1.5 + 0.4,
      speed:        Math.random() * 0.4 + 0.15,
      drift:        (Math.random() - 0.5) * 0.3,
      alpha:        Math.random() * 0.5 + 0.1,
      flicker:      Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.03 + 0.01,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.flicker += p.flickerSpeed;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.flicker));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,151,62,${a})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="burp" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible',
      scrollSnapAlign: 'start',
      background: '#0E0E0E',
    }}>

      {/* Glitter canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(200,151,62,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '0 6%' : '0 4%',
        width: '100%',
        marginTop: '-15vh',
      }}>

        {/* Amen! */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: isMobile ? '2.4rem' : '3.2rem',
            fontWeight: 400,
            color: '#C8973E',
            lineHeight: 1,
            marginBottom: '1.6rem',
            display: 'block',
            alignSelf: 'center',
            textShadow: '0 0 40px rgba(200,151,62,0.5)',
          }}
        >
          Amen!
        </motion.span>

        {/* Quote — wraps naturally on mobile, nowrap on desktop */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: 0,
            textAlign: 'center',
            // On mobile allow wrapping; on desktop force 3 exact lines
            whiteSpace: isMobile ? 'normal' : 'nowrap',
            maxWidth: isMobile ? '100%' : 'none',
          }}
        >
          {isMobile ? (
            // Mobile: single paragraph, natural wrap
            <>
              "He who drinks beer sleeps well. He who sleeps well{' '}
              <span style={{ color: '#C8973E' }}>cannot sin.</span>{' '}
              He who does not sin goes to heaven. Amen."
            </>
          ) : (
            // Desktop: explicit 3 lines
            <>
              "He who drinks beer sleeps well.<br />
              He who sleeps well <span style={{ color: '#C8973E' }}>cannot sin.</span><br />
              He who does not sin goes to heaven. Amen."
            </>
          )}
        </motion.h2>

      </div>

      {/* Buuuuurp */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: isMobile ? '18%' : '4%',
          left: '50%',
          zIndex: 5,
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: isMobile ? '32vw' : '18vw',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'rgba(180,175,170,0.2)',
          letterSpacing: '-0.03em',
          rotate: '-12deg',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          willChange: 'transform, opacity',
          x: burpX,
          y: burpY,
          opacity: burpOp,
          translateX: '-50%',
        }}
      >
        Buuuuurp!
      </motion.div>

    </section>
  );
}
