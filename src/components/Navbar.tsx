'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { ShinyButton } from '@/components/ui/shiny-button';
import logoLight from '@/assets/logo-dark.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      left: 0,
      right: 0,
      zIndex: 10000,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 20px'
    }}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="nav-responsive"
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'var(--surface-color)',
          backdropFilter: 'blur(10px)',
          padding: '8px 15px',
          borderRadius: '100px',
          height: '70px',
          letterSpacing: '1.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          border: '1px solid var(--surface-border)',
          width: '90%',
          maxWidth: '1200px',
        }}
      >
        {/* Left Icon Panel */}
        <div style={{
          width: '55px',
          height: '55px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Image 
            src={logoLight} 
            alt="Logo" 
            width={55}
            height={55}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>

        {/* Links Panel */}
        <div className="hidden-mobile" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '70px', 
          flexGrow: 1 
        }}>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              style={{ position: 'relative' }}
            >
              <motion.a 
                href={link.href}
                whileHover={{ 
                  color: '#FFB600'
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  padding: '5px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </motion.a>


            </div>
          ))}
        </div>

        {/* Right Action Panel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <a href="#contact" className="contact-text hover:no-underline">
            <ShinyButton as="span">Let's Talk</ShinyButton>
          </a>

          {/* Tablet Contact Icon Button */}
          <a href="#contact" className="contact-icon hover:no-underline" style={{ display: 'none' }}>
            <div role="button" style={{
              background: '#fff',
              border: '1px solid var(--text-primary)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
            }}>
              <Phone size={20} fill="#000" stroke="#000" />
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <div className="show-mobile" style={{ display: 'none' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div style={{ color: 'var(--text-primary)', cursor: 'pointer', padding: '0 5px' }}>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '120px',
              left: '5%',
              width: '90%',
              background: 'var(--surface-color)',
              backdropFilter: 'blur(15px)',
              border: '1px solid var(--surface-border)',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              zIndex: 10001,
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
            }}
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '18px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '14px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  background: 'rgba(128,128,128,0.05)',
                }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Mobile Contact Button in Menu */}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', marginTop: '8px', display: 'block', textAlign: 'center' }}>
              <ShinyButton as="span">
                Let's Talk
              </ShinyButton>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
