'use client'

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function SplitText({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const text = typeof children === 'string' ? children : String(children);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span ref={ref} style={{ display: 'inline', whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.3, 
            delay: delay + index * 0.03 
          }}
          style={{ 
            display: 'inline',
            whiteSpace: 'normal',
            color: 'var(--text-primary)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

