import { motion } from 'motion/react';
import { ShieldAlert, Rocket, Briefcase, Eye, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const cards = [
    {
      icon: <Rocket className="w-6 h-6 text-brand-cyan" />,
      title: "AI Engineering",
      description: "Dedicated to training neural networks, exploring advanced machine learning paradigms, and mastering prompt engineering to unlock cognitive computing solutions."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-purple" />,
      title: "Venture Building",
      description: "As Founder & CEO of HSBJK Pvt LTD, building scalable software ecosystems, designing web products, and steering startup strategy from concept to production."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-indigo" />,
      title: "Product Execution",
      description: "Creating client-first, high-performance applications prioritizing offline capability, security, seamless responsive animations, and professional UX."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] translate-x-1/2 -translate-y-1/2 rounded-full radial-glow-indigo opacity-35 pointer-events-none" />

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
            WHO I AM
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
            My Mission & Background
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Professional Workspace Picture */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl border border-white/5"
            >
              <img
                src="/images/gallery/gallery_1.png"
                alt="Workspace Split"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

              {/* Floating detail tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-dark border border-white/10 flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-sm text-white">HSBJK Pvt LTD</span>
                  <span className="text-[10px] text-brand-cyan font-mono tracking-widest uppercase">Global Headquarters</span>
                </div>
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan border border-brand-cyan/20">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative & Strategic Cards */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className={`font-display text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Blending AI Engineering with Digital Venturing
              </h3>
              
              <p className={`text-base leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {personalInfo.bio}
              </p>

              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-slate-500' : 'text-slate-500'
              }`}>
                {personalInfo.detailedAbout}
              </p>
            </motion.div>

            {/* Strategic Cards Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border flex flex-col text-left transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode 
                      ? 'border-white/5 bg-slate-900/40 hover:border-brand-cyan/20 hover:bg-slate-900/60' 
                      : 'border-slate-200/80 bg-slate-50/50 hover:border-brand-purple/20 hover:bg-slate-100/50'
                  }`}
                >
                  <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 shadow-inner">
                    {card.icon}
                  </div>
                  <h4 className={`font-display font-bold text-base mb-2 ${
                    isDarkMode ? 'text-white' : 'text-slate-950'
                  }`}>
                    {card.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
