import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyNovexa } from './components/WhyNovexa';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { TargetIndustries } from './components/TargetIndustries';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#2F80FF] selection:text-white font-sans antialiased relative">
      {/* Premium Initial Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Page Layout */}
      {!isLoading && (
        <div className="relative">
          {/* Sticky Glass Navbar */}
          <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Hero Section */}
          <main>
            <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

            {/* Core Services Section */}
            <Services />

            {/* Why NOVEXA Section */}
            <WhyNovexa />

            {/* Portfolio Case Studies */}
            <Portfolio />

            {/* 6-Stage Working Process */}
            <Process />

            {/* Target Client Industries */}
            <TargetIndustries />

            {/* Corporate Identity & Story */}
            <About />

            {/* Frequently Asked Questions */}
            <FAQ />

            {/* Final Conversion Callout */}
            <FinalCTA onOpenConsultation={() => setIsConsultationOpen(true)} />
          </main>

          {/* Mega Footer */}
          <Footer />

          {/* Consultation Booking Modal */}
          <ConsultationModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />

          {/* Floating WhatsApp Action Widget */}
          <FloatingWhatsApp />
        </div>
      )}
    </div>
  );
}
