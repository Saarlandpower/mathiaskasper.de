---
title: MeshCore Webapp
summary: Browser-App für MeshCore-Companions per USB, Bluetooth oder WLAN – eine einzige HTML-Datei, kein Server.
category: meshcore
repo: https://github.com/SaarMesh-Bot/meshcore-webapp
live: https://saarmesh-bot.github.io/meshcore-webapp/
tech: [HTML, JavaScript, Web Serial, Web Bluetooth, PWA]
featured: true
order: 1
---

Die offizielle MeshCore-App ist ein Messenger. Die Webapp ist zusätzlich ein **Werkzeugkasten fürs Netz**:
Sie zeigt, was im Mesh tatsächlich passiert – rohe Pakete, Pfade, Signalwerte, entdeckte Kanäle und Regionen.

## Funktionen

- Chat mit Zustellbestätigung, @Erwähnungen und Benachrichtigungen pro Chat
- Live-Traffic: jedes empfangene Paket mit Route, Hops und SNR
- Karte mit allen Knoten und Nachbar-Linien nach Signalqualität
- Repeater-Verwaltung mit Terminal, Telemetrie mit Verlauf, Trace-Route
- Öffentliche Kanäle, die die App selbst im Funkverkehr entdeckt
- Als App installierbar, startet dann auch offline

Verbindung per USB (Web Serial), Bluetooth LE oder TCP/WLAN – für TCP braucht es eine kleine Bridge.
Kanäle und Kontakte lassen sich per QR-Code im Format der offiziellen App austauschen. Lizenz: MIT.
