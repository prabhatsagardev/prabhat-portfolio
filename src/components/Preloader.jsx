import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const totalDuration = 1800; // 1.8 seconds progression + 0.2s delay = 2 seconds
    const intervalTime = 20; // update every 20ms
    const totalSteps = totalDuration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 select-none font-mono"
        >
          {/* Background Grid System */}
          <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />

          {/* Central Preloader Container */}
          <div className="max-w-md w-full text-center space-y-8 relative z-10">
            
            {/* Logo Mark with Pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-white text-black flex items-center justify-center font-display font-black text-3xl shadow-2xl animate-pulse">
                P
              </div>
            </motion.div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight text-white font-sans">
                Prabhat Sagar
              </h1>
              <p className="text-xs text-neutral-400 font-mono tracking-[0.25em] uppercase">
                Full Stack Software Engineer • Portfolio
              </p>
            </div>

            {/* Progress Bar & Counter (4.5 Seconds) */}
            <div className="space-y-4">
              <div className="w-full h-2.5 bg-[#1A1A1A] border border-neutral-800 rounded-full overflow-hidden p-0.5 shadow-inner">
                <motion.div
                  className="h-full bg-white rounded-full transition-all duration-75"
                  style={{ width: `${Math.min(100, Math.round(progress))}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Initializing Modules...</span>
                </span>
                <span className="font-bold text-white font-mono text-sm">{Math.min(100, Math.round(progress))}%</span>
              </div>
            </div>

            <div className="text-[10px] text-neutral-500 tracking-widest uppercase">
              PHP • Laravel • React • Node.js • MySQL
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
