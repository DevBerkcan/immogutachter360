import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const t = setTimeout(() => setShow(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (type: 'essential' | 'all') => {
    localStorage.setItem('cookie-consent', type);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-[9000] w-[min(92vw,340px)] rounded-2xl border border-line bg-paper/95 p-5 shadow-xl backdrop-blur-xl md:bottom-6 md:right-6"
        >
          <p className="text-sm font-medium text-ink">Cookie-Einstellungen</p>
          <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-mute)' }}>
            Wir setzen ausschließlich technisch notwendige Cookies — kein Tracking, kein Marketing.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => accept('essential')}
              className="flex-1 rounded-full border border-line px-3 py-2 text-xs font-medium text-ink transition-colors hover:bg-cream"
            >
              Nur essentielle
            </button>
            <button
              onClick={() => accept('all')}
              className="flex-1 rounded-full px-3 py-2 text-xs font-medium text-paper transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--color-green)' }}
            >
              Akzeptieren
            </button>
          </div>
          <button
            onClick={() => accept('essential')}
            aria-label="Schließen"
            className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-mute transition-colors hover:text-ink"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
