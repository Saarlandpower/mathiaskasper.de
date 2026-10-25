---
title: ADS-B Proxy
summary: Flask-Proxy, der lokale ADS-B-Daten in fertige HTML-Karten mit Fotos, Airline-Logos und Routen verwandelt.
category: adsb
repo: https://github.com/Saarlandpower/adsb-ha-proxy
tech: [Python, Flask]
order: 21
---

Nimmt den Feed von tar1090 oder ultrafeeder und liefert einbettbare Karten für Home Assistant:
Flugzeugfoto, Airline-Logo, Route (z. B. `ZRH → LUX`) und Erkennung von Privatflugzeugen.
Läuft als systemd-Dienst auf dem Pi.
