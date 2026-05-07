# Badar Maulana — Portfolio Website

[![Live](https://img.shields.io/badge/Live-badadarr.github.io-blue?style=flat-square&logo=github)](https://badadarr.github.io)
[![Repo](https://img.shields.io/badge/GitHub-badadarr-black?style=flat-square&logo=github)](https://github.com/badadarr/badadarr.github.io)

Website portofolio statis berbasis HTML, CSS, dan JavaScript vanilla.

## Ringkasan

Project ini menampilkan profil, pengalaman, project, serta **Dev Journal** yang diperbarui otomatis setiap hari via GitHub Actions.

## Halaman Utama

- `/` (Home)
- `/projects.html`
- `/experience.html`

## Arsitektur Saat Ini

- **Static multi-page site** (tanpa framework frontend)
- Tiap halaman memuat section HTML dari folder `sections/` menggunakan `script/page-loader.js`
- Interaksi UI utama ditangani di `script/main.js`
- Data Dev Journal dibaca dari `data/dev-log.json` dan dirender oleh `script/dev-log.js`

## Fitur yang Benar-Benar Ada

- Layout responsif + navigasi mobile
- Scroll progress bar dan back-to-top button
- Animasi AOS dan Lottie pada hero section
- Lazy loading gambar pada section portfolio
- Meta SEO dasar (title, description, canonical, JSON-LD person schema)
- Section-based composition (reusable section HTML)
- Dev Journal dengan ringkasan timeline + insight tag/source
- Otomasi harian Dev Journal via GitHub Actions (`.github/workflows/daily-log.yml`)

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- Python (script automation untuk update log harian)

Library/CDN yang digunakan:
- Font Awesome
- Google Fonts (Inter)
- AOS
- Lottie Player
- EmailJS (script tersedia di halaman home)

## Struktur Direktori

```text
badadarr.github.io/
├── index.html
├── projects.html
├── experience.html
├── sections/              # potongan section HTML per area
├── script/                # logic frontend (loader, main, dev-log, dll)
├── style/                 # stylesheet utama
├── assets/
│   ├── images/
│   └── cv/
├── data/
│   ├── dev-log.json
│   ├── personal.json
│   ├── stats.json
│   ├── projects/
│   ├── experience/
│   └── tech/
├── scripts/
│   └── append_log.py      # updater log harian
└── .github/workflows/
    └── daily-log.yml
```

## Menjalankan Secara Lokal

Karena ini static site, cukup jalankan web server sederhana:

```bash
cd badadarr.github.io
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Otomasi Dev Journal

Workflow `Daily Dev Log`:
- Terjadwal harian (cron)
- Menjalankan `python3 scripts/append_log.py`
- Mengupdate `data/dev-log.json`
- Commit & push otomatis jika ada entry baru

## Catatan Deployment

Project dipublikasikan ke GitHub Pages. File konfigurasi seperti `.htaccess`, `_headers`, dan `_redirects` tersedia di repo sebagai konfigurasi server/CDN tambahan jika dideploy di platform lain.

## License

MIT — lihat file [LICENSE](LICENSE).
