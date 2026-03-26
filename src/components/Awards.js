'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const awards = [
  { year: '2024', title: 'Best Craft Brewery',        body: 'Times Food & Nightlife Awards', image: '/brew-ipa.png'    },
  { year: '2023', title: 'Best Brewpub — NCR',         body: 'Conde Nast Traveller India',    image: '/brew-stout.png'  },
  { year: '2023', title: 'Top 10 Bars in India',       body: 'Spiritz Magazine',              image: '/brew-wheat.png'  },
  { year: '2022', title: 'Excellence in Innovation',   body: 'India Beer Cup',                image: '/brews-hero.png'  },
  { year: '2022', title: 'Best IPA — Gold Medal',      body: 'Asia Beer Championship',        image: '/hero-beer.png'   },
  { year: '2021', title: 'Best New Brewpub',           body: 'Gurgaon Food & Drink Awards',   image: '/about-brews.jpg' },
  { year: '2021', title: "People's Choice Award",      body: 'Zomato Dining Awards',          image: '/brew-ipa.png'    },
];

const TOTAL = awards.length;

export default function Awards() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const canvasRef   = useRef(null);

  // Glitter particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x:            Math.random() * canvas.width,
      y:            Math.random() * canvas.height,
      r:            Math.random() * 1.6 + 0.3,
      speed:        Math.random() * 0.35 + 0.1,
      drift:        (Math.random() - 0.5) * 0.25,
      alpha:        Math.random() * 0.55 + 0.08,
      flicker:      Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.025 + 0.008,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.flicker += p.flickerSpeed;
        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.flicker));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,151,62,${a})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  // Auto-advance — simple, no animating state dependency
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % TOTAL);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const go = (d) => setCurrent(c => (c + d + TOTAL) % TOTAL);

  const pause  = () => clearInterval(intervalRef.current);
  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % TOTAL), 4000);
  };

  // 3 visible slots: left, center, right
  const indices = [
    (current - 1 + TOTAL) % TOTAL,
    current,
    (current + 1) % TOTAL,
  ];

  return (
    <section className="aw" id="awards">

      {/* Glitter canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Side glow orbs */}
      <div className="aw-orb aw-orb-left" />
      <div className="aw-orb aw-orb-right" />

      <motion.div
        className="aw-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="aw-label">Recognition</span>
        <h2 className="aw-title">
          Awards &amp; <em>Achievements</em>
        </h2>
      </motion.div>

      <div className="aw-carousel" onMouseEnter={pause} onMouseLeave={resume}>

        <button className="aw-arrow" onClick={() => go(-1)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="aw-track">
          {indices.map((idx, pos) => {
            const a = awards[idx];
            const isCenter = pos === 1;
            return (
              // key=pos keeps the 3 card shells stable — content updates in place
              <motion.div
                key={pos}
                className={`aw-card ${isCenter ? 'aw-card-active' : ''}`}
                animate={{
                  opacity: isCenter ? 1 : 0.45,
                  scale:   isCenter ? 1 : 0.93,
                  y:       isCenter ? 0 : 14,
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="aw-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.title} className="aw-img" />
                  <div className="aw-img-fade" />
                  <span className="aw-year">{a.year}</span>
                </div>

                <div className="aw-text">
                  <h3 className="aw-card-title">{a.title}</h3>
                  <p className="aw-card-org">{a.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button className="aw-arrow" onClick={() => go(1)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>

      <div className="aw-dots">
        {awards.map((_, i) => (
          <button
            key={i}
            className={`aw-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Award ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .aw {
          background: #0E0E0E;
          padding: 110px 5% 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          scroll-snap-align: start;
          position: relative;
          overflow: hidden;
        }

        .aw::before {
          content: '';
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(200,151,62,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Side ambient orbs */
        .aw-orb {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: orbPulse 6s ease-in-out infinite;
        }

        .aw-orb-left {
          left: -120px; top: 30%;
          background: radial-gradient(circle, rgba(200,151,62,0.07) 0%, transparent 70%);
        }

        .aw-orb-right {
          right: -120px; top: 40%;
          background: radial-gradient(circle, rgba(200,151,62,0.06) 0%, transparent 70%);
          animation-delay: 3s;
        }

        @keyframes orbPulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.15); }
        }

        .aw-header {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 5rem;
        }

        .aw-label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: #C8973E;
          display: block;
          margin-bottom: 1.2rem;
        }

        .aw-title {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 4.5vw, 4.5rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin: 0 0 2rem;
        }

        .aw-title em {
          font-style: italic;
          color: #C8973E;
        }

        /* ── CAROUSEL ── */
        .aw-carousel {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1300px;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .aw-track {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.4rem;
          align-items: end;
        }

        /* ── CARD ── */
        .aw-card {
          background: #111008;
          border-radius: 24px;
          border-top: 2px solid rgba(200,151,62,0.18);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          will-change: opacity, transform;
        }

        .aw-card-active {
          border-top: 2px solid transparent;
          background-image:
            linear-gradient(#111008, #111008),
            linear-gradient(90deg, transparent, #C8973E 30%, #F0D48A 50%, #C8973E 70%, transparent);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(200,151,62,0.06);
        }

        /* ── IMAGE ── */
        .aw-img-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          flex-shrink: 0;
          border-radius: 24px 24px 0 0;
        }

        .aw-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.7s ease;
        }

        .aw-card:hover .aw-img { transform: scale(1.04); }

        .aw-img-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 45%, rgba(17,16,8,0.75) 80%, rgba(17,16,8,1) 100%);
        }

        .aw-year {
          position: absolute;
          bottom: 14px;
          left: 14px;
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #C8973E;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(200,151,62,0.35);
          border-radius: 20px;
          padding: 0.22rem 0.75rem;
          backdrop-filter: blur(6px);
          z-index: 2;
        }

        /* ── TEXT ── */
        .aw-text {
          padding: 1.4rem 1.6rem 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .aw-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .aw-card-org {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1.4;
        }

        /* ── ARROWS ── */
        .aw-arrow {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(200,151,62,0.25);
          background: transparent;
          color: rgba(200,151,62,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .aw-arrow:hover {
          border-color: #C8973E;
          color: #C8973E;
          background: rgba(200,151,62,0.08);
        }

        /* ── DOTS ── */
        .aw-dots {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 7px;
          margin-top: 3rem;
        }

        .aw-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(200,151,62,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.35s ease;
          padding: 0;
        }

        .aw-dot.active {
          background: #C8973E;
          width: 24px;
          border-radius: 3px;
          box-shadow: 0 0 8px rgba(200,151,62,0.45);
        }

        @media (max-width: 768px) {
          .aw { padding: 70px 4% 60px; }
          .aw-carousel { gap: 1rem; }
          .aw-track { gap: 0.8rem; }
          .aw-img-wrap { height: 180px; }
          .aw-card-title { font-size: 1rem; }
          .aw-text { padding: 1rem 1.2rem 1.4rem; }
          .aw-arrow { width: 34px; height: 34px; }
        }
      `}</style>
    </section>
  );
}
