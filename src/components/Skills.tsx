import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Code2, Globe, Server, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data';
import { Skill } from '../types';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai_ml'>('all');

  const tabs = [
    { id: 'all', name: 'All Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'programming', name: 'Programming', icon: <Code2 className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Globe className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools', icon: <Terminal className="w-4 h-4" /> },
    { id: 'ai_ml', name: 'AI & ML', icon: <Cpu className="w-4 h-4 animate-pulse text-brand-cyan" /> }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai_ml':
        return 'from-cyan-500 to-emerald-400 text-cyan-400';
      case 'programming':
        return 'from-purple-500 to-brand-purple text-purple-400';
      case 'frontend':
        return 'from-blue-500 to-brand-cyan text-blue-400';
      case 'backend':
        return 'from-indigo-500 to-indigo-600 text-indigo-400';
      case 'database':
        return 'from-emerald-500 to-green-600 text-emerald-400';
      case 'tools':
        return 'from-pink-500 to-rose-500 text-pink-400';
      default:
        return 'from-slate-500 to-slate-600 text-slate-400';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6">
      {/* Glow background anchor */}
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] -translate-x-1/2 translate-y-1/2 rounded-full radial-glow-cyan opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan"
          >
            EXPERTISE
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
            My Technical Arsenal
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 relative cursor-pointer ${
                activeTab === tab.id
                  ? 'text-white shadow-lg shadow-brand-cyan/10'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white bg-slate-900/40 border border-white/5'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-indigo"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`p-5 rounded-2xl border flex flex-col text-left justify-between transition-shadow duration-300 relative group overflow-hidden ${
                  isDarkMode 
                    ? 'border-white/5 bg-slate-900/35 hover:border-brand-purple/20' 
                    : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {/* Glow border overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/0 to-brand-purple/0 group-hover:from-brand-cyan/5 group-hover:to-brand-purple/5 transition-colors duration-500 pointer-events-none" />

                <div className="space-y-4 relative z-10 w-full">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded-md font-mono text-[9px] tracking-wider uppercase font-semibold border ${
                      isDarkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}>
                      {skill.category.replace('_', ' ')}
                    </span>
                    <CheckCircle2 className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode ? 'text-brand-cyan' : 'text-brand-purple'
                    }`} />
                  </div>

                  <h3 className={`font-display font-bold text-base md:text-lg leading-tight ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {skill.name}
                  </h3>
                </div>

                {/* Level Progress Slider */}
                <div className="mt-6 space-y-1.5 relative z-10 w-full">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>Proficiency</span>
                    <span className={getCategoryColor(skill.category).split(' ')[2]}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800/40 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category).split(' ').slice(0, 2).join(' ')}`}
                    />
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
