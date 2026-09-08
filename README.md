# PURE Technology Platform – Phase 4.2 Coderpaket

Stand: 08.09.2026  
Zweck: coderfertiger Inhalts- und Datensatz-Start für die ersten vier Masterseiten im Git-Projekt `pure`.

## Zielseiten
1. `/`
2. `/produkte/pure-thermo`
3. `/systeme/pure-thermo-interior`
4. `/nachweise/EVD-PT-THERM-001`

Zusätzlich empfohlen: `/dev/components`.

## Verbindliche Kommunikationslogik
- A = extern geprüft/dokumentiert, nur im exakt geprüften Umfang.
- B = intern dokumentiert/validiert.
- C = berechnet/modelliert.
- D = Entwicklungshypothese/Prüfthese.
- A–D sind Evidenzarten, keine Schulnoten.
- Kein technischer Wert ohne Quelle.
- Keine pauschale Übertragung von Einzelprüfungen auf andere Rezepturen, Schichtdicken, Untergründe oder Systemrouten.
- Offene Punkte sichtbar als offen/bedingt/in Prüfung führen.
- Keine erfundenen Werte, Zertifikate, Zulassungen, Referenzen oder Förderfähigkeiten.

## Öffentliches europäisches Portfolio
Pure Thermo · Pure Liquid Heat · Pure Fire Protect · Pure Surface Protect · Pure Water Protect · Pure Wood Protect · Pure Boat Protect

**Pure Protect T730 ist aus der öffentlichen europäischen Plattform ausgeschlossen.**

## Kritischer Synchronisationshinweis
Der externe Kiwa/MPA-Prüfbericht P000517940 weist für `THERM 4410` eine Wärmeleitfähigkeit von `0,0335 ± 0,0003 W/(m·K)` nach DIN EN 12664:2001-05 aus.
Ältere TIPMS-/Berichtsfassungen führen teilweise noch `0,035 W/(m·K)`. Für die Website wird der neuere externe Prüfwert als **bedingter A-Nachweis** verwendet, bis `THERM 4410 ↔ aktuelle Pure-Thermo-Version` formal dokumentiert und TIPMS synchronisiert ist.

Zulässige Darstellung:
`Für THERM 4410 wurde λ = 0,0335 ± 0,0003 W/(m·K) extern geprüft; die Zuordnung zur aktuellen Pure-Thermo-Rezeptur wird dokumentiert.`

Nicht zulässig:
`Pure Thermo hat λ = 0,0335 W/(m·K)` ohne Einschränkung.

## Implementierungsregel
Technische Werte ausschließlich aus `/data` rendern. Keine technischen Werte in Komponenten oder Markdown hart codieren, wenn ein entsprechendes Datenobjekt existiert.
