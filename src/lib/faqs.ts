export type FAQ = { q: string; a: string };
export type FAQCategory = { id: string; label: string; faqs: FAQ[] };

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'allgemein',
    label: 'Allgemein',
    faqs: [
      {
        q: 'Was ist eine Immobilienbewertung?',
        a: 'Eine Immobilienbewertung ermittelt den aktuellen Marktwert Ihrer Immobilie auf Basis von Lage, Zustand, Ausstattung und vergleichbaren Verkäufen. Je nach Zweck erfolgt die Bewertung als kompakte Markteinschätzung oder als vollständiges Verkehrswertgutachten nach § 194 BauGB.',
      },
      {
        q: 'Welche Gutachtenarten gibt es?',
        a: 'Wir unterscheiden zwischen der Immobilienbewertung (kompakt, für private Entscheidungen), dem Verkehrswertgutachten (vollständig, gerichtsfest nach § 194 BauGB), dem Kurzgutachten (Zusammenfassung für Banken und Makler) und dem Restnutzungsdauer-Gutachten (für steuerliche Abschreibungsoptimierung).',
      },
      {
        q: 'Wie läuft eine Bewertung ab?',
        a: 'Zunächst besprechen wir Ihr Anliegen kostenlos per Telefon oder E-Mail. Dann vereinbaren wir einen Ortstermin, bei dem wir die Immobilie besichtigen und alle relevanten Daten aufnehmen. Anschließend werten wir Marktdaten und Unterlagen aus und erstellen das Gutachten — inklusive persönlicher Erläuterung des Ergebnisses.',
      },
      {
        q: 'Sind Sie auch außerhalb von Düsseldorf tätig?',
        a: 'Ja. Unser Schwerpunkt liegt in Düsseldorf und der Metropolregion Rhein-Ruhr, wir arbeiten aber in ganz NRW und auf Anfrage auch bundesweit. Durch unser Partnernetzwerk stellen wir auch überregional eine qualifizierte Bearbeitung sicher.',
      },
      {
        q: 'Muss ich beim Ortstermin persönlich anwesend sein?',
        a: 'Das ist nicht zwingend erforderlich, aber empfehlenswert. Wenn Sie nicht persönlich anwesend sein können, genügt es, uns Zugang zur Immobilie zu ermöglichen — zum Beispiel über eine bevollmächtigte Person oder den Hausverwalter.',
      },
      {
        q: 'Unterliegen meine Daten der Verschwiegenheitspflicht?',
        a: 'Selbstverständlich. Als Sachverständiger bin ich zur Verschwiegenheit verpflichtet. Alle Informationen und Unterlagen, die Sie uns übermitteln, werden ausschließlich zur Erstellung des Gutachtens genutzt und nicht an Dritte weitergegeben.',
      },
    ],
  },
  {
    id: 'kosten',
    label: 'Kosten & Preise',
    faqs: [
      {
        q: 'Was kostet ein Verkehrswertgutachten?',
        a: 'Die Kosten richten sich nach Objekttyp, Größe und Komplexität. Für ein durchschnittliches Einfamilienhaus liegen die Kosten meist zwischen 1.500\u00A0€ und 2.500\u00A0€. Sie erhalten von uns immer einen verbindlichen Festpreis vor Auftragserteilung — ohne versteckte Kosten oder Nachforderungen.',
      },
      {
        q: 'Was kostet eine kompakte Immobilienbewertung?',
        a: 'Für eine marktgerechte Immobilienbewertung ohne Gerichtsfestigkeit rechnen Sie grob mit 500\u00A0€ bis 900\u00A0€, je nach Objektart und Aufwand. Diese eignet sich gut für private Verkaufsentscheidungen, Schenkungen oder Finanzierungsgespräche.',
      },
      {
        q: 'Welche Faktoren beeinflussen den Preis?',
        a: 'Ausschlaggebend sind: Objekttyp (EFH, ETW, MFH, Gewerbe), Wohn- bzw. Nutzfläche, Lage und Baujahr, Anzahl der Gebäude auf dem Grundstück, Komplexität (z. B. Denkmalschutz, Erbbaurecht, Sondernutzungsrechte) sowie die gewünschte Gutachtenform.',
      },
      {
        q: 'Wann und wie muss ich das Honorar zahlen?',
        a: 'Das Honorar wird nach Fertigstellung des Gutachtens in Rechnung gestellt. Wir akzeptieren Überweisung sowie auf Anfrage andere Zahlungsarten. Eine Vorauszahlung wird nicht erhoben — Sie zahlen erst, wenn das Ergebnis vorliegt.',
      },
      {
        q: 'Kann ein Kurzgutachten später zum Vollgutachten erweitert werden?',
        a: 'In vielen Fällen ja. Wenn sich nach einer kompakten Bewertung ein rechtlicher Bedarf ergibt — etwa für ein Nachlassverfahren oder eine Klage — lässt sich die Bewertung häufig zur gerichtsfesten Variante ausbauen. Der bereits geleistete Aufwand wird dabei angerechnet.',
      },
    ],
  },
  {
    id: 'rechtliches',
    label: 'Rechtliches',
    faqs: [
      {
        q: 'Werden Ihre Gutachten vom Finanzamt anerkannt?',
        a: 'Ja. Unsere Verkehrswertgutachten nach § 194 BauGB werden von Finanzämtern bundesweit anerkannt — insbesondere bei Erbschaft, Schenkung und der Berechnung von Grunderwerbsteuer oder Erbschaftsteuer. Als DEKRA-zertifizierter Sachverständiger erfüllen wir alle formalen Anforderungen der Finanzverwaltung.',
      },
      {
        q: 'Wie lange ist ein Gutachten gültig?',
        a: 'Ein Gutachten ist an den Wertermittlungsstichtag gebunden. Als grober Richtwert gilt: Innerhalb von sechs bis zwölf Monaten nach Erstellung ist es für die meisten Zwecke noch verwendbar. Danach können Marktveränderungen eine Aktualisierung erforderlich machen — wir prüfen das gern im Einzelfall.',
      },
      {
        q: 'Was bedeutet DEKRA-zertifiziert?',
        a: 'Die DEKRA-Zertifizierung nach DIN EN ISO/IEC 17024 ist eine akkreditierte Personenzertifizierung und gilt als Goldstandard in der Sachverständigenbranche. Sie bestätigt fachliche Kompetenz, methodisch einwandfreie Arbeitsweise und regelmäßige Rezertifizierung — unabhängig geprüft durch eine anerkannte Zertifizierungsstelle.',
      },
      {
        q: 'Was bedeutet öffentlich bestellt und vereidigt?',
        a: 'Öffentlich bestellte und vereidigte Sachverständige werden von der IHK nach strengen Fachkriterien geprüft und zugelassen. Sie tragen eine besondere Verantwortung für die Richtigkeit ihrer Gutachten und sind zur persönlichen Auftragsbearbeitung verpflichtet. Gerichte und Behörden erkennen ihre Gutachten mit besonderer Beweiskraft an.',
      },
      {
        q: 'Was ist der Unterschied zwischen Bewertung und Verkehrswertgutachten?',
        a: 'Die Immobilienbewertung ist eine kompakte Markteinschätzung — ideal für private Entscheidungen wie Verkauf, Schenkung oder Finanzierungsgespräche. Das Verkehrswertgutachten ist die vollständige, normkonforme Variante nach § 194 BauGB und ImmoWertV — Pflicht bei Erbschaft, Scheidung, Steuerverfahren und Gerichtsverfahren.',
      },
    ],
  },
  {
    id: 'ablauf',
    label: 'Ablauf & Unterlagen',
    faqs: [
      {
        q: 'Welche Unterlagen werden für die Bewertung benötigt?',
        a: 'Idealerweise: aktueller Grundbuchauszug, Lageplan, Grundrisse, Wohnflächenberechnung, Energieausweis, Baupläne, bei Mietobjekten aktuelle Mietverträge. Was fehlt, können wir in vielen Fällen selbst beschaffen. Wir teilen Ihnen vorab genau mit, was wir brauchen.',
      },
      {
        q: 'Was passiert, wenn Unterlagen fehlen oder nicht auffindbar sind?',
        a: 'Kein Grund zur Sorge. Fehlende Unterlagen wie Grundbuchauszug, Liegenschaftskarte oder Baupläne können wir auf Wunsch bei den zuständigen Behörden anfordern. Für das Gutachten arbeiten wir mit dem aus, was vorhanden ist — und weisen offen aus, wenn Daten geschätzt werden mussten.',
      },
      {
        q: 'Wie lange dauert es, bis ich das Gutachten erhalte?',
        a: 'Nach dem Ortstermin und vollständiger Unterlagenübergabe liefern wir das fertige Gutachten in der Regel innerhalb von 7 bis 14 Werktagen. In dringenden Fällen ist auf Anfrage auch eine Expressbearbeitung möglich — sprechen Sie uns einfach an.',
      },
      {
        q: 'Warum ist ein Energieausweis wichtig?',
        a: 'Der Energieausweis ist beim Verkauf oder der Neuvermietung gesetzlich vorgeschrieben und beeinflusst den Wert der Immobilie erheblich. Bei der Wertermittlung fließt die Energieeffizienz in die Beurteilung des Gebäudezustands ein. Wenn kein Energieausweis vorliegt, können wir diesen als zugelassene Energieberater für Sie ausstellen.',
      },
    ],
  },
  {
    id: 'verkehrswert',
    label: 'Verkehrswertgutachten',
    faqs: [
      {
        q: 'Was ist ein Verkehrswertgutachten genau?',
        a: 'Das Verkehrswertgutachten ermittelt nach § 194 BauGB den Preis, der im gewöhnlichen Geschäftsverkehr ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse erzielbar wäre. Es ist das einzige Gutachtenformat, das von Gerichten, Finanzämtern, Notaren und Behörden in gleicher Weise anerkannt wird.',
      },
      {
        q: 'Wann brauche ich ein Verkehrswertgutachten?',
        a: 'Ein Verkehrswertgutachten ist notwendig bei: Erbschaft und Schenkung (Finanzamt-Nachweis), Scheidung (neutrale Wertfeststellung), Zwangsversteigerung, gerichtlichen Auseinandersetzungen, Beleihungswertermittlung sowie bei Immobilienverkauf, wenn ein rechtsicherer Nachweis des Marktwerts gefordert wird.',
      },
      {
        q: 'Wird das Verkehrswertgutachten vom Gericht anerkannt?',
        a: 'Ja. Als öffentlich bestellter und vereidigter Sachverständiger sowie DEKRA-zertifizierter Gutachter erstellen wir Gutachten, die vor Gericht als Beweismittel anerkannt werden. Das Gericht kann uns auch direkt als Sachverständigen beauftragen.',
      },
      {
        q: 'Wie lange dauert die Erstellung eines Verkehrswertgutachtens?',
        a: 'Nach Ortstermin und Eingang aller notwendigen Unterlagen erhalten Sie das fertige Gutachten in der Regel nach 7 bis 14 Werktagen. Für gerichtliche Verfahren mit engen Fristen bieten wir auf Anfrage eine beschleunigte Bearbeitung an.',
      },
    ],
  },
  {
    id: 'restnutzung',
    label: 'Restnutzungsdauer',
    faqs: [
      {
        q: 'Was ist ein Restnutzungsdauer-Gutachten?',
        a: 'Das Restnutzungsdauer-Gutachten ermittelt die wirtschaftlich verbleibende Nutzungsdauer eines Gebäudes. Sie liegt häufig weit unter der steuerlichen Pauschale von 50 Jahren und erlaubt Vermietern, eine höhere jährliche Abschreibung (AfA) geltend zu machen — als Gegengutachten zum Finanzamt.',
      },
      {
        q: 'Wann ist ein solches Gutachten für mich sinnvoll?',
        a: 'Wenn Sie ein vermietetes Objekt besitzen — Wohnung, Mehrfamilienhaus oder Gewerbeimmobilie — und die tatsächliche Restnutzungsdauer unter der steuerlichen Normnutzungsdauer liegt. Das gilt häufig bei älteren Baujahren, umfangreich genutzten Objekten oder Gebäuden mit erhöhtem Renovierungsbedarf.',
      },
      {
        q: 'Wie viel Steuer lässt sich damit sparen?',
        a: 'Das hängt vom Gebäudewert, Ihrer Steuerlast und der ermittelten Restnutzungsdauer ab. In der Praxis können Vermieter durch eine kürzere Restnutzungsdauer mehrere Tausend Euro an Einkommensteuer pro Jahr einsparen — über viele Jahre gerechnet ein erheblicher Betrag. Wir erläutern Ihnen die Auswirkung gern konkret im Erstgespräch.',
      },
      {
        q: 'Wird das Gutachten vom Finanzamt akzeptiert?',
        a: 'Ja — wenn es methodisch korrekt und von einem anerkannten Sachverständigen erstellt wurde. Als DEKRA-zertifizierter und öffentlich bestellter Gutachter entsprechen unsere Gutachten den Anforderungen der Finanzverwaltung. Finanzämter erkennen derartige Gegengutachten nach dem BFH-Urteil vom 28.07.2021 an, sofern sie fachlich einwandfrei sind.',
      },
    ],
  },
  {
    id: 'kaufberatung',
    label: 'Kaufberatung & Bau',
    faqs: [
      {
        q: 'Was umfasst eine Kaufberatung vor dem Notartermin?',
        a: 'Wir besichtigen die Immobilie gemeinsam mit Ihnen, prüfen Bausubstanz, Ausstattung und Zustand auf sichtbare Mängel und geben eine erste Einschätzung zum Marktwert. Sie erhalten im Anschluss ein schriftliches Beratungsprotokoll mit Mängelübersicht und Handlungsempfehlungen — eine solide Verhandlungsgrundlage vor Unterzeichnung des Kaufvertrags.',
      },
      {
        q: 'Was enthält das Beratungsprotokoll?',
        a: 'Das Protokoll dokumentiert alle festgestellten Mängel (von Rissen bis zu Feuchtigkeitsschäden), gibt eine Einschätzung zu erforderlichen Sanierungskosten und bewertet den Zustand des Objekts. Zudem erhalten Sie unsere Marktpreiseinschätzung, damit Sie fundiert verhandeln können.',
      },
      {
        q: 'Wie lange dauert der Ortstermin bei einer Kaufberatung?',
        a: 'Rechnen Sie mit ein bis zwei Stunden — abhängig von Größe und Zustand der Immobilie. Wir nehmen uns die Zeit, die nötig ist, um ein vollständiges Bild zu erhalten. Auf Wunsch sind wir auch beim Gespräch mit Verkäufer oder Makler dabei.',
      },
      {
        q: 'Untersuchen Sie auch Bauschäden und Schimmelpilz?',
        a: 'Ja. Als zertifizierter Bausachverständiger beurteilen wir Schäden an Gebäuden — darunter Risse, Feuchteschäden, Schimmelpilzbefall und bauliche Mängel. Wir klären, wer verantwortlich ist, welche Sanierungsmaßnahmen erforderlich sind und welche Kosten Sie einkalkulieren müssen.',
      },
    ],
  },
];

export type { FAQ, FAQCategory };

// Für Homepage-Teaser (7 Fragen aus verschiedenen Kategorien)
export const FAQS: FAQ[] = [
  FAQ_CATEGORIES[0].faqs[0], // Was ist eine Immobilienbewertung?
  FAQ_CATEGORIES[0].faqs[3], // Außerhalb Düsseldorf?
  FAQ_CATEGORIES[1].faqs[0], // Was kostet ein Verkehrswertgutachten?
  FAQ_CATEGORIES[2].faqs[0], // Finanzamt-Anerkennung?
  FAQ_CATEGORIES[2].faqs[4], // Bewertung vs. Verkehrswertgutachten?
  FAQ_CATEGORIES[3].faqs[0], // Welche Unterlagen?
  FAQ_CATEGORIES[2].faqs[2], // Was bedeutet DEKRA-zertifiziert?
];
