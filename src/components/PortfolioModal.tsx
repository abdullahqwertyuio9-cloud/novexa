import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, CheckCircle2, Sparkles, TrendingUp, Cpu, Code2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';
import { getPortfolioWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const whatsappUrl = getPortfolioWhatsAppUrl(project.title);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0a0c16] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(47,128,255,0.35)] z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors z-30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto pr-1 space-y-8">
            {/* Mockup Header Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050505]">
              {/* Fake Browser Bar */}
              <div className="h-8 bg-black/70 border-b border-white/10 px-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-white/50">
                  https://novexa.agency/concept/{project.id}
                </span>
                <span className="text-[10px] text-[#00D4FF] font-mono">LIVE PREVIEW</span>
              </div>

              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] via-[#0a0c16]/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] border border-white/20 shadow-lg">
                      {project.conceptType}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00D4FF] bg-black/70 backdrop-blur-md border border-[#00D4FF]/40">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title & Overview */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                {project.fullOverview || project.description}
              </p>
            </div>

            {/* Key Features & System Architecture */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                <span>Key Features & Functional Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(project.features || project.tags || []).map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span className="leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Benefits & Outcomes */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2F80FF]/10 via-[#8A3FFC]/10 to-transparent border border-[#2F80FF]/20">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#8A3FFC]" />
                <span>Business Impact & Expected ROI</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(project.businessBenefits || [project.metrics || "3.8x ROI Impact"]).map((benefit, bIdx) => (
                  <div key={bIdx} className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white leading-relaxed">
                    <span className="text-[#00D4FF] font-bold block mb-1">0{bIdx + 1}. Outcome</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Stack */}
            <div>
              <div className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider mb-2.5 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>Technologies & Engineering Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.tags || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Trigger Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2F80FF]/20 via-[#00D4FF]/20 to-[#8A3FFC]/20 border border-white/15 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00D4FF]/20 rounded-full blur-3xl pointer-events-none" />

              <h4 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Want a Similar Solution Built for Your Business?
              </h4>
              <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto mb-6">
                Our senior engineering team can customize and deploy this exact system architecture for your company on WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all duration-300 shadow-[0_0_35px_rgba(47,128,255,0.5)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                <span>Build Something Similar</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <div className="mt-3 text-[11px] text-[#A0A0A0] font-mono">
                Direct WhatsApp Contact: {FORMATTED_PHONE}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
