# Coder-Handoff Phase 4.2

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
