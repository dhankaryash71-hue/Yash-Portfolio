import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, CheckCircle2, Calendar, MapPin, Building2, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Work History</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Hands-on software development experience focusing on feature implementation, frontend-backend coordination, and testing.
          </motion.p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all shadow-xl shadow-black/40 overflow-hidden"
            >
              {/* Subtle accent border */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500" />

              <div className="space-y-6">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-purple-400 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-950/60 border border-purple-800/40">
                    {exp.type}
                  </span>
                </div>

                {/* Exact Resume Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Responsibilities & Contributions
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-normal">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    Focus Areas:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/90 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
