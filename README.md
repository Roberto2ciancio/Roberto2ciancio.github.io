# Roberto Ciancio — sito personale

Sito personale / CV online, costruito con React + TypeScript + Vite.

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
npm run preview
```

## Pubblicazione su GitHub Pages

Questo repository deve chiamarsi esattamente `Roberto2ciancio.github.io` perché GitHub lo riconosca come sito personale (root, senza sotto-percorso).

1. Crea su GitHub un nuovo repository pubblico con nome `Roberto2ciancio.github.io`, **senza** inizializzarlo con README/licenza/gitignore.
2. Dalla cartella del progetto:
   ```bash
   git remote add origin https://github.com/Roberto2ciancio/Roberto2ciancio.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Su GitHub: **Settings → Pages → Build and deployment → Source** scegli **GitHub Actions** (il workflow in `.github/workflows/deploy.yml` è già pronto: ad ogni push su `main` builda e pubblica automaticamente).
4. Dopo qualche minuto il sito sarà live su `https://roberto2ciancio.github.io/`.

Da lì puoi copiare il link e aggiungerlo al tuo profilo LinkedIn (sezione "Informazioni di contatto" → sito web, o nella sezione "In primo piano").

## Crediti fotografici

Le fotografie reali usate come "respiro" tra le sezioni (non sono foto di Roberto, sono immagini del suo mondo: reti, elettronica, Roma) sono elencate nel footer del sito e in `IMAGE_CREDITS.json`.
