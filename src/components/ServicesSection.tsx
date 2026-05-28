'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Scissors, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Video size={40} />,
      title: 'Pre-Production',
      description: 'Bringing pure ideas to paper. Formulating concepts, scriptwriting, and Cinematic storyboarding so that every scene aligns with your core vision correctly.',
      features: ['Concept Development', 'Scriptwriting', 'Storyboarding', 'Art Direction'],
      accent: '#FFB600',
    },
    {
      icon: <Scissors size={40} />,
      title: 'Post-Production',
      description: 'Crafting the pacing. High-end video editing, Advanced Color Grading, and dynamic sound design that transforms raw clips into absolute visual masterclasses accurately.',
      features: ['Multi-cam Editing', 'Color Grading', 'Sound Mixing', 'Pacing & Narrative'],
      accent: '#FFB600',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'VFX & Motion',
      description: 'Adding absolute magic. Custom 2D/3D motion graphics, fluid typography, CGI Compositing and dynamic transitions that push the cinematics beyond reality.',
      features: ['2D/3D Title Cards', 'CGI Compositing', 'Dynamic Transitions', 'Motion Graphics'],
      accent: '#FFB600',
    }
  ];

  return (
    <section id="services" style={{
      position: 'relative',
      padding: '120px 0',
      background: 'transparent',
      color: 'var(--text-primary)',
      overflow: 'visible' // Allow glows to bleed out slightly
    }}>
      <div className="container" style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: '3.5rem', 
              fontWeight: 800, 
              color: 'var(--text-primary)',
              marginBottom: '15px' 
            }}
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.2rem', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            From concept to clean export. I provide premium video editing services setup to scale your content output universally.
          </motion.p>
        </div>

        {/* 3 cards Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '25px',
                border: '1px solid var(--surface-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                maxWidth: '340px',
                width: '100%',
                margin: '0 auto',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, background-color 0.3s ease'
              }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.borderColor = service.accent;
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.currentTarget as HTMLDivElement;
                target.style.borderColor = 'var(--surface-border)';
              }}
            >
              {/* Card Ambient Hover Glow Node style support */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'blur(40px)',
                transition: 'transform 0.5s ease'
              }} className="card-glow" />



              {/* Title & Description */}
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: expandedIndex === index ? '10px' : '0px' }}>
                  {service.description}
                </p>

                {/* Arrow Trigger Indicator */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', marginBottom: expandedIndex === index ? '5px' : '0px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--surface-border)',
                    color: service.accent,
                    transition: 'background-color 0.3s ease, border-color 0.3s ease'
                  }}>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8.5px', marginTop: '15px', alignItems: 'flex-start', paddingLeft: '15px' }}>
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.90rem', color: 'var(--text-secondary)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: service.accent }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
