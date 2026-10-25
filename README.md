# mathiaskasper.de

Persönliche Seite mit Projekten und Codeschnipseln. Gebaut mit [Astro](https://astro.build), ausgeliefert über Cloudflare Pages.

## Neuen Inhalt anlegen

- **Projekt:** Markdown-Datei in `src/content/projekte/` (Felder siehe `src/content.config.ts`)
- **Snippet:** Markdown-Datei in `src/content/snippets/`

Push auf `main` → Cloudflare baut und veröffentlicht automatisch.

## Lokal

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # Ausgabe in dist/
```
