'use client';

import React from 'react';
import { m } from 'framer-motion';
import { useTheme } from '../hooks/use-theme';

const StatsSection: React.FC = () => {

  const statsData = [
    { value: '150+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience on Visual Content Developer' },
    { value: '45M+', label: 'Views Across All Platforms' },
    { value: '5+', label: 'Years of Video Editing' }
  ];

  const skillsData = [
    { skill: 'Video Editing', perc: 90 },
    { skill: 'Color Grading', perc: 75 },
    { skill: 'Sound Design', perc: 80 },
    { skill: 'After Effects', perc: 70 }
  ];

  return (
    <section id="stats" className="section-padding" style={{ 
      position: 'relative',
      padding: '100px 0',
      marginTop: '-120px',
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease'
    }}>
      {/* Ambient Glowing Ball elements */}
      <div className="glow-blob" style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #FFB600 0%, #f8ff70 100%)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.2
      }} />
      <div className="container" style={{ width: '90%', maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="stats-grid-wrapper" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          padding: '40px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Metrics Grid */}
          <div className="metrics-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px'
          }}>
            {statsData.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  padding: '20px',
                  background: 'rgba(0, 0, 0, 0.17)',
                  borderRadius: '16px',
                  borderTop: '1px solid #FFB600',
                  borderBottom: '1px solid #FFB600',
                  textAlign: 'center'
                }}
              >
                <h3 style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #FFB600 0%, #f8ff70 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '2px'
                }}>
                  {item.value}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.5px'
                }}>
                  {item.label}
                </p>
              </m.div>
            ))}
          </div>

          {/* Right Column: Progress Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
              My Proficiencies
            </h3>
            
            {skillsData.map((item, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.skill}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--accent-color)' }}>
                    {item.perc}%
                  </span>
                </div>
                {/* Track */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  {/* Fill Bar */}
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.perc}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.15 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #FFB600 0%, #f8ff70 100%)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
