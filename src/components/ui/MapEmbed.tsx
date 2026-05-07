'use client';
import { useState, useEffect } from 'react';

export default function MapEmbed() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(localStorage.getItem('maps-consent') === '1');
  }, []);

  const handleConsent = () => {
    localStorage.setItem('maps-consent', '1');
    setConsented(true);
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
          Google Maps lädt Daten von Google-Servern. Mit dem Klick stimmen Sie der Datenübertragung zu.
        </p>
      </div>
      <button onClick={handleConsent} className="btn-primary">
        Karte laden (Google Maps)
      </button>
    </div>
  );
}
