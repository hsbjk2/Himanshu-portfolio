import { motion } from 'motion/react';
import { Calendar, GraduationCap, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { educationData } from '../data';

interface EducationProps {
  isDarkMode: boolean;
}

export default function Education({ isDarkMode }: EducationProps) {
  return (
    <section id="education" className="py-24 relative overflow-hidden px-6">
      {/* Background ambient radial lights */}
      <div className="absolute top-1/2 left-0 w-[25rem] h-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full radial-glow-indigo opacity-20 pointer-events-none" />

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
            ACADEMICS
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
            Education Timeline
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Timeline Hub */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Timeline Center vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent pointer-events-none" />

          {educationData.map((item, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-8 group">
              
              {/* timeline point dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-brand-cyan -translate-x-1.5 md:-translate-x-2 z-10 shadow-lg shadow-brand-cyan/20 animate-pulse" />

              {/* Left Column: timeline Year (Desktop layout only) */}
              <div className="hidden md:flex md:w-[45%] justify-end text-right pr-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-2 font-mono text-base font-bold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/15 px-4 py-2 rounded-2xl"
                >
                  <Calendar className="w-4 h-4 text-brand-cyan" />
                  <span>{item.year}</span>
                </motion.div>
              </div>

              {/* Right Column: card content (Full width on mobile, right side on desktop) */}
              <div className="w-full md:w-[45%] pl-12 md:pl-8 md:pr-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col text-left group transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode 
                      ? 'border-white/5 bg-slate-950/60 hover:border-brand-purple/20' 
                      : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Glowing subtle backlight overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-brand-cyan/10 to-transparent pointer-events-none" />

                  {/* Mobile Year Badge */}
                  <div className="flex md:hidden items-center space-x-1.5 font-mono text-xs font-bold text-brand-cyan mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-white shrink-0 shadow-lg">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={`font-display font-extrabold text-lg leading-snug ${
                        isDarkMode ? 'text-white' : 'text-slate-950'
                      }`}>
                        {item.degree}
                      </h3>
                      <p className="font-sans font-medium text-sm text-brand-purple">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <p className={`mt-6 text-xs leading-relaxed font-sans ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-brand-purple">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>B.Tech Syllabus</span>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
