import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Palette, Code, CheckCircle2, Rocket, ArrowRight, MessageSquare } from 'lucide-react';
import { PROCESS_STEPS } from '../data/novexaData';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-6 h-6 text-[#00D4FF]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#2F80FF]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#8A3FFC]" />;
      case 'Code': return <Code className="w-6 h-6 text-[#00D4FF]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#2F80FF]" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-[#8A3FFC]" />;
      default: return <Search className="w-6 h-6 text-[#00D4FF]" />;
    }
  };

  const currentProcessWhatsApp = getWhatsAppUrl(
    `Hello NOVEXA! I want to start a project and follow your process for step: *${PROCESS_STEPS[activeStep].title}*.`
  );

  return (
    <section id="process" className="py-24 relative bg-[#050505] bg-grid-pattern overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#8A3FFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#8A3FFC] uppercase tracking-widest mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our Proven <span className="text-gradient-primary">Execution Process</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            A structured 6-stage delivery framework ensuring complete transparency, rapid delivery, and flawless final execution.
          </p>
        </div>

        {/* Timeline Header Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-[#2F80FF]/20 to-[#8A3FFC]/20 border-[#2F80FF] shadow-[0_0_20px_rgba(47,128,255,0.3)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#00D4FF]' : 'text-white/40'}`}>
                    {step.stepNumber}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
                  )}
                </div>
                <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#A0A0A0]'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {getIcon(PROCESS_STEPS[activeStep].iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider font-bold">
                    Stage {PROCESS_STEPS[activeStep].stepNumber} of 06
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {PROCESS_STEPS[activeStep].title} — <span className="text-[#A0A0A0]">{PROCESS_STEPS[activeStep].subtitle}</span>
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#A0A0A0] leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                  Key Deliverables in Stage {PROCESS_STEPS[activeStep].stepNumber}:
                </h4>
                <div className="space-y-2">
                  {PROCESS_STEPS[activeStep].keyActivities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={currentProcessWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_20px_rgba(47,128,255,0.4)]"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                  <span>Start Stage 1 Discovery on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 bg-white/[0.03] p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2F80FF]/20 to-[#8A3FFC]/20 border border-white/10 flex items-center justify-center mb-4">
                {getIcon(PROCESS_STEPS[activeStep].iconName)}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                Guaranteed Execution Quality
              </div>
              <p className="text-xs text-[#A0A0A0] mb-6 max-w-xs">
                We maintain direct WhatsApp channels throughout all 6 stages so you receive real-time updates and complete control.
              </p>
              <div className="text-xs font-mono text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full border border-[#00D4FF]/20">
                Contact: {FORMATTED_PHONE}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
