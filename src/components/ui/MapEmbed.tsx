'use client';
import { useState, useEffect } from 'react';

const TTL_MS = 365 * 24 * 60 * 60 * 1000;

function hasValidConsent(): boolean {
  const c = localStorage.getItem('cookie-consent');
  const ts = parseInt(localStorage.getItem('cookie-consent-ts') || '0', 10);
  return c === 'all' && Date.now() - ts < TTL_MS;
}

export default function MapEmbed() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasValidConsent());

    const handler = () => setConsented(hasValidConsent());
    window.addEventListener('cookie-consent-update', handler);
    return () => window.removeEventListener('cookie-consent-update', handler);
  }, []);

  const handleConsent = () => {
    // Öffnet Cookie-Banner damit Nutzer bewusst "Alle akzeptieren" wählt
    if (typeof (window as any).__showCookieBanner === 'function') {
      (window as any).__showCookieBanner();
    }
  };

  if (consented) {
    return (
      <div className="overflow-hidden rounded-2xl" style={{ height: 400 }}>
        <iframe
          src="https://maps.google.com/maps?q=Metzer+Str.+70,+40476+D%C3%BCsseldorf&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Immogutachter360 Düsseldorf"
        />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-charcoal text-paper p-10 text-center"
      style={{ height: 400 }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.5 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
      <div>
        <p className="font-display text-xl">Karte anzeigen</p>
        <p className="mt-2 text-sm max-w-xs" style={{ opacity: 0.6 }}>
          Google Maps lädt Daten von Google-Servern (USA). Einwilligung über Cookie-Einstellungen erforderlich.
        </p>
      </div>
      <button onClick={handleConsent} className="btn-primary">
        Cookie-Einstellungen öffnen
      </button>
    </div>
  );
}
