import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: {
  children: ReactNode; delay?: number; as?: any; className?: string;
}) {
  const MotionTag = (motion as any)[Tag] ?? motion.div;
  return (
    <MotionTag
      className={`reveal-wrapper${className ? ` ${className}` : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px', amount: 0.05 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
