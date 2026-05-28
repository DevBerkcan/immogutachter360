import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const finalCta = document.querySelector('[data-final-cta]');
    let observer: IntersectionObserver | null = null;
    if (finalCta) {
      observer = new IntersectionObserver(
        ([entry]) => setHidden(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(finalCta);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          className="fixed bottom-4 right-4 z-[8000] sm:bottom-6 sm:right-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <motion.a
            href="/kontakt"
            aria-label="Kostenlose Anfrage"
            animate={{ width: expanded ? 'auto' : 48 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 overflow-hidden rounded-full text-paper shadow-xl"
            style={{
              backgroundColor: 'var(--color-green)',
              height: 48,
              paddingInline: expanded ? 20 : 0,
              minWidth: 48,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 9.91A16 16 0 0016 16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0124 17z" />
            </svg>
            <AnimatePresence>
              {expanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.25 }}
                  className="whitespace-nowrap text-sm font-medium"
                >
                  Kostenlose Anfrage
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
