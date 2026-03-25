'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current?.querySelector('.qs-bubbles');
    if (!container) return;
    const spawn = () => {
      const el = document.createElement('span');
      el.className = 'qs-bub';
      const s = Math.random() * 10 + 4;
      el.style.cssText = `
        width:${s}px;height:${s}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 6 + 8}s;
        animation-delay:${Math.random() * 3}s;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 14000);
    };
    const iv = setInterval(spawn, 1100);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="qs" ref={sectionRef} id="quote">

      {/* Ambient background glow */}
      <div className="qs-ambient" />

      {/* Bubbles */}
      <div className="qs-bubbles" aria-hidden="true" />

      <div className="qs-inner">

        {/* ── LEFT: TEXT ── */}
        <div className="qs-left">

          {/* Cheers — cursive script */}
          <motion.span
            className="qs-cheers-label"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '7rem',
              fontWeight: 400,
              color: '#C8973E',
              lineHeight: 1.1,
              marginBottom: '0rem',
              display: 'block',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Cheers!
          </motion.span>

          {/* Main quote */}
          <motion.h2
            className="qs-quote-heading"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '3.8rem',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 2.4rem',
              textAlign: 'left',
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            The mouth<br />
            of a perfectly<br />
            happy man is<br />
            filled with{' '}
            <span className="qs-highlight">beer.</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="qs-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Supporting line */}
          <motion.p
            className="qs-sub"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.14em',
              lineHeight: 1.7,
              textTransform: 'uppercase',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ancient Egyptian Proverb · Brewed into every pint we pour.
          </motion.p>

        </div>

        {/* ── RIGHT: STACKED IMAGES ── */}
        <div className="qs-right">

          {/* Back card — rotated right */}
          <motion.div
            className="qs-card qs-card-back"
            initial={{ opacity: 0, scale: 0.88, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brew-stout.png" alt="Midnight Velvet Stout" className="qs-card-img" />
          </motion.div>

          {/* Front card — slight left tilt */}
          <motion.div
            className="qs-card qs-card-front"
            initial={{ opacity: 0, scale: 0.88, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brew-ipa.png" alt="Golden Harvest IPA" className="qs-card-img" />

            {/* Badge sticker */}
            <div className="qs-badge">
              <span className="qs-badge-top">Craft</span>
              <span className="qs-badge-main">Brewed</span>
              <span className="qs-badge-sub">In-House</span>
            </div>
          </motion.div>

          {/* Floating glow orb behind cards */}
          <div className="qs-glow-orb" />

        </div>

      </div>

      <style jsx>{`

        /* ── SECTION ── */
        .qs {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #0E0E0E;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          scroll-snap-align: start;
          padding: 80px 5%;
        }

        /* ── AMBIENT BACKGROUND GLOW ── */
        .qs-ambient {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(ellipse 60% 50% at 75% 55%,
              rgba(200,151,62,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 40%,
              rgba(200,151,62,0.05) 0%,
              transparent 70%);
        }

        /* ── BUBBLES ── */
        .qs-bubbles {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        :global(.qs-bub) {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%,
            rgba(255,255,255,0.12), rgba(200,151,62,0.03));
          border: 1px solid rgba(200,151,62,0.15);
          animation: qsBubRise linear infinite;
          pointer-events: none;
        }

        @keyframes qsBubRise {
          0%   { transform: translateY(0)      scale(1);   opacity: 0;  }
          6%   { opacity: 0.35; }
          90%  { opacity: 0.04; }
          100% { transform: translateY(-105vh) scale(0.3); opacity: 0;  }
        }

        /* ── INNER GRID ── */
        .qs-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
        }

        /* ── LEFT ── */
        .qs-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
        }

        /* ── CHEERS — Great Vibes cursive script ── */
        .qs-cheers-label {
          font-family: 'Great Vibes', cursive;
          font-size: 7rem;
          font-weight: 400;
          color: #C8973E;
          line-height: 1.1;
          margin-bottom: 0rem;
          display: block;
          text-shadow:
            0 0 60px rgba(200,151,62,0.7),
            0 0 120px rgba(200,151,62,0.3),
            0 2px 16px rgba(0,0,0,0.6);
          animation: cheersGlow 4s ease-in-out infinite;
        }

        @keyframes cheersGlow {
          0%,100% {
            text-shadow:
              0 0 40px rgba(200,151,62,0.5),
              0 0 80px rgba(200,151,62,0.2),
              0 2px 16px rgba(0,0,0,0.6);
          }
          50% {
            text-shadow:
              0 0 80px rgba(200,151,62,0.85),
              0 0 160px rgba(200,151,62,0.4),
              0 2px 16px rgba(0,0,0,0.6);
          }
        }

        /* ── MAIN QUOTE HEADING ── */
        .qs-quote-heading {
          font-family: var(--font-display);
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 2.4rem;
          text-align: left;
        }

        /* "beer." — gold italic with shimmer underline */
        .qs-highlight {
          color: #C8973E;
          font-style: italic;
          position: relative;
          display: inline-block;
          text-shadow: 0 0 50px rgba(200,151,62,0.55);
        }

        .qs-highlight::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #C8973E 25%, #F0D48A 50%, #C8973E 75%, transparent);
          border-radius: 2px;
          opacity: 0.8;
        }

        /* ── DIVIDER ── */
        .qs-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #C8973E 0%, #F0D48A 50%, transparent 100%);
          box-shadow: 0 0 10px rgba(200,151,62,0.4);
          margin-bottom: 2rem;
        }

        /* ── SUPPORTING LINE ── */
        .qs-sub {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.14em;
          line-height: 1.7;
          text-transform: uppercase;
        }

        /* ── RIGHT ── */
        .qs-right {
          position: relative;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Glow orb behind cards */
        .qs-glow-orb {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(200,151,62,0.18) 0%,
            transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: orbPulse 4s ease-in-out infinite;
        }

        @keyframes orbPulse {
          0%,100% { opacity: 0.7; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%,-50%) scale(1.12); }
        }

        /* Cards */
        .qs-card {
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(200,151,62,0.2);
        }

        .qs-card-back {
          top: 50%;
          left: 50%;
          transform: translate(-30%, -55%) rotate(6deg);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.7),
            0  0  30px rgba(200,151,62,0.08);
          z-index: 1;
        }

        .qs-card-front {
          top: 50%;
          left: 50%;
          transform: translate(-68%, -45%) rotate(-4deg);
          box-shadow:
            0 30px 80px rgba(0,0,0,0.8),
            0  0  40px rgba(200,151,62,0.12);
          z-index: 2;
        }

        .qs-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Badge sticker on front card */
        .qs-badge {
          position: absolute;
          bottom: -12px;
          right: -12px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C8973E, #F0D48A, #C8973E);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 4px 20px rgba(200,151,62,0.5),
            inset 0 1px 0 rgba(255,255,255,0.3);
          border: 2px solid rgba(255,255,255,0.15);
          animation: badgeSpin 12s linear infinite;
          z-index: 3;
        }

        @keyframes badgeSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .qs-badge-top {
          font-family: var(--font-body);
          font-size: 0.48rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0E0E0E;
          animation: badgeSpinReverse 12s linear infinite;
        }

        .qs-badge-main {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 900;
          color: #0E0E0E;
          line-height: 1;
          animation: badgeSpinReverse 12s linear infinite;
        }

        .qs-badge-sub {
          font-family: var(--font-body);
          font-size: 0.44rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(14,14,14,0.7);
          animation: badgeSpinReverse 12s linear infinite;
        }

        /* Counter-rotate text so it stays upright */
        @keyframes badgeSpinReverse {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .qs-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .qs-left { align-items: center; text-align: center; }
          .qs-quote-heading { text-align: center; }
          .qs-divider { margin-left: auto; margin-right: auto; }
          .qs-right { height: 380px; }
          .qs-card { width: 200px; height: 200px; }
        }

        @media (max-width: 480px) {
          .qs { padding: 60px 5%; }
          .qs-quote-heading { font-size: clamp(2rem, 9vw, 3rem); }
          .qs-right { height: 300px; }
          .qs-card { width: 160px; height: 160px; }
          .qs-badge { width: 64px; height: 64px; }
        }
      `}</style>
    </section>
  );
}
