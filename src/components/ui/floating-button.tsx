'use client';

import { type ReactNode, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';

type FloatingButtonProps = {
  className?: string;
  children: ReactNode;
  triggerContent: ReactNode;
  direction?: 'up' | 'left';
};

type FloatingButtonItemProps = {
  children: ReactNode;
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1
    }
  }
};

const item = {
  visible: { opacity: 1, x: 0, y: 0 },
  hidden: { opacity: 0, x: 5, y: 5 }
};

const btn = {
  visible: { rotate: '45deg' },
  hidden: { rotate: 0 }
};

function FloatingButton({ className, children, triggerContent, direction = 'left' }: FloatingButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref as any, () => setIsOpen(false));

  return (
    <div className={`flex flex-col items-center relative ${className || ''}`}>
      <AnimatePresence>
        {isOpen && (
          <m.ul
            key="floating-menu-list"
            className={`flex items-center absolute gap-2 ${
              direction === 'left' 
                ? 'flex-row-reverse right-14 top-1/2 -translate-y-1/2' 
                : 'flex-col bottom-14'
            }`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={list}>
            {children}
          </m.ul>
        )}
        <m.div
          key="floating-menu-trigger"
          variants={btn}
          animate={isOpen ? 'visible' : 'hidden'}
          ref={ref}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          {triggerContent}
        </m.div>
      </AnimatePresence>
    </div>
  );
}

function FloatingButtonItem({ children }: FloatingButtonItemProps) {
  return <m.li variants={item}>{children}</m.li>;
}

export { FloatingButton, FloatingButtonItem };
