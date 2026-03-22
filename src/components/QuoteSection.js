'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function QuoteSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'q-bubble';
      const size = Math.random() * 16 + 6;
      bubble.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 4 + 5}s;
        animation-delay:${Math.random() * 2}s;
      `;
      const container = sectionRef.current?.querySelector('.q-bubbles');
      if (container) {
        container.appendChild(bubble);
        setTimeout(() => bubble.remove(), 9000);
      }
    };
    const iv = setInterval(createBubble, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section ref={sectionRef} className="qs" id="quote">
      <div className="q-bubbles" />
      <div className="q-glow-l" />
      <div className="q-glow-r" />

      <div className="qs-inner">

        {/* ── LEFT: Quote ── */}
        <motion.div
          className="qs-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="qs-cheers">CHEERS!</h2>

          <p className="qs-quote">
            "The mouth of a perfectly<br />
            happy man is filled<br />
            with <em>beer</em>."
          </p>

          <div className="qs-rule" />

          <p className="qs-attr">— Ancient Egyptian Proverb</p>
        </motion.div>

        {/* ── RIGHT: Stacked Cards ── */}
        <div className="qs-right">

          {/* Back card */}
          <motion.div
            className="qs-card qs-card-back"
            style={{ y: card1Y }}
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <img
              src="https://res.cloudinary.com/dave3np5n/image/upload/v1773117272/IMG_1002_2_q7uepn.jpg"
              alt="Stout beer"
            />
            <div className="qs-card-overlay" />
          </motion.div>

          {/* Front card */}
          <motion.div
            className="qs-card qs-card-front"
            style={{ y: card2Y }}
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ rotate: -1, scale: 1.03, transition: { duration: 0.4 } }}
          >
            <img
              src="https://res.cloudinary.com/dave3np5n/image/upload/v1773117245/IMG_0961_hwijga.jpg"
              alt="Golden IPA"
            />
            <div className="qs-card-overlay" />
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .qs {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0C0C0C;
          overflow: hidden;
          padding: 7rem 5rem;
          scroll-snap-align: start;
        }

        /* ── Bubbles ── */
        .q-bubbles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        :global(.q-bubble) {
          position: absolute;
          bottom: -40px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%,
            rgba(255,255,255,0.18),
            rgba(200,151,62,0.06));
          border: 1px solid rgba(200,151,62,0.14);
          animation: qBubbleRise 8s ease-in infinite;
          pointer-events: none;
        }

        @keyframes qBubbleRise {
          0%   { transform: translateY(0) scale(1);   opacity: 0; }
          8%   { opacity: 0.5; }
          88%  { opacity: 0.15; }
          100% { transform: translateY(-105vh) scale(0.3); opacity: 0; }
        }

        /* ── Glows ── */
        .q-glow-l, .q-glow-r {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }

        .q-glow-l {
          background: radial-gradient(circle, #C8973E, transparent 70%);
          left: -120px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.07;
          animation: glowPulse 7s ease-in-out infinite;
        }

        .q-glow-r {
          background: radial-gradient(circle, #E5B962, transparent 70%);
          right: -80px;
          top: 40%;
          opacity: 0.06;
          animation: glowPulse 7s ease-in-out infinite 3.5s;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.05; transform: translateY(-50%) scale(1); }
          50%       { opacity: 0.11; transform: translateY(-50%) scale(1.1); }
        }

        /* ── Layout ── */
        .qs-inner {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          width: 100%;
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 2.5rem;
          align-items: center;
        }

        /* ── Left ── */
        .qs-left {
          padding-right: 1rem;
        }

        .qs-cheers {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 7rem);
          font-weight: 900;
          color: var(--rich-gold);
          line-height: 0.95;
          letter-spacing: 0.04em;
          margin-bottom: 2rem;
          text-shadow: 0 0 18px rgba(200,151,62,0.18);
          animation: softGlow 5s ease-in-out infinite;
        }

        @keyframes softGlow {
          0%, 100% { text-shadow: 0 0 18px rgba(200,151,62,0.18); }
          50%       { text-shadow: 0 0 28px rgba(200,151,62,0.28); }
        }

        .qs-quote {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.2vw, 2.8rem);
          font-weight: 400;
          color: var(--cream);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          letter-spacing: 0.01em;
        }

        .qs-quote em {
          font-style: italic;
          color: var(--warm-amber);
          font-weight: 600;
        }

        .qs-rule {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, var(--rich-gold), transparent);
          margin-bottom: 1.5rem;
        }

        .qs-attr {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--cream-dark);
          font-style: italic;
          letter-spacing: 0.06em;
          opacity: 0.55;
        }

        /* ── Right: Stacked Cards ── */
        .qs-right {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          max-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qs-card {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          width: 90%;
          height: 90%;
          box-shadow:
            0 24px 60px rgba(0,0,0,0.65),
            0 6px 18px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.05);
          cursor: pointer;
        }

        .qs-card-back {
          top: 50%;
          left: 50%;
          transform: translate(-47%, -50%) rotate(4deg);
          border: 1px solid rgba(200,151,62,0.1);
          z-index: 1;
        }

        .qs-card-front {
          top: 50%;
          left: 50%;
          transform: translate(-53%, -50%) rotate(-2deg);
          border: 1px solid rgba(200,151,62,0.2);
          z-index: 2;
        }

        .qs-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .qs-card:hover img {
          transform: scale(1.05);
        }

        .qs-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            transparent 50%,
            rgba(10,10,10,0.4) 100%
          );
          pointer-events: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .qs { padding: 5rem 3rem; }

          .qs-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .qs-left {
            padding-right: 0;
            text-align: center;
          }

          .qs-rule { margin: 0 auto 1.5rem; }

          .qs-right {
            width: 75%;
            margin: 0 auto;
            max-height: 520px;
          }
        }

        @media (max-width: 768px) {
          .qs { padding: 4rem 1.5rem; }

          .qs-cheers { font-size: clamp(3rem, 12vw, 5rem); }
          .qs-quote  { font-size: clamp(1.4rem, 5vw, 2rem); }

          .qs-right {
            width: 88%;
            max-height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
