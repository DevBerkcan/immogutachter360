import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'cookie-consent';
const CONSENT_TS_KEY = 'cookie-consent-ts';
const TTL_MS = 365 * 24 * 60 * 60 * 1000;

type ConsentType = 'essential' | 'all';
type View = 'main' | 'settings';

function getStoredConsent(): ConsentType | null {
  if (typeof window === 'undefined') return null;
  const val = localStorage.getItem(CONSENT_KEY);
  const ts = parseInt(localStorage.getItem(CONSENT_TS_KEY) || '0', 10);
  if (!val) return null;
  if (Date.now() - ts > TTL_MS) {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_TS_KEY);
    return null;
  }
  return val as ConsentType;
}

function saveConsent(type: ConsentType) {
  localStorage.setItem(CONSENT_KEY, type);
  localStorage.setItem(CONSENT_TS_KEY, Date.now().toString());
  window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: { type } }));
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState<View>('main');
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      window.dispatchEvent(new CustomEvent('cookie-consent-update', { detail: { type: stored } }));
    } else {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    (window as any).__showCookieBanner = () => {
      localStorage.removeItem(CONSENT_KEY);
      localStorage.removeItem(CONSENT_TS_KEY);
      setView('main');
      setMarketingAllowed(false);
      setShow(true);
    };
  }, []);

  const accept = (type: ConsentType) => {
    saveConsent(type);
    setShow(false);
  };

  const saveCustom = () => {
    accept(marketingAllowed ? 'all' : 'essential');
  };

  const btnBase =
    'flex-1 rounded-lg px-4 py-2.5 text-xs font-medium transition-colors whitespace-nowrap';
  const btnOutlined = `${btnBase} border border-line bg-transparent text-ink hover:bg-cream`;
  const btnGreen = `${btnBase} text-paper hover:opacity-90`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie-Einstellungen"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 16, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-[9000] w-[min(92vw,480px)] rounded-2xl border border-line bg-paper md:bottom-6 md:left-6"
          style={{ boxShadow: '0 24px 64px -16px rgba(24,27,49,0.2)' }}
        >
          <AnimatePresence mode="wait">
            {view === 'main' ? (
              <motion.div
                key="main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5"
              >
                <p className="text-sm font-bold text-ink">Wir schätzen Ihre Privatsphäre</p>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-mute)' }}>
                  Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und Bewertungs-Widgets
                  (ProvenExpert) anzuzeigen. Wenn Sie auf „Alle akzeptieren" klicken, stimmen Sie
                  der Nutzung zu.{' '}
                  <a
                    href="/datenschutz"
                    className="underline underline-offset-2 transition-colors hover:text-ink"
                  >
                    Datenschutzerklärung
                  </a>
                </p>
                <div className="mt-4 flex gap-2">
                  <button className={btnOutlined} onClick={() => setView('settings')}>
                    Anpassen
                  </button>
                  <button className={btnOutlined} onClick={() => accept('essential')}>
                    Alles ablehnen
                  </button>
                  <button
                    className={btnGreen}
                    onClick={() => accept('all')}
                    style={{ backgroundColor: 'var(--color-green)' }}
                  >
                    Alle akzeptieren
                  </button>
                </div>
                <p className="mt-3 text-center text-[10px]" style={{ color: 'var(--color-mute)', opacity: 0.55 }}>
                  Gemäß § 25 TDDDG · Einwilligung gilt 12 Monate
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="settings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-5"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setView('main')}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-line text-mute transition-colors hover:border-ink hover:text-ink"
                    aria-label="Zurück"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <p className="text-sm font-bold text-ink">Datenschutz-Einstellungen</p>
                </div>

                {/* Cookie-Kategorien */}
                <div className="mt-4 space-y-0 rounded-xl border border-line overflow-hidden">
                  {/* Notwendige — immer aktiv */}
                  <div className="flex items-start justify-between gap-4 border-b border-line p-4">
                    <div>
                      <p className="text-xs font-semibold text-ink">Notwendige Cookies</p>
                      <p className="mt-1 text-[11px] leading-relaxed" style={{ color: 'var(--color-mute)' }}>
                        Cookie-Einwilligung, Session. Immer aktiv — ohne diese funktioniert die
                        Website nicht korrekt.
                      </p>
                    </div>
                    <span
                      className="mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium text-paper"
                      style={{ backgroundColor: 'var(--color-green)', whiteSpace: 'nowrap' }}
                    >
                      Immer aktiv
                    </span>
                  </div>

                  {/* Externe Inhalte — togglebar */}
                  <div className="flex items-start justify-between gap-4 p-4">
                    <div>
                      <p className="text-xs font-semibold text-ink">Externe Inhalte (ProvenExpert)</p>
                      <p className="mt-1 text-[11px] leading-relaxed" style={{ color: 'var(--color-mute)' }}>
                        Bewertungssiegel & Widget von Expert Systems AG, Berlin. Setzt ggf. Cookies
                        und überträgt Daten an deren Server.
                      </p>
                    </div>
                    {/* Toggle */}
                    <button
                      role="switch"
                      aria-checked={marketingAllowed}
                      onClick={() => setMarketingAllowed((v) => !v)}
                      className="relative mt-0.5 h-6 w-10 shrink-0 rounded-full transition-colors"
                      style={{
                        backgroundColor: marketingAllowed ? 'var(--color-green)' : 'var(--color-line)',
                      }}
                    >
                      <span
                        className="absolute top-0.5 h-5 w-5 rounded-full bg-paper shadow-sm transition-transform"
                        style={{ left: marketingAllowed ? '18px' : '2px' }}
                      />
                    </button>
                  </div>
                </div>

                <button
                  onClick={saveCustom}
                  className="mt-4 w-full rounded-lg py-2.5 text-xs font-semibold text-paper transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-green)' }}
                >
                  Auswahl speichern
                </button>
                <p className="mt-2 text-center text-[10px]" style={{ color: 'var(--color-mute)', opacity: 0.55 }}>
                  Gemäß § 25 TDDDG · Einwilligung gilt 12 Monate
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
