---
title: Mehrere Dienste über einen Cloudflare Tunnel
summary: Lokale config.yml für cloudflared mit mehreren Hostnamen – und warum die Catch-all-Regel am Ende Pflicht ist.
lang: YAML
tags: [cloudflare, linux]
date: 2026-10-25
---

Ein Tunnel kann beliebig viele (Sub-)Domains bedienen. Die Regeln werden von oben nach unten geprüft,
die letzte Regel **muss** ein Catch-all ohne `hostname` sein.

```yaml
tunnel: <TUNNEL-UUID>
credentials-file: /home/pi/.cloudflared/<TUNNEL-UUID>.json

ingress:
  - hostname: app.example.de
    service: http://127.0.0.1:5000
  - hostname: dashboard.example.de
    service: http://localhost:9000
  - service: http_status:404
```

Danach den DNS-Eintrag pro Hostname anlegen und den Dienst neu starten:

```bash
cloudflared tunnel route dns <TUNNEL-NAME> app.example.de
sudo systemctl restart cloudflared
```

Fehler **1033** im Browser heißt übrigens fast immer: Der DNS-Eintrag zeigt auf einen Tunnel,
aber kein laufender Tunnel kennt diesen Hostnamen.
