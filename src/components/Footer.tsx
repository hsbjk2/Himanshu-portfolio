import { motion } from 'motion/react';
import { Mail, ShieldAlert, Heart, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = (id: string) => {
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
    <footer className={`py-12 px-6 border-t relative overflow-hidden ${
      isDarkMode 
        ? 'bg-slate-950 border-white/5' 
        : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Brand, Monogram and Tagline */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-10 h-10 rounded-xl overflow-hidden glass-panel-dark flex items-center justify-center border border-white/5 shadow-md">
            <img
              src="/images/HSBJK_Logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className={`font-display font-extrabold text-base tracking-wide leading-none ${
              isDarkMode ? 'text-white' : 'text-slate-950'
            }`}>
              HSBJK
            </h4>
            <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase">
              COGNITIVE DEVELOPMENT GROUP
            </span>
          </div>
        </div>

        {/* Center: Sitemap Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className={`font-mono text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                isDarkMode ? 'text-slate-400 hover:text-brand-cyan' : 'text-slate-500 hover:text-brand-purple'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Side: Back to Top + Location */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-mono text-slate-500">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Sirsa, Haryana, India</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 shadow-md cursor-pointer ${
              isDarkMode 
                ? 'border-white/5 bg-slate-900/60 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40' 
                : 'border-slate-200 bg-white text-slate-600 hover:text-brand-purple hover:border-brand-purple/40'
            }`}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright branding details */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 relative z-10">
        <p>
          &copy; {currentYear} HSBJK Pvt LTD. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-1.5">
          <span>Engineered with React & Tailwind</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 animate-[pulse_1s_infinite]" />
          <span>by Himanshu Sharma</span>
        </div>
      </div>
    </footer>
  );
}
