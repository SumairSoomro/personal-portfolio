import { useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BentoGridContainer from './components/BentoGridContainer';
import ExperienceSection from './components/ExperienceSection';
import TechStackGrid from './components/TechStackGrid';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

export default function App() {
  // Scroll-reveal: observe all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridContainer />
        <ExperienceSection />
        <ProjectGrid />
        <TechStackGrid />
      </main>
      <Footer />
    </>
  );
}
