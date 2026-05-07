import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: '01', title: 'Anfrage', text: 'Sie schildern Ihr Anliegen — telefonisch, per Mail oder über das Online-Formular. Erste Einschätzung innerhalb von 24 Stunden.' },
  { n: '02', title: 'Termin', text: 'Wir vereinbaren zeitnah einen Vor-Ort-Termin — auch am Wochenende. Kein langer Vorlauf.' },
  { n: '03', title: 'Begehung', text: 'Detaillierte Besichtigung mit Fotodokumentation und allen relevanten Messungen. Alles in einem Termin.' },
  { n: '04', title: 'Gutachten', text: 'Ihr fundiertes Gutachten — übersichtlich, plausibilisiert, in 7–14 Tagen bei Ihnen. Finanzamt- und gerichtsfest.' },
];

export default function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const totalWidth = track.scrollWidth - container.offsetWidth;
      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <>
      {/* Desktop: horizontal scroll */}
      <div ref={containerRef} className="hidden overflow-hidden lg:block">
        <div ref={trackRef} className="flex will-change-transform" style={{ width: `${steps.length * 50}vw` }}>
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex h-screen w-[50vw] shrink-0 flex-col justify-center px-20"
            >
              <div className="border-t-2 pt-8" style={{ borderColor: 'rgba(140,188,148,0.4)' }}>
                <div className="font-display text-7xl font-light" style={{ color: '#8CBC94' }}>{s.n}</div>
                <h3 className="mt-6 font-display text-4xl font-light text-paper">{s.title}</h3>
                <p className="mt-6 max-w-sm text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="grid gap-8 lg:hidden md:grid-cols-2">
        {steps.map((s) => (
          <div key={s.n} className="border-t-2 pt-6" style={{ borderColor: 'rgba(140,188,148,0.4)' }}>
            <div className="font-display text-5xl font-light" style={{ color: '#8CBC94' }}>{s.n}</div>
            <h3 className="mt-4 font-display text-2xl text-paper">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
