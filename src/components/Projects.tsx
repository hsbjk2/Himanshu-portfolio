import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Layout, Settings, FileSpreadsheet, Eye } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'tool'>('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  // Generates unique, gorgeous abstract digital headers for each project since we are client-side
  const renderProjectHeader = (id: string) => {
    switch (id) {
      case 'qr-cloud':
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 via-slate-900 to-cyan-950/20 flex flex-col items-center justify-center p-6 select-none overflow-hidden group-hover:scale-105 transition-transform duration-700">
            {/* Mock QR matrix */}
            <div className="w-20 h-20 rounded-xl p-2 bg-white/10 backdrop-blur-md border border-cyan-500/30 flex flex-wrap content-between justify-between animate-pulse">
              <div className="w-5 h-5 bg-cyan-400 rounded-sm" />
              <div className="w-5 h-5 bg-cyan-400 rounded-sm" />
              <div className="w-5 h-5 bg-slate-900/60 rounded-sm" />
              <div className="w-5 h-5 bg-cyan-400 rounded-sm" />
              <div className="w-10 h-1 bg-cyan-400/50 rounded-full" />
              <div className="w-5 h-5 bg-cyan-400 rounded-sm" />
            </div>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase mt-4">DYNAMIC CAMPAIGNS</span>
          </div>
        );
      case 'hsbjk-studio':
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-slate-900 to-indigo-950/20 flex flex-col items-center justify-center p-6 select-none overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-white shadow-lg">
                <Layout className="w-6 h-6" />
              </div>
            </div>
            <span className="font-mono text-[9px] text-brand-purple tracking-widest uppercase mt-4">GLASSMORPHISM HUD</span>
          </div>
        );
      case 'hsbjk-wallify':
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-slate-900 to-pink-950/20 flex flex-col items-center justify-center p-6 select-none overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="relative w-28 h-16 rounded-lg overflow-hidden border border-white/10 bg-slate-950 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-pink-500/10 to-transparent" />
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
            </div>
            <span className="font-mono text-[9px] text-indigo-400 tracking-widest uppercase mt-4">MULTIPLE RESOLUTIONS</span>
          </div>
        );
      case 'calclogic':
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/20 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 select-none overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="w-14 h-20 rounded-xl bg-slate-900/80 border border-amber-500/30 p-2 flex flex-col justify-between">
              <div className="h-4 rounded bg-slate-800 flex items-center justify-end px-1.5"><span className="font-mono text-[9px] text-amber-400 font-bold">1337</span></div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-3 rounded-sm bg-slate-800 flex items-center justify-center"><span className="text-[7px] text-slate-500">{i+1}</span></div>
                ))}
              </div>
            </div>
            <span className="font-mono text-[9px] text-amber-500 tracking-widest uppercase mt-4">iOS UI CALCULATOR</span>
          </div>
        );
      case 'hsbjk-image-pdf-studio':
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/30 via-slate-900 to-purple-950/20 flex flex-col items-center justify-center p-6 select-none overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-xl border border-white/10 shadow-2xl">
              <FileSpreadsheet className="w-6 h-6 text-rose-500 animate-pulse" />
              <div className="w-12 h-1 bg-white/25 rounded-full" />
            </div>
            <span className="font-mono text-[9px] text-rose-400 tracking-widest uppercase mt-4">BATCH PROCESS ENGINE</span>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <Settings className="w-8 h-8 text-white animate-spin" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] translate-x-1/2 -translate-y-1/2 rounded-full radial-glow-purple opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan"
          >
            CREATIONS
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-3xl md:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            My Featured Projects
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'web', 'tool'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                filter === cat
                  ? 'text-white shadow-md'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white bg-slate-900/50 border border-white/5'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 rounded-xl -z-10 bg-brand-purple"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat === 'all' ? 'All projects' : cat === 'web' ? 'Web Apps' : 'Tools & Utils'}
            </button>
          ))}
        </div>

        {/* Project Gallery Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`rounded-[2rem] overflow-hidden border flex flex-col h-full group relative transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-white/5 bg-slate-950/60 hover:border-brand-cyan/20 hover:shadow-2xl hover:shadow-cyan-950/10' 
                    : 'border-slate-200 bg-white hover:shadow-2xl hover:shadow-slate-200 shadow-sm'
                }`}
              >
                {/* Visual Mock Showcase Header */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
                  {renderProjectHeader(proj.id)}
                  
                  {/* Overlay for hovering info */}
                  <div className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-20">
                    {proj.link && proj.link !== '#' && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-brand-cyan flex items-center justify-center text-white hover:scale-115 transition-transform"
                        title="Live Site Preview"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:scale-115 transition-transform"
                        title="Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded-md font-mono text-[9px] tracking-wider uppercase font-semibold border ${
                        isDarkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}>
                        {proj.category === 'web' ? 'Web Platform' : 'Tool / Utility'}
                      </span>
                      {proj.isFeatured && (
                        <div className="flex items-center space-x-1 text-brand-purple">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Featured</span>
                        </div>
                      )}
                    </div>

                    <h3 className={`font-display font-extrabold text-xl leading-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {proj.title}
                    </h3>

                    <p className={`text-xs leading-relaxed font-sans line-clamp-3 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags and bottom row */}
                  <div className="space-y-4 pt-4 border-t border-slate-800/20">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map(tag => (
                        <span 
                          key={tag}
                          className={`px-2.5 py-1 rounded-full font-sans text-[10px] font-medium transition-colors ${
                            isDarkMode 
                              ? 'bg-white/5 text-slate-300 hover:bg-white/10' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className={`text-[10px] font-mono ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {proj.id.toUpperCase()}_LOG
                      </span>
                      {proj.link && proj.link !== '#' ? (
                        <a 
                          href={proj.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-mono text-xs font-semibold text-brand-cyan hover:text-brand-purple transition-colors flex items-center space-x-1"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="font-mono text-xs text-slate-500">Local Tool</span>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
