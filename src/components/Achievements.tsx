import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FolderGit2, Globe, Cpu, Briefcase, Award } from 'lucide-react';
import { achievementsData } from '../data';

interface AchievementsProps {
  isDarkMode: boolean;
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref as any, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const increment = value / (duration / 16); // ~60fps refresh

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref as any}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements({ isDarkMode }: AchievementsProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-brand-cyan" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-brand-purple" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-indigo" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand-cyan" />;
      default:
        return <Award className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden px-6">
      {/* Background radial glowing ambient backdrop */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] translate-x-1/2 -translate-y-1/2 rounded-full radial-glow-cyan opacity-20 pointer-events-none" />

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
            METRICS
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
            My Key Achievements
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Counters Cards Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col items-center justify-center text-center transition-shadow duration-300 ${
                isDarkMode 
                  ? 'border-white/5 bg-slate-950/60 hover:border-brand-cyan/20 hover:shadow-xl hover:shadow-cyan-950/5' 
                  : 'border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-100 shadow-sm'
              }`}
            >
              {/* Backlight background soft flare */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-transparent blur-md pointer-events-none" />

              <div className="w-12 h-12 rounded-xl bg-white/5 shadow-inner flex items-center justify-center mb-4 border border-white/5 shrink-0">
                {renderIcon(item.icon)}
              </div>

              {/* Large Dynamic Count Up Number */}
              <h3 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 ${
                isDarkMode ? 'text-white' : 'text-slate-950'
              }`}>
                <CountUp value={item.value} suffix={item.suffix} />
              </h3>

              <p className={`text-xs sm:text-sm font-sans font-medium tracking-wide ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.label}
              </p>
              
              <span className="mt-4 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                VERIFIED_DATA
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
