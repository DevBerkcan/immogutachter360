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
    slug: 'duesseldorf',
    name: 'Düsseldorf',
    region: 'Landeshauptstadt NRW',
    icon: '🏙️',
    distanceFromDuesseldorf: 'Hauptstandort',
    dominantPropertyTypes: ['ETW', 'EFH', 'MFH', 'Gewerbe'],
    intro: 'Düsseldorf zählt zu den teuersten Immobilienmärkten in Deutschland. Stadtteile wie Oberkassel, Pempelfort, Golzheim und die Innenstadt erzielen Spitzenpreise, während Stadtteile wie Garath, Lierenfeld oder Hassels deutlich günstigere Einstiegsmöglichkeiten bieten. Der Markt ist dynamisch, international geprägt und reagiert sensibel auf Zinsänderungen.',
    characteristics: [
      'Premiumlagen: Oberkassel, Pempelfort, Golzheim mit Preisen bis 10.000 €/m²',
      'Starke Nachfrage nach ETW durch Expats, Finanz- und Modebranchen',
      'Aktiver MFH-Markt als Kapitalanlage',
      'Gewerbeimmobilien durch Medienhafen und Bürostandort Derendorf',
    ],
  },
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
    slug: 'krefeld',
    name: 'Krefeld',
    region: 'Niederrhein',
    icon: '🏭',
    distanceFromDuesseldorf: 'ca. 20 km nordwestlich',
    dominantPropertyTypes: ['EFH', 'MFH', 'ETW', 'Gewerbe'],
    intro: 'Krefeld ist eine eigenständige Großstadt am Niederrhein mit vielseitigem Immobilienmarkt. Traditionelle Textilindustrie hat Platz für Stadtentwicklung und Wohnungsbau gemacht. Die Kaufpreise liegen deutlich unter dem Düsseldorfer Niveau, was Krefeld für Kapitalanleger und Eigennutzer mit kleinerem Budget attraktiv macht.',
    characteristics: [
      'Günstigere Kaufpreise im regionalen Vergleich',
      'Breites Spektrum: EFH in Hüls, MFH in der Innenstadt, Gewerbe in Uerdingen',
      'Wachsende Nachfrage durch Nähe zu Düsseldorf und Mönchengladbach',
      'Altbaubestand mit Modernisierungspotenzial',
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
  {
    slug: 'moenchengladbach',
    name: 'Mönchengladbach',
    region: 'Westliches NRW',
    icon: '⚽',
    distanceFromDuesseldorf: 'ca. 25 km nordwestlich',
    dominantPropertyTypes: ['MFH', 'ETW', 'EFH', 'Gewerbe'],
    intro: 'Mönchengladbach ist die zweitgrößte Stadt der Region und verfügt über einen aktiven, breiten Immobilienmarkt. Die Preise sind moderate, die Mietrenditen attraktiv und der Wohnungsbau dynamisch. Besonders Rheydter Stadtteile und die Innenstadt bieten interessante Investitionsmöglichkeiten.',
    characteristics: [
      'Aktiver Markt mit moderaten Kaufpreisen und stabilen Mieten',
      'Starker MFH-Sektor als Kapitalanlage',
      'Laufende Stadtentwicklungsprojekte steigern Attraktivität',
      'Direkter ICE-Anschluss nach Köln und Düsseldorf',
    ],
  },
  {
    slug: 'duisburg',
    name: 'Duisburg',
    region: 'Ruhrgebiet',
    icon: '🚢',
    distanceFromDuesseldorf: 'ca. 25 km nördlich',
    dominantPropertyTypes: ['MFH', 'ETW', 'EFH', 'Gewerbe'],
    intro: 'Duisburg ist ein bedeutender Standort am Rhein-Ruhr-Korridor mit einem der größten Binnenhäfen Europas. Der Immobilienmarkt ist zweigespalten: Während Stadtteile wie Wedau, Huckingen und Rheinhausen hohe Wohnqualität bieten, sind andere Stadtteile durch strukturellen Wandel geprägt. Für Investoren bieten sich teils attraktive Renditen.',
    characteristics: [
      'Günstige Kaufpreise mit vergleichsweise hohen Mietrenditen',
      'Differenzierter Markt: Premiumlagen Wedau/Huckingen vs. einfache Lagen',
      'Größter Binnenhafen Europas — bedeutender Gewerbestandort',
      'Strukturwandel schafft neue Stadtentwicklungsprojekte',
    ],
  },
  {
    slug: 'essen',
    name: 'Essen',
    region: 'Ruhrgebiet',
    icon: '🌆',
    distanceFromDuesseldorf: 'ca. 30 km nördlich',
    dominantPropertyTypes: ['ETW', 'MFH', 'EFH', 'Gewerbe'],
    intro: 'Essen ist die größte Stadt des Ruhrgebiets und hat sich zu einem wichtigen Dienstleistungs- und Technologiestandort entwickelt. Der Immobilienmarkt ist vielfältig: Südviertel, Bredeney und Heisingen zählen zu den teuersten Lagen, während nördliche Stadtteile günstigere Einstiegsmöglichkeiten bieten.',
    characteristics: [
      'Stärkstes Preisgefälle innerhalb einer Stadt in der Region (Nord vs. Süd)',
      'Bredeney und Südviertel auf Düsseldorfer Preisniveau',
      'Aktiver ETW-Markt in Innenstadtlagen',
      'Bedeutender Gewerbestandort (RWE, ThyssenKrupp, Aldi)',
    ],
  },
  {
    slug: 'wuppertal',
    name: 'Wuppertal',
    region: 'Bergisches Land',
    icon: '🚡',
    distanceFromDuesseldorf: 'ca. 30 km östlich',
    dominantPropertyTypes: ['MFH', 'EFH', 'ETW'],
    intro: 'Wuppertal liegt im Bergischen Land und ist bekannt für die weltberühmte Schwebebahn. Der Immobilienmarkt bietet im regionalen Vergleich günstige Einstiegspreise mit soliden Mietrenditen. Barmen und Elberfeld als Kernstädte haben hohe Mietnachfrage, während Cronenberg und Ronsdorf eher durch EFH geprägt sind.',
    characteristics: [
      'Günstigste Kaufpreise im Vergleich der Großstädte der Region',
      'Hohe Mietrenditen durch günstigen Kaufpreis bei stabiler Mietnachfrage',
      'Barmen und Elberfeld: Aktive Aufwertung der Innenstadt',
      'Gute ÖPNV-Verbindung nach Düsseldorf und Köln',
    ],
  },
];
