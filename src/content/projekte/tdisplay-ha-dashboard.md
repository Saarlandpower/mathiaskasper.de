---
title: T-Display-S3 Statusdisplay
summary: Kleines Home-Assistant-Display auf dem LilyGo T-Display-S3 – Übersicht, Haus, MeshCore-Netz und ADS-B auf vier Seiten, dazu ein Vollbild-Einsatzalarm.
category: homeassistant
repo: https://github.com/Saarlandpower/tdisplay-ha-dashboard
tech: [C++, PlatformIO, LVGL, ESP32-S3]
order: 13
---

Eine eigene Firmware für den **LilyGo T-Display-S3** (ESP32-S3, 1,9", 320×170). Das Display steht auf dem
Schreibtisch und zeigt auf einen Blick, was in Home Assistant gerade wichtig ist – mit zwei Tasten zum Blättern.

<div class="photos">
  <figure><img src="/img/tdisplay/page1.png" alt="Übersichtsseite mit Uhr, Wetter, Müllabfuhr und Störungen" loading="lazy" width="640" height="340" /><figcaption>Übersicht</figcaption></figure>
  <figure><img src="/img/tdisplay/page2.png" alt="Hausseite mit Raumklima, Pool und offenen Fenstern" loading="lazy" width="640" height="340" /><figcaption>Haus</figcaption></figure>
  <figure><img src="/img/tdisplay/page3.png" alt="Mesh-Seite mit MeshCore-Repeatern, Akku und Netzstatistik" loading="lazy" width="640" height="340" /><figcaption>MeshCore-Netz</figcaption></figure>
  <figure><img src="/img/tdisplay/page4.png" alt="ADS-B-Seite mit dem nächsten Flugzeug" loading="lazy" width="640" height="340" /><figcaption>ADS-B</figcaption></figure>
  <figure><img src="/img/tdisplay/alarm.png" alt="Rotes Vollbild mit EINSATZ" loading="lazy" width="640" height="340" /><figcaption>Einsatzalarm</figcaption></figure>
</div>

## Die Seiten

| Seite | Inhalt |
|---|---|
| Übersicht | Uhr, Datum, Wetter, nächste Müllabfuhr, [Störungsauskunft](/projekte/ha-stoerungsauskunft/) |
| Haus | Raumklima, Pool, offene Fenster, Alter des letzten HA-Backups |
| Mesh | MeshCore-Repeater mit Online-Status, Akku und Nachbarn, Netzstatistik, letzte Kanalnachricht als Laufschrift |
| ADS-B | nächstes Flugzeug mit Kurspfeil, Typ, Höhe, Entfernung und Tempo |

Meldet der Alarm-Sensor `on` – etwa vom [DME-Alarm](/projekte/dme-alarm/) an der Pager-Ladeschale –,
blinkt das ganze Display rot **EINSATZ**, binnen etwa zwei Sekunden und bei voller Helligkeit.

## Wie es funktioniert

Alle 20 Sekunden schickt das Display ein Jinja-Template an `POST /api/template` und bekommt ein kompaktes
JSON zurück: **eine Anfrage für alle Seiten**, ohne Änderungen an Home Assistant. Die Konfiguration steckt
komplett in diesem Template. Den Alarm-Sensor fragt es zusätzlich alle zwei Sekunden ab. Das Netzwerk
läuft in einem eigenen FreeRTOS-Task, damit die Oberfläche (LVGL 8.3) flüssig bleibt. Updates kommen per
OTA über WLAN, Fonts mit Umlauten sind dabei. Lizenz: MIT.
