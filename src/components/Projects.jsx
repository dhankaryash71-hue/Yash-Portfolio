import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { TechIcons } from '../data/techIcons';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Portfolio Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Selected full-stack and real-time web applications built for reliability, usability, and scale. Verified live production deployments with source code available.
          </motion.p>
        </div>

        {/* Responsive Grid: Side-by-side on wide screens (lg:grid-cols-2), stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Callout Footer for More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl glass-card border border-white/10 max-w-2xl w-full mx-auto">
            <div className="text-left space-y-0.5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span>Explore more repositories & source code</span>
              </h4>
              <p className="text-xs text-slate-400">
                Check out active commits, experimentation, and open-source contributions on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/dhankaryash71-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-purple-500/40 transition-all shrink-0 shadow-sm"
            >
              <div className="w-4 h-4"><TechIcons.GitHub /></div>
              <span>@dhankaryash71-hue</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
