import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import ProjectMockup from './ProjectMockup';
import { TechIcons } from '../data/techIcons';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0b0f24]/90 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-purple-950/30 hover:-translate-y-1.5 backdrop-blur-xl overflow-hidden"
    >
      {/* Subtle top border gradient accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accentColor}`} />

      {/* Preview Area / Screenshot Mockup */}
      <ProjectMockup projectId={project.id} title={project.title} />

      {/* Card Content Area (Text & Links remain stable during hover) */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
        
        {/* Title, Badge & Subtitle */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40 font-mono">
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Live Production
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm font-semibold text-purple-400 tracking-wide">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed font-normal pt-1">
            {project.description}
          </p>
        </div>

        {/* Factual Highlights from Resume */}
        <div className="space-y-2 pt-1 border-t border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Architecture & Features
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-2 pt-1 border-t border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-200 bg-slate-900/90 border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo and View Code */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label={`Open live demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <div className="w-4 h-4"><TechIcons.GitHub /></div>
            <span>View Code</span>
          </a>
        </div>

      </div>
    </motion.article>
  );
}
