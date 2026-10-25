---
title: OpenLigaDB Team Tracker
summary: Home-Assistant-Integration für Bundesliga, 2. und 3. Liga, DFB-Pokal – Tabelle, nächstes Spiel, Ergebnisse. Ohne API-Key.
category: homeassistant
repo: https://github.com/Saarlandpower/ha-openligadb-team
tech: [Python, HACS, Config Flow]
featured: true
order: 10
---

Entstanden, weil ESPN/TeamTracker die 3. Liga nicht unterstützt. Die Integration holt ihre Daten von
[OpenLigaDB](https://www.openligadb.de) und funktioniert damit für alle dort gepflegten Ligen.

## Was sie liefert

Liga-Kürzel eingeben (z. B. `bl3`), Verein per Dropdown wählen – dann entstehen sechs Sensoren pro Verein:

| Sensor | Inhalt |
|---|---|
| Tabellenplatz | Platzierung, Bilanz als Attribute |
| Punkte | aktuelle Punktzahl |
| Nächstes Spiel | Paarung, Anstoß, Spieltag, Wettbewerb |
| Letztes Spiel | Paarung mit Endergebnis |
| Spiele | Spiele der letzten 3 und nächsten 5 Wochen, inkl. Pokal |
| Tabelle | komplette Ligatabelle als Attribut |

Installation über HACS als benutzerdefiniertes Repository.
