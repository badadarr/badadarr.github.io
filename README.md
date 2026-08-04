# Badar Maulana — Portfolio

[![Live](https://img.shields.io/badge/Live-badadarr.github.io-blue?style=flat-square&logo=github)](https://badadarr.github.io)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=flat-square&logo=astro)](https://astro.build)

Personal portfolio — fully static, built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## Features

- **Zero-JS-by-default** — pages are pre-rendered HTML; the only client-side JS is the theme toggle and a small scroll-reveal observer
- **Dark/light theme** with system-safe defaults and no flash on load
- **Self-updating Dev Journal** — a Python script runs on a daily GitHub Actions cron, appends an entry to `data/dev-log.json`, and the resulting commit triggers a site rebuild
- **Optimized images** — responsive WebP generated at build time via `astro:assets`
- **SEO** — sitemap, canonical URLs, OpenGraph, and JSON-LD structured data

## Structure

```
├─ src/
│  ├─ pages/          index, projects, experience, 404
│  ├─ layouts/        Base.astro (head, nav, footer, reveal script)
│  ├─ components/     Nav, Footer, Icon, ProjectCard, DevLog, SectionHead
│  ├─ data/           site, projects, experience, education, tech (typed)
│  ├─ lib/            date/duration helpers
│  ├─ styles/         global.css (design tokens + base)
│  └─ assets/images/  source images (optimized at build)
├─ public/            favicon, robots.txt, CV, verification file
├─ data/dev-log.json  dev journal entries (written by cron)
├─ scripts/           append_log.py (daily journal cron)
└─ .github/workflows/ deploy.yml, daily dev log
```

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # preview the build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The daily dev-log commit keeps build-time data (journal, "Present" durations) fresh automatically.
