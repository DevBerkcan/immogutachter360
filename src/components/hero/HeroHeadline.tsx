import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lines = [
  { text: 'Der wahre Wert', accent: false },
  { text: 'Ihrer Immobilie.', accent: false },
  { text: 'Schnell. Festpreis.', accent: true },
];

export default function HeroHeadline() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Variable font: opsz animates 9 → 144 on mount (Fraunces supports this axis)
  const opsz = useSpring(prefersReduced ? 144 : 9, { damping: 28, stiffness: 55 });
  const fontVariationSettings = useTransform(opsz, (v) => `'opsz' ${Math.round(v)}`);

  useEffect(() => {
    setMounted(true);
    if (!prefersReduced) opsz.set(144);
  }, []);

  return (
    <motion.h1 className="display-1 mt-6" style={{ fontVariationSettings }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden" style={{ lineHeight: 1.08 }}>
          <motion.span
            className={`block${line.accent ? ' italic text-green' : ''}`}
            initial={mounted && !prefersReduced ? { y: '110%' } : false}
            animate={{ y: '0%' }}
            transition={{
              duration: 1.0,
              delay: prefersReduced ? 0 : 0.08 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
