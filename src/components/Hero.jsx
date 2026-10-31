import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Code, 
  Terminal, 
  Sparkles, 
  ExternalLink,
  Layers,
  Database,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcons } from '../data/techIcons';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const floatingBadges = [
    { name: "React", label: "React 19", Icon: TechIcons.React, pos: "-top-6 -left-6", delay: 0 },
    { name: "Next.js", label: "Next.js 15", Icon: TechIcons['Next.js'], pos: "-top-4 -right-6", delay: 0.5 },
    { name: "Node.js", label: "Node.js", Icon: TechIcons['Node.js'], pos: "bottom-12 -left-8", delay: 1 },
    { name: "PostgreSQL", label: "PostgreSQL", Icon: TechIcons.PostgreSQL, pos: "-bottom-6 right-4", delay: 1.5 },
    { name: "TypeScript", label: "TypeScript", Icon: TechIcons.TypeScript, pos: "top-1/2 -right-10", delay: 2 },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Gradients & Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-medium shadow-md shadow-purple-900/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="font-semibold text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Full-Stack Engineer</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Yash Dhankar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 tracking-tight">
                Full Stack Software Developer
              </h2>
            </div>

            {/* Factual, concise intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specializing in scalable web development, backend architecture, and database-driven applications. Focused on writing maintainable code, improving user experience, and delivering practical software solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personal.resumeUrl}
                download="Yash_Dhankar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all"
                title="View resume in new tab"
              >
                <span>View PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href="https://github.com/dhankaryash71-hue"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 flex items-center justify-center w-9 h-9"
                aria-label="GitHub Profile (dhankaryash71-hue)"
              >
                <div className="w-4 h-4"><TechIcons.GitHub /></div>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center justify-center w-9 h-9"
                aria-label="LinkedIn Profile"
              >
                <div className="w-4 h-4 text-blue-400"><TechIcons.LinkedIn /></div>
              </a>
              <a
                href="https://leetcode.com/u/YASHDHANKAR/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-amber-500/50 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="LeetCode Profile (YASHDHANKAR)"
              >
                <Code className="w-4 h-4 text-amber-400" />
              </a>
              <a
                href="mailto:dhankaryash71@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-rose-500/50 text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                aria-label="Email Yash Dhankar (dhankaryash71@gmail.com)"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code Terminal / Laptop Visual with Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-blue-600/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => {
              const IconComp = badge.Icon;
              return (
                <motion.div
                  key={badge.name}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + idx * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: badge.delay,
                  }}
                  className={`absolute ${badge.pos} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-white/15 shadow-xl shadow-black/40 backdrop-blur-md pointer-events-none`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <IconComp />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Code Terminal Mockup */}
            <div className="w-full max-w-lg rounded-2xl bg-[#0b0f1f]/95 border border-white/15 shadow-2xl shadow-purple-950/40 overflow-hidden backdrop-blur-xl relative z-10">
              
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-[#0d1326] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    developer.ts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto space-y-1.5">
                <div className="text-slate-500">// Full-Stack Software Developer Profile</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">'Yash Dhankar'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">'Full Stack Software Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">'B.Tech CSE @ AKTU'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-indigo-300">'React'</span>,{' '}
                  <span className="text-indigo-300">'Next.js'</span>,{' '}
                  <span className="text-indigo-300">'Node.js'</span>,{' '}
                  <span className="text-indigo-300">'PostgreSQL'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">featuredProjects:</span> [
                  <span className="text-purple-300">'Queueless'</span>,{' '}
                  <span className="text-purple-300">'SHADO'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">dsaProblemsSolved:</span>{' '}
                  <span className="text-amber-300">140</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passion:</span>{' '}
                  <span className="text-emerald-300">'Scalable architecture & clean user UX'</span>
                </div>
                <div>{'};'}</div>
                <div className="pt-2 text-slate-400 flex items-center gap-1">
                  <span className="text-purple-400">export default</span> developer;
                  <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse" />
                </div>
              </div>

              {/* Bottom Info Ribbon */}
              <div className="px-5 py-2.5 bg-[#080c1a] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ready to compile & deploy
                </span>
                <span className="font-mono text-slate-500">UTF-8 • Git: main</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
