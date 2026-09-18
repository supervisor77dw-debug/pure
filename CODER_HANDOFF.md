# Coder-Handoff Phase 4.2

## Verbindliche Content-Basis
- Ausschliessliche aktuelle Arbeitsbasis fuer Content-, Claim-, Evidence-, Video- und Page-Map-Entscheidungen: `/Data/PURE_Website_Content_Master_Database_V1.6.xlsx`.
- V1.5, V1.4, V1.3 und fruehere Zwischenstaende sind nur Historie und keine aktuellen Quellen.
- Die Masterdatei ist interne Projektdokumentation. Sie darf nicht nach `/public` kopiert, in den oeffentlichen Build aufgenommen oder ueber eine URL ausgeliefert werden.
- Liquid-Heat-Aenderungen muessen gegen Evidence-Level, Claim-Status, Konflikte, offene Fragen, Page Map und Video Master aus V1.6 geprueft werden.
- Neue Source IDs: `SRC-038` bis `SRC-042`.
- Neue Content IDs: `WCM-LH-029` bis `WCM-LH-035`.
- Neue Claim IDs: `CLM-077` bis `CLM-083`.
- Neue Videos: `VID-018` bis `VID-020`; B-Evidenz / Anwenderdokumentation, keine externe Pruefung.
- Konflikt `CNF-LH-005`: Momentanleistung von ca. 840-846 W ist nicht mit dem durchschnittlichen Energiebedarf ueber geregelte Betriebszyklen gleichzusetzen.
- Die C-Modelle von ca. 69 % und ca. 64,7 % bleiben intern/technisch und sind keine oeffentlichen Produktclaims. Angaben von 90-99 % PV/Batterie sowie Energievervielfachungs- oder Ueberwirkungsgrad-Claims sind ausgeschlossen.
- Offene Validierungsfragen: `OPEN-019` bis `OPEN-022`.
- In die Arbeitsplanung aufgenommen: `SEC-LH-FIELD-NL` fuer `/pure-liquid-heat#field-experience`; reale Anwenderbeobachtungen getrennt von Wirtschaftlichkeitsmodellen darstellen.

## Routen
- `/`
- `/produkte/pure-thermo`
- `/systeme/pure-thermo-interior`
- `/nachweise/EVD-PT-THERM-001`
- `/dev/components`

## Architektur
Markdown = redaktioneller Content. `/data` = technische Wahrheit und Status.

Nicht hart codieren: λ, sd, V, μ, Verbrauch, Schichtdicke, Evidenzstatus, Prüfberichtnummer, Systemstatus, Marktpriorität.

## Mindestkomponenten
Header, MegaMenu, Breadcrumb, Hero, ProductCard, ProductHub, SystemCard, ApplicationCard, EvidenceBadge, EvidenceCard, TechnicalValue, TechnicalTable, LayerDiagram, SubstrateMatrix, DocumentCard, MaturityBadge, ReleaseBadge, MarketBadge, VersionHistory, EvidenceScope, RelatedContent.

## UI-Sonderregeln
- EvidenceBadge immer Buchstabe + Text, nie nur Farbe.
- EvidenceScope = `Was belegt ist` + `Was nicht automatisch belegt ist`.
- THERM-4410-Produktzuordnungswarnung zwingend prominent.
- Mobile Tabellen in Kartenansicht.
- Keine vertraulichen PDFs in `/public`.

## T730
Nicht in Navigation, ProductHub, Sitemap, Suche oder Autoimport aus älteren Portfolioquellen.

## Qualitätsgate vor Merge
1. Keine fehlenden Daten durch KI ergänzen.
2. Keine technischen Werte direkt in UI-Komponenten.
3. A-Evidenz nur mit konkreter Quelle/Nachweisreferenz.
4. C-Werte nur mit Berechnungsgrundlage.
5. D nicht wie fertige Leistung darstellen.
6. Keine KfW-/BEG-/GEG-Produktfreigabe behaupten.
7. Keine Brandklasse für `Pure Thermo + Pure Fire`.
8. THERM-4410-Zuordnungswarnung sichtbar.
9. Mobile Darstellung prüfen.
10. Commit-Vorschlag: `phase-4.2-master-content-v1`.
