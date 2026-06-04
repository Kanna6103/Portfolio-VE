'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Play, Instagram, Linkedin, Youtube, ArrowLeft, ArrowRight, Share2, CircleFadingPlus } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import { FloatingButton, FloatingButtonItem } from './ui/floating-button';

import { useTheme } from '../hooks/use-theme';



const HeroSection = () => {
  const [isBgMounted, setIsBgMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => setIsBgMounted(true), 200);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Dark: Purple, Pink, Cyan
  const darkPalette = ['#FFB600', '#f8ff70', '#ff6a00ff'];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px',
      overflow: 'hidden',
      transition: 'background-color 0.4s ease, color 0.4s ease, backdrop-filter 0.4s ease'
    }}>
      {/* Dynamic Background Animation */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 7, 
          pointerEvents: 'none' 
        }}
      >

        {/* MagicRings removed for light theme to use only grid lines */}
      </m.div>

      {/* Mobile-only Glow Mesh */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <div className="glow-blob" style={{
            position: 'absolute',
            top: '-10%',
            left: '20%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(255, 174, 0, 0.68) 100%, transparent 70%)',
            filter: 'blur(100px)',
            borderRadius: '50%'
          }} />
        </div>
      )}

      {/* Glowing Semi-Circle Dome */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1300px',
        height: '1300px',
        background: 'radial-gradient(ellipse at top, rgba(234, 228, 51, 0.3) 0%, transparent 70%)',
        borderTop: '2px solid rgba(234, 255, 49, 0.8)',
        borderRadius: '50% 50% 50% 50%',
        boxShadow: '0 -20px 80px rgba(234, 182, 51, 0.6), inset 0 20px 60px rgba(255, 183, 0, 0.3)',
        zIndex: 1,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 0 30px #ffaa00ff 0.8))'
      }} />

      {/* Ambient Glowing Ball elements */}
      <div className="glow-blob" style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234, 185, 51, 0.2) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Main Content Container */}
      <div className="hero-section-container" style={{ 
        maxWidth: '95%', 
        width: '95%', 
        margin: '0 auto', 
        paddingLeft: '20px', 
        paddingRight: '60px',
        position: 'relative', 
        zIndex: 10, 
        height: '100%' 
      }}>
        <div className="hero-flex" style={{ 
          position: 'relative', 
          width: '100%', 
          height: '80vh', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '5vh'
        }}>
          
          {/* Left Content Container: Headings + Description */}
          <div className="hero-text" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            gap: '2.5rem'
          }}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ position: 'relative', zIndex: 30, paddingLeft: '0px' }}
            >
              <m.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-serif"
                style={{
                  display: 'block',
                  fontSize: 'clamp(3rem, 4vw, 3rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  textTransform: 'lowercase',
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem'
                }}
              >
                hey, i am
              </m.span>
              <m.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-serif"
                style={{
                  display: 'block',
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  marginBottom: '1rem'
                }}
              >
                Rahul Mony
              </m.span>
              <h1 className="text-serif" style={{
                fontSize: 'clamp(4rem, 14vw, 11rem)',
                lineHeight: 0.8,
                fontWeight: 400,
                textTransform: 'lowercase',
                color: 'var(--text-primary)',
                margin: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.2em'
              }}>
                <m.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  style={{ fontStyle: 'italic', fontWeight: 300 }}
                >
                  Video
                </m.span>
                <m.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                >
                  Editor
                </m.span>
              </h1>
            </m.div>

            {/* Description Section */}
            <div style={{ color: 'var(--text-primary)' }}>
              <m.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                style={{ 
                  fontSize: '15px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2.5px', 
                  lineHeight: '2',
                  marginBottom: '0px',
                  maxWidth: '500px'
                }}
              >
                We are a video production studio that creates high-quality content so you can reach a bigger audience
              </m.p>
            </div>

            {/* Mobile Social Links Row */}
            <div className="show-mobile socials-row" style={{ position: 'relative', zIndex: 50 }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/easy_.bro/", label: "Instagram" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/rahul-singh-66729b278", label: "LinkedIn" },
                    { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
                    { Icon: Youtube, href: "https://www.youtube.com/@easybro726/videos", label: "YouTube" }
                  ].map(({ Icon, href, label }, index2) => (
                    <a key={index2} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--accent-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-color)',
                      background: 'transparent'
                    }}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
          </div>

          {/* Right Side: Play Button & Social Links */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-socials"
            transition={{ duration: 1, delay: 1.4 }}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '20px'
            }}
          >
            {/* Play Button & Circle Text */}
            <m.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden-mobile"
              transition={{ delay: 0.8 }}
              style={{ 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'
              }}
            >
              <div style={{
                position: 'relative',
                width: '190px',
                height: '190px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <m.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <svg viewBox="0 0 100 100" width="100%" height="100%">
                    <defs>
                      <path id="circleTextPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text fill="currentColor" fontSize="6" fontWeight="700" letterSpacing="3.5" style={{ color: 'var(--text-primary)' }}>
                      <textPath xlinkHref="#circleTextPath">
                        THIS COULD BE YOUR BIZ • THIS COULD BE YOUR BIZ •
                      </textPath>
                    </text>
                  </svg>
                </m.div>

                <m.div 
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'var(--surface-color)',
                    backdropFilter: 'blur(15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--surface-border)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <Play size={36} fill="currentColor" color="currentColor" style={{ marginLeft: '4px', color: 'var(--text-primary)' }} />
                </m.div>
              </div>

              {/* Desktop Social Links */}
              <div className="hidden-mobile" style={{
                marginTop: '5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FloatingButton triggerContent={
                  <div 
                    role="button" 
                    aria-label="Toggle social links"
                    style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#1a1a1a9a',
                    backdropFilter: 'blur(15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--surface-border)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}>
                    <CircleFadingPlus size={20} style={{ color: 'var(--text-primary)' }} />
                  </div>
                }>
                  {[
                    { Icon: Instagram, href: "https://www.instagram.com/easy_.bro/", color: '#FFB600', label: "Instagram" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/rahul-singh-66729b278", color: '#FFB600', label: "LinkedIn" },
                    { Icon: FaWhatsapp, href: "#", color: '#FFB600', label: "WhatsApp" },
                    { Icon: Youtube, href: "https://www.youtube.com/@easybro726/videos", color: '#FFB600', label: "YouTube" }
                  ].map(({ Icon, href, color, label }, index) => (
                    <FloatingButtonItem key={index}>
                      <m.a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                        scale: 1.15, 
                        color: '#FFB600', 
                        background: '#1a1a1a9a'
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        style={{ 
                          color: 'var(--text-primary)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                           background: '#1a1a1a9a',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid var(--surface-border)',
                          marginBottom: '4px'
                        }}
                      >
                        <Icon size={18} cursor="pointer" />
                      </m.a>
                    </FloatingButtonItem>
                  ))}
                </FloatingButton>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px',marginTop: '5px', color: 'var(--text-primary)' }}>• SOCIAL LINKS •</p>
              </div>


            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
