import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0: progress, 1: brand reveal, 2: fade out

  useEffect(() => {
    // Increment percentage counter organically
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 300);
          setTimeout(() => {
            setPhase(2);
            setTimeout(onComplete, 800);
          }, 1800);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
          exit={{ 
            y: '-100vh', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Backlight background ambient glow */}
          <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 w-full max-w-md px-6 text-center">
            {phase === 0 ? (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                {/* Glowing ring */}
                <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-800/40" />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-t-brand-cyan border-r-brand-purple border-b-transparent border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                  />
                  <span className="font-display font-bold text-xl text-brand-cyan">
                    {progress}%
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-mono text-sm tracking-widest text-slate-400">
                    INITIALIZING SYSTEM
                  </h3>
                  <div className="w-48 h-1.5 bg-slate-800/60 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="brand"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                {/* Monogram branding avatar with circular glow */}
                <div className="relative mb-6 w-24 h-24 rounded-2xl overflow-hidden glass-panel-dark flex items-center justify-center shadow-2xl border border-brand-purple/20">
                  <img
                    src="input_file_0.png"
                    alt="HSBJK"
                    className="w-20 h-20 object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 opacity-40 animate-pulse pointer-events-none" />
                </div>

                <h1 className="font-display text-4xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  HSBJK
                </h1>
                
                <p className="mt-2 font-mono text-xs text-brand-cyan tracking-widest uppercase">
                  Pvt LTD • Studio v2.0
                </p>

                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 140 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
                />

                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 font-mono text-[10px] text-slate-500"
                >
                  system_status: ONLINE
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
