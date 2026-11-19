---
title: MeshCore-Bot für Home Assistant
summary: Home-Assistant-Add-ons für ein MeshCore-Netz – ein Bot mit über 80 Befehlen und ein Proxy für das gemeinsame Funkgerät.
category: meshcore
repo: https://github.com/SaarMesh-Bot/Meshcore-bot-for-Home-Assistant
tech: [Python, HA Add-on]
role: mitarbeit
order: 4
---

Ein Bot mit Wetter, Verkehr, Notrufnummern, Spielen und vielem mehr, dazu ein Proxy, damit Bot und die
meshcore-ha-Integration dasselbe USB-Funkgerät nutzen können. Basiert auf
[agessaman/meshcore-bot](https://github.com/agessaman/meshcore-bot); ich arbeite an einem Fork mit.

Im SaarMesh-Fork dazugekommen: NINA-Warnungen inklusive Gefahreninformationen für die eigene Region, eine
Vertretung für den alten SaarMesh-Bot (`@[SaarMesh-Bot]`-Befehle werden mitbeantwortet) und eine Telemetrie-Karte,
die Repeater-Akkus an CoreScope meldet – daraus ist die eigenständige Integration
[CoreScope Telemetry](/projekte/corescope-telemetry-ha/) entstanden.
