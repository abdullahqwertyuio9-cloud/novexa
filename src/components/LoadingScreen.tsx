import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NovexaLogo } from './NovexaLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 10;
        return Math.min(100, prev + diff);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white px-4"
        >
          {/* Animated Mesh Glow Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#2F80FF]/20 via-[#8A3FFC]/20 to-[#00D4FF]/20 blur-[120px] animate-pulse-slow" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
            {/* Logo pulse animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <NovexaLogo size="xl" glow={true} />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/10 relative p-0.5 mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00D4FF] via-[#2F80FF] to-[#8A3FFC] rounded-full shadow-[0_0_12px_#2F80FF]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="flex items-center justify-between w-full text-xs font-mono text-[#A0A0A0]">
              <span className="tracking-widest uppercase">System Initializing</span>
              <span className="text-[#00D4FF] font-bold">{progress}%</span>
            </div>

            <div className="mt-8 text-[11px] tracking-widest text-white/40 uppercase font-sans">
              Architecting Digital Excellence
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
