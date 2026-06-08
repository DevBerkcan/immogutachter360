export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  benefits: string[];
  category: 'Bewertung' | 'Schaden' | 'Bau' | 'Energie';
  icon: string;
  quickAnswer?: string;
  definition?: string;
  faqs?: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: 'immobilienbewertung',
    title: 'Immobilienbewertung',
    short: 'Marktwert ermitteln — fundiert, schnell und transparent.',
    long: 'Eine professionelle Immobilienbewertung schafft die Grundlage für jede wichtige Entscheidung — ob Verkauf, Kauf, Erbschaft oder Finanzierung. Wir analysieren Lage, Zustand, Marktdynamik und vergleichbare Objekte und liefern Ihnen eine belastbare Einschätzung.',
    benefits: ['Vergleichswert-, Ertrags- und Sachwertverfahren', 'Berücksichtigung lokaler Marktdaten', 'Verständliche Aufbereitung', 'In 7–14 Tagen'],
    category: 'Bewertung',
    icon: 'Building2',
    quickAnswer: 'Eine Immobilienbewertung ermittelt den aktuellen Marktwert Ihrer Immobilie auf Basis von Lage, Zustand und Vergleichsobjekten — als Grundlage für Verkauf, Erbschaft, Finanzierung oder Steueroptimierung.',
    definition: 'Die Immobilienbewertung ist die systematische Ermittlung des Marktwerts einer Immobilie durch einen Sachverständigen anhand anerkannter Verfahren (Vergleichswert, Ertragswert, Sachwert) gemäß der Immobilienwertermittlungsverordnung (ImmoWertV 2021).',
    faqs: [
      { q: 'Was ist der Unterschied zwischen Bewertung und Gutachten?', a: 'Die Immobilienbewertung ist eine kompakte Markteinschätzung für private Zwecke. Das Gutachten ist die vollständige, normkonforme Variante nach § 194 BauGB — Pflicht bei Erbschaft, Scheidung und Steuerverfahren.' },
      { q: 'Wie lange dauert eine Immobilienbewertung?', a: 'Nach Ortstermin und Unterlagenübergabe erhalten Sie das Ergebnis in der Regel nach 7–14 Werktagen. Für dringende Fälle ist eine Expressbearbeitung möglich.' },
      { q: 'Was kostet eine Immobilienbewertung in Düsseldorf?', a: 'Eine kompakte Bewertung beginnt ab 500 €, ein vollständiges Verkehrswertgutachten ab 1.299 €. Sie erhalten vor Auftragserteilung immer ein verbindliches Festpreisangebot.' },
      { q: 'Für welche Immobilien führen Sie Bewertungen durch?', a: 'Wir bewerten Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Gewerbeimmobilien und unbebaute Grundstücke in ganz NRW und auf Anfrage bundesweit.' },
    ],
  },
  {
    slug: 'immobiliengutachten',
    title: 'Immobiliengutachten',
    short: 'Detailliertes Gutachten für jede Lebenslage.',
    long: 'Unser Immobiliengutachten geht in die Tiefe: Bauzustand, Ausstattung, Modernisierungsstand und alle wertbeeinflussenden Faktoren werden umfassend dokumentiert und bewertet.',
    benefits: ['Vor-Ort-Begehung mit Fotodokumentation', 'Plausibilisierung aller Werte', 'Anerkennung durch Banken & Behörden', 'Auf Wunsch Kurz- oder Vollgutachten'],
    category: 'Bewertung',
    icon: 'FileSearch',
    quickAnswer: 'Ein Immobiliengutachten ist eine detaillierte schriftliche Bewertung einer Immobilie, die Bauzustand, Ausstattung, Marktlage und alle wertbeeinflussenden Faktoren dokumentiert.',
    definition: 'Das Immobiliengutachten ist ein schriftliches Sachverständigendokument, das auf Basis einer persönlichen Begehung, Marktdatenanalyse und normierten Bewertungsverfahren den Wert einer Immobilie nachvollziehbar ermittelt und begründet.',
    faqs: [
      { q: 'Wann brauche ich ein Immobiliengutachten?', a: 'Bei Erbschaft, Scheidung, Schenkung, Steuerverfahren, Zwangsversteigerung oder wenn Banken und Behörden einen Nachweis des Marktwerts verlangen.' },
      { q: 'Was enthält ein Immobiliengutachten?', a: 'Ein vollständiges Gutachten enthält: Objektbeschreibung, Markt- und Lageanalyse, Bewertungsverfahren mit Begründung, Anlagen (Grundriss, Fotos, Grundbuchauszug) und das Ergebnis mit Wertermittlungsstichtag.' },
      { q: 'Wird das Gutachten von Gerichten anerkannt?', a: 'Ja. Als öffentlich bestellter und vereidigter Sachverständiger sowie DEKRA-zertifizierter Gutachter haben unsere Gutachten vor Gericht volle Beweiskraft.' },
    ],
  },
  {
    slug: 'verkehrswertgutachten',
    title: 'Verkehrswertgutachten',
    short: 'Nach §194 BauGB — gerichts- und finanzamtsfest.',
    long: 'Das Verkehrswertgutachten nach §194 BauGB ist die Königsdisziplin der Immobilienbewertung. Anerkannt von Gerichten, Finanzämtern und Behörden — die richtige Wahl bei Erbe, Scheidung, Steuer und juristischen Auseinandersetzungen.',
    benefits: ['Vollständig nach ImmoWertV', 'Anerkannt durch Finanzamt & Gericht', 'DEKRA-zertifizierte Methodik', 'Inkl. ausführlicher Begründung'],
    category: 'Bewertung',
    icon: 'Scale',
    quickAnswer: 'Ein Verkehrswertgutachten nach § 194 BauGB ist das einzige Gutachtenformat, das von Gerichten, Finanzämtern und Behörden gleichermaßen anerkannt wird — Pflicht bei Erbschaft, Scheidung und Steuerverfahren.',
    definition: 'Der Verkehrswert (§ 194 BauGB) ist der Preis, der im gewöhnlichen Geschäftsverkehr nach den rechtlichen Gegebenheiten und tatsächlichen Eigenschaften des Grundstücks ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse zu erzielen wäre. Das Gutachten muss nach ImmoWertV 2021 erstellt werden.',
    faqs: [
      { q: 'Wann brauche ich ein Verkehrswertgutachten?', a: 'Bei Erbschaft und Schenkung (Finanzamt-Nachweis nach § 198 ErbStG), Scheidung (neutrale Wertfeststellung für Zugewinnausgleich), Zwangsversteigerung, gerichtlichen Auseinandersetzungen sowie bei Beleihungswertermittlung.' },
      { q: 'Was kostet ein Verkehrswertgutachten?', a: 'Für ein Einfamilienhaus ab 2.499 €, für Mehrfamilienhäuser und Gewerbe ab 3.499 €. Sie erhalten immer ein verbindliches Festpreisangebot vor Auftragserteilung.' },
      { q: 'Kann das Finanzamt mein Gutachten ablehnen?', a: 'Nein. Wenn das Gutachten methodisch korrekt ist und von einem anerkannten Sachverständigen erstellt wurde, muss das Finanzamt den niedrigeren Nachweiswert nach § 198 ErbStG akzeptieren.' },
      { q: 'Wie lange dauert die Erstellung?', a: 'Nach Ortstermin und Eingang aller Unterlagen: 7–14 Werktage. Für gerichtliche Fristen bieten wir auf Anfrage eine Expressbearbeitung an.' },
    ],
  },
  {
    slug: 'kaufberatung-beim-erwerb-von-immobilien',
    title: 'Kaufberatung',
    short: 'Vor dem Notar wissen, was Sie kaufen.',
    long: 'Der Immobilienkauf ist meist die größte Investition Ihres Lebens. Wir begleiten Sie vor Ort, prüfen Bausubstanz, Unterlagen und Marktpreis — und schützen Sie vor teuren Fehlentscheidungen.',
    benefits: ['Gemeinsame Besichtigung', 'Bauliche Risiken identifizieren', 'Preis-Verhandlungsbasis', 'Klare Handlungsempfehlung'],
    category: 'Bewertung',
    icon: 'ShieldCheck',
    quickAnswer: 'Die Kaufberatung durch einen unabhängigen Sachverständigen prüft vor dem Notartermin die Bausubstanz, den Marktwert und alle Risiken einer Immobilie — als Schutz vor überteuerten Kaufpreisen und versteckten Mängeln.',
    definition: 'Die Kaufberatung ist eine immobilienwirtschaftliche Beratungsleistung, bei der ein Sachverständiger das Objekt vor dem Erwerb persönlich besichtigt, Baumängel und Risiken identifiziert, den Marktpreis einschätzt und dem Käufer eine Handlungsempfehlung gibt.',
    faqs: [
      { q: 'Was kostet eine Kaufberatung?', a: 'Ab 599 € — inklusive Ortstermin und schriftlichem Beratungsprotokoll mit Mängelübersicht und Marktpreiseinschätzung.' },
      { q: 'Kann ich die Kaufberatung kurzfristig anfordern?', a: 'Ja. Bei anstehendem Notartermin versuchen wir, den Termin so kurzfristig wie möglich zu realisieren. Melden Sie sich sofort, wenn ein Termin drängt.' },
      { q: 'Was wird beim Ortstermin geprüft?', a: 'Wir prüfen: Bausubstanz (Dach, Keller, Fassade, Fenster), Innenausstattung, Heizung und Haustechnik, Feuchtigkeit und Schimmelspuren sowie die Vollständigkeit der Unterlagen.' },
    ],
  },
  {
    slug: 'restnutzungsdauer',
    title: 'Restnutzungsdauer',
    short: 'Steuerlast senken durch fundiertes Gutachten.',
    long: 'Mit einem Restnutzungsdauer-Gutachten können Sie die AfA Ihrer vermieteten Immobilie deutlich erhöhen und mehrere tausend Euro Steuern pro Jahr sparen — anerkannt durch das Finanzamt.',
    benefits: ['Höhere AfA = weniger Steuern', 'Anerkennung durch das Finanzamt', 'BFH-konforme Methodik', 'Schnelle Bearbeitung'],
    category: 'Bewertung',
    icon: 'TrendingDown',
    quickAnswer: 'Das Restnutzungsdauer-Gutachten weist gegenüber dem Finanzamt nach, dass die wirtschaftliche Nutzungsdauer eines vermieteten Gebäudes kürzer ist als die steuerliche Pauschale — und ermöglicht dadurch eine höhere jährliche Abschreibung (AfA).',
    definition: 'Die wirtschaftliche Restnutzungsdauer ist der Zeitraum, in dem ein Gebäude voraussichtlich noch wirtschaftlich genutzt werden kann. Liegt sie unter der steuerlichen Normnutzungsdauer (50 Jahre = 2 % AfA), kann der Eigentümer nach BFH-Urteil vom 28.07.2021 durch ein Sachverständigengutachten eine höhere AfA-Rate beim Finanzamt durchsetzen.',
    faqs: [
      { q: 'Für wen lohnt sich ein Restnutzungsdauer-Gutachten?', a: 'Für alle Eigentümer vermieteter Immobilien — Wohnungen, Mehrfamilienhäuser oder Gewerbeimmobilien — bei denen die tatsächliche wirtschaftliche Nutzungsdauer unter der steuerlichen Pauschale von 50 Jahren liegt.' },
      { q: 'Wie viel Steuern kann ich konkret sparen?', a: 'Die Ersparnis hängt vom Gebäudewert, Ihrer Steuerlast und der ermittelten Restnutzungsdauer ab. Bei einem Gebäudewert von 500.000 € und einer ermittelten Restnutzungsdauer von 25 Jahren (statt 50) verdoppelt sich die AfA — das entspricht 10.000 € mehr Abschreibung pro Jahr.' },
      { q: 'Akzeptiert das Finanzamt das Gutachten?', a: 'Ja — wenn es von einem anerkannten Sachverständigen nach ImmoWertV-Methodik erstellt wurde. Das BFH-Urteil Az. IX R 25/19 vom 28.07.2021 bestätigt ausdrücklich das Recht auf Nachweis durch Gutachten.' },
    ],
  },
  {
    slug: 'versicherungsschaden-gutachter',
    title: 'Versicherungsschäden',
    short: 'Ihre Ansprüche gegen die Versicherung durchsetzen.',
    long: 'Ob Wasser-, Feuer- oder Sturmschaden — als unabhängiger Gutachter dokumentieren und bewerten wir den Schaden objektiv und unterstützen Sie bei der Auseinandersetzung mit Ihrer Versicherung.',
    benefits: ['Unabhängige Schadensbewertung', 'Vollständige Dokumentation', 'Verhandlung mit Versicherern', 'Beweissichernde Arbeit'],
    category: 'Schaden',
    icon: 'Droplets',
    quickAnswer: 'Als unabhängiger Versicherungsschadengutachter dokumentieren wir den Schaden objektiv, ermitteln die Schadenshöhe und unterstützen Eigentümer dabei, ihre vollen Ansprüche gegenüber der Versicherung durchzusetzen.',
    definition: 'Das Versicherungsschadengutachten ist eine unabhängige Sachverständigenleistung zur Ermittlung und Dokumentation von Gebäudeschäden (Wasser, Brand, Sturm, Hagel) als Grundlage für Versicherungsleistungen oder gerichtliche Auseinandersetzungen.',
    faqs: [
      { q: 'Wann ist ein Gutachter bei Versicherungsschäden sinnvoll?', a: 'Wenn die Versicherung den Schaden ganz oder teilweise ablehnt, die Schadenshöhe streitig ist oder Sie sicherstellen wollen, dass alle Schäden vollständig dokumentiert und geltend gemacht werden.' },
      { q: 'Wie schnell sollte ich nach einem Schaden einen Gutachter beauftragen?', a: 'So früh wie möglich — bevor Sanierungs- oder Instandsetzungsmaßnahmen beginnen. Spuren und Befunde müssen beweissicher dokumentiert werden, bevor sie beseitigt werden.' },
    ],
  },
  {
    slug: 'gutachter-schimmelpilz',
    title: 'Schimmelpilz-Gutachten',
    short: 'Ursache finden, Haftung klären, Sanierung planen.',
    long: 'Schimmel ist ein Gesundheitsrisiko und juristisches Streitthema. Wir identifizieren die Ursache, klären die Haftung zwischen Mieter und Vermieter und empfehlen die richtige Sanierung.',
    benefits: ['Ursachenanalyse mit Messtechnik', 'Mieter- vs. Vermieter-Haftung', 'Sanierungskonzept', 'Gutachten für Gericht'],
    category: 'Schaden',
    icon: 'AlertTriangle',
    quickAnswer: 'Das Schimmelpilz-Gutachten identifiziert die Ursache des Schimmelbefalls (Baumangel oder Nutzungsverhalten), klärt die Haftungsfrage zwischen Mieter und Vermieter und empfiehlt konkrete Sanierungsmaßnahmen.',
    definition: 'Ein Schimmelpilz-Gutachten ist eine technische Sachverständigenleistung, die den Schimmelbefall in einem Gebäude ursachengenau untersucht — mithilfe von Feuchtigkeitsmessungen, Thermographie und Materialproben — und die Haftungsfrage auf Basis von Baurecht und Mietrecht klärt.',
    faqs: [
      { q: 'Wer haftet bei Schimmel — Mieter oder Vermieter?', a: 'Die Haftung hängt von der Ursache ab: Schimmel durch bauliche Mängel (unzureichende Dämmung, Kältebrücken, defekte Bausubstanz) ist Sache des Vermieters. Schimmel durch falsches Lüften oder Heizen ist Mieter-Haftung. Das Gutachten klärt die Ursache eindeutig.' },
      { q: 'Ist ein Schimmelgutachten für das Gericht geeignet?', a: 'Ja. Unser Gutachten dokumentiert die Befunde beweissicher und ist als Beweismittel in mietrechtlichen Verfahren vor Gericht geeignet.' },
      { q: 'Was kostet ein Schimmelpilz-Gutachten?', a: 'Je nach Objektgröße und Aufwand der Analyse ab 599 €. Bei größeren Objekten oder mehreren Schadenstellen erhalten Sie ein individuelles Angebot.' },
    ],
  },
  {
    slug: 'baubegleitung',
    title: 'Baubegleitung',
    short: 'Ihr unabhängiger Qualitätswächter auf der Baustelle.',
    long: 'Während der Bauphase prüfen wir regelmäßig Ausführungsqualität, Bauzeitenplan und Materialeinsatz. So vermeiden Sie teure Mängel, bevor sie unsichtbar in der Wand verschwinden.',
    benefits: ['Regelmäßige Vor-Ort-Termine', 'Mängel sofort dokumentieren', 'Abnahme-Begleitung', 'Schutz Ihrer Investition'],
    category: 'Bau',
    icon: 'HardHat',
    quickAnswer: 'Die Baubegleitung durch einen unabhängigen Sachverständigen prüft während der Bauphase in regelmäßigen Abständen Ausführungsqualität und Mängelfreiheit — bevor Mängel in der Wand verschwinden und später schwer nachzuweisen sind.',
    definition: 'Die Baubegleitung ist eine präventive Qualitätssicherungsmaßnahme, bei der ein Bausachverständiger den Baufortschritt in vereinbarten Phasen kontrolliert, Mängel sofort dokumentiert und Abhilfe einfordert — als unabhängige Instanz zwischen Bauherrn und Bauunternehmer.',
    faqs: [
      { q: 'Wann sollte ich Baubegleitung beauftragen?', a: 'Bei Neubauten generell empfehlenswert. Besonders wichtig bei schlüsselfertigen Häusern, Bauträgerprojekten oder wenn der Bauunternehmer nicht persönlich bekannt ist. Auch bei umfangreichen Sanierungen sinnvoll.' },
      { q: 'Wie viele Termine sind bei Baubegleitung üblich?', a: 'Je nach Projektgröße 5–10 Vor-Ort-Termine zu kritischen Bauphasen: Bodenplatte, Rohbau, Dach, Innenausbau, Haustechnik und Abnahme. Wir passen die Terminplanung an Ihr Projekt an.' },
    ],
  },
  {
    slug: 'gutachter-fur-bauschaden',
    title: 'Bauschäden-Gutachter',
    short: 'Ursachen aufdecken, Verantwortliche benennen.',
    long: 'Risse, Feuchtigkeit, Setzungen — bei Bauschäden zählt eine fundierte Analyse. Wir benennen die Ursache, dokumentieren beweissicher und unterstützen bei der Durchsetzung Ihrer Ansprüche.',
    benefits: ['Ursachenanalyse', 'Beweissicherung', 'Sanierungsempfehlung', 'Gerichtsverwertbar'],
    category: 'Bau',
    icon: 'Hammer',
    quickAnswer: 'Das Bauschaden-Gutachten analysiert Ursache und Ausmaß von Schäden an Gebäuden (Risse, Feuchtigkeit, Setzungen), benennt die Verantwortlichen und empfiehlt Sanierungsmaßnahmen als Grundlage für rechtliche Ansprüche.',
    definition: 'Ein Bauschaden ist eine Abweichung des Ist-Zustands eines Gebäudes vom Soll-Zustand, die auf Planungs-, Ausführungs- oder Materialfehler zurückzuführen ist. Das Bauschaden-Gutachten ermittelt Ursache, Ausmaß und Sanierungskosten beweissicher.',
    faqs: [
      { q: 'Was wird beim Bauschaden-Gutachten geprüft?', a: 'Ursache des Schadens (Planung, Ausführung, Material, Nutzung), Ausmaß und Tiefe des Schadens, Sanierungskonzept mit Kostenaufstellung, Verantwortlichkeit und Verjährungsrelevanz.' },
      { q: 'Wie lange sind Gewährleistungsansprüche bei Baumängeln?', a: 'Bei Bauverträgen nach BGB gelten 5 Jahre Gewährleistung ab Abnahme für Baumängel. Bei arglistigem Verschweigen gilt die Regelverjährung von 3 Jahren ab Kenntnis. Ein Gutachten sichert die Beweise und unterbricht potenziell die Verjährung.' },
    ],
  },
  {
    slug: 'energieausweis',
    title: 'Energieausweis',
    short: 'Pflicht beim Verkauf — wir stellen ihn schnell aus.',
    long: 'Beim Verkauf oder der Vermietung Ihrer Immobilie ist der Energieausweis Pflicht. Wir erstellen Verbrauchs- oder Bedarfsausweis schnell, korrekt und gesetzeskonform.',
    benefits: ['Verbrauchs- oder Bedarfsausweis', 'GEG-konform', 'Innerhalb weniger Tage', 'Festpreis'],
    category: 'Energie',
    icon: 'Zap',
    quickAnswer: 'Der Energieausweis ist beim Verkauf und der Neuvermietung von Immobilien nach dem Gebäudeenergiegesetz (GEG) gesetzlich vorgeschrieben und muss Interessenten unaufgefordert beim Besichtigungstermin vorgelegt werden.',
    definition: 'Der Energieausweis ist ein Dokument nach § 79 ff. GEG, das die Energieeffizienz eines Gebäudes bewertet und in einer Skala von A+ bis H einordnet. Er existiert in zwei Varianten: Verbrauchsausweis (basiert auf Heizkostenabrechnungen) und Bedarfsausweis (basiert auf Gebäudehülle und Heiztechnik).',
    faqs: [
      { q: 'Wann ist ein Energieausweis Pflicht?', a: 'Bei Verkauf oder Neuvermietung jeder Wohnung oder jedes Gebäudes. Wird kein Energieausweis vorgelegt, droht ein Bußgeld bis zu 15.000 €.' },
      { q: 'Verbrauchs- oder Bedarfsausweis — welchen brauche ich?', a: 'Gebäude mit weniger als 5 Wohneinheiten und Baujahr vor 1978 benötigen einen Bedarfsausweis. Bei neueren oder größeren Gebäuden ist der Verbrauchsausweis oft ausreichend und günstiger.' },
      { q: 'Wie schnell erhalte ich den Energieausweis?', a: 'In der Regel innerhalb von 3–5 Werktagen nach Eingang aller nötigen Unterlagen (Grundrisse, Heizkostenabrechnungen oder Baubeschreibung).' },
    ],
  },
  {
    slug: 'energieberatung',
    title: 'Energieberatung',
    short: 'Förderungen sichern, Kosten senken.',
    long: 'Mit einer geförderten Energieberatung (BAFA / KfW) entwickeln wir mit Ihnen einen individuellen Sanierungsfahrplan, der Ihre Heizkosten senkt und den Wert Ihrer Immobilie steigert.',
    benefits: ['BAFA-/KfW-Förderfähig', 'Individueller Sanierungsfahrplan', 'Höhere Förderquoten möglich', 'Wertsteigerung der Immobilie'],
    category: 'Energie',
    icon: 'Leaf',
    quickAnswer: 'Die geförderte Energieberatung durch einen zugelassenen Energieberater (BAFA-Bundesförderung) erstellt einen individuellen Sanierungsfahrplan (iSFP), der schrittweise Maßnahmen zur Energieoptimierung empfiehlt und höhere Förderquoten bei KfW und BAFA sichert.',
    definition: 'Die Energieberatung nach BAFA-Standard umfasst eine vollständige energetische Analyse des Gebäudes und resultiert in einem individuellen Sanierungsfahrplan (iSFP). Der iSFP berechtigt zu einem Bonus von 5 Prozentpunkten auf alle förderfähigen Einzelmaßnahmen bei BAFA und KfW.',
    faqs: [
      { q: 'Ist die Energieberatung gefördert?', a: 'Ja. Das BAFA fördert die Energieberatung für Wohngebäude mit bis zu 80 % der Beratungskosten (max. 1.300 € für Ein-/Zweifamilienhäuser, max. 1.700 € für Gebäude ab 3 WE). Der Antrag muss vor der Beratung gestellt werden.' },
      { q: 'Was bringt mir ein individueller Sanierungsfahrplan (iSFP)?', a: 'Mit einem iSFP erhalten Sie bei jeder förderfähigen Sanierungsmaßnahme 5 Prozentpunkte mehr Förderung von BAFA und KfW. Bei einer Dämmmaßnahme mit 20 % Grundförderung bedeutet das 25 % statt 20 % — ein erheblicher finanzieller Vorteil.' },
      { q: 'Können Sie als Energieberater Förderanträge stellen?', a: 'Ja. Als zugelassene Energieberater (Eintrag in der Bundesexpertenliste) sind wir berechtigt, BAFA- und KfW-Förderanträge zu stellen und den Verwendungsnachweis zu bestätigen.' },
    ],
  },
];
