import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Store, ShoppingBag, Activity, Scale, Building2, Utensils, GraduationCap, Briefcase, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { TARGET_INDUSTRIES } from '../data/novexaData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const TargetIndustries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(TARGET_INDUSTRIES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#00D4FF]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#2F80FF]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#8A3FFC]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#00D4FF]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-[#2F80FF]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#8A3FFC]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#00D4FF]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#2F80FF]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#8A3FFC]" />;
      default: return <Sparkles className="w-5 h-5 text-[#00D4FF]" />;
    }
  };

  const activeInd = TARGET_INDUSTRIES.find(i => i.id === selectedIndustry) || TARGET_INDUSTRIES[0];

  const industryWhatsAppUrl = getWhatsAppUrl(
    `Hello NOVEXA! I run a business in the *${activeInd.name}* sector and would like to discuss web/AI solutions for my company.`
  );

  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Industries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Custom Solutions for <span className="text-gradient">Your Exact Industry</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Whether you are a startup founder, law firm partner, medical practitioner, or e-commerce brand, NOVEXA builds tailored lead engines for your niche.
          </p>
        </div>

        {/* Industry Pill Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {TARGET_INDUSTRIES.map((ind) => {
            const isActive = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] text-white shadow-[0_0_20px_rgba(47,128,255,0.4)] scale-105'
                    : 'bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10'
                }`}
              >
                {getIcon(ind.iconName)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <motion.div
          key={activeInd.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                {getIcon(activeInd.iconName)}
              </div>
              <div>
                <span className="text-xs text-[#00D4FF] font-mono font-bold uppercase tracking-wider">
                  Tailored Blueprint
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {activeInd.name} Solutions
                </h3>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#2F80FF]/20 border border-[#2F80FF]/30">
              Rec. Service: {activeInd.recommendedService}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6">
            {activeInd.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {activeInd.keyBenefits.map((benefit, bIdx) => (
              <div key={bIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-white font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <a
              href={industryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_20px_rgba(47,128,255,0.3)]"
            >
              <MessageSquare className="w-4 h-4 fill-white text-transparent" />
              <span>Get Free {activeInd.name} Proposal on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
