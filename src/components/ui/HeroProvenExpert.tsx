export default function HeroProvenExpert() {
  return (
    <a
      href="https://www.provenexpert.com/immogutachter360/"
      target="_blank"
      rel="noopener noreferrer"
      title="Kundenbewertungen auf ProvenExpert"
      className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3 py-1.5 text-xs font-medium text-ink transition-all hover:border-green hover:text-green"
      style={{ backdropFilter: 'blur(6px)', height: '32px' }}
    >
      <svg width="14" height="14" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#097E92" />
        <path d="M12 20.5l6 6 10-13" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      ProvenExpert
    </a>
  );
}
