import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Sparkles, Calendar, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  const finalWhatsAppUrl = getWhatsAppUrl("Hello NOVEXA Digital Agency! I am ready to build something incredible for my business.");

  return (
    <section id="contact" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-[#00D4FF]/20 via-[#2F80FF]/25 to-[#8A3FFC]/20 blur-[150px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-14 md:p-16 border border-white/10 text-center relative overflow-hidden shadow-[0_0_80px_rgba(47,128,255,0.25)]">
          {/* Top Line Gradient */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#2F80FF] to-[#8A3FFC]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Digital Leadership?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
          >
            Let's Build Something <br className="hidden sm:block" />
            <span className="text-gradient-primary">Incredible.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-10"
          >
            Transform your business with world-class web applications, luxury UI/UX, and 24/7 AI automation. Connect directly on WhatsApp with our founding engineers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href={finalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all duration-300 shadow-[0_0_40px_rgba(47,128,255,0.6)] hover:shadow-[0_0_60px_rgba(0,212,255,0.8)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageSquare className="w-6 h-6 fill-white text-transparent" />
              <span>Chat on WhatsApp ({FORMATTED_PHONE})</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Calendar className="w-5 h-5 text-[#00D4FF]" />
              <span>Book Free Consultation</span>
            </button>
          </motion.div>

          <div className="flex items-center justify-center gap-6 text-xs text-[#A0A0A0] font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
              Guaranteed Response in &lt;15 Mins
            </span>
            <span>•</span>
            <span>No Long Contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};
