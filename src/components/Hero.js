'use client';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* The large curved background, styled in a warm beer tone */}
        <div className="hero-curved-bg">

          <div className="hero-content">
            <span className="hero-label">PREMIUM BREWPUB</span>
            <h1 className="hero-title">
              Crafted For<br />The Bold
            </h1>
            <p className="hero-desc">
              Experience the pinnacle of craft brewing. We blend time-honored traditions with audacious innovation in every pour.
            </p>
            <a 
              href="#brews"
              className="hero-btn" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#brews')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              EXPLORE OUR BREWS
            </a>
          </div>

        </div>

      </div>

      <style jsx>{`
        .hero-section {
          background-color: #0E0E0E;
          background-image: none;
          min-height: 100vh;
          height: 100%;
          padding-top: 130px;
          padding-bottom: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          scroll-snap-align: start;
        }

        .hero-container {
          position: relative;
          width: 90%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-curved-bg {
          background-image: url('https://res.cloudinary.com/dave3np5n/image/upload/v1773117249/IMG_0970_2_h11ttp.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 40px;
          padding: 80px 60px;
          display: flex;
          align-items: center;
          position: relative;
          min-height: 600px;
          width: 100%;
          box-shadow: var(--shadow-elevated);
          z-index: 1;
          overflow: hidden;
        }

        .hero-curved-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 40px;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.2) 100%
          );
          z-index: 2;
        }

        .hero-content {
          max-width: 45%;
          position: relative;
          z-index: 10;
          margin-left: auto;
          margin-right: 0;
          text-align: left;
        }

        .hero-label {
          color: #D3B89A;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: block;
        }

        .hero-title {
          color: #fff;
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 6vw, 6rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-desc {
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-body);
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 3rem;
        }

        .hero-btn {
          display: inline-block;
          background-color: var(--deep-green);
          color: var(--rich-gold);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 1.2rem 2.8rem;
          border-radius: 40px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .hero-btn:hover {
          background-color: #1a1a1a;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(10,10,10,0.4);
        }

        .hero-image-wrapper {
          position: absolute;
          right: -8%;
          bottom: -20%;
          width: 65%;
          max-width: 850px;
          z-index: 5;
          pointer-events: none;
        }

        .hero-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          transform: scale(1.15);
        }

        @media (max-width: 1024px) {
          .hero-curved-bg {
            flex-direction: column;
            padding: 60px 40px;
          }
          .hero-content {
            max-width: 100%;
            text-align: center;
          }
          .hero-label {
            margin-bottom: 1rem;
          }
          .hero-title {
            font-size: clamp(3rem, 8vw, 4rem);
          }
          .hero-desc {
            margin: 0 auto 2rem auto;
          }
          .hero-image-wrapper {
            position: relative;
            right: 0;
            bottom: auto;
            width: 110%;
            margin-top: -5%;
            margin-left: -5%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
