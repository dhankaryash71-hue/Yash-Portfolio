import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Server, 
  GraduationCap, 
  Briefcase, 
  Code, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, dsa, education } = portfolioData;

  const pillars = [
    {
      icon: Server,
      title: "Backend Architecture",
      desc: "Designing clean REST APIs, microservices, and server-side workflows using Node.js, Express, and modern JavaScript runtimes.",
      accent: "text-blue-400 bg-blue-950/40 border-blue-800/40",
    },
    {
      icon: Database,
      title: "Database-Driven Systems",
      desc: "Modeling and maintaining relational and document databases with PostgreSQL, MongoDB, MySQL, and Prisma ORM for data integrity.",
      accent: "text-purple-400 bg-purple-950/40 border-purple-800/40",
    },
    {
      icon: Terminal,
      title: "Scalable Web Development",
      desc: "Building performant, responsive web applications with React, Next.js, and TypeScript, keeping codebases modular and maintainable.",
      accent: "text-indigo-400 bg-indigo-950/40 border-indigo-800/40",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Profile & Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A dedicated engineer focused on engineering robust full-stack software, maintaining clean codebases, and delivering practical digital solutions.
          </motion.p>
        </div>

        {/* Two-Column About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Factual Summary & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 p-6 sm:p-8 rounded-2xl glass-card border border-white/10"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span>Full Stack Software Developer</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {personal.fullBio}
              </p>

              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-normal">
                Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Dr. A.P.J. Abdul Kalam Technical University (2023–2027) with a current SGPA of 7.8 / 10. Actively combining academic foundations with real-world developer experience at CodesWords.
              </p>
            </div>

            {/* Quick Factual Indicators Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Degree</span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">B.Tech CSE</span>
                <span className="text-[10px] text-purple-400 font-mono">2023–2027</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Current SGPA</span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">7.8 / 10</span>
                <span className="text-[10px] text-emerald-400 font-mono">AKTU</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Industry</span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">CodesWords</span>
                <span className="text-[10px] text-indigo-400 font-mono">Developer</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">LeetCode</span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">140+ Solved</span>
                <span className="text-[10px] text-amber-400 font-mono">DSA Focus</span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {dsa.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/90 border border-white/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Architectural Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            {pillars.map((pillar, pIdx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl glass-card border border-white/10 hover:border-purple-500/40 transition-all duration-200 flex-1 flex flex-col justify-center space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${pillar.accent}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pl-12">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
