import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, MessageSquare, ArrowRight, Clock, Sparkles, Globe, LayoutDashboard, Figma, Bot, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';
import { getServiceWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-[#00D4FF]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-[#2F80FF]" />;
      case 'Figma': return <Figma className="w-6 h-6 text-[#8A3FFC]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#00D4FF]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#8A3FFC]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00D4FF]" />;
    }
  };

  const whatsappUrl = getServiceWhatsAppUrl(service.title);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0a0c16] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(47,128,255,0.25)] z-10 overflow-hidden my-8"
        >
          {/* Top Gradient Accent */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#2F80FF] to-[#8A3FFC]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 uppercase mb-1">
                {service.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6">
            {service.fullDescription}
          </p>

          {/* Core Sub-Services / Bullet Points */}
          <div className="mb-6 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              Included Scope & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.bulletPoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                  <div className="w-4 h-4 rounded-full bg-[#2F80FF]/20 text-[#00D4FF] flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              Key Deliverables
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white">
                  <span>{item}</span>
                  <span className="text-[10px] text-[#00D4FF] font-mono">Included</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline & Ideal Clients */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 mb-8">
            <div className="flex items-center gap-2 text-xs text-white">
              <Clock className="w-4 h-4 text-[#00D4FF]" />
              <span>Estimated Delivery: <strong>{service.estimatedTimeline}</strong></span>
            </div>
            <div className="text-xs text-[#A0A0A0]">
              Direct Contact: <span className="text-white font-mono">{FORMATTED_PHONE}</span>
            </div>
          </div>

          {/* Primary WhatsApp Action CTA */}
          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all duration-300 shadow-[0_0_30px_rgba(47,128,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
            >
              <MessageSquare className="w-5 h-5 fill-white text-transparent" />
              <span>Order {service.title} on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-center text-[11px] text-[#A0A0A0]">
              Clicking will automatically launch WhatsApp with a pre-filled request for <strong className="text-white">{service.title}</strong>.
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
