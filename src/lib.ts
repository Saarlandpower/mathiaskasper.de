export const CATEGORIES = {
  meshcore: { label: 'MeshCore', blurb: 'LoRa-Mesh im SaarLorLux-Raum: Webapp, Bot, Analyse-Werkzeuge.' },
  homeassistant: { label: 'Home Assistant', blurb: 'Eigene Integrationen, Panels und Automationen.' },
  adsb: { label: 'ADS-B & SDR', blurb: 'Flugfunk-Empfang am Raspberry Pi, aufbereitet für HA.' },
  tools: { label: 'Werkzeuge', blurb: 'Kleine Helfer für Betrieb und Alltag.' },
} as const;

export type Category = keyof typeof CATEGORIES;

export const ROLE_LABEL = { eigenes: 'Eigenes Projekt', fork: 'Gepflegter Fork', mitarbeit: 'Mitarbeit' } as const;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' });
