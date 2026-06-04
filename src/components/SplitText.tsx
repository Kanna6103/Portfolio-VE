'use client';

import React from 'react';
import { m } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words';
  style?: React.CSSProperties;
}

const SplitText: React.FC<SplitTextProps> = ({ 
  text, 
  className, 
  delay = 0, 
  type = 'chars',
  style 
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'chars' ? 0.02 : 0.08,
        delayChildren: delay,
      }
    }
  };

  const childVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Split logic
  const items = type === 'words' ? text.split(' ') : text.split('');

  return (
    <m.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: 'inline-block', ...style } as any}
    >
      {items.map((item, index) => (
        <m.span
          key={index}
          variants={childVariants}
          style={{ 
            display: 'inline-block', 
            whiteSpace: type === 'words' ? 'pre' : 'normal' 
          }}
        >
          {item}{type === 'words' && index !== items.length - 1 ? '\u00A0' : ''}
        </m.span>
      ))}
    </m.span>
  );
};

export default SplitText;
