---
title: ADS-B Dashboard für Home Assistant
summary: Dunkles Radar-Dashboard als HA-Panel – Live-Karte, Flugzeugfotos, Squawk-Alarme per Telegram und Push.
category: adsb
repo: https://github.com/Saarlandpower/adsb-ha-panel
tech: [HTML, Leaflet, tar1090]
featured: true
order: 20
---

Liest den lokalen tar1090/readsb-Feed alle paar Sekunden und zeigt alle Flugzeuge auf einer dunklen Karte.

- Fotos über planespotters.net beim Anklicken
- Squawk-Alarm bei 7700, 7600, 7500 und Militär – sichtbar und per Telegram/Handy-Push, einmal pro Flugzeug
- Reichweitenringe, Flugpfade, Farbcodierung nach Höhe
- Detail-Panel mit ICAO, Höhe, Speed, RSSI und Links zu FR24/ADSBx
