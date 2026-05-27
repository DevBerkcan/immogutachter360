const steps = [
  { n: '01', title: 'Anfrage', text: ['Sie schildern Ihr Anliegen telefonisch, per Mail oder über das Online-Formular. Die erste Einschätzung erhalten Sie innerhalb von 24 Stunden.'] },
  { n: '02', title: 'Termin', text: ['Wir vereinbaren zeitnah einen Vor-Ort-Termin und klären vorab, welche Unterlagen für Ihr Gutachten wichtig sind.', 'Kein langer Vorlauf.'] },
  { n: '03', title: 'Begehung', text: ['Die Immobilie wird sorgfältig besichtigt, dokumentiert und mit den relevanten Daten für die Wertermittlung erfasst.'] },
  { n: '04', title: 'Gutachten', text: ['Sie erhalten Ihr fundiertes Gutachten übersichtlich aufbereitet, plausibilisiert und persönlich erläutert.'] },
];

export default function ProcessScroll() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <div
          key={s.n}
          className="border-t-2 pt-6"
          style={{ borderColor: 'rgba(140,188,148,0.4)' }}
        >
          <div className="font-display text-5xl font-light" style={{ color: '#8CBC94' }}>
            {s.n}
          </div>
          <h3 className="mt-5 font-display text-2xl text-paper">{s.title}</h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {s.text.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
