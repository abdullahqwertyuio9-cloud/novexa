import React from 'react';
import { motion } from 'motion/react';
import { Zap, Sparkles, Clock, Smartphone, TrendingUp, Headphones, Check } from 'lucide-react';
import { WHY_NOVEXA_DATA } from '../data/novexaData';

export const WhyNovexa: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-[#00D4FF]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#8A3FFC]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#2F80FF]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#00D4FF]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#8A3FFC]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#2F80FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00D4FF]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#050505] bg-grid-pattern overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#2F80FF]/10 via-[#8A3FFC]/10 to-[#00D4FF]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#8A3FFC] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>The NOVEXA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why High-Growth Brands Choose <span className="text-gradient">NOVEXA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
            We bridge the gap between artistic luxury design and powerful software engineering, delivering digital solutions that dominate market competition.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_NOVEXA_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.iconName)}
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-white font-mono">{item.statNumber}</div>
                  <div className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">{item.statLabel}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
