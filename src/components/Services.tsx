import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, LayoutDashboard, Figma, Bot, Cpu, ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/novexaData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { getServiceWhatsAppUrl } from '../utils/whatsapp';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-7 h-7 text-[#00D4FF]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-7 h-7 text-[#2F80FF]" />;
      case 'Figma': return <Figma className="w-7 h-7 text-[#8A3FFC]" />;
      case 'Bot': return <Bot className="w-7 h-7 text-[#00D4FF]" />;
      case 'Cpu': return <Cpu className="w-7 h-7 text-[#8A3FFC]" />;
      default: return <Sparkles className="w-7 h-7 text-[#00D4FF]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8A3FFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Services Engineered for <span className="text-gradient-primary">Growth & Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
            We deliver enterprise-grade digital products and AI automation systems. Select a service to explore full specifications or initiate a direct WhatsApp inquiry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const whatsappUrl = getServiceWhatsAppUrl(service.title);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between border border-white/10 relative group overflow-hidden"
              >
                {/* Background Card Radial Accent */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#2F80FF]/20 to-[#8A3FFC]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#2F80FF]/50 transition-colors shadow-lg">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 uppercase">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-8">
                    {service.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_15px_rgba(47,128,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-transparent" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#A0A0A0] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span>View Specifications & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
