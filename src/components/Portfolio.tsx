import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Sparkles, ArrowRight, Eye, Code2, Layers, CheckCircle2, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/novexaData';
import { PortfolioProject } from '../types';
import { PortfolioModal } from './PortfolioModal';
import { getPortfolioWhatsAppUrl } from '../utils/whatsapp';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Website Development',
    'Web Applications',
    'UI/UX Design',
    'AI Chatbots',
    'AI Agents'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 relative bg-[#050505] overflow-hidden">
      {/* Background Radial Lights & Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#2F80FF]/10 via-[#8A3FFC]/10 to-[#00D4FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Concept Showcase Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight"
          >
            World-Class <span className="text-gradient">Digital Concept Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed"
          >
            Explore our architectural concepts across luxury web engineering, enterprise dashboards, bespoke UI/UX, and autonomous AI systems.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-16">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 relative ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] text-white shadow-[0_0_25px_rgba(47,128,255,0.5)] scale-105'
                    : 'bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Concept Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const whatsappUrl = getPortfolioWhatsAppUrl(project.title);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative bg-[#0a0c16]/90 border border-white/10 hover:border-[#2F80FF]/50 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_40px_rgba(47,128,255,0.35),0_0_20px_rgba(138,63,252,0.25)] hover:-translate-y-1.5"
                >
                  {/* Subtle Top Accent Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  <div>
                    {/* Mockup Frame Header */}
                    <div 
                      className="relative h-60 overflow-hidden cursor-pointer bg-[#050505]"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {/* Fake Browser/Device Header Bar */}
                      <div className="absolute top-0 inset-x-0 h-7 bg-black/60 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[9px] font-mono text-white/40 tracking-tight">
                          novexa.concept • {project.category.toLowerCase().replace(/\s+/g, '-')}
                        </span>
                      </div>

                      {/* Main Preview Image */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover pt-7 transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] via-[#0a0c16]/20 to-transparent pointer-events-none" />

                      {/* Concept Project Badge */}
                      <div className="absolute top-9 left-3.5 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wide text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] border border-white/20 shadow-md">
                          {project.conceptType}
                        </span>
                      </div>

                      {/* Category Tag */}
                      <div className="absolute top-9 right-3.5 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-medium text-[#00D4FF] bg-black/60 backdrop-blur-md border border-[#00D4FF]/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-15">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="w-3.5 h-3.5 text-[#2F80FF]" />
                          <span>View Concept</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00D4FF] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>{project.title}</span>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all" />
                      </h3>

                      <p className="text-xs text-[#A0A0A0] leading-relaxed mb-5 line-clamp-2">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Technologies Stack / Tags Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(project.technologies || project.tags || []).slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-white/80 border border-white/10 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>View Concept</span>
                      <Eye className="w-3.5 h-3.5 text-[#00D4FF]" />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#2F80FF]/20 hover:bg-[#2F80FF] border border-[#2F80FF]/40 hover:border-[#2F80FF] transition-all shadow-[0_0_15px_rgba(47,128,255,0.2)]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#00D4FF] group-hover:text-white" />
                      <span>Build Similar</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Concept Modal Popup */}
      <PortfolioModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
