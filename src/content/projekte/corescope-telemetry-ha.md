---
title: CoreScope Telemetry
summary: Home-Assistant-Integration, die Akku und Temperatur von MeshCore-Repeatern an eine CoreScope-Karte meldet – ohne eigenen Bot und ohne zusätzliche Airtime.
category: meshcore
repo: https://github.com/SaarMesh-Bot/corescope-telemetry-ha
tech: [Python, HACS, MQTT]
order: 5
---

Wer seine Repeater mit [meshcore-ha](https://github.com/meshcore-dev/meshcore-ha) überwacht, hat Akku- und
Temperaturwerte ohnehin schon in Home Assistant. CoreScope Telemetry liest diese Sensoren und schickt jeden
**neuen** Messwert per MQTT an den [CoreScope](/projekte/corescope/)-Broker – so tauchen die Werte z. B. auf
der SaarMesh-Karte auf.

- Es geht nichts über Funk, und in Home Assistant wird nichts verändert.
- Nur Repeater werden gesendet (oder die, die man auswählt), keine Room-Server.
- Antwortet ein Repeater nicht mehr, wird sein letzter Wert nicht immer wieder neu gemeldet.
- Bei **Inhero-MR2**-Boards nimmt die Integration automatisch die echte Zellspannung statt des gemeldeten
  Ladezustands.

Einrichtung über HACS als benutzerdefiniertes Repository und den Config Flow; Broker, Port und Region für
SaarMesh sind vorausgefüllt. Zwei Diagnose-Entitäten zeigen die Broker-Verbindung und die Zahl gesendeter
Messwerte. Den Zugang zum Broker gibt es bei den SaarMesh-Admins. Lizenz: MIT.
