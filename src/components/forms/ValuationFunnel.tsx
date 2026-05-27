import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Data = {
  type?: string;
  address?: string;
  size?: number;
  year?: number;
  condition?: string;
  reason?: string;
  name?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
};

const steps = ['Objekttyp', 'Adresse', 'Daten', 'Zustand', 'Anlass', 'Kontakt'];

const btnActive = 'rounded-xl border-2 p-6 text-left transition-all border-green hover:-translate-y-0.5';
const btnStyle = 'rounded-xl border-2 p-6 text-left transition-all border-line hover:border-green hover:-translate-y-0.5';
const inputStyle = 'w-full border-b-2 border-line bg-transparent py-3 text-lg outline-none focus:border-green transition-colors';

export default function ValuationFunnel() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({ size: 120, year: 1995 });
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      const res = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: data.type,
          address: data.address,
          size: String(data.size ?? ''),
          year: String(data.year ?? ''),
          condition: data.condition,
          reason: data.reason,
          name: data.name,
          email: data.email,
          phone: data.phone,
          consent: data.consent ?? false,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setApiError(json.error ?? 'Fehler beim Senden. Bitte rufen Sie uns an.');
      } else {
        setDone(true);
      }
    } catch {
      setApiError('Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(140,188,148,0.15)' }}>
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-2 font-display text-3xl">Vielen Dank!</h3>
        <p className="mt-4 text-mute">Wir melden uns innerhalb von 24 Stunden mit Ihrer kostenlosen Ersteinschätzung.</p>
        <a href="/" className="btn-primary mt-8 inline-flex">Zurück zur Startseite</a>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-green' : 'bg-line'}`} />
            <div className={`mt-2 hidden text-[10px] uppercase tracking-wider md:block ${i === step ? 'text-green' : 'text-mute'}`}>{s}</div>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <div>
              <h3 className="font-display text-3xl">Welche Art von Immobilie?</h3>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {['Einfamilienhaus', 'Wohnung', 'Mehrfamilienhaus', 'Gewerbeimmobilie', 'Grundstück', 'Sonstiges'].map((t) => (
                  <button
                    key={t}
                    onClick={() => { setData({ ...data, type: t }); next(); }}
                    className={data.type === t ? btnActive : btnStyle}
                    style={data.type === t ? { backgroundColor: 'rgba(140,188,148,0.08)' } : undefined}
                  >
                    <div className="font-display text-xl">{t}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="font-display text-3xl">
                {data.type === 'Grundstück' ? 'Wo befindet sich das Grundstück?' : 'Wo befindet sich die Immobilie?'}
              </h3>
              <input
                autoFocus
                placeholder="Straße, PLZ, Ort"
                value={data.address ?? ''}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                className={`mt-8 text-xl ${inputStyle}`}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display text-3xl">Eckdaten</h3>
              <div className="mt-8 space-y-8">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mute">Wohnfläche: {data.size} m²</label>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    value={data.size}
                    onChange={(e) => setData({ ...data, size: +e.target.value })}
                    className="mt-2 w-full accent-green-600"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-mute">Baujahr: {data.year}</label>
                  <input
                    type="range"
                    min="1900"
                    max="2026"
                    value={data.year}
                    onChange={(e) => setData({ ...data, year: +e.target.value })}
                    className="mt-2 w-full accent-green-600"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display text-3xl">Allgemeiner Zustand</h3>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {['Renoviert / Top', 'Gepflegt', 'Renovierungsbedürftig'].map((c) => (
                  <button
                    key={c}
                    onClick={() => { setData({ ...data, condition: c }); next(); }}
                    className={data.condition === c ? btnActive : btnStyle}
                    style={data.condition === c ? { backgroundColor: 'rgba(140,188,148,0.08)' } : undefined}
                  >
                    <div className="font-display text-xl">{c}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="font-display text-3xl">Anlass für die Bewertung</h3>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {['Verkauf', 'Kauf', 'Erbschaft', 'Scheidung', 'Finanzamt', 'Allgemeines Interesse'].map((r) => (
                  <button
                    key={r}
                    onClick={() => { setData({ ...data, reason: r }); next(); }}
                    className={data.reason === r ? btnActive : btnStyle}
                    style={data.reason === r ? { backgroundColor: 'rgba(140,188,148,0.08)' } : undefined}
                  >
                    <div className="font-display text-xl">{r}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="font-display text-3xl">Wohin schicken wir die Einschätzung?</h3>
              <div className="mt-8 space-y-6">
                <input placeholder="Name *" value={data.name ?? ''} onChange={(e) => setData({ ...data, name: e.target.value })} className={inputStyle} />
                <input placeholder="E-Mail *" type="email" value={data.email ?? ''} onChange={(e) => setData({ ...data, email: e.target.value })} className={inputStyle} />
                <input placeholder="Telefon (optional)" value={data.phone ?? ''} onChange={(e) => setData({ ...data, phone: e.target.value })} className={inputStyle} />
                <label className="flex cursor-pointer items-start gap-3 text-sm text-mute">
                  <input type="checkbox" checked={!!data.consent} onChange={(e) => setData({ ...data, consent: e.target.checked })} className="mt-1" />
                  <span>Ich stimme der Datenverarbeitung zu. <a href="/datenschutz" className="underline hover:text-green">Datenschutzerklärung</a></span>
                </label>
                {apiError && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{apiError}</p>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-between">
        <button onClick={prev} disabled={step === 0} className="text-sm text-mute transition-opacity disabled:opacity-30">
          ← Zurück
        </button>
        {step === steps.length - 1 ? (
          <button
            onClick={submit}
            disabled={!data.name || !data.email || !data.consent || isSubmitting}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Wird gesendet…' : 'Kostenlose Einschätzung anfordern →'}
          </button>
        ) : (
          step !== 0 && step !== 3 && step !== 4 && (
            <button onClick={next} className="btn-primary">Weiter →</button>
          )
        )}
      </div>
    </div>
  );
}
