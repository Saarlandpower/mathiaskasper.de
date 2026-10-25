---
title: Skript alle 10 Minuten per systemd-Timer
summary: Die saubere Alternative zu cron – mit Logs im Journal, Nachholen nach Neustart und zufälliger Verzögerung.
lang: INI
tags: [linux, systemd]
date: 2026-10-15
---

Zwei Dateien unter `/etc/systemd/system/`. Der Dienst beschreibt, *was* läuft:

```ini
# auswertung.service
[Unit]
Description=Auswertung erzeugen

[Service]
Type=oneshot
User=pi
WorkingDirectory=/opt/auswertung
ExecStart=/usr/bin/python3 /opt/auswertung/run.py
```

Der Timer beschreibt, *wann*:

```ini
# auswertung.timer
[Unit]
Description=Auswertung alle 10 Minuten

[Timer]
OnCalendar=*:0/10
RandomizedDelaySec=30
Persistent=true

[Install]
WantedBy=timers.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now auswertung.timer
systemctl list-timers auswertung.timer   # nächster Lauf
journalctl -u auswertung.service -n 50   # Ausgabe des letzten Laufs
```
