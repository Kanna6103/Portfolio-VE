'use client';

import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';
import Image from 'next/image';
import logoLight from '@/assets/logo-dark.png';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={16} />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer style={{
      borderTop: 'none',
      background: 'var(--bg-color)',
      color: 'var(--text-primary)',
      padding: '60px 0 40px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '10px',
        textAlign: 'center'
      }}>
        
        {/* Main Content Area */}
        <div className="footer-main">
          
          {/* Left Side: Description */}
          <div className="footer-left">
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.95rem', 
              maxWidth: '350px', 
              lineHeight: 1.6 
            }}>
              Elevating visual narratives through high-end video editing and professional motion design.
            </p>
          </div>

          {/* Center Side: Logo */}
          <div className="footer-center">
            <a href="#home" style={{ 
              display: 'inline-block',
              width: '60px',
              height: '60px'
            }}>
              <Image 
                src={logoLight} 
                alt="Logo" 
                width={60}
                height={60}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </a>
          </div>

          {/* Right Side: Social Icons */}
          <div className="footer-right">
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="social-icon-btn"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Area: Copyright */}
        <div className="footer-bottom">
          <div style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.85rem',
            lineHeight: 1.6
          }}>
            Copyright &copy; {new Date().getFullYear()} All rights reserved
          </div>
        </div>

      </div>

      <style>{`
        .footer-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          text-align: center;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 30px;
          margin-bottom: 20px;
        }
        
        .footer-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .footer-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-bottom {
          width: 100%;
          text-align: center;
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.3s ease;
        }

        .social-icon-btn:hover {
          background: var(--accent-color);
          color: #fff;
        }

        /* Tablet and Desktop View */
        @media (min-width: 768px) {
          .footer-main {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
          .footer-left {
            flex: 1;
            align-items: flex-start;
          }
          .footer-center {
            flex: 1;
            justify-content: center;
          }
          .footer-right {
            flex: 1;
            justify-content: flex-end;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
