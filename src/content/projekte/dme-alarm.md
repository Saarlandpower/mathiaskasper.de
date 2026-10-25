---
title: DME-Alarm mit ESP32 und Display
summary: Der Schaltkontakt der Pager-Ladeschale meldet Einsatzalarme an Home Assistant – mit 1,9"-Display, das ALARM oder BEREIT zeigt.
category: homeassistant
tech: [ESPHome, ESP32-S3, ST7789]
featured: true
order: 12
---

Viele Ladegeräte für digitale Meldeempfänger (DME) haben einen **potentialfreien Schaltkontakt**,
der bei einem Alarm schließt. Hängt man den an einen ESP32, weiß Home Assistant sofort Bescheid
und kann Licht einschalten, laute Push-Nachrichten schicken oder eine Rundumleuchte starten.

Als Hardware dient ein **ESP32-1732S019**: ein ESP32-S3 (N16R8) mit fest verbautem 1,9"-Display
(ST7789, 170×320). Das Display zeigt in Ruhe ein grünes **BEREIT**, bei Alarm rot **ALARM**,
dazu Zeitpunkt des letzten Alarms, WLAN-Signal und ob die Verbindung zu Home Assistant steht.

<div class="photos">
  <figure><img src="/img/dme/bereit.jpg" alt="ESP32 mit Display zeigt BEREIT vor der Melder-Ladeschale" loading="lazy" width="1084" height="1100" /><figcaption>Im Einsatz neben der Ladeschale – Ruhezustand</figcaption></figure>
  <figure><img src="/img/dme/alarm.jpg" alt="Display zeigt ALARM auf rotem Hintergrund" loading="lazy" width="1100" height="662" /><figcaption>Beim Test auf dem Schreibtisch – Alarm ausgelöst</figcaption></figure>
</div>

## Verdrahtung

| Ladegerät (DIN-Stecker) | ESP32 |
|---|---|
| Schaltkontakt Ader 1 | GPIO4 |
| Schaltkontakt Ader 2 | GND |

Kein Widerstand nötig – der interne Pull-up hält den Pin auf HIGH, der geschlossene Kontakt zieht ihn auf LOW.

## Worauf es ankommt

- **Kein Stromsparmodus im WLAN** (`power_save_mode: none`), sonst kann ein kurzer Puls verschluckt werden.
- **`delayed_off: 10s`** streckt kurze Alarmimpulse, damit Home Assistant sie sicher mitbekommt.
- Ist der Sensor im Ruhezustand „an“, schließt dein Ladegerät andersherum – dann `inverted: false` setzen.
- Das Display arbeitet unabhängig von Home Assistant weiter, auch wenn die Verbindung mal weg ist.

## ESPHome-Konfiguration

Die Zugangsdaten kommen aus der `secrets.yaml` des ESPHome-Dashboards.

```yaml
# DME-Alarm – ESP32-1732S019 (ESP32-S3-WROOM-1 N16R8, 1,9" ST7789 170x320)
# DME-Ladegerät-Kontakt (potentialfrei): GPIO4 + GND (Header links oben)

substitutions:
  name: dme-alarm
  friendly_name: DME Alarm

esphome:
  name: ${name}
  friendly_name: ${friendly_name}

esp32:
  board: esp32-s3-devkitc-1
  flash_size: 16MB
  framework:
    type: esp-idf

psram:
  mode: octal
  speed: 80MHz

logger:

api:
  encryption:
    key: !secret dme_alarm_api_key   # im ESPHome-Dashboard generieren lassen

ota:
  - platform: esphome

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  power_save_mode: none        # nie schlafen -> kein verschluckter Puls
  ap:
    ssid: "DME-Alarm Fallback"

captive_portal:

time:
  - platform: homeassistant
    id: ha_time

globals:
  - id: last_alarm
    type: std::string
    restore_value: false
    initial_value: '"--"'

# ---------- DME-Kontakt ----------
binary_sensor:
  - platform: gpio
    name: "DME Alarm"
    id: dme_alarm
    icon: mdi:fire-truck
    pin:
      number: GPIO4
      mode:
        input: true
        pullup: true
      inverted: true             # Kontakt zu = ALARM. Falls in Ruhe "on": auf false setzen
    filters:
      - delayed_on: 30ms         # entprellen
      - delayed_off: 10s         # kurze Pulse strecken, damit HA sie sicher sieht
    on_press:
      - lambda: |-
          auto t = id(ha_time).now();
          if (t.is_valid()) id(last_alarm) = t.strftime("%d.%m. %H:%M");
      - light.turn_on:
          id: backlight
          brightness: 100%
      - component.update: disp

  - platform: status
    name: "Status"
    id: api_status

sensor:
  - platform: wifi_signal
    name: "WLAN Signal"
    id: wifi_rssi
    update_interval: 30s
  - platform: uptime
    name: "Uptime"

# ---------- Display ----------
output:
  - platform: ledc
    pin: GPIO14
    id: bl_out

light:
  - platform: monochromatic
    name: "Display Licht"
    id: backlight
    output: bl_out
    restore_mode: ALWAYS_ON

spi:
  clk_pin: GPIO12
  mosi_pin: GPIO13

font:
  - file: "gfonts://Roboto@700"
    id: f_big
    size: 48
  - file: "gfonts://Roboto"
    id: f_small
    size: 18

display:
  - platform: mipi_spi
    model: ST7789V
    id: disp
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin: GPIO1
    dimensions:
      width: 170
      height: 320
      offset_width: 35
    invert_colors: true
    rotation: 90                 # Querformat 320x170
    update_interval: 2s
    lambda: |-
      if (id(dme_alarm).state) {
        it.fill(Color(200, 0, 0));
        it.print(160, 55, id(f_big), Color(255, 255, 255), TextAlign::CENTER, "ALARM");
      } else {
        it.fill(Color(0, 0, 0));
        it.print(160, 55, id(f_big), Color(0, 190, 0), TextAlign::CENTER, "BEREIT");
      }
      it.printf(10, 105, id(f_small), Color(255, 255, 255), "Letzter Alarm: %s", id(last_alarm).c_str());
      it.printf(10, 135, id(f_small), Color(160, 160, 160), "WLAN %.0f dBm  |  HA %s",
                id(wifi_rssi).state, id(api_status).state ? "OK" : "--");
```

## In Home Assistant

Das Gerät taucht nach dem Flashen automatisch auf. Der Alarm ist dann
`binary_sensor.dme_alarm_dme_alarm` und kann jede Automation auslösen – zum Beispiel:

```yaml
alias: Einsatzalarm
triggers:
  - trigger: state
    entity_id: binary_sensor.dme_alarm_dme_alarm
    to: "on"
actions:
  - action: light.turn_on
    target:
      entity_id: light.flur
    data:
      color_name: blue
      brightness_pct: 100
  - action: notify.mobile_app_handy
    data:
      title: Einsatzalarm
      message: Der Melder hat ausgelöst.
```
