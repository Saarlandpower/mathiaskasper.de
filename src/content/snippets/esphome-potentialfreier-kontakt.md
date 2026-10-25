---
title: Potentialfreien Kontakt mit ESPHome auslesen
summary: Schaltkontakt zwischen GPIO und GND als entprellter Binärsensor – ohne Widerstand, mit internem Pull-up.
lang: YAML
tags: [esphome, home-assistant]
date: 2026-10-06
---

Ein potentialfreier Kontakt (Relais, Pager-Ladeschale, Türkontakt) braucht keine eigene Spannung:
Kontakt zwischen einen GPIO und GND hängen, den internen Pull-up einschalten, fertig.
Geschlossen zieht der Kontakt den Pin auf LOW – `inverted` macht daraus „an“.

```yaml
binary_sensor:
  - platform: gpio
    name: "Alarmkontakt"
    pin:
      number: GPIO4
      mode:
        input: true
        pullup: true
      inverted: true
    filters:
      - delayed_on: 50ms   # Prellen unterdrücken
      - delayed_off: 200ms
```

Tipp: Bei langen Leitungen die Filterzeiten etwas großzügiger wählen, sonst gibt es Fehlauslöser.
