import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const testimonials = [
  { quote: 'Die Beratung war professionell, die Kommunikation transparent und das Ergebnis sehr zufriedenstellend.', author: 'Markus H.', role: 'Privatverkauf, Düsseldorf' },
  { quote: 'Von der ersten Kontaktaufnahme bis zur finalen Bewertung war der gesamte Prozess reibungslos und effizient.', author: 'Sabine W.', role: 'Erbschaftsangelegenheit' },
  { quote: 'Ein vertrauenswürdiger Partner für Immobilienfragen. Sehr erfahren und nahm sich Zeit für alle meine Fragen.', author: 'Thomas K.', role: 'Gewerbeimmobilie, Köln' },
  { quote: 'Dank der fachkundigen Beratung konnte ich eine Immobilie kaufen, die perfekt zu meinen Bedürfnissen passt.', author: 'Lisa M.', role: 'Kaufberatung, Meerbusch' },
  { quote: 'Das Gutachten wurde gründlich und gewissenhaft erstellt. Zu jeder Zeit fühlte ich mich bestens informiert.', author: 'David B.', role: 'Verkehrswertgutachten, Düsseldorf' },
];

export default function TestimonialsQuote() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, prefersReduced]);

  const go = (d: 1 | -1) => {
    setDir(d);
    setCurrent((c) => (c + d + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: prefersReduced ? 0 : d * 48 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: prefersReduced ? 0 : d * -48 }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative open-quote */}
      <div
        aria-hidden
        className="mb-6 select-none text-center font-display text-[7rem] leading-none"
        style={{ color: 'rgba(140,188,148,0.18)' }}
      >
        "
      </div>

      <AnimatePresence mode="wait" custom={dir}>
        <motion.figure
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <blockquote className="mx-auto max-w-4xl font-display text-2xl italic leading-snug text-ink md:text-3xl lg:text-4xl">
            „{testimonials[current].quote}"
          </blockquote>
          <figcaption className="mt-10">
            <div className="font-medium text-ink">{testimonials[current].author}</div>
            <div className="mt-1 text-sm" style={{ color: 'var(--color-mute)' }}>
              {testimonials[current].role}
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Vorheriges Testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-green hover:text-green"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Testimonial ${i + 1}`}
              className="rounded-full transition-all duration-500"
              style={{
                height: 6,
                width: i === current ? 24 : 6,
                backgroundColor: i === current ? 'var(--color-green)' : 'var(--color-line)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Nächstes Testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-green hover:text-green"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
