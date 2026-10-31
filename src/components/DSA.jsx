import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Sparkles, CheckCircle2, Flame, Award, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function DSA() {
  const { dsa } = portfolioData;

  return (
    <section id="dsa" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/25 text-amber-300 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Algorithmic Problem Solving</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Data Structures & Algorithms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Consistently sharpening core computational problem-solving, time-space complexity optimization, and algorithmic patterns on LeetCode.
          </motion.p>
        </div>

        {/* LeetCode Overview Card & Topic Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Main Stat Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-950/30">
                <Code className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {dsa.metric}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    Solved
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  Actively practicing on LeetCode across fundamental and intermediate data structures.
                </p>
              </div>
            </div>

            <a
              href={dsa.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0"
              aria-label="View Yash Dhankar's LeetCode profile"
            >
              <Terminal className="w-4 h-4 text-slate-900" />
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>
          </motion.div>

          {/* Topics Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dsa.topics.map((topic, index) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl bg-[#0c1024]/80 border border-white/10 hover:border-amber-500/40 transition-all shadow-md shadow-black/20 space-y-2 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {topic.name}
                  </h4>
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                    {topic.count}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Focus: {topic.difficulty}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
