import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl, getServiceWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';
import { SERVICES_DATA } from '../data/novexaData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customText.trim()) return;
    const url = getWhatsAppUrl(customText);
    window.open(url, '_blank');
    setCustomText('');
    setIsOpen(false);
  };

  const handleQuickOption = (message: string) => {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9980] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[320px] sm:w-[360px] bg-[#0a0c16] border border-white/10 rounded-3xl p-5 shadow-[0_0_50px_rgba(47,128,255,0.4)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#2F80FF] to-[#8A3FFC] flex items-center justify-center text-white font-bold">
                    <MessageSquare className="w-5 h-5 fill-white text-transparent" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0a0c16]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">NOVEXA Support</div>
                  <div className="text-[10px] text-[#00D4FF] font-mono">Online • {FORMATTED_PHONE}</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#A0A0A0] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Intro Message Bubble */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs text-white/90 leading-relaxed mb-4">
              👋 Hello! How can NOVEXA assist your business today? Select a service or type a quick message to connect directly on WhatsApp:
            </div>

            {/* Quick Service Chips */}
            <div className="space-y-1.5 mb-4">
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#A0A0A0] mb-1">
                Popular Quick Inquiries:
              </div>
              {SERVICES_DATA.slice(0, 3).map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleQuickOption(`Hello NOVEXA! I am interested in getting details for: *${s.title}*.`)}
                  className="w-full text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-[#2F80FF]/20 border border-white/5 hover:border-[#2F80FF]/40 text-xs text-white flex items-center justify-between transition-colors"
                >
                  <span>{s.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#00D4FF]" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form onSubmit={handleSendCustom} className="flex items-center gap-2">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type custom message..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-[#A0A0A0]/50 focus:outline-none focus:border-[#2F80FF]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] text-white hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] text-white shadow-[0_0_30px_rgba(47,128,255,0.6)] hover:shadow-[0_0_50px_rgba(47,128,255,0.8),0_0_25px_rgba(0,212,255,0.5)] transition-all duration-300 ease-out hover:scale-115 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Open WhatsApp Chat Widget"
      >
        {/* Soft Blue Glow Aura Layer with 50% Opacity on Hover */}
        <span className="absolute inset-0 rounded-full bg-[#2F80FF] opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 pointer-events-none" />

        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050505] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#050505]" />
        
        <MessageSquare className="w-6 h-6 fill-white text-transparent relative z-10" />
      </button>
    </div>
  );
};
