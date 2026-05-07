import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: { children: ReactNode; delay?: number; as?: any; className?: string; }) {
  const MotionTag = (motion as any)[Tag] ?? motion.div;
  return (
    <MotionTag className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={variants} transition={{ delay }}>
      {children}
    </MotionTag>
  );
}
