'use client';

import useScrollAnimation from '../hooks/useScrollAnimation';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import HeroScrollAnimation from '../components/ui/hero-scroll-animation';
import Brews from '../components/Brews';
import FoodMenu from '../components/FoodMenu';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Loader />
      <Navbar />
      <HeroScrollAnimation
        section1={<Hero />}
        section2={<About />}
      />
      <main>
        <Brews />
        <FoodMenu />
        <Gallery />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
