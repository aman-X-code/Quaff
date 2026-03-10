'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  ];

  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          {/* Logo */}
          <a href="#hero" className="logo-area" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo2.png" alt="QUAFF Brewing" className="logo-img" />
          </a>

          {/* Center Nav Links */}
          <ul className="nav-bar">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-bar-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Buttons */}
          <div className="nav-bar-actions">
            <button
              className="nav-bar-button"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contact
            </button>
            <button
              className="nav-bar-button-primary"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Reserve
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-content">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mobile-reserve-btn"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Reserve Table
          </button>
        </div>
      </div>

      <style jsx>{`
        /* ── GLASSMORPHISM HEADER ── */
        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding-top: 24px;
          pointer-events: none;
        }

        .header-container {
          width: min(860px, 85%);
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-radius: 50px;
          pointer-events: auto;

          /* Glassmorphism */
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          background-color: rgba(60, 60, 60, 0.45);
          backdrop-filter: blur(28px) saturate(1.4);
          -webkit-backdrop-filter: blur(28px) saturate(1.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        /* ── Logo ── */
        .logo-area {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo-img {
          height: 28px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo-area:hover .logo-img {
          transform: scale(1.05);
        }

        /* ── Nav Links ── */
        .nav-bar {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-bar-link {
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-decoration: none;
          padding: 4px 12px;
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-bar-link:hover {
          color: #D3B89A;
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-bar-link:active {
          color: #D3B89A;
        }

        /* ── Action Buttons ── */
        .nav-bar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .nav-bar-button {
          padding: 7px 18px;
          border-radius: 50px;
          background-color: rgba(215, 215, 215, 0.12);
          border: 0.5px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-bar-button:hover {
          background-color: rgba(215, 215, 215, 0.25);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .nav-bar-button-primary {
          padding: 7px 22px;
          border-radius: 50px;
          background-color: #8C9B81;
          border: none;
          color: #111;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-bar-button-primary:hover {
          background-color: #A0B294;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(140, 155, 129, 0.35);
        }

        /* ── Hamburger (Mobile) ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 50;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        /* ── Mobile Overlay ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-link {
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-body);
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .mobile-link:hover {
          color: #D3B89A;
        }

        .mobile-reserve-btn {
          margin-top: 1.5rem;
          padding: 14px 36px;
          border-radius: 50px;
          background: transparent;
          border: 1.5px solid #D3B89A;
          color: #D3B89A;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-reserve-btn:hover {
          background: #D3B89A;
          color: #111;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nav-bar {
            display: none;
          }

          .nav-bar-actions {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .header-container {
            width: 92%;
            height: 58px;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}
