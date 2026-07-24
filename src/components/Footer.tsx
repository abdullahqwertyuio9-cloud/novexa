import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NovexaLogo } from './NovexaLogo';
import { SERVICES_DATA, COMPANY_INFO } from '../data/novexaData';
import { getWhatsAppUrl, getServiceWhatsAppUrl, FORMATTED_PHONE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const primaryWhatsApp = getWhatsAppUrl("Hello NOVEXA! I am contacting you from your website footer.");

  return (
    <footer className="bg-[#030305] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Bottom Mesh Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#2F80FF]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <NovexaLogo size="lg" />
            
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed max-w-sm">
              NOVEXA Digital Agency is a premier global digital engineering studio specializing in high-converting web applications, luxury UI/UX design, and 24/7 autonomous AI agents.
            </p>

            <div className="pt-2">
              <a
                href={primaryWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2F80FF] to-[#8A3FFC] hover:from-[#00D4FF] hover:to-[#2F80FF] transition-all shadow-[0_0_15px_rgba(47,128,255,0.3)]"
              >
                <MessageSquare className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp: {FORMATTED_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why NOVEXA</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Working Process</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Services Direct Orders */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Services & Ordering
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A0A0]">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a
                    href={getServiceWhatsAppUrl(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00D4FF] transition-colors flex items-center gap-1 group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#A0A0A0]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D4FF] shrink-0" />
                <a href={primaryWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono font-semibold text-white">
                  {FORMATTED_PHONE} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8A3FFC] shrink-0" />
                <a href="mailto:contact@novexa.agency" className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#2F80FF] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2">
              <a href="#" className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#A0A0A0] hover:text-white hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A0A0]">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">NOVEXA Digital Agency</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D4FF] hover:underline font-mono"
            >
              Direct Line: 03218458140
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
