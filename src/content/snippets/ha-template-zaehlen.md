---
title: Eingeschaltete Lichter zählen
summary: Template-Sensor, der zählt, wie viele Lichter gerade an sind – inklusive Liste der Namen als Attribut.
lang: Jinja / YAML
tags: [home-assistant]
date: 2026-10-20
---

Praktisch für Dashboards („3 Lichter an“) oder als Bedingung in der Abwesenheits-Automation.

```yaml
template:
  - sensor:
      - name: "Lichter an"
        unique_id: lichter_an_anzahl
        icon: mdi:lightbulb-group
        state: >
          {{ states.light | selectattr('state', 'eq', 'on') | list | count }}
        attributes:
          namen: >
            {{ states.light | selectattr('state', 'eq', 'on')
               | map(attribute='name') | list | join(', ') }}
```

Gruppen-Entitäten zählen hier mit. Wer das nicht will, filtert sie mit
`rejectattr('attributes.entity_id', 'defined')` heraus.
