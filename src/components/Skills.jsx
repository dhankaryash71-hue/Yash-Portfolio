import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcons } from '../data/techIcons';

export default function Skills() {
  const { techCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    languages: Code2,
    frontend: Layout,
    backend: Server,
    databases: Database,
    tools: Wrench,
  };

  const filteredCategories = activeTab === 'all'
    ? techCategories
    : techCategories.filter(cat => cat.id === activeTab);

  // Total distinct count
  const allTechs = Array.from(new Set(techCategories.flatMap(cat => cat.skills.map(s => s.name))));

  return (
    <section id="skills" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Technologies I Work With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            A curated toolkit across languages, frontend architectures, backend services, databases, and modern developer tooling used to deliver scalable, reliable applications.
          </motion.p>

          {/* Quick Stats Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{allTechs.length} Core Technologies</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>5 Distinct Domains</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Full-Stack & Cloud Verified</span>
            </span>
          </motion.div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg shadow-black/30">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Categories
            </button>

            {techCategories.map((cat) => {
              const IconComp = categoryIcons[cat.id] || Layers;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories and Cards */}
        <div className="space-y-14">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => {
              const IconComp = categoryIcons[category.id] || Layers;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-normal">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="self-start sm:self-center text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-purple-300 border border-white/10">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Responsive Grid of Tech Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {category.skills.map((tech) => {
                      const IconSvg = TechIcons[tech.name];

                      return (
                        <motion.div
                          key={tech.name}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="group relative rounded-xl p-4 bg-[#0d1226]/80 hover:bg-[#121833] border border-white/10 hover:border-purple-500/40 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-purple-950/30 flex flex-col items-start gap-3 backdrop-blur-md"
                        >
                          {/* Accent glow on hover */}
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                              background: `radial-gradient(120px circle at 50% 0%, ${tech.accent}20, transparent 80%)`,
                            }}
                          />

                          {/* Top Row: Icon and indicator */}
                          <div className="w-full flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-slate-900/90 border border-white/10 p-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                              {IconSvg ? (
                                <IconSvg />
                              ) : (
                                <Code2 className="w-5 h-5 text-purple-400" />
                              )}
                            </div>
                            <span
                              className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                              style={{ backgroundColor: tech.accent || '#8b5cf6' }}
                              title="Technology verified"
                            />
                          </div>

                          {/* Tech Name & Role */}
                          <div className="space-y-0.5 w-full">
                            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                              {tech.name}
                            </h4>
                            <p className="text-[11px] text-slate-400 font-medium truncate">
                              {tech.role}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
