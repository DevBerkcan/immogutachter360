export type ChecklistItem = { text: string; hint?: string };
export type ChecklistSection = { title: string; items: ChecklistItem[] };
export type Checklist = {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  sections: ChecklistSection[];
};

export const CHECKLISTS: Checklist[] = [
  {
    slug: 'einfamilienhaus',
    title: 'Checkliste Gutachten Einfamilienhaus',
    subtitle: 'Alle Unterlagen für Ihre Immobilienbewertung',
    icon: '🏡',
    description: 'Alle Dokumente, die Sie für ein Verkehrswertgutachten eines Einfamilienhauses benötigen.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug (nicht älter als 3 Monate)', hint: 'Erhältlich beim zuständigen Grundbuchamt oder online über das Grundbuchportal' },
          { text: 'Aktueller Lageplan / Liegenschaftskarte', hint: 'Erhältlich beim Katasteramt oder Vermessungsamt Ihrer Gemeinde' },
          { text: 'Grundrisse aller Geschosse (inkl. Keller und Dachgeschoss)' },
          { text: 'Wohnflächenberechnung nach WoFlV oder DIN 277' },
          { text: 'Energieausweis (Verbrauchs- oder Bedarfsausweis)', hint: 'Pflicht bei Verkauf — wir stellen ihn auf Wunsch aus' },
        ],
      },
      {
        title: 'Baurechtliche Dokumente',
        items: [
          { text: 'Baugenehmigung oder Baufertigstellungsanzeige' },
          { text: 'Baubeschreibung (falls vorhanden)' },
          { text: 'Nachweise über An- oder Umbauten mit Baugenehmigung' },
          { text: 'Denkmalschutzunterlagen (falls relevant)', hint: 'Prüfen Sie beim Denkmalschutzamt, ob das Gebäude unter Schutz steht' },
        ],
      },
      {
        title: 'Zustand & Modernisierungen',
        items: [
          { text: 'Aufstellung durchgeführter Modernisierungen (mit Jahr und Kosten)', hint: 'z.B. Heizungsanlage, Dach, Fenster, Fassade, Bad, Elektrik' },
          { text: 'Aktuelle Fotos der Immobilie', hint: 'Außenansicht, alle Räume, Keller, Dachstuhl — auch Mängel dokumentieren' },
          { text: 'Unterlagen zu bekannten Schäden oder Mängeln' },
        ],
      },
      {
        title: 'Finanzielles',
        items: [
          { text: 'Aktueller Grundsteuerbescheid' },
          { text: 'Ggf. Erbbaurechtsvertrag (mit Erbbaurechtszins und Laufzeit)', hint: 'Nur relevant, wenn das Grundstück nicht im Eigentum steht' },
          { text: 'Ggf. Erschließungsbeiträge (falls noch ausstehend)' },
        ],
      },
    ],
  },
  {
    slug: 'eigentumswohnung',
    title: 'Checkliste Gutachten Eigentumswohnung',
    subtitle: 'Alle Unterlagen für Ihre Immobilienbewertung',
    icon: '🏢',
    description: 'Erforderliche Dokumente für die Wertermittlung einer Eigentumswohnung inkl. WEG-Unterlagen.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug der Eigentumswohnung (nicht älter als 3 Monate)', hint: 'Erhältlich beim Grundbuchamt' },
          { text: 'Grundriss der Wohnung (maßstabsgetreu)' },
          { text: 'Wohnflächenberechnung nach WoFlV' },
          { text: 'Energieausweis des Gebäudes', hint: 'Muss beim Verwalter oder der WEG angefordert werden' },
          { text: 'Aktueller Lageplan des Grundstücks' },
        ],
      },
      {
        title: 'WEG-Unterlagen',
        items: [
          { text: 'Teilungserklärung und Gemeinschaftsordnung', hint: 'Enthält Miteigentumsanteile und Sondernutzungsrechte' },
          { text: 'Aufteilungsplan', hint: 'Zeigt die genaue Lage der Einheit im Gebäude' },
          { text: 'Protokolle der letzten 3 Eigentümerversammlungen', hint: 'Gibt Aufschluss über geplante Maßnahmen, Beschlüsse und Streitigkeiten' },
          { text: 'Wirtschaftsplan des laufenden Jahres' },
          { text: 'Jahresabrechnungen der letzten 2 Jahre' },
          { text: 'Aktuelle Höhe der Instandhaltungsrücklage', hint: 'Wichtiger Wertfaktor — je höher, desto besser' },
        ],
      },
      {
        title: 'Sondernutzungsrechte & Vermietung',
        items: [
          { text: 'Nachweise über Sondernutzungsrechte (Stellplatz, Garage, Garten, Keller)' },
          { text: 'Mietvertrag und aktuelle Kaltmiete (falls vermietet)' },
          { text: 'Nebenkostenabrechnungen der letzten 2 Jahre (falls vermietet)' },
        ],
      },
      {
        title: 'Zustand',
        items: [
          { text: 'Aktuelle Fotos der Wohnung (alle Räume, Fenster, Bad, Küche)' },
          { text: 'Aufstellung durchgeführter Renovierungen mit Jahr und Kosten' },
          { text: 'Unterlagen zu bekannten Mängeln' },
        ],
      },
    ],
  },
  {
    slug: 'mehrfamilienhaus',
    title: 'Checkliste Gutachten Mehrfamilienhaus',
    subtitle: 'Alle Unterlagen für Ihre Immobilienbewertung',
    icon: '🏘️',
    description: 'Vollständige Dokumentenliste für die Bewertung von Mehrfamilienhäusern und Renditeobjekten.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug (nicht älter als 3 Monate)' },
          { text: 'Aktueller Lageplan / Liegenschaftskarte' },
          { text: 'Grundrisse aller Einheiten und Geschosse' },
          { text: 'Wohnflächenberechnungen aller Mieteinheiten nach WoFlV' },
          { text: 'Energieausweis des Gebäudes' },
        ],
      },
      {
        title: 'Mietrechtliche Unterlagen',
        items: [
          { text: 'Aktuelle Mietverträge aller Einheiten' },
          { text: 'Mieterliste: Einheit / Fläche / Kaltmiete / Mieter seit', hint: 'Bitte im Tabellenformat — erleichtert die Ertragswertermittlung erheblich' },
          { text: 'Betriebskostenabrechnungen der letzten 2 Jahre' },
          { text: 'Betriebskostenvorauszahlungen je Einheit' },
          { text: 'Leerstandsliste und Mietausfall (falls vorhanden)' },
        ],
      },
      {
        title: 'Baurechtliche Dokumente',
        items: [
          { text: 'Baugenehmigung / Baufertigstellungsanzeige' },
          { text: 'Baubeschreibung' },
          { text: 'Nachweise über Umbaumaßnahmen mit Genehmigungen' },
        ],
      },
      {
        title: 'Finanzielles & Instandhaltung',
        items: [
          { text: 'Aktueller Grundsteuerbescheid' },
          { text: 'Aufstellung Modernisierungen je Einheit (mit Jahr und Kosten)' },
          { text: 'Gebäudeversicherungspolice (mit aktueller Prämie und Versicherungssumme)' },
          { text: 'Ggf. Erbbaurechtsvertrag' },
        ],
      },
    ],
  },
  {
    slug: 'gewerbe',
    title: 'Checkliste Gutachten Gewerbeimmobilie',
    subtitle: 'Alle Unterlagen für Ihre Immobilienbewertung',
    icon: '🏗️',
    description: 'Unterlagen für Verkehrswertgutachten von Gewerbe-, Büro- und Sonderimmobilien.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug (nicht älter als 3 Monate)' },
          { text: 'Aktueller Lageplan / Liegenschaftskarte' },
          { text: 'Grundrisse mit Nutzflächenberechnung nach DIN 277 oder gif', hint: 'Unterscheidung: Mietfläche, Gemeinschaftsfläche, technische Fläche' },
          { text: 'Energieausweis oder Energieaudit des Gebäudes' },
        ],
      },
      {
        title: 'Mietrechtliche Unterlagen',
        items: [
          { text: 'Gewerbemietverträge aller Mieter (inkl. Anlagen und Nachträge)' },
          { text: 'Mieterliste: Einheit / Mietfläche / Nettomiete / Laufzeit', hint: 'Vertragslaufzeiten, Verlängerungsoptionen und Indexierungen bitte separat angeben' },
          { text: 'Leerstandsliste mit Mietausfall' },
          { text: 'Betriebskostenabrechnungen der letzten 2 Jahre' },
        ],
      },
      {
        title: 'Baurechtliche Dokumente',
        items: [
          { text: 'Baugenehmigung und ggf. Nutzungsänderungsgenehmigungen' },
          { text: 'Baubeschreibung und technische Ausstattung', hint: 'z.B. Klimaanlage, Aufzug, Sprinkleranlage, EDV-Verkabelung' },
          { text: 'Nachweise über Umbau- und Ausbaumaßnahmen (mit Kosten)' },
        ],
      },
      {
        title: 'Finanzielles',
        items: [
          { text: 'Grundsteuerbescheid' },
          { text: 'Erschließungsbeiträge (falls noch ausstehend)' },
          { text: 'Gebäudeversicherungspolice (Prämie und Versicherungswert)' },
          { text: 'Instandhaltungsplanung / Capex-Übersicht', hint: 'Geplante Maßnahmen und Investitionen in den nächsten 5 Jahren' },
        ],
      },
    ],
  },
  {
    slug: 'restnutzung-einfamilienhaus',
    title: 'Checkliste Restnutzungsdauer Einfamilienhaus',
    subtitle: 'Unterlagen für Ihr Restnutzungsdauer-Gutachten',
    icon: '📊',
    description: 'Dokumente für das Restnutzungsdauer-Gutachten zur steuerlichen AfA-Optimierung bei Einfamilienhäusern.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug (nicht älter als 3 Monate)' },
          { text: 'Lageplan / Liegenschaftskarte' },
          { text: 'Grundrisse aller Geschosse' },
          { text: 'Energieausweis (Verbrauchs- oder Bedarfsausweis)' },
        ],
      },
      {
        title: 'Baujahr und Bausubstanz',
        items: [
          { text: 'Baugenehmigung oder Baufertigstellungsanzeige mit Baujahr', hint: 'Falls nicht vorhanden: älteste verfügbare Unterlagen mit Datumsangabe' },
          { text: 'Baubeschreibung (Material: Außenwände, Dach, Keller, Decken)' },
          { text: 'Aktuelle Fotos: Außenansicht, Keller, Dachstuhl, Fassade, Fenster', hint: 'Schäden, Risse, Feuchtigkeitsflecken bitte gezielt fotografieren' },
        ],
      },
      {
        title: 'Modernisierungen (entscheidend für die Restnutzungsdauer)',
        items: [
          { text: 'Nachweis Heizungsanlage: Typ, Baujahr, letzte Wartung', hint: 'Eine neue Heizung verlängert die wirtschaftliche Restnutzungsdauer erheblich' },
          { text: 'Nachweis Dachdeckung / Dachdämmung (Jahr der Erneuerung)' },
          { text: 'Nachweis Fenster (Austauschjahr, Verglasung: 2- oder 3-fach)' },
          { text: 'Nachweis Fassade / Außendämmung (Jahr, WDVS oder Kerndämmung)' },
          { text: 'Nachweis Elektrik (Erneuerungsjahr, falls modernisiert)' },
          { text: 'Nachweis Sanitärinstallation und Bad (Jahr der letzten Erneuerung)' },
          { text: 'Sonstige Modernisierungen mit Kostennachweisen', hint: 'Rechnungen oder Kostenschätzungen in Euro je Maßnahme' },
        ],
      },
      {
        title: 'Steuerliche Unterlagen',
        items: [
          { text: 'Kaufvertrag (Kaufpreis und Kaufdatum)', hint: 'Notwendig für steuerliche Aufteilung Grundstück / Gebäudewert nach BFH-Urteil vom 28.07.2021' },
          { text: 'Aktueller Grundsteuerbescheid' },
          { text: 'Ggf. Anlage V der letzten Steuererklärung (Einkünfte aus V+V)', hint: 'Für Rückvergleich mit bisheriger linearer AfA (2 % p.a.)' },
        ],
      },
    ],
  },
  {
    slug: 'restnutzung-eigentumswohnung',
    title: 'Checkliste Restnutzungsdauer Eigentumswohnung',
    subtitle: 'Unterlagen für Ihr Restnutzungsdauer-Gutachten',
    icon: '📈',
    description: 'Dokumente für das Restnutzungsdauer-Gutachten zur steuerlichen AfA-Optimierung bei Eigentumswohnungen.',
    sections: [
      {
        title: 'Grundlegende Unterlagen',
        items: [
          { text: 'Grundbuchauszug der Eigentumswohnung (nicht älter als 3 Monate)' },
          { text: 'Teilungserklärung und Aufteilungsplan' },
          { text: 'Grundriss der Wohnung' },
          { text: 'Energieausweis des Gebäudes' },
        ],
      },
      {
        title: 'Baujahr und Gebäudezustand',
        items: [
          { text: 'Baugenehmigung des Gesamtgebäudes (mit Baujahr)', hint: 'Falls nicht vorhanden: älteste verfügbare Unterlagen mit Datum' },
          { text: 'Fotos: Wohnung, Treppenhaus, Fassade, Dach (soweit einsehbar)', hint: 'Renovierungsbedarf und erkennbare Schäden gut dokumentieren' },
        ],
      },
      {
        title: 'Modernisierungen im Sondereigentum',
        items: [
          { text: 'Nachweise über Modernisierungen in der Wohnung (Bad, Böden, Elektrik)', hint: 'Mit Jahr und Kosten — eigene Investitionen verlängern die Restnutzungsdauer der Wohnung' },
          { text: 'Fotos renovierter Bereiche (vor und nach, falls vorhanden)' },
        ],
      },
      {
        title: 'WEG und Gemeinschaftseigentum',
        items: [
          { text: 'Protokolle der Eigentümerversammlungen (letzten 3 Jahre)', hint: 'Enthält Beschlüsse über Sanierungen: Dach, Fassade, Heizung, Aufzug' },
          { text: 'Aktueller Wirtschaftsplan und Jahresabrechnung' },
          { text: 'Aktuelle Höhe der Instandhaltungsrücklage', hint: 'Niedrige Rücklage = höherer Sanierungsbedarf = kürzere wirtschaftliche Restnutzungsdauer' },
          { text: 'Ggf. Beschlüsse über durchgeführte Gemeinschaftseigentum-Modernisierungen' },
          { text: 'Kaufvertrag (Kaufpreis und Kaufdatum)', hint: 'Notwendig für steuerliche Aufteilung nach BFH-Urteil vom 28.07.2021' },
        ],
      },
    ],
  },
];
