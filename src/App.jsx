import React, { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import DSA from './components/DSA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Only show on first visit in the session
    try {
      const hasSeen = sessionStorage.getItem('hasSeenIntro');
      return !hasSeen;
    } catch (e) {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState('home');

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem('hasSeenIntro', 'true');
    } catch (e) {
      // ignore
    }
    setShowIntro(false);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'dsa', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Intro Animation for first visit */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <DSA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Phone Bottom Navigation Dock */}
      <MobileBottomNav activeSection={activeSection} />
    </div>
  );
}
