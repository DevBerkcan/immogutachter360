import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from 'framer-motion';

type Service = {
  slug: string;
  category: string;
  title: string;
  short: string;
};

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReduced = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 380, damping: 40 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 380, damping: 40 });
  const glow = useMotionTemplate`radial-gradient(180px circle at ${gx}% ${gy}%, rgba(140,188,148,0.18), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
    gx.set(((e.clientX - rect.left) / rect.width) * 100);
    gy.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={`/leistungen/${service.slug}`}
      className="card group relative block h-full overflow-hidden"
      style={
        prefersReduced
          ? {}
          : { rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '800px' }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: prefersReduced ? 1 : 1.015, borderColor: 'rgba(140,188,148,0.5)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cursor glow */}
      {!prefersReduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: glow }}
        />
      )}

      <div className="relative flex items-start justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-green">{service.category}</span>
        <svg
          className="h-5 w-5 text-mute transition-all duration-500 group-hover:text-green group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
      <h3 className="relative mt-6 font-display text-2xl transition-colors duration-300 group-hover:text-green">
        {service.title}
      </h3>
      <p className="relative mt-3 text-mute">{service.short}</p>
    </motion.a>
  );
}
