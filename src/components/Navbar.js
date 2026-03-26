'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Brews', href: '#brews' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Hamburger Button */}
      <button
        className={`hamburger-btn ${menuOpen ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="hamburger-icon">
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </div>
      </button>

      {/* Floating Logo */}
      <a
        href="#hero"
        className={`floating-logo ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        <img src="/logo-quaff.png" alt="QUAFF Brewing Co." className="floating-logo-img" />
      </a>

      {/* Fullscreen Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        {/* Decorative background elements */}
        <div className="menu-bg-grain" />
        <div className="menu-bg-glow" />

        <nav className="menu-content">
          <div className="menu-links">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="menu-link"
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{ transitionDelay: menuOpen ? `${0.08 + index * 0.05}s` : '0s' }}
              >
                <span className="menu-link-number">0{index + 1}</span>
                <span className="menu-link-label">{link.label}</span>
                <span className="menu-link-line" />
              </a>
            ))}
          </div>

          <div className="menu-footer" style={{ transitionDelay: menuOpen ? '0.5s' : '0s' }}>

            <div className="menu-social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* ── Floating Hamburger Button ── */
        .hamburger-btn {
          position: fixed;
          top: 28px;
          right: 28px;
          z-index: 1100;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(30, 30, 30, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
        }

        .hamburger-btn:hover {
          background: rgba(50, 50, 50, 0.75);
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
          box-shadow: 0 6px 32px rgba(0, 0, 0, 0.4);
        }

        .hamburger-btn.active {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .hamburger-btn.scrolled:not(.active) {
          background: rgba(20, 20, 20, 0.85);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .hamburger-icon {
          width: 22px;
          height: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .hamburger-line {
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger-btn.active .line-1 {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger-btn.active .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-btn.active .line-3 {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Floating Logo ── */
        .floating-logo {
          position: fixed;
          top: 32px;
          left: 32px;
          z-index: 1100;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
        }

        .floating-logo.scrolled {
          opacity: 0.9;
        }

        .floating-logo-img {
          height: 62px;
          width: auto;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .floating-logo:hover .floating-logo-img {
          transform: scale(1.08);
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6));
        }

        .floating-logo.menu-open .floating-logo-img {
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
        }

        /* ── Fullscreen Overlay ── */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Background layers */
        .menu-bg-grain {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgb(10, 10, 10) 0%,
            rgb(20, 18, 15) 40%,
            rgb(15, 12, 10) 100%
          );
          transition: opacity 0.5s ease;
        }

        .menu-bg-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(
            circle,
            rgba(211, 184, 154, 0.06) 0%,
            transparent 70%
          );
          filter: blur(80px);
          pointer-events: none;
        }

        /* ── Menu Content ── */
        .menu-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          width: 100%;
          max-width: 600px;
          padding: 2rem;
        }

        .menu-links {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }

        .menu-link {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.1rem 0;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.45s ease, transform 0.45s ease, color 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .menu-overlay.open .menu-link {
          opacity: 1;
          transform: translateY(0);
        }

        .menu-link:hover .menu-link-label {
          color: #D3B89A;
          letter-spacing: 0.08em;
        }

        .menu-link:hover .menu-link-number {
          color: #D3B89A;
        }

        .menu-link:hover .menu-link-line {
          transform: scaleX(1);
          background: #D3B89A;
        }

        .menu-link-number {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 0.1em;
          min-width: 28px;
          transition: color 0.3s ease;
        }

        .menu-link-label {
          font-family: var(--font-display, var(--font-body));
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.88);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .menu-link-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.4s ease;
        }

        /* ── Menu Footer ── */
        .menu-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .menu-overlay.open .menu-footer {
          opacity: 1;
          transform: translateY(0);
        }



        .menu-social-links {
          display: flex;
          gap: 2rem;
        }

        .social-link {
          color: rgba(255, 255, 255, 0.35);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #D3B89A;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hamburger-btn {
            top: 20px;
            right: 20px;
            width: 48px;
            height: 48px;
          }

          .floating-logo {
            top: 24px;
            left: 20px;
          }

          .floating-logo-img {
            height: 34px;
          }

          .menu-link-label {
            font-size: clamp(1.4rem, 6vw, 2rem);
          }

          .menu-content {
            padding: 1.5rem;
          }

          .menu-link {
            padding: 0.9rem 0;
          }
        }
      `}</style>
    </>
  );
}
