import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, Download, ArrowRight, ArrowDown, Code, Brain, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  // Simple, stable, custom typewriter effect
  const roles = personalInfo.typingRoles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && currentText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

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

  // Maps social platforms to their Lucide icon components
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'email':
        return <Mail className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden px-6"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full radial-glow-cyan opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] translate-x-1/2 translate-y-1/2 rounded-full radial-glow-purple opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copywriter / Headlines */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan font-mono text-xs tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-cyan" />
            <span>FOUNDER & DEVELOPER STUDIO</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`font-mono text-base md:text-lg font-medium tracking-wide ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Hi, I'm
            </motion.h4>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-indigo bg-clip-text text-transparent"
            >
              Founder of HSBJK Pvt LTD
            </motion.h2>
          </div>

          {/* Typing Effect Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`font-mono text-lg sm:text-xl md:text-2xl flex items-center justify-center lg:justify-start h-8 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            <span className="text-brand-purple mr-2 font-bold">&gt;_</span>
            <span>{currentText}</span>
            <span className="w-2.5 h-6 ml-1 bg-brand-cyan animate-[pulse_0.8s_infinite] inline-block" />
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            AI/ML Student • Full Stack Developer • Tech Creator. Pursuing B.Tech AI & ML at JCDM and engineering state-of-the-art web products for the future.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            {/* Contact CTA */}
            <button
              onClick={() => handleScrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-indigo text-white shadow-xl shadow-brand-cyan/15 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Resume Button - Digital Printable Resume */}
            <button
              onClick={() => handleScrollToSection('education')}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide border transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                isDarkMode 
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' 
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Download className="w-4 h-4 text-brand-purple" />
              <span>Explore My Path</span>
            </button>
          </motion.div>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 shadow-lg ${
                  isDarkMode 
                    ? 'border-white/5 bg-slate-900/60 text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 hover:shadow-brand-cyan/10' 
                    : 'border-slate-200 bg-white text-slate-600 hover:text-brand-purple hover:border-brand-purple/40 hover:shadow-brand-purple/5'
                }`}
                title={social.platform}
              >
                {renderSocialIcon(social.platform)}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Professional Profile Image */}
        <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96"
          >
            {/* Circular ambient glowing backdrop orbits */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 blur-3xl opacity-60 animate-pulse pointer-events-none" />

            {/* Pulsing visual border framing */}
            <motion.div 
              className="absolute -inset-3.5 rounded-[2.5rem] border-2 border-dashed border-brand-purple/25 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />

            {/* Glowing active outline */}
            <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-brand-cyan/30 via-transparent to-brand-purple/30 pointer-events-none blur-sm" />

            {/* Image Main Container */}
            <div className={`w-full h-full rounded-[2rem] overflow-hidden border ${
              isDarkMode ? 'border-white/10 glass-panel-dark shadow-2xl' : 'border-slate-200 glass-panel-light shadow-xl'
            }`}>
              <img
                src="input_file_2.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Dynamic floating tech badge 1: AI Brain */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl glass-panel-dark border border-brand-cyan/30 shadow-xl flex items-center space-x-2 backdrop-blur-md"
            >
              <Brain className="w-5 h-5 text-brand-cyan" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-mono font-medium leading-none">Specialization</span>
                <span className="text-xs text-white font-display font-bold leading-tight">AI & ML</span>
              </div>
            </motion.div>

            {/* Dynamic floating tech badge 2: Web Code */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl glass-panel-dark border border-brand-purple/30 shadow-xl flex items-center space-x-2 backdrop-blur-md"
            >
              <Code className="w-5 h-5 text-brand-purple" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-mono font-medium leading-none">Architecture</span>
                <span className="text-xs text-white font-display font-bold leading-tight">Full Stack</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bounce Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 z-10 flex flex-col items-center space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Scroll Down</span>
        <motion.button
          onClick={() => handleScrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-1 rounded-full border border-slate-700/40 hover:border-brand-cyan/40 hover:text-brand-cyan transition-colors cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}
