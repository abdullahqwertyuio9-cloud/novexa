import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, TARGET_INDUSTRIES } from '../data/novexaData';
import { getConsultationWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].title);
  const [selectedIndustry, setSelectedIndustry] = useState(TARGET_INDUSTRIES[0].name);
  const [selectedBudget, setSelectedBudget] = useState('$1k - $3k');

  if (!isOpen) return null;

  const budgetOptions = ['$500 - $1k', '$1k - $3k', '$3k - $10k', '$10k+'];

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getConsultationWhatsAppUrl({
      name: name || "Valued Client",
      service: selectedService,
      industry: selectedIndustry,
      budget: selectedBudget
    });
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#0a0c16] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(47,128,255,0.35)] z-10 overflow-hidden my-8"
        >
          {/* Top Gradient */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#2F80FF] to-[#8A3FFC]" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-[#2F80FF]/20 text-[#00D4FF]">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-[#00D4FF] uppercase tracking-wider">
              Free 1-on-1 Session
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-2">
            Book a Free Strategic Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A0A0] mb-6">
            Configure your project parameters below to instantly generate a custom WhatsApp consultation proposal with our senior engineering team.
          </p>

          <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                Your Name / Business Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan / Nexus Tech"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm placeholder-[#A0A0A0]/50 focus:outline-none focus:border-[#2F80FF]"
              />
            </div>

            {/* Service Select */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                Primary Service Required
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#121528] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#2F80FF]"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Select */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                Business Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#121528] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#2F80FF]"
              >
                {TARGET_INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range Options */}
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1.5">
                Estimated Project Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold border transition-all ${
                      selectedBudget === b
                        ? 'bg-[#2F80FF] border-[#00D4FF] text-white shadow-[0_0_12px_rgba(47,128,255,0.5)]'
                        : 'bg-white/5 border-white/10 text-[#A0A0A0] hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all duration-300 shadow-[0_0_30px_rgba(47,128,255,0.4)]"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                <span>Submit & Launch WhatsApp Consultation ({FORMATTED_PHONE})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
