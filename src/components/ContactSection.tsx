'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import { ShinyButton } from '@/components/ui/shiny-button';
import { useTheme } from '../hooks/use-theme';
import { Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ 
      position: 'relative',
      padding: '120px 0',
      background: 'transparent',
      backdropFilter: 'var(--glass-blur)',
      transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease'
    }}>
      <style>{`
        #contact input::placeholder, 
        #contact textarea::placeholder {
          color: rgba(255,255,255,0.7) !important;
        }
      `}</style>
      {/* Background Glow Mesh */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        opacity: 0.5,
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
        opacity: 0.5,
        filter: 'blur(150px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ width: '90%', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          padding: '30px',
          alignItems: 'center'
        }}>
          {/* Left Column: Descriptive Text */}
          <m.div
            className="contact-left-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}
          >
            <h2 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 800, 
              color: '#fff', 
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              Let’s Create Something <br /> <span className='text-gradient'>Worth Watching ! </span>
            </h2>

            <p style={{ 
              color: '#fff', 
              fontSize: '1.1rem', 
              lineHeight: 1.6, 
              maxWidth: '380px' 
            }}>
            Whether it’s a reel, promotional film, event highlight, or brand story, 
            I’m always excited to collaborate on meaningful projects.      
            </p>

            <p style={{ 
              color: '#fff', 
              fontSize: '1.1rem', 
              lineHeight: 1.6, 
              maxWidth: '380px' 
            }}>
            Available for freelance, collaborations, and long-term projects.     
            </p>

            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <Phone size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>+91 9791995772</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
                <div style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <Mail size={18} style={{ color: 'var(--accent-color)' }} />
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>rahulatwork05@gmail.com</span>
              </div>
            </div>
          </m.div>

          {/* Right Column: Form Box */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} style={{
              background: '#0a0a0a79',
              padding: '45px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '35px'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '-5px' }}>
                Contact Us
              </h3>

              {/* Grid 1: First & Last Name */}
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    aria-label="First Name" 
                    suppressHydrationWarning
                    required
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #FFB600',
                      padding: '12px 0',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    aria-label="Last Name" 
                    suppressHydrationWarning
                    required
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #FFB600',
                      padding: '12px 0',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Grid 2: Phone Number & Email */}
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    aria-label="Phone Number" 
                    suppressHydrationWarning
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #FFB600',
                      padding: '12px 0',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    aria-label="Email Address" 
                    suppressHydrationWarning
                    required
                    style={{
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #FFB600',
                      padding: '12px 0',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Textarea: Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  aria-label="Message" 
                  suppressHydrationWarning
                  required
                  rows={2}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #FFB600',
                    padding: '12px 0',
                    color: '#fff',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {submitStatus && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: submitStatus.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: submitStatus.success ? '#4ade80' : '#f87171',
                  border: `1px solid ${submitStatus.success ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  {submitStatus.message}
                </div>
              )}

              <div style={{ alignSelf: 'center', marginTop: '10px' }}>
                <ShinyButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </ShinyButton>
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
