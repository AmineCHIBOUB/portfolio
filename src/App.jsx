import React, { useEffect } from 'react';
import './styles/global.css';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Method from './components/sections/Method';
import Projects from './components/sections/Projects';
import Realisations from './components/sections/Realisations';
import Skills from './components/sections/Skills';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';
import ScrollExtras from './components/layout/ScrollExtras';

const App = () => {
  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('section, .card, .skill-category, .project-card, .timeline-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Background />
      <ScrollExtras />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Method />
        <Projects />
        <Realisations />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;