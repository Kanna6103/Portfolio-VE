'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { useTheme } from '@/hooks/use-theme';

const AboutSection = dynamic(() => import('@/components/AboutSection'));
const StatsSection = dynamic(() => import('@/components/StatsSection'));
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'));
const ServicesSection = dynamic(() => import('@/components/ServicesSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function HomeContent() {
  const { mounted } = useTheme();

  return (
    <div className="app-container relative overflow-hidden" style={{ background: 'var(--bg-color)' }}>
      {/* Abstract Background Glows */}
      <div className="noise-overlay" />
      
      {mounted && (
        <>
          <div className="glow-blob top-0 left-[-200px]" style={{ background: '#ff3366' }}></div>
          <div className="glow-blob top-[40%] right-[-200px]" style={{ background: '#9933ff' }}></div>
          <div className="glow-blob bottom-20 left-10" style={{ background: '#33ccff' }}></div>
        </>
      )}

      <Navbar />
      <main>
        <HeroSection />
        <div className="grid-bg relative">
          <AboutSection />
          <StatsSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
