'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, Linkedin, Facebook, Youtube, ArrowLeft, ArrowRight, Share2, CircleFadingPlus } from 'lucide-react';
const FloatingLines = React.lazy(() => import('./FloatingLines'));
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
      transition: 'background-color 0.4s ease, color 0.4s ease, backdrop-filter 0.4s ease'
    }}>
      {/* Dynamic Background Animation */}
      <motion.div 
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
        {isBgMounted && !isMobile && (
          <React.Suspense fallback={<div />}>
            <FloatingLines
              linesGradient={darkPalette}
              enabledWaves={["top","middle","bottom"]}
              lineCount={3}
              lineDistance={12}
              lineOpacity={0.3}
              bendRadius={5}
              bendStrength={-0.4}
              interactive={true}
              parallax={true}
              parallaxStrength={0.15}
              animationSpeed={0.6}
              mixBlendMode="screen"
            />
          </React.Suspense>
        )}
        {/* MagicRings removed for light theme to use only grid lines */}
      </motion.div>

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
            background: 'radial-gradient(circle, rgba(38, 0, 255, 0.68) 100%, transparent 70%)',
            filter: 'blur(100px)',
            borderRadius: '50%'
          }} />
          <div className="glow-blob" style={{
            position: 'absolute',
            top: '20%',
            left: '-35%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 0, 234, 1) 20%, transparent 100%)',
            filter: 'blur(15px)',
            borderRadius: '50%'
          }} />
          <div className="glow-blob" style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 251, 255, 0.51) 20%, transparent 100%)',
            filter: 'blur(10px)',
            borderRadius: '50%'
          }} />
        </div>
      )}

      {/* Ambient Glowing Ball elements */}
      <div className="glow-blob" style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="glow-blob" style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 51, 102, 0.3) 0%, transparent 70%)',
        filter: 'blur(120px)',
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ position: 'relative', zIndex: 30, paddingLeft: '0px' }}
            >
              <motion.span
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
              </motion.span>
              <motion.span
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
                Jessie Pinkman
              </motion.span>
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
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  style={{ fontStyle: 'italic', fontWeight: 300 }}
                >
                  Video
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                >
                  Editor
                </motion.span>
              </h1>
            </motion.div>

            {/* Description Section */}
            <div style={{ color: 'var(--text-primary)' }}>
              <motion.p
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
              </motion.p>
            </div>

            {/* Mobile Social Links Row */}
            <div className="show-mobile socials-row">
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[
                    { Icon: Instagram, href: "#", label: "Instagram" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Youtube, href: "#", label: "YouTube" }
                  ].map(({ Icon, href, label }, index2) => (
                    <a key={index2} href={href} aria-label={label} style={{
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
          <motion.div
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
            <motion.div
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
                <motion.div
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
                </motion.div>

                <motion.div 
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
                </motion.div>
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
                    { Icon: Instagram, href: "#", color: '#FFB600', label: "Instagram" },
                    { Icon: Linkedin, href: "#", color: '#FFB600', label: "LinkedIn" },
                    { Icon: Facebook, href: "#", color: '#FFB600', label: "Facebook" },
                    { Icon: Youtube, href: "#", color: '#FFB600', label: "YouTube" }
                  ].map(({ Icon, href, color, label }, index) => (
                    <FloatingButtonItem key={index}>
                      <motion.a
                        href={href}
                        aria-label={label}
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
                      </motion.a>
                    </FloatingButtonItem>
                  ))}
                </FloatingButton>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px',marginTop: '5px', color: 'var(--text-primary)' }}>• SOCIAL LINKS •</p>
              </div>


            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
