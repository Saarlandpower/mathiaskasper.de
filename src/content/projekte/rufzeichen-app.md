---
title: Rufzeichen-App
summary: Android-App für Funkamateure – Rufzeichensuche bei der BNetzA, Offline-Analyse, Funkwetter und Locator-Werkzeuge. Im Google Play Store.
category: tools
repo: https://github.com/SaarMesh-Bot/rufzeichen-app
tech: [Kotlin, Jetpack Compose]
order: 31
---

Native Android-App mit Material 3, erhältlich im [Google Play Store](https://play.google.com/store/apps/details?id=de.hamlookup.rufzeichen).

## Funktionen

- **Rufzeichensuche** in der öffentlichen Liste der Bundesnetzagentur, optional international über HamQTH,
  mit Wildcard `*`, Favoriten, Verlauf und Cache
- **Offline-Analyse**: Präfix, Land nach ITU, geschätzte deutsche Klasse
- **Funkwetter**: Bandbedingungen, Sonnen- und Magnetfeld-Indizes, Kp-Verlauf und Grayline
- **Locator-Werkzeuge**: Locator ↔ Koordinaten, Entfernung und Peilung von A nach B, Kompass zum Ziel
- **Relaissuche** in der Nähe per Absprung zu repeatermap.de

Die BNetzA bietet keine offizielle API; die App fragt die öffentliche Suchmaske ab und fällt bei Änderungen
der Website auf Cache und Offline-Analyse zurück.
