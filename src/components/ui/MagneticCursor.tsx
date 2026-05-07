import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);

  const springCfg = { damping: 28, stiffness: 700, mass: 0.3 };
  const springX = useSpring(x, springCfg);
  const springY = useSpring(y, springCfg);
  const springScale = useSpring(scale, { damping: 22, stiffness: 280 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.setAttribute('data-cursor', 'active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const grow = () => scale.set(3.2);
    const shrink = () => scale.set(1);

    window.addEventListener('mousemove', move, { passive: true });

    const attach = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };
    attach();

    // Re-attach after view transitions
    document.addEventListener('astro:page-load', attach);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('astro:page-load', attach);
      document.body.removeAttribute('data-cursor');
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor: 'var(--color-green)',
      }}
    />
  );
}
