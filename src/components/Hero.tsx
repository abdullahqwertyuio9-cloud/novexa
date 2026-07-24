import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MessageSquare, ArrowRight, Sparkles, Check, Globe, Bot, ShieldCheck, Zap, Cpu, BarChart3, Smartphone, Laptop, Layers } from 'lucide-react';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // Mouse movement parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const consultationWhatsAppUrl = getWhatsAppUrl(
    "Hi NOVEXA Team,\n\nI would like to request a Free Consultation for my business digital project.\n\nPlease contact me."
  );

  const trustBadges = [
    "Responsive Design",
    "Modern UI/UX",
    "AI Ready",
    "High Performance",
    "Secure Development"
  ];

  const [activeTab, setActiveTab] = useState<'website' | 'dashboard' | 'ai'>('website');

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#050505] bg-grid-pattern"
    >
      {/* Background Animated Gradient Mesh & Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[550px] rounded-full bg-gradient-to-tr from-[#2F80FF]/20 via-[#8A3FFC]/20 to-[#00D4FF]/15 blur-[160px] pointer-events-none animate-pulse-slow z-0" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#8A3FFC]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#2F80FF]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content Column */}
          <div className="lg:col-span-6 text-left space-y-7">
            
            {/* Small Premium Badge (No Phone Number as requested) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90 backdrop-blur-md shadow-[0_0_20px_rgba(47,128,255,0.25)]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00D4FF] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent font-medium">
                World-Class Digital Agency & AI Studio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]"
            >
              Build Digital <br />
              <span className="text-gradient">Experiences</span> That Help <br />
              Businesses Grow.
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl font-normal"
            >
              Create stunning websites, AI-powered solutions, and modern web applications designed to impress customers and drive real business results.
            </motion.p>

            {/* CTA Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA Button: WhatsApp Consultation */}
              <a
                href={consultationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#2F80FF] via-[#00D4FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all duration-300 shadow-[0_0_35px_rgba(47,128,255,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white text-transparent group-hover:scale-110 transition-transform" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA Button: Scroll to Portfolio */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md hover:scale-[1.02]"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#00D4FF]" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10"
            >
              <div className="text-xs font-mono uppercase text-white/50 tracking-wider mb-3">
                Enterprise Standards Guaranteed:
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {trustBadges.map((badge, bIdx) => (
                  <div
                    key={bIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white/90 shadow-sm"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Interactive 3D/Glass Visual Showcase */}
          <div className="lg:col-span-6 relative perspective-1000 mt-6 lg:mt-0">
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative z-10 w-full transition-transform duration-200 ease-out"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2F80FF]/30 via-[#00D4FF]/20 to-[#8A3FFC]/30 rounded-3xl blur-2xl pointer-events-none" />

              {/* MacBook / Laptop Device Mockup Frame */}
              <div className="relative bg-[#0a0c16] border border-white/15 rounded-3xl p-3 sm:p-4 shadow-[0_0_60px_rgba(47,128,255,0.4)] backdrop-blur-2xl">
                
                {/* Laptop Screen Bezel */}
                <div className="relative bg-[#050505] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                  
                  {/* Top Bar / Notch */}
                  <div className="h-9 bg-black/80 border-b border-white/10 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-white/40 ml-2 hidden sm:inline">
                        novexa.digital / enterprise-preview
                      </span>
                    </div>

                    {/* Tab Switcher inside Mockup */}
                    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setActiveTab('website')}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                          activeTab === 'website' ? 'bg-[#2F80FF] text-white' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Web
                      </button>
                      <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                          activeTab === 'dashboard' ? 'bg-[#2F80FF] text-white' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={() => setActiveTab('ai')}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                          activeTab === 'ai' ? 'bg-[#8A3FFC] text-white' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        AI Agent
                      </button>
                    </div>
                  </div>

                  {/* Mockup Screen Viewport */}
                  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-[#0a0c16] via-[#050505] to-[#0a0c16] p-4 sm:p-6 flex flex-col justify-between">
                    
                    {/* Screen Content based on Active Tab */}
                    {activeTab === 'website' && (
                      <motion.div
                        key="website"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2F80FF] to-[#00D4FF] flex items-center justify-center text-white font-bold text-xs">
                              NX
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">AURORA LUXURY HOLDINGS</div>
                              <div className="text-[9px] text-[#00D4FF]">Corporate Portal</div>
                            </div>
                          </div>
                          <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
                            99/100 SPEED SCORE
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                          <div className="text-sm font-bold text-white">Interactive Investment Portal</div>
                          <p className="text-[11px] text-[#A0A0A0] leading-relaxed">
                            Ultra-fast responsive web architecture with embedded WhatsApp lead routing & glassmorphic charts.
                          </p>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#2F80FF] to-[#00D4FF] w-4/5 animate-pulse" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-lg font-bold text-white font-mono">+310%</div>
                            <div className="text-[10px] text-[#A0A0A0]">Lead Conversion</div>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                            <div className="text-lg font-bold text-[#00D4FF] font-mono">&lt;0.4s</div>
                            <div className="text-[10px] text-[#A0A0A0]">Page Load Time</div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'dashboard' && (
                      <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="text-xs font-bold text-white flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-[#00D4FF]" />
                            <span>Enterprise Telemetry System</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#2F80FF]/20 text-[#00D4FF] font-mono">
                            LIVE WEBSOCKET
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
                            <div className="text-[9px] text-[#A0A0A0]">Active Users</div>
                            <div className="text-sm font-bold text-white font-mono">24,890</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
                            <div className="text-[9px] text-[#A0A0A0]">Revenue</div>
                            <div className="text-sm font-bold text-emerald-400 font-mono">$142.8K</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
                            <div className="text-[9px] text-[#A0A0A0]">Uptime</div>
                            <div className="text-sm font-bold text-[#00D4FF] font-mono">99.99%</div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 h-28 flex items-end gap-2 px-4 pb-2">
                          {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#2F80FF] to-[#00D4FF] rounded-t" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'ai' && (
                      <motion.div
                        key="ai"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-[#8A3FFC]" />
                            <span className="text-xs font-bold text-white">Autonomous AI Support Agent</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            ONLINE
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white/90 space-y-2">
                          <div className="p-2 rounded-lg bg-[#2F80FF]/20 text-[11px] text-white">
                            🤖 AI Agent: "Hello! I have qualified the incoming WhatsApp inquiry and updated the CRM record automatically."
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 text-[10px] text-[#A0A0A0] font-mono flex items-center justify-between">
                            <span>API Action Executed: Sync Lead to Database</span>
                            <span className="text-emerald-400">✓ SUCCESS (12ms)</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#8A3FFC]/20 to-[#2F80FF]/20 border border-white/10 flex items-center justify-between">
                          <div className="text-[10px] text-white">
                            <span className="font-bold block">Gemini AI Model Sync</span>
                            <span className="text-[#A0A0A0]">24/7 Automated Inquiries Triage</span>
                          </div>
                          <span className="text-xs font-bold text-[#00D4FF] font-mono">0 Missed Calls</span>
                        </div>
                      </motion.div>
                    )}

                  </div>
                </div>

              </div>

              {/* Floating Overlapping Card 1: Mobile App Preview */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0a0c16]/90 border border-white/15 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float pointer-events-none z-20">
                <div className="p-2.5 rounded-xl bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mobile UX Ready</div>
                  <div className="text-[10px] text-[#A0A0A0]">Frictionless Touch Interfaces</div>
                </div>
              </div>

              {/* Floating Overlapping Card 2: AI Status Card */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#0a0c16]/90 border border-white/15 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-float pointer-events-none z-20" style={{ animationDelay: '1.5s' }}>
                <div className="p-2.5 rounded-xl bg-[#8A3FFC]/20 text-[#8A3FFC] border border-[#8A3FFC]/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI Automation</div>
                  <div className="text-[10px] text-[#00D4FF] font-mono">WhatsApp Connected</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase text-[#A0A0A0] tracking-widest">
          Scroll To Explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#00D4FF] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
