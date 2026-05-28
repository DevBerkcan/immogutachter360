import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';

function useCounter(end: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = setTimeout(() => requestAnimationFrame(step), 800);
    return () => clearTimeout(id);
  }, [active, end, duration]);
  return value;
}

function Chip({
  label,
  delay,
  className,
  prefersReduced,
}: {
  label: string;
  delay: number;
  className: string;
  prefersReduced: boolean;
}) {
  return (
    <motion.div
      className={`chip-float absolute whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-sm ${className}`}
      style={{
        borderColor: 'rgba(140,188,148,0.5)',
        backgroundColor: 'rgba(255,255,255,0.95)',
        color: '#181b31',
      }}
      initial={prefersReduced ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {label}
    </motion.div>
  );
}

function PropertyCard({ prefersReduced }: { prefersReduced: boolean }) {
  const count = useCounter(685000, 1.4, true);
  const formatted = count.toLocaleString('de-DE');

  // Tilt on mouse move
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 30 });
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 8);
    rotateX.set(-dy * 6);
    glowOpacity.set(1);
  }, [prefersReduced, rotateX, rotateY, glowOpacity]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    glowOpacity.set(0);
  }, [rotateX, rotateY, glowOpacity]);

  const boxShadow = useTransform(
    glowOpacity,
    [0, 1],
    [
      '0 25px 60px rgba(24,27,49,0.15), 0 8px 20px rgba(24,27,49,0.08)',
      '0 30px 80px rgba(24,27,49,0.2), 0 8px 24px rgba(24,27,49,0.1), 0 0 40px rgba(140,188,148,0.25)',
    ]
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full rounded-2xl bg-white p-4 lg:p-5"
      style={{ rotateX, rotateY, boxShadow, transformStyle: 'preserve-3d', perspective: '800px' }}
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header label */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
          style={{ background: 'rgba(140,188,148,0.15)', color: '#5a9e6a' }}
        >
          Verkehrswertgutachten
        </span>
        <span className="text-[10px]" style={{ color: 'rgba(24,27,49,0.35)' }}>
          §194 BauGB
        </span>
      </div>

      {/* Property image placeholder */}
      <div
        className="relative mb-4 h-20 sm:h-24 lg:h-28 overflow-hidden rounded-xl"
        style={{
          background: 'linear-gradient(135deg, #d4ead8 0%, #8cbc94 50%, #5a9e6a 100%)',
        }}
      >
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[180px]"
          viewBox="0 0 180 80"
          fill="none"
          aria-hidden="true"
        >
          <rect x="45" y="25" width="90" height="55" fill="rgba(255,255,255,0.25)" />
          <rect x="58" y="36" width="14" height="12" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="83" y="36" width="14" height="12" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="108" y="36" width="14" height="12" rx="1" fill="rgba(255,255,255,0.5)" />
          <polygon points="40,25 90,0 140,25" fill="rgba(255,255,255,0.35)" />
          <rect x="78" y="54" width="24" height="26" rx="2" fill="rgba(255,255,255,0.4)" />
          <rect x="5" y="40" width="38" height="40" fill="rgba(255,255,255,0.15)" />
          <rect x="137" y="38" width="38" height="42" fill="rgba(255,255,255,0.15)" />
          <line x1="0" y1="80" x2="180" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
        <div
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
          style={{ background: 'rgba(255,255,255,0.9)', color: '#181b31' }}
        >
          <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor" aria-hidden="true">
            <path d="M4 0C2.07 0 .5 1.57.5 3.5 .5 6.13 4 10 4 10s3.5-3.87 3.5-6.5C7.5 1.57 5.93 0 4 0Zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
          </svg>
          Oberkassel
        </div>
      </div>

      {/* Property meta */}
      <div className="mb-3 flex gap-3">
        {['Einfamilienhaus', '142 m²', 'Bj. 1998'].map((tag) => (
          <span key={tag} className="text-xs" style={{ color: 'rgba(24,27,49,0.45)' }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-3" style={{ height: '1px', background: 'rgba(24,27,49,0.07)' }} />

      <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wider" style={{ color: 'rgba(24,27,49,0.4)' }}>
        Ermittelter Verkehrswert
      </p>
      <div className="flex items-baseline gap-2.5">
        <span className="font-display text-2xl lg:text-3xl font-light" style={{ color: '#181b31' }}>
          {formatted} €
        </span>
        <motion.span
          className="flex items-center gap-0.5 text-sm font-medium"
          style={{ color: '#5a9e6a' }}
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.4 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
            <path d="M5 1L9 9H1L5 1Z" />
          </svg>
          +4,2 %
        </motion.span>
      </div>

      <div className="my-3" style={{ height: '1px', background: 'rgba(24,27,49,0.07)' }} />

      <div className="flex gap-2">
        {['✓ DEKRA-zertifiziert', '✓ Gerichtsfest'].map((b) => (
          <span
            key={b}
            className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
            style={{ background: 'rgba(140,188,148,0.13)', color: '#5a9e6a' }}
          >
            {b}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function HeroScene() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 py-8 lg:py-0">
      <div className="relative w-full max-w-xs lg:max-w-sm" style={{ perspective: '1000px' }}>
        <PropertyCard prefersReduced={!!prefersReduced} />
        <Chip
          label="500+ Gutachten erstellt"
          delay={1.05}
          className="-right-2 -top-4 lg:-right-6"
          prefersReduced={!!prefersReduced}
        />
        <Chip
          label="Festpreis · Schnell · Sicher"
          delay={1.25}
          className="-bottom-4 -left-2 lg:-left-6"
          prefersReduced={!!prefersReduced}
        />
      </div>
    </div>
  );
}
