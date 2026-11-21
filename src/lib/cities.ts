export type City = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  characteristics: string[];
  distanceFromDuesseldorf: string;
  dominantPropertyTypes: string[];
  icon: string;
};

export const CITIES: City[] = [
  {
    slug: 'meerbusch',
    name: 'Meerbusch',
    region: 'Düsseldorfer Umland',
    icon: '🌿',
    distanceFromDuesseldorf: 'ca. 8 km nordwestlich',
    dominantPropertyTypes: ['EFH', 'DHH', 'ETW'],
    intro: 'Meerbusch gehört zu den gefragtesten Wohnlagen in der gesamten Region. Die Nähe zu Düsseldorf, die hochwertige Infrastruktur und die ruhige Rheinlage machen es besonders bei Familien mit hohem Einkommen beliebt. Büderich und Osterath sind die prägenden Ortschaften mit den höchsten Kaufpreisen im Umland.',
    characteristics: [
      'Höchste Kaufpreise im Düsseldorfer Umland: EFH ab 700.000 € aufwärts',
      'Überwiegend EFH und Doppelhäuser — wenig Geschosswohnungsbau',
      'Rheinlage in Büderich als absolute Premiumlage',
      'Starke Nachfrage, geringes Angebot — kurze Vermarktungszeiten',
    ],
  },
  {
    slug: 'ratingen',
    name: 'Ratingen',
    region: 'Kreis Mettmann',
    icon: '🏘️',
    distanceFromDuesseldorf: 'ca. 12 km östlich',
    dominantPropertyTypes: ['EFH', 'ETW', 'MFH'],
    intro: 'Ratingen ist eine attraktive Mittelstadt östlich von Düsseldorf mit guter Anbindung an die A3 und den ÖPNV. Der Immobilienmarkt ist vielfältig: Von günstigeren ETW in Ratingen-West bis hin zu gehobenen Einfamilienhäusern in Hösel und Tiefenbroich. Besonders als Pendlerstandort nach Düsseldorf sehr gefragt.',
    characteristics: [
      'Gute Anbindung: A3, A52 und Schnellbahn nach Düsseldorf',
      'Deutlich günstigere Preise als Düsseldorf bei gleicher Anbindung',
      'Ratingen-West mit starkem Mietmarkt (MFH/ETW)',
      'Hösel und Tiefenbroich als gehobene EFH-Lagen',
    ],
  },
  {
    slug: 'neuss',
    name: 'Neuss',
    region: 'Rhein-Kreis Neuss',
    icon: '⚓',
    distanceFromDuesseldorf: 'ca. 8 km nordwestlich (linksrheinisch)',
    dominantPropertyTypes: ['ETW', 'MFH', 'EFH'],
    intro: 'Neuss liegt direkt gegenüber von Düsseldorf und bietet deutlich günstigere Immobilienpreise bei guter Rheinbrücken-Anbindung. Die Innenstadt und der Hafen werden zunehmend aufgewertet. Als links-rheinischer Standort spielt Neuss bei Kapitalanlegern eine wachsende Rolle, da Kaufpreise und Mietrenditen attraktiver sind als in Düsseldorf.',
    characteristics: [
      'Kaufpreise 20–30 % günstiger als in Düsseldorf bei vergleichbarer Anbindung',
      'Starker MFH-Markt in der Innenstadt und den Nebenlagen',
      'Hafenentwicklung als Aufwertungsprojekt mit steigenden Preisen',
      'Attraktive Mietrenditen für Kapitalanleger',
    ],
  },
  {
    slug: 'kaarst',
    name: 'Kaarst',
    region: 'Rhein-Kreis Neuss',
    icon: '🌳',
    distanceFromDuesseldorf: 'ca. 15 km nordwestlich',
    dominantPropertyTypes: ['EFH', 'DHH', 'ETW'],
    intro: 'Kaarst ist eine ruhige Mittelgemeinde im Rhein-Kreis Neuss mit hoher Wohnqualität. Das Stadtbild ist von Einfamilienhäusern und Doppelhäusern geprägt. Gute Schulen, grüne Umgebung und ruhige Wohnlagen machen Kaarst besonders bei Familien beliebt, die Düsseldorf-Nähe ohne städtisches Umfeld suchen.',
    characteristics: [
      'Überwiegend EFH und DHH — sehr ruhige, familiäre Wohnlagen',
      'Solide Wertentwicklung durch konstante Familien-Nachfrage',
      'U-Bahn-Anschluss nach Düsseldorf-Innenstadt (ca. 25 Min.)',
      'Wenig Fluktuation — geringe Leerstandsquoten',
    ],
  },
];
