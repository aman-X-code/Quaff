'use client';

import { useEffect, useRef } from 'react';

export default function useScrollAnimation() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    // Observe all reveal elements
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .burp-text';
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    // 3D tilt effect on brew cards
    const cards = document.querySelectorAll('.brew-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `translateY(-10px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Burp text character splitting
    const burpElements = document.querySelectorAll('.burp-text');
    burpElements.forEach((el) => {
      const text = el.textContent;
      el.innerHTML = '';
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.transitionDelay = `${i * 0.04}s`;
        el.appendChild(span);
      });
    });

    // Parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.3;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + scrollY) - scrollY;
        el.style.transform = `translateY(${offset * speed * 0.1}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
