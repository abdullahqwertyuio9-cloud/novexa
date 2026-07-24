import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/novexaData';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Services & Tech', 'Pricing & Delivery'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter(f => f.category === activeCategory);

  const faqWhatsApp = getWhatsAppUrl("Hello NOVEXA! I have a custom question about your services and would like to ask on WhatsApp.");

  return (
    <section id="faq" className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00D4FF] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Everything you need to know about working with NOVEXA Digital Agency.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] text-white shadow-[0_0_15px_rgba(47,128,255,0.4)]'
                    : 'bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#2F80FF]/50 bg-white/[0.04]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/5 text-[#00D4FF] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2F80FF]/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-[#A0A0A0] leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2F80FF]/15 via-[#8A3FFC]/15 to-[#00D4FF]/15 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Have a Specific Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A0A0] mb-6 max-w-lg mx-auto">
            Our engineering team is active on WhatsApp and ready to answer your technical or project inquiry directly.
          </p>

          <a
            href={faqWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_25px_rgba(47,128,255,0.4)]"
          >
            <MessageSquare className="w-4 h-4 fill-white text-transparent" />
            <span>Ask Us Directly on WhatsApp ({FORMATTED_PHONE})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
