export type LiquidHeatLocale = 'de' | 'en';

type Application = { title: string; copy: string; examples: string[]; note?: string };
type Pair = [string, string];

const en = {
  breadcrumb: 'Pure Liquid Heat',
  eyebrow: 'PURE TECHNOLOGY PLATFORM',
  heroTitle: 'PURE LIQUID HEAT',
  heroSubtitle: 'An electric functional layer for integrated heating systems.',
  heroCopy: 'Heating becomes a surface function — integrated into defined panels, products and design objects instead of added as a separate heater.',
  explore: 'Explore applications',
  evidenceCta: 'Technical evidence',
  conceptCaption: 'Hospitality application direction — development concept.',
  whyEyebrow: 'THE PROBLEM',
  whyTitle: 'WHY INTEGRATED SURFACE HEAT?',
  whyIntro: 'Conventional heating technology is often added to a space or product as separate hardware. PURE LIQUID HEAT explores another route: integrating the heating function directly into defined surfaces and components.',
  whyCards: [
    ['LESS VISIBLE HARDWARE', 'Heating functionality can be integrated into panels, furniture and objects instead of added as a separate visible heater.'],
    ['SURFACE-BASED HEAT', 'Heat is generated across a functional surface rather than only at a point-shaped heating element.'],
    ['FLEXIBLE INTEGRATION', 'Thin functional layers allow heating concepts to follow product and design geometry more closely.'],
    ['ZONED CONTROL', 'Defined heating zones can be controlled individually according to the application.']
  ] as Pair[],
  principleEyebrow: 'THE PRINCIPLE', principleTitle: 'HOW DOES PURE LIQUID HEAT WORK?',
  flowAria: 'Electrical energy to controlled thermal output',
  flow: ['ELECTRICAL ENERGY', 'CONDUCTIVE FUNCTIONAL COATING', 'ELECTRICAL RESISTANCE HEATING', 'SURFACE HEAT', 'CONTROLLED THERMAL OUTPUT'],
  mechanism: [
    'PURE LIQUID HEAT uses a conductive functional coating. Electrical current flows through the defined conductive layer and electrical resistance converts the supplied energy into heat.',
    'Copper conductors, coating resistance, geometry and system control determine the thermal behaviour of the finished heating module.',
    'The result is a thin, electrically activated heating surface that can be integrated into defined products and components.'
  ],
  engineering: 'ENGINEERING NOTE', engineeringCopy: 'PURE LIQUID HEAT does not create additional energy. Like other electric resistance heating technologies, electrical energy is converted into heat. Its development potential lies in how that heat can be distributed, integrated and controlled within an application.',
  architectureEyebrow: 'SYSTEM ARCHITECTURE', architectureTitle: 'FROM COATING TO HEATING SYSTEM', architectureIntro: 'The functional coating is only one part of the complete system.',
  architecture: [['SUBSTRATE', 'GFB / GFK / Vermiculite'], ['LIQUID HEAT FUNCTIONAL COATING', 'Direct application to the defined substrate. No primer layer.'], ['CONTACTING + CONTROL + SAFETY', 'Electrical contacting, temperature sensing, thermal protection and system control.'], ['OPTIONAL PROTECTIVE LAYER', 'Only where required by moisture, outdoor exposure, cleaning or mechanical load.']] as Pair[],
  physicalEyebrow: 'PHYSICAL DEVELOPMENT', physicalTitle: 'FROM FUNCTIONAL LAYER TO PHYSICAL MODULE', physicalIntro: 'Internal development images show early Liquid Heat modules, panel formats and design integrations. They document physical development work but do not represent released series products or independent certification.',
  galleryLabel: 'INTERNAL DEVELOPMENT / PROTOTYPE IMAGES',
  galleryCaptions: ['Freestanding panel format.', 'Side view of the physical module.', 'Design integration study.'],
  designEyebrow: 'THE DESIGN LOGIC', designTitle: 'HEAT AS A FUNCTION OF THE SURFACE',
  designCards: [
    ['LOW THERMAL MASS', 'The thin functional heating layer can react quickly compared with systems that first have to heat large masses.'],
    ['DESIGN INTEGRATION', 'Heating functionality can disappear into panels, furniture and technical products.'],
    ['FLAT HEAT DISTRIBUTION', 'The active layer enables surface-based heat generation across a defined module.'],
    ['CONTROLLABLE ZONES', 'Temperature sensors, control electronics and separate zones can adapt heat delivery to the application.']
  ] as Pair[],
  designPrinciple: 'The value is not a new law of physics. It is a different way of designing where and how electrical heat is delivered.',
  applicationsEyebrow: 'APPLICATION WORLDS', applicationsTitle: 'WHERE CAN SURFACE HEAT BECOME USEFUL?',
  applications: [
    { title: 'OUTDOOR & HOSPITALITY', copy: 'Integrated heating concepts for terraces, hotels, gastronomy and premium outdoor environments, placing warmth close to the user while reducing visible heating hardware.', examples: ['pyramid heating concepts', 'HotCube concepts', 'heated lounge modules', 'heated seating', 'table-integrated heating concepts'] },
    { title: 'INTERIOR & DESIGN', copy: 'Wall, panel and furniture concepts can combine design surfaces with integrated electrical heat.', examples: ['wall panels', 'furniture modules', 'decorative heating surfaces', 'defined comfort zones'] },
    { title: 'OEM INTEGRATION', copy: 'PURE LIQUID HEAT can be developed as a functional heating module within a defined OEM product architecture.', examples: ['product panels', 'enclosures', 'furniture', 'technical modules', 'custom heating surfaces'], note: 'Every OEM application requires its own defined substrate, contacting, electrical architecture, thermal limits and validation programme.' },
    { title: 'FROST & TECHNICAL HEATING', copy: 'Surface heating can also be developed for anti-condensation, frost protection and controlled temperature maintenance in technical components.', examples: ['electronics enclosures', 'sensor boxes', 'technical containers', 'defined temperature-maintenance modules'] }
  ] as Application[],
  pyramid: {
    eyebrow: 'OUTDOOR DEMONSTRATOR',
    title: 'From demonstrator to series-ready outdoor product',
    intro: 'PURE LIQUID HEAT is being integrated into a complete outdoor heating device. The development architecture is defined; external type testing, conformity assessment and series release are still pending.',
    architectureTitle: 'Planned series architecture',
    architecture: ['230 V AC mains connection', '4 × 30 V DC power supplies', '400 W each', 'up to approximately 1,600 W electrical heating output', '4 PURE LIQUID HEAT heating surfaces', 'temperature control with sensors', 'independent overtemperature cut-off', 'LED lighting', 'weather-protected technical base', 'castors or base'],
    architectureLimit: 'Development and planning values. Not released series specifications.',
    applicationsTitle: 'Intended outdoor applications',
    applications: ['terraces', 'beer gardens', 'hospitality', 'publicly accessible outdoor areas'],
    applicationsLimit: 'Intended for these application areas and subject to the planned safety and conformity assessment.',
    ipTarget: 'Target for final device qualification: at least IP44, subject to testing of the complete series-identical product.',
    stagesTitle: 'Path to series release',
    stages: [
      ['1 · Product definition', 'Define intended outdoor use, output and variants.'],
      ['2 · Series configuration', 'Freeze power supplies, heating surfaces, control, sensors, safety, LED, enclosure and mechanics.'],
      ['3 · Test plan', 'Bindingly define applicable EU legislation, standards and test methods with a suitable accredited testing institute.'],
      ['4 · Type testing of complete device', 'Electrical, thermal, mechanical, IP, EMC, EMF, RoHS and endurance testing on the series-identical device.'],
      ['5 · Technical file and release', 'EU Declaration of Conformity, CE marking, series end-of-line testing, traceability and change management.']
    ] as Pair[],
    stagesLimit: 'The steps shown describe the intended validation pathway. They do not constitute certification that has already been completed.',
    testTitle: 'Planned test programme',
    testGroups: [
      ['Electrical safety', ['insulation', 'protective conductor', 'dielectric strength', 'protection against contact']],
      ['Thermal behaviour and fault conditions', ['heating', 'sensor fault', 'controller failure', 'blocked openings', 'overtemperature cut-off']],
      ['Mechanics', ['stability', 'castors', 'impact', 'cable routing']],
      ['Environment / IP', ['water', 'foreign objects', 'drainage', 'complete device']],
      ['EMC / mains / EMF', ['emissions', 'immunity', 'harmonics', 'flicker', 'electromagnetic fields']],
      ['Endurance and series quality', ['temperature stability', 'resistance', 'contacting', 'protective shutdown', 'end-of-line testing']]
    ] as Array<[string, string[]]>,
    qaTitle: 'Controlled heating layer instead of an arbitrary coating',
    qaCopy: 'In the complete end device, PURE LIQUID HEAT is treated as a functionally and safety-relevant component. Layer thickness, resistance range, contacting geometry, conductor spacing, substrate, drying and repair limits must be defined and controlled for the series configuration.',
    changeManagement: 'Changes to formulation, application, contacting or safety-critical components are subject to documented change management.',
    governanceTitle: 'Manufacturer responsibility',
    governance: 'When marketed under the TII brand, TII remains the manufacturer of the complete device and is responsible for technical documentation, conformity assessment, the EU Declaration of Conformity, CE marking and series conformity. External testing institutes provide evidence but do not assume manufacturer responsibility.',
    claimBoundaryTitle: 'Market-access boundary',
    claimBoundary: 'External type testing and CE conformity assessment with a German accredited testing institute are planned. CE conformity assessment, IP44 device qualification and third-party certification have not yet been completed.',
    releaseRule: 'Series release only after completion of the required test programme, closure of safety-relevant findings, completion of the technical file and signature of the EU Declaration of Conformity.',
    visualAlt: 'PURE LIQUID HEAT pyramid outdoor heater development demonstrator',
    visualCaption: 'Development concept for integrating four functional heating surfaces into a complete outdoor device. Not a released series product.'
  },
  concept: 'DEVELOPMENT CONCEPT', conceptWorld: 'CONCEPTS / DEVELOPMENT', heatedSeating: 'HEATED SEATING', heatedSeatingCopy: 'Instead of heating an entire outdoor area, heating functionality can be integrated close to the user — for hospitality, public spaces and premium winter environments.', heatedSeatingCaption: 'Heated seating system concept. Embedded specifications are not released product data.', prism: 'PUREHEAT PRISM', prismCopy: 'A current development concept explores how PURE LIQUID HEAT can be integrated into the base of hospitality and terrace tables, moving the heat source close to the user while preserving a clean furniture design.', prismStatus: 'Concept design — geometry, output, surface temperature, safety and certification remain subject to engineering and testing.', variantsAria: 'PUREHEAT development concept variants', facet: 'PUREHEAT FACET', petal: 'PUREHEAT PETAL',
  evidenceEyebrow: 'EVIDENCE', evidenceTitle: 'WHAT DO WE KNOW TODAY?', fieldReference: 'INTERNAL FIELD REFERENCE', fieldTitle: 'GFB panel · Portugal · winter-season operation', fieldCopy: 'An internally documented GFB panel was used continuously as a heating element during a winter season in Portugal. According to the available internal observations, the approximately 90 °C surface temperature and electrical power draw remained stable during the observed operating period.', means: 'WHAT THIS MEANS', meansCopy: 'The observation provides useful practical evidence of stable operation in this specific configuration.', notMeans: 'WHAT IT DOES NOT MEAN', notMeansCopy: 'It is not yet an independent long-term certification or a transferable lifetime guarantee for every PURE LIQUID HEAT system.',
  validationEyebrow: 'EVIDENCE PHILOSOPHY', validationTitle: 'VALIDATION IN PROGRESS', validationIntro: 'Defined engineering questions are part of developing a reliable heating system.', validation: [['LONG-TERM STABILITY', 'Extended operating hours and thermal cycling.'], ['ELECTRICAL SAFETY', 'Complete system testing including contacts, control and fault conditions.'], ['MOISTURE & OUTDOOR EXPOSURE', 'Protective layers, electrical isolation and application-specific environmental testing.'], ['SERIES REPRODUCIBILITY', 'Defined coating resistance, contacting, process control and quality assurance.'], ['SYSTEM PERFORMANCE', 'Voltage, current, power density, surface temperature and warm-up behaviour must be specified for each defined system configuration.']] as Pair[],
  boundariesEyebrow: 'TRANSPARENT SCOPE', boundariesTitle: 'CAPABILITIES — AND CLEAR BOUNDARIES', enables: 'WHAT THE TECHNOLOGY ENABLES', claims: 'WHAT WE DO NOT CLAIM', capabilities: ['integrated electric surface heating', 'thin functional heating layers', 'individually controlled heating zones', 'application-dependent low-voltage architectures', 'integration into defined panels and products', 'design-oriented heating concepts'], boundaries: ['no efficiency above 100%', 'no universal percentage energy saving', 'no universal substrate compatibility', 'no generic CE certification for the coating alone', 'no generic IP rating for all systems', 'no transfer of one prototype value to every application', 'no universal replacement for every building heating system'],
  safetyEyebrow: 'SAFETY & MARKET ACCESS', safetyTitle: 'THE COMPLETE SYSTEM MATTERS', chain: ['SUBSTRATE', 'HEATING LAYER', 'CONTACTS', 'CONTROL', 'PROTECTION', 'APPLICATION'], safetyCopy1: 'Electrical and regulatory assessment applies to the complete end system, not to the coating in isolation.', safetyCopy2: 'Depending on the final product and market, electrical safety, EMC, temperature limitation, environmental protection, fire behaviour and other requirements may need to be evaluated.',
  workEyebrow: 'WORK WITH PURE', workTitle: 'DEVELOP THE NEXT HEATING APPLICATION WITH PURE', work: [['PILOT PROJECT', 'Develop and measure a defined Liquid Heat demonstrator under controlled operating conditions.'], ['OEM INTEGRATION', 'Integrate the functional heating layer into a product or component with a defined engineering and QA specification.'], ['TESTING & VALIDATION', 'Work with PURE on electrical, thermal, environmental and long-term validation of a defined system.']] as Pair[], start: 'START A LIQUID HEAT PROJECT', viewEvidence: 'VIEW TECHNICAL EVIDENCE'
} as const;

const de = {
  ...en,
  breadcrumb: 'Pure Liquid Heat', eyebrow: 'PURE TECHNOLOGY PLATFORM', heroTitle: 'PURE LIQUID HEAT', heroSubtitle: 'Eine elektrisch aktivierbare Funktionsschicht für integrierte Heizsysteme.', heroCopy: 'Heizen wird zur Oberflächenfunktion – integriert in definierte Platten, Produkte und Designobjekte, statt als separates Heizgerät ergänzt zu werden.', explore: 'Anwendungen entdecken', evidenceCta: 'Technische Nachweise', conceptCaption: 'Anwendungsrichtung Hospitality – Entwicklungskonzept.',
  whyEyebrow: 'DIE HERAUSFORDERUNG', whyTitle: 'WARUM INTEGRIERTE OBERFLÄCHENWÄRME?', whyIntro: 'Konventionelle Heiztechnik wird häufig als separate Hardware zu einem Raum oder Produkt hinzugefügt. PURE LIQUID HEAT untersucht einen anderen Weg: die Heizfunktion direkt in definierte Oberflächen und Komponenten zu integrieren.', whyCards: [['WENIGER SICHTBARE HARDWARE', 'Heizfunktionen können in Platten, Möbel und Objekte integriert werden, statt als separates sichtbares Heizgerät ergänzt zu werden.'], ['OBERFLÄCHENBASIERTE WÄRME', 'Wärme wird über eine funktionale Oberfläche erzeugt und nicht nur an einem punktförmigen Heizelement.'], ['FLEXIBLE INTEGRATION', 'Dünne Funktionsschichten ermöglichen es, Heizkonzepte enger an Produkt- und Designgeometrien zu führen.'], ['ZONIERTE STEUERUNG', 'Definierte Heizzonen können abhängig von der Anwendung einzeln gesteuert werden.']],
  principleEyebrow: 'DAS PRINZIP', principleTitle: 'WIE FUNKTIONIERT PURE LIQUID HEAT?', flowAria: 'Von elektrischer Energie zur kontrollierten Wärmeabgabe', flow: ['ELEKTRISCHE ENERGIE', 'LEITFÄHIGE FUNKTIONSSCHICHT', 'ELEKTRISCHE WIDERSTANDSHEIZUNG', 'OBERFLÄCHENWÄRME', 'KONTROLLIERTE WÄRMEABGABE'], mechanism: ['PURE LIQUID HEAT nutzt eine leitfähige Funktionsbeschichtung. Elektrischer Strom fließt durch die definierte leitfähige Schicht; der elektrische Widerstand wandelt die zugeführte Energie in Wärme um.', 'Kupferleiter, Beschichtungswiderstand, Geometrie und Systemsteuerung bestimmen das thermische Verhalten des fertigen Heizmoduls.', 'Das Ergebnis ist eine dünne, elektrisch aktivierbare Heizoberfläche, die in definierte Produkte und Komponenten integriert werden kann.'], engineering: 'TECHNISCHER HINWEIS', engineeringCopy: 'PURE LIQUID HEAT erzeugt keine zusätzliche Energie. Wie bei anderen elektrischen Widerstandsheizungen wird elektrische Energie in Wärme umgewandelt. Das Entwicklungspotenzial liegt darin, wie diese Wärme innerhalb einer Anwendung verteilt, integriert und gesteuert werden kann.',
  architectureEyebrow: 'SYSTEMARCHITEKTUR', architectureTitle: 'VON DER BESCHICHTUNG ZUM HEIZSYSTEM', architectureIntro: 'Die Funktionsbeschichtung ist nur ein Teil des vollständigen Systems.', architecture: [['SUBSTRAT', 'GFB / GFK / Vermiculite'], ['PURE LIQUID HEAT FUNKTIONSSCHICHT', 'Direkte Applikation auf das definierte Substrat. Keine Primerschicht.'], ['KONTAKTIERUNG + STEUERUNG + SICHERHEIT', 'Elektrische Kontaktierung, Temperatursensorik, thermischer Schutz und Systemsteuerung.'], ['OPTIONALE SCHUTZSCHICHT', 'Nur wenn durch Feuchte, Außenbeanspruchung, Reinigung oder mechanische Belastung erforderlich.']],
  physicalEyebrow: 'PHYSISCHE ENTWICKLUNG', physicalTitle: 'VON DER FUNKTIONSSCHICHT ZUM PHYSISCHEN MODUL', physicalIntro: 'Interne Entwicklungsbilder zeigen frühe Liquid-Heat-Module, Plattenformate und Designintegrationen. Sie dokumentieren physische Entwicklungsarbeit, stellen aber keine freigegebenen Serienprodukte oder unabhängigen Zertifizierungen dar.', galleryLabel: 'INTERNE ENTWICKLUNG / PROTOTYPENBILDER', galleryCaptions: ['Freistehendes Plattenformat.', 'Seitenansicht des physischen Moduls.', 'Studie zur Designintegration.'],
  designEyebrow: 'DIE DESIGNLOGIK', designTitle: 'WÄRME ALS FUNKTION DER OBERFLÄCHE', designCards: [['GERINGE THERMISCHE MASSE', 'Die dünne funktionale Heizschicht kann im Vergleich zu Systemen, die zunächst große Massen erwärmen müssen, schnell reagieren.'], ['DESIGNINTEGRATION', 'Die Heizfunktion kann in Platten, Möbeln und technischen Produkten aufgehen.'], ['FLÄCHIGE WÄRMEVERTEILUNG', 'Die aktive Schicht ermöglicht eine oberflächenbasierte Wärmeerzeugung über ein definiertes Modul.'], ['STEUERBARE ZONEN', 'Temperatursensoren, Steuerungselektronik und separate Zonen können die Wärmeabgabe an die Anwendung anpassen.']], designPrinciple: 'Der Wert liegt nicht in einem neuen physikalischen Gesetz, sondern in einer anderen Gestaltung davon, wo und wie elektrische Wärme abgegeben wird.',
  applicationsEyebrow: 'ANWENDUNGSWELTEN', applicationsTitle: 'WO KANN OBERFLÄCHENWÄRME SINNVOLL WERDEN?', applications: [{ title: 'AUSSENBEREICH & HOSPITALITY', copy: 'Integrierte Heizkonzepte für Terrassen, Hotels, Gastronomie und hochwertige Außenbereiche – Wärme wird näher am Nutzer positioniert und sichtbare Heizhardware reduziert.', examples: ['Pyramiden-Heizkonzepte', 'HotCube-Konzepte', 'beheizte Lounge-Module', 'beheizte Sitzmöbel', 'in Tische integrierte Heizkonzepte'] }, { title: 'INTERIOR & DESIGN', copy: 'Wand-, Platten- und Möbelkonzepte können Designoberflächen mit integrierter elektrischer Wärme verbinden.', examples: ['Wandpaneele', 'Möbelmodule', 'dekorative Heizoberflächen', 'definierte Komfortzonen'] }, { title: 'OEM-INTEGRATION', copy: 'PURE LIQUID HEAT kann als funktionales Heizmodul innerhalb einer definierten OEM-Produktarchitektur entwickelt werden.', examples: ['Produktplatten', 'Gehäuse', 'Möbel', 'technische Module', 'kundenspezifische Heizoberflächen'], note: 'Jede OEM-Anwendung erfordert ein eigenes definiertes Substrat, eine eigene Kontaktierung, elektrische Architektur, thermische Grenzen und ein Validierungsprogramm.' }, { title: 'FROST- & TECHNISCHE HEIZUNG', copy: 'Oberflächenwärme kann auch für Kondensationsschutz, Frostschutz und die kontrollierte Temperaturhaltung in technischen Komponenten entwickelt werden.', examples: ['Elektronikgehäuse', 'Sensorgehäuse', 'technische Behälter', 'definierte Module zur Temperaturhaltung'] }],
  pyramid: {
    eyebrow: 'OUTDOOR-DEMONSTRATOR',
    title: 'Vom Demonstrator zum serienfähigen Outdoor-Produkt',
    intro: 'Für die elektrische Pyramidenheizung wird PURE LIQUID HEAT als funktionale Heizfläche in ein vollständiges Outdoor-Gerät integriert. Die technische Architektur ist definiert; externe Typprüfung, Konformitätsbewertung und Serienfreigabe stehen noch aus.',
    architectureTitle: 'Geplante Serienarchitektur',
    architecture: ['230 V AC Netzanschluss', '4 × 30 V DC Netzteile', 'je 400 W', 'bis ca. 1.600 W elektrische Heizleistung', '4 PURE-LIQUID-HEAT-Heizflächen', 'Temperaturregelung mit Sensorik', 'unabhängige Übertemperaturabschaltung', 'LED-Beleuchtung', 'wettergeschützter Techniksockel', 'Rollen bzw. Standfuß'],
    architectureLimit: 'Entwicklungs-/Planungswerte. Keine freigegebenen Serienkennwerte.',
    applicationsTitle: 'Vorgesehene Outdoor-Anwendungen',
    applications: ['Terrassen', 'Biergärten', 'Gastronomie', 'öffentlich zugängliche Außenbereiche'],
    applicationsLimit: 'Für diese Einsatzbereiche vorgesehen und Gegenstand der geplanten Sicherheits- und Konformitätsbewertung.',
    ipTarget: 'Ziel für die finale Gerätequalifikation: mindestens IP44 – vorbehaltlich Prüfung des vollständigen serienidentischen Geräts.',
    stagesTitle: 'Der Weg zur Serienfreigabe',
    stages: [
      ['1 · Produktdefinition', 'Bestimmungsgemäße Outdoor-Verwendung, Leistung und Varianten festlegen.'],
      ['2 · Serienkonfiguration', 'Netzteile, Heizflächen, Regelung, Sensorik, Sicherheit, LED, Gehäuse und Mechanik einfrieren.'],
      ['3 · Prüfplan', 'Anwendbare EU-Rechtsakte, Normen und Prüfverfahren mit einem geeigneten akkreditierten Prüfinstitut verbindlich festlegen.'],
      ['4 · Typprüfung Gesamtgerät', 'Elektrische, thermische, mechanische, IP-, EMV-, EMF-, RoHS- und Dauerlaufprüfung am serienidentischen Gerät.'],
      ['5 · Technische Akte & Freigabe', 'EU-Konformitätserklärung, CE-Kennzeichnung, Serien-Endprüfung, Rückverfolgbarkeit und Änderungsmanagement.']
    ],
    stagesLimit: 'Die dargestellten Schritte beschreiben den vorgesehenen Validierungsweg. Sie stellen keine bereits abgeschlossene Zertifizierung dar.',
    testTitle: 'Geplantes Prüfprogramm',
    testGroups: [
      ['Elektrische Sicherheit', ['Isolation', 'Schutzleiter', 'Spannungsfestigkeit', 'Berührungsschutz']],
      ['Thermik & Fehlerbetrieb', ['Erwärmung', 'Sensorfehler', 'Reglerausfall', 'blockierte Öffnungen', 'Übertemperaturabschaltung']],
      ['Mechanik', ['Standfestigkeit', 'Rollen', 'Stoß', 'Kabelweg']],
      ['Umwelt / IP', ['Wasser', 'Fremdkörper', 'Entwässerung', 'vollständiges Gerät']],
      ['EMV / Netz / EMF', ['Störaussendung', 'Störfestigkeit', 'Oberschwingungen', 'Flicker', 'elektromagnetische Felder']],
      ['Dauerlauf & Serienqualität', ['Temperaturstabilität', 'Widerstand', 'Kontaktierung', 'Schutzabschaltung', 'End-of-line-Prüfung']]
    ],
    qaTitle: 'Kontrollierte Heizschicht statt beliebiger Beschichtung',
    qaCopy: 'Im vollständigen Endgerät wird PURE LIQUID HEAT als funktions- und sicherheitsrelevante Komponente behandelt. Schichtdicke, Widerstandsbereich, Kontaktierungsgeometrie, Leiterabstände, Träger, Trocknung und Reparaturgrenzen müssen für die Serienkonfiguration kontrolliert festgelegt werden.',
    changeManagement: 'Änderungen an Rezeptur, Auftrag, Kontaktierung oder sicherheitskritischen Komponenten unterliegen einem dokumentierten Änderungsmanagement.',
    governanceTitle: 'Herstellerverantwortung',
    governance: 'Bei einer Vermarktung unter der Marke TII bleibt TII Hersteller des vollständigen Geräts und verantwortlich für technische Dokumentation, Konformitätsbewertung, EU-Konformitätserklärung, CE-Kennzeichnung und Seriengleichheit. Externe Prüfinstitute liefern Nachweise, übernehmen aber nicht die Herstellerverantwortung.',
    claimBoundaryTitle: 'Marktzugangsgrenze',
    claimBoundary: 'Externe Typprüfung und CE-Konformitätsbewertung mit einem deutschen akkreditierten Prüfinstitut sind vorgesehen. CE-Konformitätsbewertung, IP44-Gerätequalifikation und Zertifizierung sind noch nicht abgeschlossen.',
    releaseRule: 'Serienfreigabe erst nach abgeschlossenem Prüfprogramm, geschlossenen sicherheitsrelevanten Befunden, vollständiger technischer Akte und unterzeichneter EU-Konformitätserklärung.',
    visualAlt: 'PURE-LIQUID-HEAT-Pyramidenheizung als Outdoor-Entwicklungsdemonstrator',
    visualCaption: 'Entwicklungskonzept zur Integration von vier funktionalen Heizflächen in ein vollständiges Outdoor-Gerät. Kein freigegebenes Serienprodukt.'
  },
  concept: 'ENTWICKLUNGSKONZEPT', conceptWorld: 'KONZEPTE / ENTWICKLUNG', heatedSeating: 'BEHEIZTE SITZMÖBEL', heatedSeatingCopy: 'Statt einen gesamten Außenbereich zu beheizen, kann die Heizfunktion nah am Nutzer in Sitzsysteme integriert werden – für Hospitality, öffentliche Räume und hochwertige Winterumgebungen.', heatedSeatingCaption: 'Konzept für ein beheiztes Sitzsystem. Eingebettete Spezifikationen sind keine freigegebenen Produktdaten.', prism: 'PUREHEAT PRISM', prismCopy: 'Ein aktuelles Entwicklungskonzept untersucht, wie PURE LIQUID HEAT in den Sockel von Hospitality- und Terrassentischen integriert werden kann, um die Wärmequelle nah am Nutzer zu positionieren und ein klares Möbeldesign zu erhalten.', prismStatus: 'Konzeptdesign – Geometrie, Leistung, Oberflächentemperatur, Sicherheit und Zertifizierung müssen noch technisch entwickelt und geprüft werden.', variantsAria: 'PUREHEAT-Entwicklungskonzepte', facet: 'PUREHEAT FACET', petal: 'PUREHEAT PETAL',
  evidenceEyebrow: 'EVIDENZ', evidenceTitle: 'WAS WISSEN WIR HEUTE?', fieldReference: 'INTERN DOKUMENTIERTE REFERENZ', fieldTitle: 'GFB-Platte · Portugal · Betrieb während der Wintersaison', fieldCopy: 'Eine intern dokumentierte GFB-Platte wurde während einer Wintersaison kontinuierlich als Heizelement betrieben. Nach den verfügbaren internen Beobachtungen blieben die Oberflächentemperatur von ungefähr 90 °C und die elektrische Leistungsaufnahme während des beobachteten Betriebszeitraums stabil.', means: 'WAS DIES BEDEUTET', meansCopy: 'Die Beobachtung liefert einen praktischen Hinweis auf einen stabilen Betrieb in dieser spezifischen Konfiguration.', notMeans: 'WAS DARAUS NICHT FOLGT', notMeansCopy: 'Sie ist noch keine unabhängige Langzeitzertifizierung und keine übertragbare Lebensdauergarantie für jedes PURE-LIQUID-HEAT-System.',
  validationEyebrow: 'EVIDENZPHILOSOPHIE', validationTitle: 'VALIDIERUNG IN ARBEIT', validationIntro: 'Definierte technische Fragestellungen gehören zur Entwicklung eines zuverlässigen Heizsystems.', validation: [['LANGZEITSTABILITÄT', 'Erweiterte Betriebsstunden und thermische Zyklen.'], ['ELEKTRISCHE SICHERHEIT', 'Vollständige Systemprüfung einschließlich Kontaktierung, Steuerung und Fehlerzuständen.'], ['FEUCHTE & AUSSENBEANSPRUCHUNG', 'Schutzschichten, elektrische Isolation und anwendungsspezifische Umwelttests.'], ['SERIENREPRODUZIERBARKEIT', 'Definierter Beschichtungswiderstand, Kontaktierung, Prozesskontrolle und Qualitätssicherung.'], ['SYSTEMLEISTUNG', 'Spannung, Strom, Leistungsdichte, Oberflächentemperatur und Aufheizverhalten müssen für jede definierte Systemkonfiguration spezifiziert werden.']],
  boundariesEyebrow: 'TRANSPARENTER UMFANG', boundariesTitle: 'MÖGLICHKEITEN – UND KLARE GRENZEN', enables: 'WAS DIE TECHNOLOGIE ERMÖGLICHT', claims: 'WAS WIR NICHT BEHAUPTEN', capabilities: ['integrierte elektrische Oberflächenheizung', 'dünne funktionale Heizschichten', 'individuell gesteuerte Heizzonen', 'anwendungsabhängige Niedervoltarchitekturen', 'Integration in definierte Platten und Produkte', 'designorientierte Heizkonzepte'], boundaries: ['keine Effizienz über 100 %', 'keine allgemein gültigen prozentualen Energieeinsparungen', 'keine universelle Substratkompatibilität', 'keine pauschale CE-Zertifizierung der Beschichtung allein', 'keine pauschale IP-Schutzart für alle Systeme', 'keine Übertragung eines Prototypenwerts auf jede Anwendung', 'kein universeller Ersatz für jedes Gebäudeheizsystem'],
  safetyEyebrow: 'SICHERHEIT & MARKTZUGANG', safetyTitle: 'DAS VOLLSTÄNDIGE SYSTEM IST ENTSCHEIDEND', chain: ['SUBSTRAT', 'HEIZSCHICHT', 'KONTAKTIERUNG', 'STEUERUNG', 'SCHUTZ', 'ANWENDUNG'], safetyCopy1: 'Die elektrische und regulatorische Bewertung bezieht sich auf das vollständige Endsystem, nicht auf die Beschichtung isoliert betrachtet.', safetyCopy2: 'Je nach Endprodukt und Markt müssen elektrische Sicherheit, EMV, Temperaturbegrenzung, Umweltschutz, Brandverhalten und weitere Anforderungen bewertet werden.',
  workEyebrow: 'MIT PURE ARBEITEN', workTitle: 'DIE NÄCHSTE HEIZANWENDUNG MIT PURE ENTWICKELN', work: [['PILOTPROJEKT', 'Einen definierten Liquid-Heat-Demonstrator unter kontrollierten Betriebsbedingungen entwickeln und vermessen.'], ['OEM-INTEGRATION', 'Die Funktionsschicht mit einer definierten Engineering- und Qualitätssicherungsspezifikation in ein Produkt oder eine Komponente integrieren.'], ['PRÜFUNG & VALIDIERUNG', 'Gemeinsam mit PURE die elektrische, thermische, umweltbezogene und langfristige Validierung eines definierten Systems durchführen.']], start: 'LIQUID-HEAT-PROJEKT STARTEN', viewEvidence: 'TECHNISCHE EVIDENZ ANSEHEN'
} as unknown as typeof en;

export function getLiquidHeatContent(locale: LiquidHeatLocale) {
  return locale === 'de' ? de : en;
}
