import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize HTML element classes for responsive theme styles
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#020617'; // slate-950 bg
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f8fafc'; // slate-50 bg
    }
  }, [isDarkMode]);

  // Monitor scroll height to conditionally render "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Interactive Custom Trailing Cursor */}
      <CustomCursor />

      {/* Numerical Loading Reveal Animation */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            id="app-root-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`min-h-screen relative flex flex-col justify-between transition-colors duration-500 ${
              isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
            }`}
          >
            {/* Interactive constellational particle canvas */}
            <ParticleBackground isDarkMode={isDarkMode} />

            {/* Global background ambient glow overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/0 to-slate-950 pointer-events-none -z-20" />

            {/* Header / Responsive Navbar */}
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Sections Flow */}
            <main className="flex-grow w-full">
              {/* Landing Hero */}
              <Hero isDarkMode={isDarkMode} />

              {/* Mission / Detailed Biography */}
              <About isDarkMode={isDarkMode} />

              {/* Technical Arsenal Skills Grid */}
              <Skills isDarkMode={isDarkMode} />

              {/* Dynamic Projects Showcases */}
              <Projects isDarkMode={isDarkMode} />

              {/* Dynamic Image & Memory Gallery with Custom Upload Capability */}
              <Gallery isDarkMode={isDarkMode} />

              {/* Education Path */}
              <Education isDarkMode={isDarkMode} />

              {/* Verified Performance Metrics */}
              <Achievements isDarkMode={isDarkMode} />

              {/* Interactive Contact Drawer */}
              <Contact isDarkMode={isDarkMode} />
            </main>

            {/* Footer with branding copyrights */}
            <Footer isDarkMode={isDarkMode} />

            {/* Float Back to Top trigger */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  key="scrollTop"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleScrollToTop}
                  className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer bg-gradient-to-tr from-brand-cyan to-brand-purple text-white border border-white/10"
                  title="Back to top"
                >
                  <ArrowUp className="w-5 h-5 animate-bounce" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
