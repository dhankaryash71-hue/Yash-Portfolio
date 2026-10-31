import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function IntroAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1); // 1: Name reveal, 2: Role reveal, 3: Complete

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Step 1 -> Step 2
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 900);

    // Step 2 -> Complete
    const timer2 = setTimeout(() => {
      handleFinish();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleFinish = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 400);
  };

  const nameLetters = "Yash Dhankar".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070913] text-white px-4 select-none overflow-hidden"
          role="dialog"
          aria-label="Welcome introduction"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -top-20 -left-20 animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20 animate-pulse" />

          {/* Skip Button */}
          <button
            onClick={handleFinish}
            className="absolute top-6 right-6 px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-white/10 rounded-full transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-label="Skip introduction animation"
          >

            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="max-w-xl w-full text-center space-y-6 relative z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Portfolio Experience</span>
            </motion.div>

            {/* Letter-by-letter Name Reveal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="sr-only">Yash Dhankar</span>
              <span aria-hidden="true" className="inline-flex flex-wrap justify-center">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.045,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className={`inline-block ${char === " " ? "w-3 sm:w-5" : ""
                      } bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle / Role Reveal */}
            <div className="h-10 flex items-center justify-center">
              <AnimatePresence>
                {step >= 2 && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-lg sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent tracking-wide"
                  >
                    Full Stack Software Developer
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-1 mx-auto bg-slate-800/80 rounded-full overflow-hidden mt-6">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
