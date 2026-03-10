'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [screenBubbles, setScreenBubbles] = useState([]);

  const createScreenBubble = useCallback(() => {
    const bubble = {
      id: Math.random(),
      left: Math.random() * 100,
      top: 40 + Math.random() * 40,
      size: 15 + Math.random() * 40,
      delay: Math.random() * 0.5,
    };
    setScreenBubbles((prev) => [...prev.slice(-15), bubble]);
  }, []);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';

    // Create screen bubbles periodically
    const bubbleInterval = setInterval(createScreenBubble, 300);

    const timer = setTimeout(() => {
      clearInterval(bubbleInterval);
      setHidden(true);
      document.body.style.overflow = '';
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(bubbleInterval);
      document.body.style.overflow = '';
    };
  }, [createScreenBubble]);

  return (
    <>
      {/* Screen floating bubbles */}
      {screenBubbles.map((b) => (
        <div
          key={b.id}
          className="screen-bubble"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
        <div className="loader-beer-container">
          {/* Beer pour stream */}
          <div className="loader-pour" />

          {/* Glass (Jug) */}
          <div className="loader-glass">
            <div className="loader-jug-handle" />
            
            {/* Beer fill */}
            <div className="loader-beer-fill">
              {/* Bubbles in beer */}
              <div className="loader-bubbles">
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
                <div className="loader-bubble" />
              </div>

              {/* Foam on top */}
              <div className="loader-foam">
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                <div className="loader-foam-bubble" />
                
                {/* Overflow drips */}
                <div className="loader-foam-drip left" />
                <div className="loader-foam-drip right" />
              </div>
            </div>
          </div>
        </div>

        {/* Logo text */}
        <div className="loader-logo-text">
          <h2>QUAFF</h2>
          <p>Brewing Co.</p>
        </div>

        {/* Progress bar */}
        <div className="loader-progress">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </>
  );
}
