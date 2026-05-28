'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/use-theme';
import { ShinyButton } from '@/components/ui/shiny-button';
import Image from 'next/image';
import profileImg from '@/assets/profile.webp';

const skills = [
  { name: 'Adobe Premiere Pro', level: 95 },
  { name: 'After Effects', level: 90 },
  { name: 'DaVinci Resolve', level: 85 },
  { name: 'Final Cut Pro X', level: 80 },
  { name: 'Cinema 4D', level: 60 }
];

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const skillGrid = [
    { name: 'Wireframing', level: 90 },
    { name: 'UI Design', level: 96 },
    { name: 'UX Research', level: 80 },
    { name: 'Prototyping', level: 56 }
  ];

  return (
    <section id="about" className="section-padding" style={{ 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)', 
      transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
      position: 'relative',
      padding: '120px 0'
    }}>
      {/* Glowing Background Balls - Optimized CSS Animations */}
      {/* Glowing Background Balls - Optimized mesh look */}
      <div className="glow-blob blob-1" style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      <div className="glow-blob blob-2" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4
      }} />
      
      <div className="glow-blob blob-3" style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      <style>{`
        .glow-blob {
          will-change: transform;
        }
        .blob-1 {
          animation: floatBlob1 12s ease-in-out infinite;
        }
        .blob-2 {
          animation: floatBlob2 10s ease-in-out infinite;
        }
        .blob-3 {
          animation: floatBlob3 15s ease-in-out infinite;
          animation-delay: 1s;
        }
        @keyframes floatBlob1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(30px, 30px, 0) scale(1.1); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(50px, -50px, 0) scale(1.15); }
        }
        @keyframes floatBlob3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-50px, 50px, 0) scale(1.05); }
        }
      `}</style>

      {/* Decorative Geometric Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.4, color: 'var(--accent-color)' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L37.3205 30H2.67949L20 0Z" fill="currentColor"/>
        </svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '30px', height: '30px', border: '3px solid var(--accent-color)', borderRadius: '50%', opacity: 0.3 }} />
      <div style={{ position: 'absolute', top: '20%', right: '20%', width: '20px', height: '20px', border: '2px solid var(--accent-color)', borderRadius: '50%', opacity: 0.2 }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: '0', height: '0', borderLeft: '2px solid var(--accent-color)', borderRight: '15px solid transparent', borderBottom: '25px solid var(--accent-color)', transform: 'rotate(120deg)', opacity: 0.4 }} />

      <div className="container">
        <div style={{
          display: 'flex',
          gap: '100px',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Left Side: Circular Profile */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="about-image-wrapper"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', width: '450px', height: '450px', zIndex: 999 }}
          >
            {/* Outer Decorative Rings */}
            {/* Outer Decorative Rings - Fixed with SVGs to prevent Mask clipping bugs */}
            <svg viewBox="0 0 500 500" style={{ 
              position: 'absolute', 
              inset: '-25px', 
              width: '500px', 
              height: '500px', 
              zIndex: 1,
              pointerEvents: 'none'
            }}>
              <defs>
                <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB600" />
                  <stop offset="100%" stopColor="#f8ff70" />
                </linearGradient>
                <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8ff70" />
                  <stop offset="100%" stopColor="#FFB600" />
                </linearGradient>
              </defs>
              {/* Outer Ring inside -20px scope */}
              <circle cx="250" cy="250" r="245" fill="none" stroke="url(#ringGrad1)" strokeWidth="2" />
              {/* Inner Ring inside -10px scope */}
              <circle cx="250" cy="250" r="235" fill="none" stroke="url(#ringGrad2)" strokeWidth="3" opacity="0.6" />
            </svg>

            {/* Profile Image Container */}
            <div className="profile-img-container" style={{ 
              position: 'relative', 
              width: '100%',
              height: '100%',
              borderRadius: '50%', 
              overflow: 'hidden',
              background: '#ffdd001f',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              zIndex: 2
            }}>
              <Image 
                src={profileImg} 
                alt="Profile" 
                width={500}
                height={500}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(1.1) contrast(1.1)' 
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(160, 160, 160, 0.18), transparent)',  
                pointerEvents: 'none'
              }} />

              {/* Hover Glare Effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                transform: 'translateX(-110%) skewX(-10deg)',
                transition: 'transform 0.6s ease',
                pointerEvents: 'none'
              }} className="glare-effect" />
            </div>
          </motion.div>

          {/* Right Side: Content & Content */}
          <div className="about-content" style={{ flex: '1 1 500px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 style={{ 
                fontSize: '3.5rem', 
                marginBottom: '10px', 
                fontWeight: 900,
                color: 'var(--text-primary)' 
              }}>
                About <span className="text-gradient">Me</span>
              </h2>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '20px', 
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}>
                Designing interfaces That Users Love"
              </h3>
              
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                marginBottom: '40px'
              }}>
                I'm Habib a passionate UI/UX Designer with over 2 years of experience creating visually appealing and user-friendly interfaces for both web and mobile applications.
              </p>

              {/* Professional Description */}
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.1rem', 
                lineHeight: 1.6,
                marginBottom: '50px'
              }}>
                My approach is deeply rooted in user-centric methodologies, blending analytical UX research with high-fidelity UI execution. From low-fidelity wireframing to interactive prototyping, I focus on building digital spaces that are not only beautiful but intuitively functional, ensuring every interaction feels natural and effortless.
              </p>

              {/* Action Button */}
              <div style={{ marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="/resume.pdf" download="Resume.pdf" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <ShinyButton as="span">
                    Download Resume
                  </ShinyButton>
                </a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ textDecoration: 'none' }}
                >
                </motion.a>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  suppressHydrationWarning
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--text-primary)',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'var(--accent-color)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                  Education
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* CSS for Glare Hover Trigger */}
        <style>{`
          .profile-img-container:hover .glare-effect {
            transform: translateX(110%) skewX(-15deg) !important;
          }
        `}</style>
      </div>

      {/* Education Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px'
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                background: 'rgba(20, 20, 20, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '40px',
                maxWidth: '600px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(16px)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '35px' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  My <span className="text-gradient">Education</span>
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
                {/* Timeline Line */}
                <div style={{
                  position: 'absolute',
                  left: '20px',
                  top: '15px',
                  bottom: '15px',
                  width: '2px',
                  background: 'linear-gradient(to bottom, var(--accent-color), rgba(255,255,255,0.05))',
                }} />

                <div style={{ 
                  paddingLeft: '45px', 
                  position: 'relative',
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '15px', 
                    top: '6px', 
                    width: '12px', 
                    height: '12px', 
                    background: 'var(--accent-color)', 
                    borderRadius: '50%',
                    boxShadow: '0 0 10px 5px rgba(255, 182, 0, 0.33)'
                  }} />
                  <span style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--accent-color)', 
                    fontWeight: 700,
                    marginBottom: '6px',
                    display: 'block',
                    letterSpacing: '0.05em'
                  }}>2019 - 2021</span>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Master of Science in Digital Media
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>University of Design & Tech</p>
                </div>

                <div style={{ 
                  paddingLeft: '45px', 
                  position: 'relative',
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '15px', 
                    top: '6px', 
                    width: '12px', 
                    height: '12px', 
                    background: 'var(--accent-color)',
                    boxShadow: '0 0 10px 5px rgba(255, 182, 0, 0.33)', 
                    borderRadius: '50%' 
                  }} />
                  <span style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--accent-color)', 
                    fontWeight: 700,
                    marginBottom: '6px',
                    display: 'block',
                    letterSpacing: '0.05em'
                  }}>2015 - 2019</span>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Bachelor of Fine Arts (BFA)
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Academy of Arts</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
