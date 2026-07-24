import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Heart, Award, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/novexaData';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

export const About: React.FC = () => {
  const values = [
    {
      title: "Uncompromising Quality",
      desc: "We refuse to produce generic templates. Every pixel and line of code is held to global enterprise standards."
    },
    {
      title: "Conversion-First Mindset",
      desc: "Visual aesthetics mean nothing without ROI. We engineer user journeys specifically designed to generate WhatsApp leads."
    },
    {
      title: "Rapid Execution",
      desc: "Speed is a competitive advantage. We leverage modern component architecture and AI workflows to deliver fast."
    },
    {
      title: "Future-Ready Architecture",
      desc: "We build with scalable cloud technologies, ensuring your software and AI agents expand effortlessly as you grow."
    }
  ];

  const aboutWhatsAppUrl = getWhatsAppUrl("Hello NOVEXA! I read about your company vision and would like to partner with your team.");

  return (
    <section id="about" className="py-24 relative bg-[#050505] bg-grid-pattern overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#8A3FFC] uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Corporate Identity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            About <span className="text-gradient">NOVEXA Digital Agency</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0]">
            Architecting high-converting web applications and AI automation systems for visionaries worldwide.
          </p>
        </div>

        {/* Story & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-[#00D4FF] font-bold uppercase tracking-wider mb-2 block">
                Company Story
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Redefining How Modern Businesses Grow & Automate
              </h3>
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-4">
                NOVEXA Digital Agency was founded on a simple principle: digital agency services should not be slow, generic, or passive. We bridge luxury visual craftsmanship with advanced AI automation.
              </p>
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-6">
                From high-performing web portals and custom admin dashboards to 24/7 intelligent WhatsApp AI agents, our systems actively capture, engage, and convert visitors into high-value clients.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />
                <span>Trusted by 250+ Global Clients</span>
              </div>

              <a
                href={aboutWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_15px_rgba(47,128,255,0.3)]"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white text-transparent" />
                <span>Connect with Leadership</span>
              </a>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border border-white/10 flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#2F80FF]/20 text-[#00D4FF]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Our Mission</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                To empower startups, enterprises, and local brands with world-class digital software and AI automation that delivers measurable, predictable revenue growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 flex-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#8A3FFC]/20 text-[#8A3FFC]">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Our Vision</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                To remain the premier digital innovation partner recognized globally for luxury design precision, cutting-edge AI implementation, and instant client lead generation.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="text-xs font-mono font-bold text-[#00D4FF] mb-2">0{idx + 1}</div>
              <h5 className="text-base font-bold text-white mb-2">{v.title}</h5>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
