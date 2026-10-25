---
title: Störungsauskunft
summary: Strom-, Gas-, Wasser- und Fernwärmestörungen von störungsauskunft.de als Sensoren in Home Assistant.
category: homeassistant
repo: https://github.com/Saarlandpower/ha-stoerungsauskunft
tech: [Python, HACS]
featured: true
order: 11
---

Für das ganze Saarland oder frei wählbare Postleitzahlen. Pro Sparte gibt es einen Binärsensor
(Störung ja/nein), die Zahl offizieller Störungen der Netzbetreiber und die Zahl der Bürgermeldungen.

Besonders nützlich: Die Integration erkennt **Häufungen von Bürgermeldungen** als möglichen Ausfall,
oft bevor der Netzbetreiber eine offizielle Störung meldet. Schwellen sind in den Optionen einstellbar.

> Inoffiziell: nutzt die nicht dokumentierte Schnittstelle hinter dem Web-Frontend. Adressen aus
> Bürgermeldungen werden nur intern zum Zählen verwendet und nicht als Attribut ausgegeben.
