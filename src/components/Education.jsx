import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Formal computer science engineering education emphasizing software fundamentals, data structures, and computer systems.
          </motion.p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all shadow-xl shadow-black/40 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="text-base font-semibold text-purple-300">
                    {education.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {education.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* SGPA Badge */}
              <div className="self-start sm:self-auto text-left sm:text-right shrink-0">
                <div className="inline-flex sm:flex flex-col items-start sm:items-end px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 shadow-sm">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Academic Grade</span>
                  <span className="text-lg font-extrabold text-white font-mono">{education.score}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Curriculum & Foundations
              </h4>
              <ul className="space-y-2">
                {education.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
