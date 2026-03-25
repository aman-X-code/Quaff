'use client';

import useScrollAnimation from '../hooks/useScrollAnimation';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import QuoteSection from '../components/QuoteSection';
import Brews from '../components/Brews';
import BurpText from '../components/BurpText';
import FoodMenu from '../components/FoodMenu';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    // Disable browser scroll restoration so it doesn't fight us
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Small delay ensures mobile browsers don't override after paint
    window.scrollTo(0, 0);
    const t = setTimeout(() => window.scrollTo(0, 0), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <QuoteSection />
      <main>
        <Brews />
        <BurpText />
        <FoodMenu />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
