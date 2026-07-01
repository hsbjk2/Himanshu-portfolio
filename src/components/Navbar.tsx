import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll change
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress computation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section detection
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = 0; i < sections.length; i++) {
        const el = sections[i];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'glass-nav-dark py-3 shadow-lg shadow-black/15'
            : 'glass-nav-light py-3 shadow-lg shadow-slate-100'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <div 
        id="scroll-progress-indicator"
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-indigo transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <button
          onClick={() => handleScrollTo('home')}
          className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden glass-panel-dark flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-105">
            <img
            src="/images/HSBJK_Logo.png"
            alt="HSBJK Logo"
            className="w-8 h-8 object-contain"
 
            />
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-display font-extrabold text-lg tracking-wider transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {personalInfo.brandName}
            </span>
            <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase">
              Pvt LTD
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`px-4 py-1.5 rounded-full font-sans text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                activeSection === link.id
                  ? isDarkMode
                    ? 'text-white'
                    : 'text-slate-950'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavBackground"
                  className={`absolute inset-0 rounded-full -z-10 ${
                    isDarkMode ? 'bg-white/5' : 'bg-slate-100'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Buttons (Theme Toggle, Social Links) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isDarkMode 
                ? 'bg-white/5 text-yellow-400 hover:bg-white/10 hover:text-yellow-300 border border-white/5' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
            }`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Website Redirect Out */}
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-md shadow-brand-cyan/10 hover:opacity-90"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isDarkMode ? 'bg-white/5 text-yellow-400 border border-white/5' : 'bg-slate-100 text-slate-800 border border-slate-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburguer menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isDarkMode ? 'bg-white/5 text-white border border-white/5' : 'bg-slate-100 text-slate-800 border border-slate-200'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-b ${
              isDarkMode 
                ? 'bg-slate-950/95 border-white/10 glass-panel-dark' 
                : 'bg-white/95 border-slate-200 glass-panel-light'
            }`}
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`text-left py-2 font-display text-lg font-semibold tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'text-brand-cyan'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800/40 flex justify-between items-center">
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider bg-gradient-to-r from-brand-cyan to-brand-purple text-white w-fit"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                
                <span className={`text-[10px] font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  sirsa, haryana, india
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
