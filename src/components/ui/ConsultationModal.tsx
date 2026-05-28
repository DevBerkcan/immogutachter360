import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'sending' | 'success' | 'error';

const REASONS = ['Verkauf', 'Kauf', 'Erbe', 'Scheidung', 'Steuer', 'Versicherung', 'Anderes'];

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => setStatus('idle'), 400);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-consultation-modal', handler);
    return () => window.removeEventListener('open-consultation-modal', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      reason: (form.elements.namedItem('reason') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      consent: 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Fehler beim Senden');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unbekannter Fehler');
    }
  }

  const inputClass = "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink placeholder-mute outline-none transition-colors focus:border-green";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9900] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(24,27,49,0.65)', backdropFilter: 'blur(4px)' }}
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Kostenlose Beratung anfragen"
            className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl max-h-[90dvh]"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Green accent bar */}
            <div className="h-1 w-full bg-green" />

            <div className="overflow-y-auto p-6 sm:p-8">
              {/* Close */}
              <button
                onClick={close}
                className="absolute right-5 top-5 rounded-full p-1.5 text-mute transition-colors hover:bg-line hover:text-ink"
                aria-label="Schließen"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {status === 'success' ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8CBC94" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl">Vielen Dank!</h2>
                  <p className="mt-3 text-mute">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <button onClick={close} className="btn-primary mt-8">Schließen</button>
                </div>
              ) : (
                <>
                  <p className="eyebrow text-xs">Kostenlose Erstanfrage</p>
                  <h2 className="font-display mt-2 text-2xl">Wie können wir helfen?</h2>
                  <p className="mt-2 text-sm text-mute">Erste Einschätzung binnen 24 Stunden — kostenlos und unverbindlich.</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-3" noValidate>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        name="name"
                        required
                        minLength={2}
                        placeholder="Ihr Name *"
                        className={inputClass}
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="E-Mail-Adresse *"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Telefon (optional)"
                        className={inputClass}
                      />
                      <select name="reason" className={inputClass} style={{ color: 'var(--color-ink)' }}>
                        <option value="">Anlass wählen …</option>
                        {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Ihre Nachricht (optional)"
                      rows={3}
                      className={inputClass}
                      style={{ resize: 'none' }}
                    />

                    <p className="text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage gemäß unserer{' '}
                      <a href="/datenschutz" className="underline" target="_blank">Datenschutzerklärung</a> zu.
                    </p>

                    {status === 'error' && (
                      <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Wird gesendet …' : 'Anfrage senden'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
