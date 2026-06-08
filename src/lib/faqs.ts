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
      {
        q: 'Was ist der Unterschied zwischen einem Gutachter und einem Makler?',
        a: 'Ein Immobiliengutachter ist ein unabhängiger, zertifizierter Sachverständiger ohne finanzielles Interesse am Ergebnis — er ermittelt den Marktwert objektiv nach normierten Verfahren. Ein Makler vertritt hingegen die Verkäufer- oder Käuferseite und hat ein wirtschaftliches Interesse an einem möglichst hohen Verkaufspreis.',
      },
      {
        q: 'Was ist die ImmoWertV 2021?',
        a: 'Die Immobilienwertermittlungsverordnung 2021 (ImmoWertV) ist die gesetzliche Grundlage für die Wertermittlung von Grundstücken in Deutschland. Sie legt die anerkannten Verfahren (Vergleichswert, Ertragswert, Sachwert) sowie Mindestanforderungen an Gutachten fest. Alle unsere Gutachten entsprechen der ImmoWertV 2021.',
      },
      {
        q: 'Was ist ein Bodenwert und warum ist er wichtig?',
        a: 'Der Bodenwert ist der Wert eines Grundstücks ohne die darauf errichteten Gebäude. Er wird von Gutachterausschüssen anhand von Bodenrichtwerten ermittelt und ist eine Grundlage für das Sachwert- und Ertragswertverfahren. Bei Abrissgrundstücken oder Neubauprojekten ist der Bodenwert oft der entscheidende Wertfaktor.',
      },
      {
        q: 'Ist eine Fernbewertung ohne Ortstermin möglich?',
        a: 'Eine vollständige Verkehrswertermittlung erfordert immer einen Ortstermin. Für eine erste Orientierung oder interne Zwecke können wir auf Basis von Unterlagen und Bildmaterial jedoch eine schriftliche Kurzeinschätzung vornehmen. Diese ersetzt kein Gutachten, gibt aber eine fundierte erste Richtung.',
      },
      {
        q: 'Was bedeutet "gerichtsfest" bei einem Gutachten?',
        a: 'Gerichtsfest bedeutet, dass ein Gutachten methodisch, formal und inhaltlich den Anforderungen entspricht, die ein Gericht an ein Beweismittel stellt. Das setzt voraus, dass der Gutachter öffentlich bestellt und vereidigt oder entsprechend zertifiziert ist, das Gutachten nach ImmoWertV erstellt wurde und alle wertrelevanten Faktoren nachvollziehbar begründet sind.',
      },
      {
        q: 'Kann ich das Gutachten für mehrere Zwecke nutzen?',
        a: 'Ja. Ein Verkehrswertgutachten nach § 194 BauGB wird sowohl vom Finanzamt als auch von Gerichten, Banken und Notaren anerkannt. Sie können dasselbe Gutachten also für Erbschaftsteuer, Scheidungsauseinandersetzung und Bankfinanzierung nutzen — ohne ein neues in Auftrag geben zu müssen.',
      },
      {
        q: 'Wie aktuell muss ein Gutachten sein?',
        a: 'Gutachten sind an den Wertermittlungsstichtag gebunden. Für die meisten behördlichen und gerichtlichen Zwecke wird ein Gutachten innerhalb von 6 bis 12 Monaten als aktuell anerkannt. Bei starken Marktveränderungen oder bei langen Verfahrensdauern kann eine Aktualisierung erforderlich werden.',
      },
      {
        q: 'Erstellen Sie auch Gutachten für gewerbliche Immobilien?',
        a: 'Ja. Wir bewerten Büro- und Praxisgebäude, Lagerhallen, Einzelhandelsflächen, Produktionsstätten und gemischt genutzte Objekte. Für gewerbliche Immobilien wenden wir das Ertragswertverfahren an, das den nachhaltigen Mietertrag als Wertgrundlage nutzt.',
      },
    ],
  },
  {
    id: 'kosten',
    label: 'Kosten & Preise',
    faqs: [
      {
        q: 'Was kostet ein Verkehrswertgutachten?',
        a: 'Die Kosten richten sich nach Objekttyp, Größe und Komplexität. Für ein durchschnittliches Einfamilienhaus liegen die Kosten meist zwischen 1.500 € und 2.500 €. Sie erhalten von uns immer einen verbindlichen Festpreis vor Auftragserteilung — ohne versteckte Kosten oder Nachforderungen.',
      },
      {
        q: 'Was kostet eine kompakte Immobilienbewertung?',
        a: 'Für eine marktgerechte Immobilienbewertung ohne Gerichtsfestigkeit rechnen Sie grob mit 500 € bis 900 €, je nach Objektart und Aufwand. Diese eignet sich gut für private Verkaufsentscheidungen, Schenkungen oder Finanzierungsgespräche.',
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
      {
        q: 'Wer trägt die Gutachtenkosten bei einer Scheidung?',
        a: 'Bei einer einvernehmlichen Scheidung teilen die Parteien die Kosten häufig hälftig. Beauftragen beide Seiten eigene Gutachter, trägt jede Partei die eigenen Kosten. Im Streitfall entscheidet das Familiengericht über die Kostenverteilung. Ein gemeinsam beauftragtes neutrales Gutachten ist meist die günstigste Lösung.',
      },
      {
        q: 'Kann ich die Gutachtenkosten von der Steuer absetzen?',
        a: 'Gutachtenkosten können in bestimmten Situationen steuerlich abgesetzt werden: Bei vermieteten Immobilien als Werbungskosten, bei betrieblichen Liegenschaften als Betriebsausgaben, sowie im Rahmen von Erbschafts- oder Schenkungsteuerverfahren als Nachlassverbindlichkeit. Wir empfehlen, die steuerliche Behandlung mit Ihrem Steuerberater abzustimmen.',
      },
      {
        q: 'Gibt es eine Expressbearbeitung bei dringenden Fällen?',
        a: 'Ja. Bei nachgewiesenem Bedarf — z. B. bevorstehende Gerichtsverhandlung, Notartermin oder behördliche Frist — ist in vielen Fällen eine beschleunigte Bearbeitung möglich. Sprechen Sie uns direkt an, damit wir gemeinsam eine Lösung finden.',
      },
      {
        q: 'Ist die Ersteinschätzung wirklich kostenlos?',
        a: 'Ja. Das Erstgespräch per Telefon oder E-Mail ist für Sie vollkommen kostenlos und unverbindlich. Wir besprechen Ihr Anliegen, klären, welches Gutachten Sie benötigen, und unterbreiten Ihnen ein konkretes Festpreisangebot — ohne jede Verpflichtung zur Auftragserteilung.',
      },
      {
        q: 'Gibt es einen Unterschied bei den Kosten für Düsseldorf vs. andere Städte?',
        a: 'Nein. Die Honorare richten sich nach Objektart und Gutachtenaufwand, nicht nach dem Standort. Die Anfahrt ist im Festpreis für unsere Hauptregion (Düsseldorf und Metropolregion NRW) enthalten. Bei entfernteren Standorten sprechen wir ggf. eine Reisekostenpauschale im Angebot offen aus.',
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
      {
        q: 'Was ist § 194 BauGB genau?',
        a: '§ 194 Baugesetzbuch definiert den Verkehrswert (Marktwert) als den Preis, "der in dem Zeitpunkt, auf den sich die Ermittlung bezieht, im gewöhnlichen Geschäftsverkehr nach den rechtlichen Gegebenheiten und tatsächlichen Eigenschaften, der sonstigen Beschaffenheit und der Lage des Grundstücks ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse zu erzielen wäre." Diese Definition ist die verbindliche Grundlage für alle unsere Gutachten.',
      },
      {
        q: 'Was ist das Ertragswertverfahren?',
        a: 'Das Ertragswertverfahren wird bei Renditeobjekten wie Mietwohnhäusern, Büro- oder Einzelhandelsimmobilien eingesetzt. Es ermittelt den Wert auf Basis der nachhaltig erzielbaren Mieteinnahmen abzüglich Bewirtschaftungskosten, kapitalisiert mit einem marktüblichen Liegenschaftszins. Das Ergebnis gibt Aufschluss darüber, welchen Preis ein rationaler Investor für das Objekt zahlen würde.',
      },
      {
        q: 'Was ist das Sachwertverfahren?',
        a: 'Das Sachwertverfahren bewertet eine Immobilie auf Basis des Bodenwerts plus der Herstellungskosten des Gebäudes abzüglich Altersabschreibung. Es wird eingesetzt, wenn vergleichbare Objekte fehlen oder kein Mietertrag vorhanden ist — typisch für eigengenutzte Ein- und Zweifamilienhäuser. Das Verfahren ist in der ImmoWertV normiert.',
      },
      {
        q: 'Was ist ein Gutachterausschuss?',
        a: 'Gutachterausschüsse sind unabhängige Einrichtungen der Kommunen, die Bodenrichtwerte, Vergleichswerte und Marktberichte für ihren Zuständigkeitsbereich veröffentlichen. Als Sachverständiger haben wir Zugriff auf diese Daten und nutzen sie als eine der Datengrundlagen für unsere Gutachten.',
      },
      {
        q: 'Kann das Finanzamt meinen vom Gutachter festgestellten Wert ablehnen?',
        a: 'Das Finanzamt kann zunächst einen eigenen Wert nach dem BewG ansetzen. Als Steuerpflichtiger können Sie jedoch gemäß § 198 ErbStG durch ein qualifiziertes Sachverständigengutachten einen niedrigeren Wert nachweisen. Das Finanzamt ist dann verpflichtet, diesen niedrigeren Nachweiswert zu akzeptieren — vorausgesetzt, das Gutachten ist methodisch korrekt.',
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
      {
        q: 'Wie weit im Voraus sollte ich einen Termin anfragen?',
        a: 'Für normale Fälle empfehlen wir, uns mindestens 1 bis 2 Wochen vor dem gewünschten Termin zu kontaktieren. Bei eiligen Anlässen — z. B. bevorstehende Notartermine oder Gerichtsfristen — melden Sie sich sofort: Wir prüfen, was kurzfristig möglich ist, und versuchen Ihren Bedarf zu erfüllen.',
      },
      {
        q: 'Erhalte ich das Gutachten auch digital?',
        a: 'Ja. Das fertige Gutachten erhalten Sie standardmäßig als unterschriebenes PDF per E-Mail. Auf Wunsch liefern wir zusätzlich eine gedruckte und gebundene Ausfertigung per Post — empfehlenswert für Gerichtsakten oder behördliche Einreichungen.',
      },
      {
        q: 'Kann das Gutachten auch auf Englisch erstellt werden?',
        a: 'Ein vollständiges Verkehrswertgutachten nach deutschem Recht (§ 194 BauGB) wird standardmäßig in Deutsch erstellt, da die rechtlichen Grundlagen deutschsprachig sind. Für internationale Investoren und Banken können wir auf Anfrage eine englischsprachige Zusammenfassung (Executive Summary) anfertigen.',
      },
      {
        q: 'Was kann ich tun, wenn ich mit dem Gutachtenergebnis nicht einverstanden bin?',
        a: 'Zunächst sprechen Sie uns an — wir erläutern die Bewertungsmethodik und Datenbasis transparent. Wenn Sie konkrete Einwände haben (z. B. nicht berücksichtigte Modernisierungen), prüfen wir, ob eine Anpassung des Stichtags oder eine Ergänzung gerechtfertigt ist. Als unabhängige Sachverständige sind wir an das Ergebnis der Wertermittlung gebunden, nicht an Ihren Wunschpreis.',
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
      {
        q: 'Was ist der Unterschied zwischen Verkehrswert und Kaufpreis?',
        a: 'Der Verkehrswert ist ein objektiver Marktwert, der durch normierte Verfahren ermittelt wird. Der Kaufpreis ist das Ergebnis einer Verhandlung und kann höher oder niedriger als der Verkehrswert ausfallen — je nach Angebot und Nachfrage, Verhandlungsgeschick und individuellen Verhältnissen. Der Sachverständige ermittelt den Verkehrswert; über den Kaufpreis entscheiden Käufer und Verkäufer.',
      },
      {
        q: 'Was ist ein Wertermittlungsstichtag?',
        a: 'Der Wertermittlungsstichtag ist das Datum, auf das sich die Wertermittlung bezieht. Er kann in der Vergangenheit liegen — z. B. bei Erbschaftsteuer der Tag des Erbfalls — oder der aktuelle Bewertungstag sein. Alle Markt- und Objektdaten werden auf diesen Stichtag bezogen, was die Vergleichbarkeit und rechtliche Verlässlichkeit sicherstellt.',
      },
      {
        q: 'Kann ich ein zweites unabhängiges Gutachten beauftragen?',
        a: 'Ja. Im Streitfall — z. B. wenn Parteien unterschiedliche Werte behaupten — haben beide Seiten das Recht, eigene Sachverständige zu beauftragen. Das Gericht bewertet dann, welchem Gutachten es mehr Glauben schenkt, oder bestellt einen eigenen Sachverständigen. Ein methodisch einwandfreies Gutachten hat dabei erhebliche Beweiskraft.',
      },
      {
        q: 'Für welche Immobilientypen erstellen Sie Verkehrswertgutachten?',
        a: 'Wir erstellen Verkehrswertgutachten für Einfamilienhäuser, Doppel- und Reihenhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Wohn- und Geschäftshäuser, Gewerbeimmobilien sowie unbebaute Grundstücke. Auch Sonderobjekte wie Denkmalimmobilien oder Erbbaurechtsgrundstücke bewerten wir auf Anfrage.',
      },
      {
        q: 'Was passiert, wenn Finanzamt und Gutachter unterschiedliche Werte haben?',
        a: 'Das Finanzamt setzt zunächst einen eigenen Wert nach dem Bewertungsgesetz an. Liegt Ihr Gutachtenwert darunter, können Sie ihn gemäß § 198 ErbStG als Nachweiswert geltend machen. Das Finanzamt muss diesen niedrigeren Wert akzeptieren, wenn das Gutachten methodisch korrekt ist. In vielen Fällen führt ein Gutachten zu erheblich niedrigerer Erbschafts- oder Schenkungsteuer.',
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
      {
        q: 'Was ist die Normnutzungsdauer nach ImmoWertV?',
        a: 'Die Normnutzungsdauer ist die pauschale wirtschaftliche Lebensdauer eines Gebäudes, die das Finanzamt standardmäßig ansetzt — bei Wohngebäuden in der Regel 50 Jahre (2 % AfA pro Jahr). Durch ein Gutachten können Vermieter nachweisen, dass die tatsächliche Restnutzungsdauer kürzer ist, was eine höhere AfA-Rate ermöglicht.',
      },
      {
        q: 'Was ist das BFH-Urteil vom 28.07.2021 und was ändert es?',
        a: 'Mit dem Urteil Az. IX R 25/19 hat der Bundesfinanzhof bestätigt, dass Steuerpflichtige eine kürzere Restnutzungsdauer für Gebäude durch ein qualifiziertes Gutachten nachweisen können — unabhängig von der Tabelle der AfA-Verordnung. Das Finanzamt ist dann verpflichtet, die nachgewiesene kürzere Nutzungsdauer anzuerkennen, solange das Gutachten methodisch einwandfrei ist.',
      },
      {
        q: 'Gilt das Restnutzungsdauer-Gutachten auch für Gewerbeimmobilien?',
        a: 'Ja. Auch bei gewerblich genutzten Immobilien — Büros, Praxen, Lagerhallen, Einzelhandelsflächen — kann eine kürzere wirtschaftliche Restnutzungsdauer nachgewiesen werden, wenn die Substanz, der Zustand oder die wirtschaftliche Obsoleszenz des Objekts dies rechtfertigt.',
      },
      {
        q: 'Wie weit kann die Restnutzungsdauer von der Normnutzungsdauer abweichen?',
        a: 'Die Abweichung hängt vom Zustand, den Modernisierungen und der wirtschaftlichen Verwertbarkeit des Objekts ab. In der Praxis werden bei älteren Bestandsobjekten Restnutzungsdauern von 20 bis 35 Jahren festgestellt, was die AfA-Rate von 2 % auf 2,9 % bis 5 % erhöhen kann. Die konkrete Ermittlung erfolgt nach anerkannten Methoden der ImmoWertV.',
      },
      {
        q: 'Kann ich mit einem bestehenden Gutachten eine Steuerkorrektur rückwirkend beantragen?',
        a: 'Unter bestimmten Umständen ja: Wenn Steuerbescheide noch nicht bestandskräftig sind oder ein Einspruch läuft, kann ein Gutachten auch rückwirkend eingebracht werden. Sprechen Sie dazu vorab mit Ihrem Steuerberater, damit der Einreichungszeitpunkt optimal gewählt wird.',
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
      {
        q: 'Was ist Baubegleitung und wann brauche ich sie?',
        a: 'Baubegleitung bedeutet, dass ein unabhängiger Sachverständiger Ihren Neubau oder Umbau in regelmäßigen Abständen besichtigt und die Ausführungsqualität prüft. Sie schützt vor Baumängeln, die nach der Abnahme schwer nachzuweisen sind. Besonders empfehlenswert bei Neubauprojekten, wenn Sie den Bauunternehmer nicht persönlich kennen.',
      },
      {
        q: 'Wann brauche ich einen Bausachverständigen?',
        a: 'Ein Bausachverständiger wird benötigt bei: Kauf einer gebrauchten Immobilie (Zustandscheck), Abnahme eines Neubaus oder Umbaus, Streit über Baumängel zwischen Eigentümer und Handwerker, Feuchtigkeitsschäden oder Schimmelbefall sowie Versicherungsschäden, bei denen die Schadenshöhe dokumentiert werden muss.',
      },
      {
        q: 'Was kostet eine Kaufberatung?',
        a: 'Die Kaufberatung mit Ortstermin und schriftlichem Protokoll beginnt ab 599 €. Der genaue Preis hängt von Objektgröße und Anreise ab. Verglichen mit dem Risiko, eine Immobilie mit versteckten Schäden zu kaufen, ist dies eine sehr günstige Absicherung — oft ersparen wir unseren Mandanten ein Vielfaches der Gutachtenkosten.',
      },
      {
        q: 'Können Sie auch bei Neubauten prüfen, ob alles korrekt ausgeführt wurde?',
        a: 'Ja. Wir begleiten die Bauabnahme und prüfen, ob die vereinbarten Leistungen korrekt und mängelfrei ausgeführt wurden. Werden Mängel festgestellt, dokumentieren wir diese rechtssicher — als Grundlage für Mängelrügen gegenüber dem Bauunternehmer.',
      },
      {
        q: 'Was ist zu beachten, wenn ich eine Immobilie beim Zwangsversteigerungstermin ersteigern möchte?',
        a: 'Vor dem Biettermin sollten Sie das Verkehrswertgutachten des Gerichts einsehen und — falls Zugang möglich — eine eigene Besichtigung veranlassen. Wir können das gerichtliche Gutachten auf Plausibilität prüfen und Ihnen eine unabhängige Einschätzung geben, damit Sie ein fundiertes Höchstgebot kalkulieren.',
      },
    ],
  },
  {
    id: 'scheidung-erbschaft',
    label: 'Scheidung & Erbschaft',
    faqs: [
      {
        q: 'Was passiert mit einer gemeinsamen Immobilie bei der Scheidung?',
        a: 'Bei einer Scheidung muss der Wert der gemeinsamen Immobilie für den Zugewinnausgleich ermittelt werden. Ein neutrales Gutachten eines unabhängigen Sachverständigen ist die fairste Grundlage für beide Parteien und verhindert kostspielige Streitigkeiten. Alternativ kann auch eine Teilungsversteigerung beantragt werden, wenn keine Einigung möglich ist.',
      },
      {
        q: 'Muss ich ein Gutachten beim Nachlassgericht einreichen?',
        a: 'Das Nachlassgericht selbst fordert kein Gutachten an. Allerdings verlangt das Finanzamt bei der Festsetzung der Erbschaftsteuer häufig einen Nachweis des Grundstückswerts. Liegt der tatsächliche Wert unter dem vom Finanzamt angesetzten Wert, können Sie gemäß § 198 ErbStG durch ein Gutachten eine niedrigere Bewertung nachweisen.',
      },
      {
        q: 'Wie lange dauert ein Erbschaftsgutachten?',
        a: 'Wie jedes Verkehrswertgutachten dauert auch ein Erbschaftsgutachten nach Ortstermin und Unterlagenübergabe in der Regel 7 bis 14 Werktage. Der Wertermittlungsstichtag ist dabei der Todestag des Erblassers — nicht das Datum des Gutachtens. Wichtig ist, das Gutachten rechtzeitig vor den Einspruchsfristen beim Finanzamt einzureichen.',
      },
      {
        q: 'Kann das Finanzamt den Immobilienwert selbst schätzen?',
        a: 'Ja. Das Finanzamt ermittelt zunächst einen Grundstückswert nach dem Bewertungsgesetz (§§ 157 ff. BewG) — oft mithilfe des Vergleichswert- oder Ertragswertverfahrens. Dieser Wert kann erheblich über dem tatsächlichen Marktwert liegen. Mit einem Gutachten nach § 198 ErbStG können Erben einen niedrigeren Nachweiswert geltend machen.',
      },
      {
        q: 'Was ist eine Zugewinngemeinschaft und wie wirkt sie auf Immobilien?',
        a: 'In einer Zugewinngemeinschaft (gesetzlicher Güterstand) behält jeder Ehegatte sein Vermögen getrennt, beim Auseinandergehen wird jedoch der Zugewinn (Wertzuwachs) ausgeglichen. Für Immobilien bedeutet das: Der Anfangswert bei Heirat und der Endwert bei Scheidung müssen ermittelt werden. Ein Gutachter bestimmt den Verkehrswert zum jeweiligen Stichtag.',
      },
      {
        q: 'Wie wird eine Immobilie zwischen mehreren Erben aufgeteilt?',
        a: 'Mehrere Erben bilden eine Erbengemeinschaft. Diese kann die Immobilie gemeinsam verkaufen, einen Erben auszahlen (dafür ist ein Gutachten zur Wertfeststellung erforderlich) oder sie aufteilen, wenn eine Realteilung rechtlich möglich ist. Ein neutrales Gutachten schützt alle Erben vor einer unfairen Bewertung.',
      },
      {
        q: 'Was ist ein Teilungsversteigerungsverfahren?',
        a: 'Eine Teilungsversteigerung ist ein gerichtliches Verfahren zur Aufhebung einer Eigentumsgemeinschaft (Erbengemeinschaft oder Scheidung), wenn sich die Beteiligten nicht einigen können. Das Gericht beauftragt einen Sachverständigen zur Ermittlung des Verkehrswerts, der als Grundlage für das Mindestgebot dient. Wir können als gerichtlich bestellte Sachverständige tätig werden.',
      },
      {
        q: 'Wann ist ein Gutachten bei einer Schenkung steuerlich sinnvoll?',
        a: 'Eine Schenkung von Immobilien unterliegt der Schenkungsteuer auf Basis des Grundstückswerts. Liegt der tatsächliche Verkehrswert unter dem Finanzamt-Ansatz, kann ein Gutachten die Steuerlast erheblich senken. Bei Freibeträgen nahe am Schenkungswert kann die richtige Wertermittlung den Unterschied zwischen Steuerpflicht und Steuerfreiheit ausmachen.',
      },
      {
        q: 'Kann ein Gutachten auch rückwirkend für einen vergangenen Stichtag erstellt werden?',
        a: 'Ja. Gutachten können rückwirkend auf jeden vergangenen Stichtag erstellt werden — etwa auf den Todestag des Erblassers oder den Tag der Heirat. Die Wertermittlung basiert dann auf den Marktdaten und dem Objektzustand zum jeweiligen Datum. Archivdaten, historische Bodenrichtwerte und Dokumentation des Gebäudezustands sind die Grundlage.',
      },
      {
        q: 'Ist ein Gutachten bei der Erbauseinandersetzung zwischen Geschwistern notwendig?',
        a: 'Rechtlich nicht zwingend, aber dringend empfohlen. Ohne neutralen Sachverständigen entstehen häufig Streitigkeiten über den "richtigen" Wert, die zu teuren Rechtsstreitigkeiten führen. Ein gemeinsam beauftragtes Gutachten schafft eine anerkannte Grundlage für alle Beteiligten und spart langfristig Zeit und Kosten.',
      },
    ],
  },
  {
    id: 'markt',
    label: 'Immobilienmarkt',
    faqs: [
      {
        q: 'Wie entwickeln sich Immobilienpreise in Düsseldorf 2026?',
        a: 'Der Düsseldorfer Immobilienmarkt zeigt 2026 eine Stabilisierung nach dem Zinsanstieg 2022–2023. In bevorzugten Lagen wie Oberkassel, Pempelfort und Golzheim halten die Preise. In weniger gefragten Randlagen gibt es selektive Korrekturen. Als lokaler Sachverständiger beobachten wir den Markt kontinuierlich und fließen aktuelle Daten in jede Bewertung ein.',
      },
      {
        q: 'Was beeinflusst den Wert meiner Immobilie am stärksten?',
        a: 'Die drei wichtigsten Faktoren sind: (1) Lage und Mikrolage — Stadtteil, Infrastruktur, Lärmbelastung, Schulen; (2) Zustand und Baujahr — Modernisierungsgrad, Energieeffizienz, Dachzustand; (3) Größe und Grundriss — Wohnfläche, Raumaufteilung, Balkon/Terrasse/Garten. Weitere Faktoren: Energieausweis-Klasse, Aufzug (ab 3. OG), Stellplatz und aktuelle Marktnachfrage.',
      },
      {
        q: 'Wie unterscheidet sich der Immobilienmarkt Düsseldorf von NRW?',
        a: 'Düsseldorf hat als Landeshauptstadt und Wirtschaftsstandort strukturell höhere Preise als der NRW-Durchschnitt. Städte wie Wuppertal, Duisburg oder Hagen liegen deutlich darunter. Innerhalb der Metropolregion zeigt Köln ähnliche Preisniveaus, während Meerbusch und Ratingen als attraktive Umlandgemeinden von Düsseldorfer Nachfrage profitieren.',
      },
      {
        q: 'Wie wirken sich steigende Zinsen auf Immobilienwerte aus?',
        a: 'Steigende Zinsen erhöhen die Finanzierungskosten für Käufer, was die Kaufkraft und damit die Nachfrage senkt. Bei Renditeobjekten steigt der Kapitalisierungszins im Ertragswertverfahren, was c.p. zu niedrigeren Ertragswerten führt. Die Auswirkungen variieren je nach Marktsegment und Lagequalität stark.',
      },
      {
        q: 'Was ist eine Mikrolage und warum ist sie so entscheidend?',
        a: 'Die Mikrolage bezeichnet die unmittelbare Umgebung einer Immobilie — also die konkrete Straße, die Nachbarschaft, Lärmquellen, Grünflächen und Infrastruktur. Zwei Objekte im gleichen Stadtteil können durch unterschiedliche Mikrolagen 20–30 % im Wert abweichen. Als lokaler Sachverständiger kennen wir die Mikrolagen in Düsseldorf und der Metropolregion aus eigener Erfahrung.',
      },
      {
        q: 'Wie wird der Vergleichswert bei einer Bewertung ermittelt?',
        a: 'Das Vergleichswertverfahren nutzt tatsächlich erzielte Kaufpreise ähnlicher Objekte (Vergleichsobjekte) als Grundlage. Die Vergleichspreise werden vom Gutachterausschuss veröffentlicht oder aus Marktdatenbanken bezogen. Abweichungen zwischen Bewertungsobjekt und Vergleichsobjekten werden durch Zu- und Abschläge berücksichtigt.',
      },
      {
        q: 'Was ist der Unterschied zwischen Marktwert und Beleihungswert?',
        a: 'Der Marktwert (Verkehrswert nach § 194 BauGB) ist der aktuelle erzielbare Preis im freien Markt. Der Beleihungswert ist ein konservativer, langfristig stabiler Wert, den Banken für die Kreditvergabe nutzen — er liegt typischerweise 20–30 % unter dem Verkehrswert, um Marktschwankungen abzupuffern. Beide Werte haben unterschiedliche Zwecke.',
      },
      {
        q: 'Wann ist der beste Zeitpunkt für eine Immobilienbewertung?',
        a: 'Eine Immobilienbewertung ist immer dann sinnvoll, wenn Sie eine wichtige Entscheidung treffen — Kauf, Verkauf, Erbschaft, Finanzierung oder Steueroptimierung. Es gibt keinen "besten" Marktmoment für eine Bewertung, da der Sachverständige immer den aktuellen Stichtag bewertet. Für Steuerverfahren ist der gesetzliche Stichtag maßgeblich.',
      },
      {
        q: 'Was sind Bodenrichtwerte und wie werden sie genutzt?',
        a: 'Bodenrichtwerte sind durchschnittliche Lagewerte des Bodens je Quadratmeter, die Gutachterausschüsse für verschiedene Zonen einer Stadt ermitteln und regelmäßig aktualisieren. Sie sind eine wichtige Grundlage für Sachwert- und Ertragswertverfahren und werden in NRW im BORIS.NRW-Portal veröffentlicht.',
      },
      {
        q: 'Wie beeinflusst der Energieausweis die Immobilienbewertung?',
        a: 'Seit dem Gebäudeenergiegesetz (GEG) fließt die Energieeffizienz zunehmend in die Wertermittlung ein. Objekte mit schlechter Energieklasse (F–H) haben oft Abschläge, da zukünftige Sanierungspflichten und höhere Betriebskosten eingepreist werden. Gebäude mit guter Energieklasse (A–C) erzielen in der Regel Aufschläge gegenüber vergleichbaren Objekten.',
      },
    ],
  },
  {
    id: 'energie',
    label: 'Energieausweis & Beratung',
    faqs: [
      {
        q: 'Ab wann ist ein Energieausweis beim Verkauf Pflicht?',
        a: 'Beim Verkauf oder der Neuvermietung von Gebäuden oder Wohnungen ist ein Energieausweis nach dem Gebäudeenergiegesetz (GEG) zwingend vorgeschrieben. Er muss dem Interessenten unaufgefordert bereits bei der Besichtigung vorgelegt und dem Käufer/Mieter ausgehändigt werden. Verstöße können mit Bußgeldern bis zu 15.000 € geahndet werden.',
      },
      {
        q: 'Was kostet ein Energieausweis?',
        a: 'Ein Verbrauchsausweis beginnt bei ca. 80 € bis 150 €, ein Bedarfsausweis liegt je nach Objektgröße zwischen 300 € und 600 €. Als zugelassene Energieberater erstellen wir beide Varianten — schnell, GEG-konform und zu einem fixen Preis, den wir Ihnen vorab nennen.',
      },
      {
        q: 'Was ist der Unterschied zwischen Verbrauchs- und Bedarfsausweis?',
        a: 'Der Verbrauchsausweis basiert auf dem tatsächlichen Energieverbrauch der Bewohner der letzten 3 Jahre — günstig, aber vom Nutzerverhalten abhängig. Der Bedarfsausweis ermittelt den theoretischen Energiebedarf des Gebäudes auf Basis von Bausubstanz, Heizungsanlage und Dämmung — unabhängiger und aussagekräftiger, besonders bei Altbauten und Gebäuden mit weniger als 5 Wohnungen Pflicht.',
      },
      {
        q: 'Wie beeinflusst der Energieausweis den Immobilienwert?',
        a: 'Studien belegen: Objekte mit guter Energieklasse (A–C) erzielen Preisaufschläge von 5–15 % gegenüber vergleichbaren Objekten mit schlechter Energieklasse (F–H). Zudem steigen bei schlecht gedämmten Gebäuden die Betriebskosten und potenzielle Sanierungskosten, was die Kaufbereitschaft senkt. Ein guter Energieausweis ist ein echtes Verkaufsargument.',
      },
      {
        q: 'Was ist ein individueller Sanierungsfahrplan (iSFP)?',
        a: 'Der individuelle Sanierungsfahrplan (iSFP) ist eine energetische Beratungsleistung nach GEG, die schrittweise Sanierungsmaßnahmen für ein Gebäude empfiehlt und priorisiert. Ein iSFP wird von einem zugelassenen Energieberater (wie wir) erstellt und berechtigt zu erhöhten Fördersätzen bei BAFA und KfW — bis zu 5 Prozentpunkte Bonus auf förderfähige Maßnahmen.',
      },
      {
        q: 'Welche Förderungen gibt es für energetische Sanierung 2026?',
        a: 'Die wichtigsten Förderprogramme 2026: BAFA-Bundesförderung Einzelmaßnahmen (BEG EM) für Dämmung, Fenster, Heiztechnik (15–25 % Zuschuss, plus iSFP-Bonus). KfW-Bundesförderung Effizienzgebäude (KfW 261) für umfassende Sanierungen (Kredit bis 150.000 €, Tilgungszuschuss bis 45 %). Voraussetzung ist stets ein zugelassener Energieberater zur Antragstellung.',
      },
      {
        q: 'Kann ich mit einer energetischen Sanierung den Immobilienwert steigern?',
        a: 'Ja. Eine energetische Sanierung (Dämmung, neue Fenster, Wärmepumpe) kann den Immobilienwert je nach Ausgangszustand und Markt um 5–20 % steigern, besonders wenn dadurch die Energieklasse deutlich verbessert wird. Wir beraten Sie, welche Maßnahmen das beste Kosten-Nutzen-Verhältnis für Ihre Immobilie haben.',
      },
      {
        q: 'Müssen Eigentümer ihre Heizung 2026 austauschen?',
        a: 'Das Gebäudeenergiegesetz schreibt vor, dass ab 2024 neu eingebaute Heizungen zu mindestens 65 % mit erneuerbaren Energien betrieben werden müssen. Bestehende funktionierende Heizungen genießen Bestandsschutz. Bei Austausch oder Neubau gelten die neuen Anforderungen. Als Energieberater informieren wir Sie über aktuelle Pflichten und sinnvolle Lösungen.',
      },
      {
        q: 'Wie lange ist ein Energieausweis gültig?',
        a: 'Ein Energieausweis ist 10 Jahre gültig. Danach muss er erneuert werden — oder früher, wenn wesentliche Änderungen am Gebäude vorgenommen wurden (z. B. Dämmung, neue Heizung), die die Energiebilanz verbessern.',
      },
      {
        q: 'Was ist der Unterschied zwischen BAFA- und KfW-Förderung?',
        a: 'BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle) vergibt direkte Zuschüsse für einzelne Sanierungsmaßnahmen (Einzelmaßnahmen-Förderung BEG EM) — das Geld muss nicht zurückgezahlt werden. KfW (Kreditanstalt für Wiederaufbau) bietet zinsgünstige Kredite mit Tilgungszuschuss für umfassendere Sanierungen oder Neubauten. Beide Programme können kombiniert werden.',
      },
      {
        q: 'Können Sie als Energieberater Förderanträge stellen?',
        a: 'Ja. Als zugelassene Energieberater (Eintrag in der Bundesexpertenliste) sind wir berechtigt, Förderanträge bei BAFA und KfW zu stellen und den Nachweis der fachgerechten Umsetzung zu bestätigen. Wir begleiten Sie von der Planung über die Antragstellung bis zur Verwendungsnachweisprüfung.',
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
