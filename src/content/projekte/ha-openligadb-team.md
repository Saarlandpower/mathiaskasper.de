---
title: OpenLigaDB Team Tracker
summary: Home-Assistant-Integration für Bundesliga, 2. und 3. Liga, DFB-Pokal – Tabelle, Spielplan, Live-Spielstand und Tor-Events. Ohne API-Key.
category: homeassistant
repo: https://github.com/Saarlandpower/ha-openligadb-team
tech: [Python, HACS, Config Flow]
featured: true
order: 10
---

Entstanden, weil ESPN/TeamTracker die 3. Liga nicht unterstützt. Die Integration holt ihre Daten von
[OpenLigaDB](https://www.openligadb.de) und funktioniert damit für alle dort gepflegten Ligen.

## Was sie liefert

Liga-Kürzel eingeben (z. B. `bl3`), Verein per Dropdown wählen – dann entsteht pro Verein ein Gerät mit diesen Entitäten:

| Entität | Inhalt |
|---|---|
| Tabellenplatz, Punkte | aktueller Stand, Bilanz als Attribute |
| Nächstes Spiel, Letztes Spiel | Paarung, Anstoß bzw. Endergebnis |
| Spiele, Tabelle | Spielplan inkl. Pokal und komplette Ligatabelle als Attribut |
| Live-Spielstand | z. B. `1:0` während des Spiels, letztes Tor als Attribut |
| Spiel läuft, Heute Spieltag | Binärsensoren |
| Spielplan | Kalender mit allen Spielen und Ergebnissen |
| Spielereignis | Event-Entität für Anpfiff, Tor und Abpfiff |

Während eines Spiels aktualisiert die Integration jede Minute, sonst passt sich das Intervall von selbst an.
Über die Event-Entität lassen sich **Automationen direkt in der Oberfläche** bauen – etwa Licht in
Vereinsfarben bei jedem eigenen Tor. Vereinslogo, mehrere Vereine parallel und automatischer Saisonwechsel
sind dabei.

## Installation

Ab Home Assistant 2026.11 einfach im **Marketplace** nach „OpenLigaDB Team Tracker“ suchen, bei älteren
Versionen in **HACS**. Falls sie dort noch nicht auftaucht, geht es weiterhin als benutzerdefiniertes Repository.
